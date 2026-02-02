#!/bin/bash

if [ $# -eq 0 ]; then 
    echo "No arguments supplied"
else
    for param in "$@"
    do
        echo "$param"
    done
fi