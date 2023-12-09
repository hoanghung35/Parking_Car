#include <Adafruit_Sensor.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <Wire.h>
#include <NTPClient.h>
#include <SoftwareSerial.h>
#include <WiFiUdp.h>

// Wifi configuration
const char *ssid = "Hung1";
const char *pass = "1234567812";

// MQTT Broker configuration
const char *mqttServer = "192.168.0.102";
const int mqttPort = 1883;
const char *mqttUser = "";
const char *mqttPass = "";
const char *mqttClientId = "";

long lastMsg = 0;
String tmp = "";

// config UART Pin
SoftwareSerial mySerial(D4, D5); // RX, TX
/*
D4 RX(esp) - PA9(stm32)
D5 TX(esp) - PA10(stm32)
*/

// Define NTP Client to get time
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

// Init client
WiFiClient espClient; // init espClient
PubSubClient client(espClient);

// Connect Wifi
void initWifi()
{
  WiFi.mode(WIFI_STA);

  Serial.println();
  Serial.print("Connecting Wifi..");
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to Wifi! IP address: ");
  Serial.println(WiFi.localIP());
}

// Connect MQTT Broker
void mqttConn()
{
  while (!client.connected())
  {
    Serial.println();
    Serial.print("Connecting to MQTT Broker..");
    if (client.connect(mqttClientId, mqttUser, mqttPass))
    {
      Serial.println("Connected to MQTT Broker");
    }
    else
    {
      Serial.println("Failed to connect! Retry in 3 second...");
      Serial.println(client.state());
      delay(3000);
    }
  }
}

void setup()
{
  Serial.begin(115200);
  mySerial.begin(115200);
  initWifi();
  Wire.begin();
  client.setServer(mqttServer, mqttPort);
  timeClient.begin();
  timeClient.setTimeOffset(+7 * 60 * 60); // setup clock display- UTC
}

void loop()
{
  char mark[10];
  int index = 0;
  int myTotal = 0;
  if (mySerial.available() > 1)
  { // Read from  STM module and send to serial monitor
    char total = mySerial.read();
    if(isdigit(total)) {
      mark[index] = total;
      index++;
      
      if(index >= sizeof(mark) - 1) {
        mark[sizeof(mark) - 1] = '\0';
        myTotal = atoi(mark);
      }
    }
  }
  int hour, minute, second;
  timeClient.update();
  hour = timeClient.getHours();
  minute = timeClient.getMinutes();
  second = timeClient.getSeconds();

  String s = "";
  s += String(hour);
  s += ":";
  s += String(minute);
  s += ":";
  s += String(second);
//send time data to STM module
  if (tmp != s){
    mySerial.println(s),
    Serial.println(s),
    tmp = s;
  }
//Delete data from Serial: 
  do
  {
    char t = Serial.read();
  } while (Serial.available() > 0);
  delay(500);

  if (!client.connected())
    mqttConn();
  client.loop();

  unsigned long now = millis();
  if (now - lastMsg > 3000)
  {
    int available =  20 - myTotal;
    //Suppose the data of each sensor corresponds to each value of the array: 0 is empty, 1 has a car
    int slot[20] = {0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1};
    // Combine data to packet (ssData) --> publish
    String ssData = String(available) + ",";
    int j;
    for(j = 0; j < sizeof(slot); j++) {
      ssData += String(slot[j]) + ",";
    }

    client.publish("myData", ssData.c_str());
    Serial.println(ssData);
    lastMsg = now;
  }
}