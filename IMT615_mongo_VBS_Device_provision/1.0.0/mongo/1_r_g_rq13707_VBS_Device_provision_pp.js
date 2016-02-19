
db = db.getSiblingDB('Device_provision');

db.dropUser("ap_vdp_api");
db.dropUser("ap_vdp_configserver");
db.dropUser("ap_vdp_logserver");
db.dropUser("ap_vdp_dmm");

db.dropRole("role_vdp_api");
db.dropRole("role_vdp_logserver");
db.dropRole("role_vdp_configserver");


// Drop Collections
 
db.DeviceProperty.drop();
db.deviceProfile.drop();
db.deviceProfileLog.drop();
db.deviceStaticFiles.drop();
db.firmware.chunks.drop();
db.firmware.files.drop();
db.deviceTypeDefaultProperties.drop();
