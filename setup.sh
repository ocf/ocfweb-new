#!/bin/bash

# Run after each pull

source venv/bin/activate
pip install -r requirement.txt
cd frontend
npm install
