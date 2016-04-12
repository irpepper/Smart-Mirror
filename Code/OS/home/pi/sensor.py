import RPi.GPIO as GPIO
from pymouse import pymouse
import time

pirPin = 13
GPIO.setmode(GPIO.BCM)
GPIO.setup(pirPin, GPIO.IN)
m = PyMouse()
res = m.screen_size()


while True:
    value = GPIO.input(pirPin)
    if value = True:
        m.move(res[0]-100,res[1])
        m.move(res[0],res[1])
    time.sleep(10)
