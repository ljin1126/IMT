
db = db.getSiblingDB('Device_provision');

sh.enableSharding("Device_provision");

// Drop Collections
 
// db.DeviceProperty.drop();
// db.deviceProfile.drop();
// db.deviceProfileLog.drop();
// db.deviceStaticFiles.drop();
// db.firmware.chunks.drop();
// db.firmware.files.drop();
// db.deviceTypeDefaultProperties.drop();


// Collection DeviceProperty
db.createCollection("DeviceProperty");



db.DeviceProperty.createIndex( { macAddress: 1}, { name: "DeviceProperty_idx1" } );
db.DeviceProperty.createIndex( { vonageId: 1}, { name: "DeviceProperty_idx2" } );

sh.shardCollection( "Device_provision.DeviceProperty", { macAddress: "hashed" } );


// Collection deviceProfile

db.createCollection( "deviceProfile");
   

db.deviceProfile.createIndex( { MAC: 1 }, { name: "deviceProfile_idx1" } );


// sh.shardCollection( "Device_provision.deviceProfile", { MAC: "hashed" } );

// Collection deviceProfileLog

db.createCollection( "deviceProfileLog");

db.deviceProfileLog.createIndex( { MAC: 1}, { name: "deviceProfileLog_idx1" } );

// sh.shardCollection( "Device_provision.deviceProfileLog", { MAC: "hashed" } );

// Collection deviceStaticFiles

db.createCollection( "deviceStaticFiles");
  

db.deviceStaticFiles.createIndex( { FILE_NAME: 1 }, { name: "deviceStaticFiles_idx1" } );


//sh.shardCollection( "Device_provision.deviceStaticFiles", { mac: "hashed" } );



// Collection deviceTypeDefaultProperties

db.createCollection( "deviceTypeDefaultProperties");
  

db.deviceTypeDefaultProperties.createIndex( { DEVICE_TYPE: 1 }, { name: "deviceTypeDefaultProperties_idx1" } );
db.deviceTypeDefaultProperties.createIndex( { DEVICE_TYPE_ID: 1 }, { name: "deviceTypeDefaultProperties_idx2" } );

