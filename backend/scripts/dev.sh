#!/usr/bin/env bash
export NODE_PATH='.'

export DATABASE_NAME='jobs_portal_dev'
export DATABASE_USER='root'
export DATABASE_PASSWORD=''
export DATABASE_HOST='localhost'


nodemon ./src/bin/www.js "$1" "$2"