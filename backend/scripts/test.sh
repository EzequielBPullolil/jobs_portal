#!/usr/bin/env bash
export NODE_PATH='.'

export DATABASE_NAME='jobs_portal_test'
export DATABASE_USER='root'
export DATABASE_PASSWORD=''
export DATABASE_HOST='localhost'


jest "$1" "$2" --forceExit --detectOpenHandles