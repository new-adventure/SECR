#!/bin/bash

#Runs nmap and cleans up data. Data is output as plaintext
sudo nmap -oX "$1_OSscan.xml" -O $1 > tmpOS
cp tmpOS os_scan_output.txt
grep Running  tmpOS > osinfo.txt
grep /tcp tmpOS > portinfo.txt
rm tmpOS
sed -i 's/\/tcp.*//' portinfo.txt
sed -i 's/Running: //' osinfo.txt