// sh.shardCollection( "deviceTypeDefaultProperties", { DEVICE_TYPE_ID: "hashed" } );

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("558d6c1a0c4bf8d1886ccff1"), 
    "DEVICE_TYPE" : "Cisco500", 
    "DEVICE_TYPE_ID" : "1100", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "SYSLOG_SERVER" : "vdp-syslog-be-vm-01.kewr5.s.vonagenetworks.net", 
        "SYSLOG_LEVEL" : "3", 
        "DNS_ENABLE" : "1", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "AUTO_PROV_INTERVAL" : "10080", 
        "CISCO50X30X_FW_FILE_NAME_1" : "spa50x-30x-7-5-2b.bin", 
        "CISCO50X30X_FW_FILE_NAME_2" : "spa50x-30x-7-5-5.bin"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "(*[6782]x.|*[9]xS0|*xxxS0|**xxxxxxS0||[1]xxxxxxxxxxS0|[0-9*].)"
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("55b69c1a0c4bf8d1886cd2be"), 
    "DEVICE_TYPE" : "grandstream_unlocked", 
    "DEVICE_TYPE_ID" : "1200", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "CALLWAITING" : "1", 
        "DST_MODE" : "1", 
        "DNS_ENABLE" : "1", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "SYSLOG_SERVER" : "vdp-syslog-be-vm-01.kewr5.s.vonagenetworks.net", 
        "SYSLOG_LEVEL" : "6", 
        "AUTO_PROV_INTERVAL" : "10080"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "{[2-9]11|*0[68]|*1[02][0-5]|*69|*7[23789]|*87|*9[0-19]|*[0-9]x.T|**[1-9]x.T|[0-9].**x.T|1[2-9]xx[2-9]xxxxxx|[2-9]xxxxxxxxx|[1-9]x.T|011[2-9]xxx.T}"
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("55b69ce70c4bf8d1886cd2bf"), 
    "DEVICE_TYPE" : "gxp2000", 
    "DEVICE_TYPE_ID" : "1202", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "CALLWAITING" : "1", 
        "DST_MODE" : "1", 
        "DNS_ENABLE" : "1", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "SYSLOG_SERVER" : "vdp-syslog-be-vm-01.kewr5.s.vonagenetworks.net", 
        "SYSLOG_LEVEL" : "6", 
        "AUTO_PROV_INTERVAL" : "10080"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "{[2-9]11|*0[68]|*1[02][0-5]|*69|*7[23789]|*87|*9[0-19]|*[0-9]x.T|**[1-9]x.T|[0-9].**x.T|1[2-9]xx[2-9]xxxxxx|[2-9]xxxxxxxxx|[1-9]x.T|011[2-9]xxx.T}"
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("55b69ddc0c4bf8d1886cd2c0"), 
    "DEVICE_TYPE" : "Cisco525", 
    "DEVICE_TYPE_ID" : "1102", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "SYSLOG_SERVER" : "vdp-syslog-be-vm-01.kewr5.s.vonagenetworks.net", 
        "SYSLOG_LEVEL" : "3", 
        "DNS_ENABLE" : "1", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "AUTO_PROV_INTERVAL" : "10080", 
        "CISCO525G_FW_FILE_NAME_1" : "spa525g-7-5-6.bin", 
        "CISCO525G_FW_FILE_NAME_2" : "spa525g-7-5-6.bin"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "(*[6782]x.|*[9]xS0|*xxxS0|**xxxxxxS0||[1]xxxxxxxxxxS0|[0-9*].)"
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("55b69e490c4bf8d1886cd2c1"), 
    "DEVICE_TYPE" : "cisco", 
    "DEVICE_TYPE_ID" : "1104", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "SYSLOG_SERVER" : "vdp-syslog-be-vm-01.kewr5.s.vonagenetworks.net", 
        "SYSLOG_LEVEL" : "3", 
        "DNS_ENABLE" : "1", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "AUTO_PROV_INTERVAL" : "10080", 
        "CISCO7XXX_FW_FILE_NAME_1" : "spa7xxx-7-5-6.bin", 
        "CISCO7XXX_FW_FILE_NAME_2" : "spa7xxx-7-5-6.bin"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "(*[6782]x.|*[9]xS0|*xxxS0|**xxxxxxS0||[1]xxxxxxxxxxS0|[0-9*].)"
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("55b69e600c4bf8d1886cd2c2"), 
    "DEVICE_TYPE" : "cisco51x", 
    "DEVICE_TYPE_ID" : "1106", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "SYSLOG_SERVER" : "vdp-syslog-be-vm-01.kewr5.s.vonagenetworks.net", 
        "SYSLOG_LEVEL" : "3", 
        "DNS_ENABLE" : "1", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "AUTO_PROV_INTERVAL" : "10080", 
        "CISCO51X_FW_FILE_NAME_1" : "spa51x-7-5-6.bin", 
        "CISCO51X_FW_FILE_NAME_2" : "spa51x-7-5-6.bin"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "(*[6782]x.|*[9]xS0|*xxxS0|**xxxxxxS0||[1]xxxxxxxxxxS0|[0-9*].)"
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("55fadc9ab1513dcb74265365"), 
    "DEVICE_TYPE" : "polycom501", 
    "DEVICE_TYPE_ID" : "1300", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "CALLWAITING" : "1", 
        "DST_MODE" : "1", 
        "DNS_ENABLE" : "1", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "SYSLOG_SERVER" : "vdp-syslog-be-vm-01.kewr5.s.vonagenetworks.net", 
        "SYSLOG_LEVEL" : "6", 
        "AUTO_PROV_INTERVAL" : "10080", 
        "POLYCOM_FW_NAME" : "sip.ld"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "{[2-9]11|*0[68]|*1[02][0-5]|*69|*7[23789]|*87|*9[0-19]|*[0-9]x.T|**[1-9]x.T|[0-9].**x.T|1[2-9]xx[2-9]xxxxxx|[2-9]xxxxxxxxx|[1-9]x.T|011[2-9]xxx.T}"
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("558c662db1513dcb7414b05a"), 
    "DEVICE_TYPE" : "yealink", 
    "DEVICE_TYPE_ID" : "1000", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "SYSLOG_SERVER" : "0.0.0.0", 
        "SYSLOG_LEVEL" : "3", 
        "CALLWAITING" : "1", 
        "DNS_ENABLE" : "0", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "AUTO_PROV_INTERVAL" : "1440", 
        "LOCKDOWN_PASSWORD" : "#278709r8rwqr89qwr", 
        "LOCKDOWN_ENABLE" : "1"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "[2-9]11|*0[68]|*1[02][0-5]|*69|*7[23789]|*87|*9[0-19]|*[0-9]x.T|**[1-9]x.T|[0-9].**x.T|1[2-9]xx[2-9]xxxxxx|[2-9]xxxxxxxxx|[1-9]x.T|011[2-9]xxx.T"
    }, 
    "DEVICE_PROPERTY_ATTR" : {
        "CALLWAITING" : {
            "VALID_VALUES" : "0|1", 
            "READ_ONLY" : "false"
        }, 
        "DNS_ENABLE" : {
            "VALID_VALUES" : "0|1", 
            "READ_ONLY" : "true"
        }
    }, 
    "DEVICE_PART_NUMBER_DEFAULT_PROPERTIES" : {
        "T19P" : {
            "YEALINK_FW_NAME" : "T19P-31.72.0.75.rom"
        }, 
        "T19PE2" : {
            "YEALINK_FW_NAME" : "T19P_E2-53.80.0.70.rom"
        }, 
        "T20" : {
            "YEALINK_FW_NAME" : "T20-9.73.0.50.rom"
        }, 
        "T20P" : {
            "YEALINK_FW_NAME" : "T21P_E2-52.80.161.1.rom"
        }, 
        "T21PE2" : {
            "YEALINK_FW_NAME" : "T19P-31.72.0.75.rom"
        }, 
        "T22P" : {
            "YEALINK_FW_NAME" : "T22P-7.73.0.50.rom"
        }, 
        "T23P" : {
            "YEALINK_FW_NAME" : "T23-44.80.0.70.rom"
        }, 
        "T23G" : {
            "YEALINK_FW_NAME" : "T23-44.80.0.70.rom"
        }, 
        "T26P" : {
            "YEALINK_FW_NAME" : "T26P-6.73.0.50.rom"
        }, 
        "T27P" : {
            "YEALINK_FW_NAME" : "T27P-45.80.0.70.rom"
        }, 
        "T28P" : {
            "YEALINK_FW_NAME" : "T28P-2.73.0.50.rom"
        }, 
        "T29G" : {
            "YEALINK_FW_NAME" : "T29G-46.80.0.70.rom"
        }, 
        "T32G" : {
            "YEALINK_FW_NAME" : "T32G-32.70.1.33.rom"
        }, 
        "T38G" : {
            "YEALINK_FW_NAME" : "T38G-38.70.0.185.rom"
        }, 
        "T41P" : {
            "YEALINK_FW_NAME" : "T41P-36.80.0.70.rom"
        }, 
        "T42" : {
            "YEALINK_FW_NAME" : "T42G-29.80.0.70.rom"
        }, 
        "T46G" : {
            "YEALINK_FW_NAME" : "T46G-28.80.0.73.rom"
        }, 
        "T48G" : {
            "YEALINK_FW_NAME" : "T48G-35.80.0.70.rom"
        }, 
        "W52P" : {
            "YEALINK_FW_NAME" : "W52P-25.73.0.43.rom"
        }
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("56981681b1513dcb743ede2f"), 
    "DEVICE_TYPE" : "linksys-spa941", 
    "DEVICE_TYPE_ID" : "1500", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "SYSLOG_SERVER" : "vdp-syslog-be-vm-01.kewr5.s.vonagenetworks.net", 
        "SYSLOG_LEVEL" : "3", 
        "DNS_ENABLE" : "1", 
        "PRIMARY_DNS" : "4.2.2.2", 
        "SECONDARY_DNS" : "208.67.222.222", 
        "AUTO_PROV_INTERVAL" : "10080", 
        "LINKSYS_FW_FILE_NAME" : "spa941-5-1-8.bin"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "DIAL_PLAN" : "(*[6782]x.|*[9]xS0|*xxxS0|**xxxxxxS0||[1]xxxxxxxxxxS0|[0-9*].)"
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("569d33fb5e2f19b3857344a0"), 
    "DEVICE_TYPE" : "TPG550", 
    "DEVICE_TYPE_ID" : "1401", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "5", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "prov_server" : "vdp-httpd.kewr5.s.vonagenetworks.net", 
        "fwver" : "tgp21-3.2.11-0.9.40-r140305_signed.bin", 
        "CFG_RTRY_INTVL" : "30", 
        "DHCP_DNS_ENABLE" : "Y", 
        "USER_DNS_1" : "4.2.2.2", 
        "USER_DNS_2" : "208.67.222.222", 
        "NTP_ADDR" : "216.115.23.75", 
        "TIME_SYNC_INTVL" : "60", 
        "HOST_NAME" : "TGP550", 
        "MODEL" : "TGP550", 
        "TZONE" : ""
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "LINE_NUMBER" : "1", 
        "LINE_ID" : "", 
        "SIP_AUTHID" : "", 
        "SIP_PASS" : "", 
        "SIP_SRC_PORT" : "5060", 
        "SIP_PRXY_ADDR" : "1.voncp.net", 
        "SIP_PRXY_PORT" : "5060", 
        "SIP_RGSTR_ADDR" : "1.voncp.net", 
        "SIP_RGSTR_PORT" : "5060", 
        "REG_EXPIRE_TIME" : "30", 
        "PHONE_NUMBER" : "", 
        "DISPLAY_NAME" : "", 
        "DIAL_PLAN" : "[2-9]11S0|*0[68]S0|*1[02][0-5]S0|*69S0|*7[23789]S0|*87S0|*9[0-19]S0|*[0-9]x.|**[1-9]x.|[0-9].**x.|1[2-9]xx[2-9]xxxxxxS0|[2-9]xxxxxxxxxS0|[1-9]x.|011[2-9]xxx.", 
        "SDP_CODEC0" : "PCMU", 
        "SDP_CODEC1" : "", 
        "SDP_CODEC2" : "", 
        "SDP_CODEC3" : "", 
        "SDP_CODEC4" : ""
    }
}
);

