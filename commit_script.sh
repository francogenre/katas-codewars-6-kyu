#!/bin/bash


echo "---- INICIO COMMIT ----"
git pull

echo | tee Ejercicio1.js
git add .
git commit -m "[ADD] Ejercicio1.js"

echo | tee Ejercicio2.js
git add .
git commit -m "[ADD] Ejercicio2.js"

echo | tee Ejercicio3.js
git add .
git commit -m "[ADD] Ejercicio3.js"

git push

rm -f Ejercicio1.js
rm -f Ejercicio2.js
rm -f Ejercicio3.js

echo "---- FIN COMMIT ----"
