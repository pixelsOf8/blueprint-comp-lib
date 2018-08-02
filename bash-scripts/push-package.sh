#!/usr/bin/env bash

# filename: push-package.sh
echo "Before we start I have a couple of checks to do."
echo "Have you incremented your package version?"
read -r -p "Are you sure? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]
then
  echo "Ok great..."
  echo "Which library would you like to push up?"
  read library
  echo ">>>>>>>> $library <<<<<<<<"
  read -r -p "Are you sure? [y/N] " response
  if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]
  then
    echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    echo " L E T S - P U S H - T H I S - T O - N P M "
    echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    echo "Just checking we have the right files..."
    npm login
    cd built-libs/$library && npm publish
    echo "All done"
  else
    echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    echo "Unfortunately we can't continue if your not sure"
    echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  fi
else
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo "Ok not to worry."
  echo "Unfortunately we can't continue, please go back and increment correctly and re-package before continuing..."
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
fi
