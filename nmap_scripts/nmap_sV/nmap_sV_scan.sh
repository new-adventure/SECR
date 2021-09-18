#!/bin/bash

echo 'PORT    STATE    SERVICE VERSION' > serviceinfo
sudo nmap -oX "$1_sV.xml" -sV -T5 $1 > tmpsV
cp tmpsV sV_scan_output.txt
grep /tcp tmpsV >> serviceinfo.txt
rm tmpsV