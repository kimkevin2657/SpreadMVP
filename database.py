import mysql.connector
import time
from passlib.hash import sha256_crypt

# change dbuser into the name of the user you used 
# change the dbpassword into the password you used for that user 
conn = mysql.connector.connect(
  host="localhost",
  user="dbuser",
  password="dbpassword"
)

cur = conn.cursor()

# change mvp into the preferred name of the database
cur.execute("CREATE DATABASE mvp")

time.sleep(1.0)

# change dbuser into the name of the user you used 
# change the dbpassword into the password you used for that user 
conn = mysql.connector.connect(user='dbuser', password='dbpassword',
                              host='localhost',
                              database='mvp')


cur = conn.cursor()

cur.execute(""" CREATE TABLE userinfo (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256),
    password VARCHAR(256),
    is_superuser BOOLEAN,
    mirrorone VARCHAR(256),
    mirrortwo VARCHAR(256),
    email VARCHAR(256),
    name VARCHAR(256),
    is_oracle BOOLEAN
) """)
conn.commit()

time.sleep(1.0)

# change these MVPadmin and MVPadminPASSWORD into preferred MVP website login username and password 
initial_username = "MVPadmin"
initial_password = "MVPadminPASSWORD"
password = sha256_crypt.encrypt(str(initial_password))

tupleval = (
  initial_username,
  password,
  True,
  "AAPL",
  "AMZN",
  "MVPadmin@gmail.com",
  "MVPadmin",
  True
)
cur.execute("INSERT INTO userinfo (username, password, is_superuser, mirrorone, mirrortwo, email, name, is_oracle) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)", tupleval)
conn.commit()