db.deviceTypeDefaultProperties.insert
({ 
    "_id" : ObjectId("5669ebe4061b61749c1ccfe4"), 
    "DEVICE_TYPE" : "vdv23", 
    "DEVICE_TYPE_ID" : "770", 
    "CONTROL_TYPE_ID" : "VBS", 
    "NUM_OF_LINES" : "2", 
    "DEVICE_UNIT_DEFAULT_PROPERTIES" : {
        "BCM_STUN_SERVER_PORT" : "0", 
        "BCM_RTP_PORT" : "10050", 
        "BCM_REGISTRATION_TIMER" : "20", 
        "BCM_LOCAL_SIP_PORT" : "10000", 
        "BCM_DTMF_RELAY_METHOD" : "1", 
        "BCM_SHELL_TIMER" : "600", 
        "BCM_PROVISION_INTERVAL" : "1800", 
        "BCM_FIRMWARE_URL2" : "vdp-httpd.kewr5.s.vonagenetworks.net", 
        "BCM_FIRMWARE_URL" : "vdp-httpd.kewr5.s.vonagenetworks.net", 
        "BCM_PROVISION_URL" : "vdp-httpd.kewr5.s.vonagenetworks.net", 
        "BCM_PROVISION_URL2" : "vdp-httpd.kewr5.s.vonagenetworks.net", 
        "VDV23_FIRMWARE" : "vdv21-3.2.11-0.9.40-r140305_signed.bin", 
        "BCM_NTP3" : "216.115.23.75", 
        "BCM_NTP2" : "ntp1-nyc.vonage.net", 
        "BCM_NTP1" : "time.vonage.net", 
        "BCM_UTC_OFFSET" : "0", 
        "BCM_MIN_HOOK_FLASH" : "300", 
        "BCM_MAX_HOOK_FLASH" : "1100", 
        "BCM_RING_WAVEFORM" : "0", 
        "BCM_RING_VOLTAGE_PEAK" : "90", 
        "BCM_RING_FREQUENCY" : "20", 
        "BCM_AUTO_RECOVERY_TIM" : "5", 
        "BCM_AUTO_RECOVERY" : "true", 
        "BCM_JITTER_BUFFER_FIXED" : "false", 
        "BCM_JITTER_BUFFER_MIN" : "20", 
        "BCM_JITTER_BUFFER_MAX" : "300", 
        "BCM_JITTER_BUFFER" : "100", 
        "BCM_IMAGE_RETRY" : "900", 
        "BCM_HTTP_TIMER" : "600", 
        "BCM_DNS_WAIT" : "500", 
        "BCM_DNS_PRIORITY" : "0", 
        "BCM_CALL_RETURN" : "*69", 
        "BCM_COUNTRY_CODE" : "0", 
        "BCM_FIRMWARE_CHANGE" : "true", 
        "BCM_SYSLOG_MASTER" : "OFF", 
        "BCM_HOME_WIRING_WIZARD" : "0", 
        "BCM_TELE_SERVER_1" : "device-telemetry.voncp.com", 
        "BCM_TELE_SERVER_2" : "device-telemetry.voncp.com", 
        "BCM_SSH_ENABLE" : "false", 
        "BCM_TELE_ENABLE" : "1", 
        "BCM_TONE_BUSY22" : "480@-20+620@-20/500,0/500", 
        "BCM_TONE_CONGESTION22" : "480@-20+620@-20/250,0/250", 
        "BCM_TONE_DIAL22" : "350@-17+440@-17", 
        "BCM_TONE_HOLD_REMINDER" : "10", 
        "BCM_CALLWAITING_REMINDER" : "10", 
        "BCM_QOS_DOWN_SCALING" : "300", 
        "BCM_QOS_UP_SCALING" : "95", 
        "BCM_QOS_DOWN_EN" : "true", 
        "BCM_QOS_UP_EN" : "true", 
        "TZONE" : "", 
        "MACADDR" : "", 
        "VOICE_QUALITY_SETTING" : "HIGH", 
        "CALLWAITING" : "1", 
        "DNS1IP" : "10.111.160.1", 
        "DNS2IP" : "10.111.160.2", 
        "CALLWAITING_LINE2" : "1", 
        "BCM_XML_DEBUG" : "0", 
        "BCM_TONE_REMOTE_DIS" : "1400@-6+2160@-6+2450@-6+2600@-6/100,0/100", 
        "BCM_TONE_RING" : "440+480/2000,0/4000", 
        "BCM_TONE_CADENCE2" : "2000,4000", 
        "BCM_TONE_CADENCE1" : "2000,4000", 
        "BCM_TONE_RINGBACK" : "440+480/2000,0/4000", 
        "BCM_TONE_OFFHOOK" : "1400@-6+2160@-6+2450@-6+2600@-6/100,0/100", 
        "BCM_TONE_MWI" : "10(!350@-16+440@-17/100,!0/100),350@-16+440@-16", 
        "BCM_TONE_DIAL_SEC" : "2(!350@-17+440@-17/100,!0/100),350@-17+440@-17", 
        "BCM_DIALTONEPT_ENABLE" : "false", 
        "BCM_TONE_CALLWAITING" : "440@-12/300,0/10000", 
        "BCM_COUNTRY" : "US", 
        "BCM_SYSLOG_SERVER" : "0.0.0.0", 
        "BCM_DELAYED_RESET" : "false"
    }, 
    "DEVICE_LINE_DEFAULT_PROPERTIES" : {
        "BCML_RTCPXR_NEG" : "false", 
        "BCML_RTCP_INTERVAL" : "5000", 
        "BCML_TEST_AUTO_ENABLE" : "false", 
        "BCML_TEST_AUTO_TOD" : "0", 
        "BCML_TEST_RINGERS" : "false", 
        "BCML_TEST_OFFHOOK" : "false", 
        "BCML_TEST_R_FAULTS" : "false", 
        "BCML_TEST_EMF" : "true", 
        "BCML_TEST_HAZARDOUS" : "true", 
        "BCML_OFFHOOK_CURRENT" : "25", 
        "BCML_VM_STUTTER" : "true", 
        "BCML_RECALL" : "false", 
        "BCML_TX_GAIN" : "0", 
        "BCML_RX_GAIN" : "-2", 
        "BCML_PACKETPERIOD" : "20", 
        "BCML_FAX_PACKETPERIOD" : "10", 
        "BCML_FAX_DATA_MODE" : "2", 
        "BCML_VMWI_ENABLE" : "true", 
        "BCML_DIALPLAN" : "*69|*7x|*87|*xxT|*[123]xx|[2-9]11|1xxx[2-9]xxxxxx|[2-9]xxxxxxT|[2-9]xxxxxxxxx|011x.T|*xxx+T|xx+#|958T|933T", 
        "BCML_CPC_SIG_DURATION" : "800", 
        "BCML_VOICE_ENCODERLIST" : "0,6,19,9", 
        "BCML_HOLD_REMINDER" : "true", 
        "LINE_PASSWORD" : "0", 
        "DISPLAY_NAME" : ""
    }
}
);

