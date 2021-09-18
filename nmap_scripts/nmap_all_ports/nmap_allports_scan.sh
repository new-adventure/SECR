#!/bin/bash

nmap -oX "$1_allports.xml" -p 1-65535  $1 > tmpAP
cp tmpAP allports_scan_output.txt
grep /tcp tmpAP > portinfo.ap.txt
sed -i 's/\/tcp.*//' portinfo.ap.txt
rm tmpAP
