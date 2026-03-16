#!/bin/bash

# Always run from the directory this script lives in (fnb-backend)
cd "$(dirname "$0")"

export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
export PATH="$JAVA_HOME/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/opt/homebrew/bin"

echo "Working directory : $(pwd)"
echo "Using Java        : $($JAVA_HOME/bin/java -version 2>&1 | head -1)"

/opt/homebrew/bin/mvn spring-boot:run