// Collection firmware.chunks

db.createCollection( "firmware.chunks");
  

db.firmware.chunks.createIndex( { files_id: 1, n: 1 }, { unique: true, name: "firmware_idx1" } );




// Collection firmware.files

db.createCollection( "firmware.files");
  

db.firmware.files.createIndex( { filename: 1, uploadDate: 1 }, { name: "firmware_idx2" } );




// Roles for Device_provision database
// db.dropRole("role_vdp_configserver");

db.createRole(
   {
     role: "role_vdp_configserver",
     privileges: [
    { resource: { db: "Device_provision", collection: "DeviceProperty" }, actions: [ "update" ] },
	{ resource: { db: "Device_provision", collection: "deviceProfile" }, actions: [ "insert", "update" ] },
	{ resource: { db: "Device_provision", collection: "deviceStaticFiles" }, actions: [ "insert", "update" ] },
	{ resource: { db: "Device_provision", collection: "firmware.chunks" }, actions: [ "insert", "update" ] },
	{ resource: { db: "Device_provision", collection: "firmware.files" }, actions: [ "insert", "update" ] }
                 ],
     roles: [{ role: "read", db: "Device_provision" }]
   },
   { w: "majority" , wtimeout: 5000 }
);

// db.dropRole("role_vdp_logserver");

