import RPI.GPIO as GPIO
from pymouse import pymouse
import time

pirPin = 16
GPIO.setmode(GPIO.BCM)
GPIO.setup(pirPin, GPIO.IN)
m = PyMouse()
res = m.screen_size()


while True:
    value = GPIO.input(pirPin)
    if value = True:
        m.move(res-100,res)
        m.move(res,res)
    time.sleep(10)
