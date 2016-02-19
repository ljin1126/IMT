
var db = db.getSiblingDB('Device_provision');

//  Verification section begin

var CollectionCount = 0;
var indexCount = 0;
var userCount = 0;
var roleCount = 0;
var collectionList = ["DeviceProperty", "deviceProfile", "deviceProfileLog","deviceStaticFiles","firmware.chunks","firmware.files","deviceTypeDefaultProperties" ];
var indexList = ["DeviceProperty_idx1","DeviceProperty_idx2","deviceProfile_idx1","deviceProfileLog_idx1","deviceStaticFiles_idx1","firmware_idx1","firmware_idx2","deviceTypeDefaultProperties_idx1","deviceTypeDefaultProperties_idx2"];
var userList = ["ap_vdp_api", "ap_vdp_configserver", "ap_vdp_logserver","ap_vdp_dmm" ];
var roleList = ["role_vdp_api", "role_vdp_configserver", "role_vdp_logserver","role_vdp_dmm" ];
print ( "Actual", "Expected", "Criteria" );

// Collections verification
db.getCollectionNames().forEach(function(collection) {
    if ( collectionList.indexOf(collection) != -1 )
    {
        CollectionCount = CollectionCount + 1
    }
});
// print ( "Actual: " +CollectionCount+ ", Expected: 7" + ", Number of Collections" );
print ( CollectionCount, "     7", "       Number of Collections" );

// Indexes Verification
db.getCollectionNames().forEach(function(collection) {
    index = db[collection].getIndexes();
    index.forEach(function(indexobj) {
        if ( indexList.indexOf( indexobj["name"] ) != -1 )
        {
            indexCount = indexCount + 1;
        }
    });
});
// print ( "Actual: " +indexCount+ ", Expected: 9" + ", Number of Indexes" );
print ( indexCount, "     9", "       Number of Indexes" );

// Users Verification
user = db.getUsers();
    user.forEach(function(userobj) {
        if ( userList.indexOf( userobj["user"] ) != -1 )
        {
            userCount = userCount + 1;
        }
    });
// print ( "Actual: " +userCount+ ", Expected: 4" + ", Number of Users" );
print ( userCount, "     4", "       Number of Users" );

// Roles Verification
role = db.getRoles();
    role.forEach(function(roleobj) {
        if ( roleList.indexOf( roleobj["role"] ) != -1 )
        {
            roleCount = roleCount + 1;
        }
    });
// print ( "Actual: " +roleCount+ ", Expected: 4" + ", Number of Roles" );
print ( roleCount, "     4", "       Number of Roles" );


//  Verification section end