db.createRole(
   {
     role: "role_vdp_logserver",
     privileges: [
    { resource: { db: "Device_provision", collection: "deviceProfileLog" }, actions: ["insert", "update" ] }
	             ],
     roles: [{ role: "read", db: "Device_provision" }]
   },
   { w: "majority" , wtimeout: 5000 }
);


// db.dropRole("role_vdp_api");

db.createRole(
   {
     role: "role_vdp_api",
     privileges: [
    { resource: { db: "Device_provision", collection: "DeviceProperty" }, actions: [ "insert", "update", "remove" ] }
				 ],
     roles: [{ role: "read", db: "Device_provision" }]
   },
   { w: "majority" , wtimeout: 5000 }
);








// users for Device_provision in the pre-prod database
// db.dropUser("ap_vdp_configserver");

db.createUser(
    {
      user: "ap_vdp_configserver",
      pwd: "ap_vdp_configserver_pp1",
      roles: [
         { role: "role_vdp_configserver", db: "Device_provision" },
      ]
    }
);


// db.dropUser("ap_vdp_logserver");

db.createUser(
    {
      user: "ap_vdp_logserver",
      pwd: "ap_vdp_logserver_pp1",
      roles: [
         { role: "role_vdp_logserver", db: "Device_provision" },
      ]
    }
);


