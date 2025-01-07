#!/bin/bash
cd ./backend && python3 manage.py runserver 127.0.0.1:15000 & \
	cd ./frontend && npm run dev
