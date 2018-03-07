# 2017/2/23
# To sync file from local to remote
# Exclude '/node_modules'

# Check user name  *******************/
if [ -z ${SYNC_USER11} ]; then
    echo "Input your backyard name (Press enter for $USER):."
    read _userName
    if [ -z ${_userName} ]; then
        export SYNC_USER11=${USER}
    else
        export SYNC_USER11=${_userName}
    fi
fi

# Check openHouse URL  *******************/
if [ -z ${SYNC_URL} ]; then
    echo "Input your openHouse Url:."
    read _url
    export SYNC_URL=$_url
fi

# Check remote directory name  *******************/
if [ -z ${SYNC_DIR_NAME} ]; then
    echo "Input your remote Directory name (Press enter for current directory):"
    read _url
    if [ -z ${_url} ]; then
        export SYNC_DIR_NAME=${PWD##*/}
    else
        export SYNC_DIR_NAME=$_url
    fi
fi

# Check user name  *******************/
echo "SYNC_USER11:"  $SYNC_USER11
echo "SYNC_URL:"  $SYNC_URL
echo "SYNC_DIR_NAME:"  $SYNC_DIR_NAME
rsync -azP --exclude='/node_modules' ./ $SYNC_USER11@$SYNC_URL:~/$SYNC_DIR_NAME
# rsync -azP  --delete --exclude='/node_modules' --exclude='/coverage' --exclude='/artifacts'  ./ $SYNC_USER11@$SYNC_URL:~/$SYNC_DIR_NAME
# rsync -azP --exclude='/node_modules' --exclude='/coverage' --exclude='/artifacts'  ./ $SYNC_USER11@$SYNC_URL:~/$SYNC_DIR_NAME

# rsync -azP ./ $SYNC_USER11@$SYNC_URL:~/$SYNC_DIR_NAME
