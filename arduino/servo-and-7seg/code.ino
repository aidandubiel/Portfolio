#include <Servo.h>


int tr=2; 
int tc=3; 
int tl=4; 
int cen=5; 
int dec=6; 
int  br=7; 
int bc=8; 
int bl=9;

// Function to display "L"
void display_LEFT(void){
  digitalWrite(tl, HIGH);
  digitalWrite(bl, HIGH);
  digitalWrite(bc, HIGH);
}

// Function to display "r"
void display_RIGHT(void){
  digitalWrite(tl, HIGH);
  digitalWrite(bl, HIGH);
  digitalWrite(tc, HIGH);
  digitalWrite(tr, HIGH);
}


// Function to display "C"
void display_CENTER(void){
  digitalWrite(tl, HIGH);
  digitalWrite(bl, HIGH);
  digitalWrite(tc, HIGH);
  digitalWrite(bc, HIGH);
}

// Function to clear all input 
void clearDisplay(void){
  digitalWrite(tl, LOW);
  digitalWrite(tc, LOW);
  digitalWrite(tr, LOW);
  digitalWrite(cen, LOW);
  digitalWrite(dec, LOW);
  digitalWrite(bl, LOW);
  digitalWrite(bc, LOW);
  digitalWrite(br, LOW);
}

Servo servo;
//int angle = 0;

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  servo.attach(10);
  //servo.write(angle);
  int i;
  for (i = 2; i<=11; i++){
    pinMode(i, OUTPUT);
  }

}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);


  // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  float voltage = sensorValue * (5.0 / 1023.0);


  // print out the value you read:
  Serial.println(voltage);

  // Checking analog stick position
  if (sensorValue > 300 && sensorValue < 600){

    //Serial.println("Center");
    int angle = 90;

    // Set servo position
    servo.write(angle);

    // Refresh display
    clearDisplay();
    display_CENTER();

  } else if (sensorValue > 509 && sensorValue <= 1023){

    int angle = 90;

    // Attempt to make servo movement more gradual. Need to adjust later on. 
    while (angle < 180){
      
      angle += 1;
    
    }
    /**
    Serial.println("Right");
    int angle = 180;
    **/  

    // Set servo position
    servo.write(angle); 

    // Refresh display
    clearDisplay();
    display_RIGHT(); 

  } else if (sensorValue < 509 && sensorValue >= 0){
    //Serial.println("Left"); // Uncomment this line to print a
    int angle = 0;

    // Set servo postion
    servo.write(angle);

    // Refresh display
    clearDisplay();
    display_LEFT();
  }

 // delay(10000); // Wait for one second

}