// db.dropUser("ap_vdp_api");

db.createUser(
    {
      user: "ap_vdp_api",
      pwd: "ap_vdp_api_pp1",
      roles: [
         { role: "role_vdp_api", db: "Device_provision" },
      ]
    }
);


// db.dropUser("ap_vdp_dmm");

db.createUser(
    {
      user: "ap_vdp_dmm",
      pwd: "ap_vdp_dmm_pp1",
      roles: [{ role: "read", db: "Device_provision" }]
    }
);



//  Verification section begin

var CollectionCount = 0;
var indexCount = 0;
var userCount = 0;
var roleCount = 0;
var collectionList = ["DeviceProperty", "deviceProfile", "deviceProfileLog","deviceStaticFiles","firmware.chunks","firmware.files","deviceTypeDefaultProperties" ];
var indexList = ["DeviceProperty_idx1","DeviceProperty_idx2","deviceProfile_idx1","deviceProfileLog_idx1","deviceStaticFiles_idx1","firmware_idx1","firmware_idx2","deviceTypeDefaultProperties_idx1","deviceTypeDefaultProperties_idx2"];
var userList = ["ap_vdp_api", "ap_vdp_configserver", "ap_vdp_logserver","ap_vdp_dmm" ];
var roleList = ["role_vdp_api", "role_vdp_configserver", "role_vdp_logserver" ];
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
// print ( "Actual: " +roleCount+ ", Expected: 3" + ", Number of Roles" );
print ( roleCount, "     3", "       Number of Roles" );


//  Verification section end

