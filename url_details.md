**Login URL**
```json
// POST http://hss.psgtech.ac.in/WebAPI/token

Request:
{
  "username" : "22z227",
  "password" : "22Z22722Z227",
  "grant_type" : "password"
}

Response:
{
  "access_token": "mbQEZ1tH4djYEtyQoF44ivKMhxf6zBcYNoS1_64aehKTG8RIGxgGlcWcRTh6t9-CN3JUX0eDJZk20sMP5-ejzclieyyYh0rbBPJo3a0oHj_TvsEuPlTfBcJ6DH0y6gXK5LpmmEXyB6gZbxTyttvZF2-JBQ0VWE2ZeM6mQ35FmGnfUMclDNbzYd9uUGcNMh3GULuogdXe_ELLS-w9kCzmf7mio-dQld08JsQ15jstUaqvtaBTLpsrXJAyjbRPKkrfERTpjkp_teSV0UmqhI3eoW25mhmv96lnUCv54jWKKzfnGao8t8AwTC4-yVHNRmTA99QdF5fOKmxDY5ZAqE_eC3Tl0PwP5Lj58rQ6IaTf4bIbJM_Elere6PVWJe68gN8iYBzXIyDlq5NxN14xwJRYVJAodBxyIgsRedI_WRt3pon37cLzFJ4FodsBSpo57Tx9dEc_tVLk-PXnXiMDpAIpmyWoJdEtq2hfNttYn8UO3TDY6wcDLoyiTdwOge8LreqZh8BPphSAdEB5CTBCdYJ3GA",
  "token_type": "bearer",
  "expires_in": 17999,
  "userName": "22Z227",
  "role": "Student",
  ".issued": "Mon, 10 Feb 2025 07:04:07 GMT",
  ".expires": "Mon, 10 Feb 2025 12:04:07 GMT"
}
```

**Student Details**
```json
// GET http://hss.psgtech.ac.in/WebAPI/StudentProfile/profileinfo

Request:
{
  "Authorization": "Bearer token",

}

Response: 
{
    "Room_Seq": null,
    "Block_Seq": null,
    "Student_Seq": 36882.0,
    "Batch_Seq": 10523.0,
    "Roll_No": "22Z227",
    "Reg_No": "22Z227",
    "First_Name": "JAYAVARSHINI",
    "Last_Name": "SS",
    "Father_First_Name": "SIKKANSUDHAGAR",
    "Father_Last_Name": "S",
    "IVR_Approved_Nbr": null,
    "IVRApprovalNo": "9994139956",
    "Dt_Of_Join": null,
    "Gender_LSeq": 2.0,
    "Adm_Type_LSeq": 103.0,
    "Hosteller_Type_LSeq": null,
    "Gender": "Female",
    "Admission_Type": "Hosteller",
    "Hostel_Seq": 1.0,
    "Hostel_Code": null,
    "Hostel_Name": "LADIES HOSTEL",
    "Department_name": "Computer Science and Engineering",
    "Program_name": "BE Computer Science and Engineering",
    "Room_No": "L203",
    "Room_Nbr": null,
    "Out_Response_Type_Seq": 4.0,
    "Out_Response_Nbr": null,
    "OutResponseNo": "9994139956",
    "In_Response_Type_Seq": 4.0,
    "In_Response_Nbr": null,
    "InResponseNo": "9994139956",
    "Blood_Group": null,
    "Aadhaar_No": null,
    "FingerID": "7549",
    "IVR_Language_LSeq": 23.0,
    "photoPath": null,
    "Institution_Seq": null,
    "Created_By": 1.0,
    "Created_Dt": "2022-12-08T11:04:21.933+05:30",
    "Modified_By": null,
    "Modified_Dt": null,
    "Record_Ver": null,
    "BatchName": "BE CSE(2022-2026)",
    "Inst_Name": null,
    "imageModel": null,
    "button": null,
    "FileRepository_Seq": 0.0,
    "FilePath": null,
    "Photo_Path": null,
    "Att_Dt": null,
    "Morning_Att_EntryTime": null,
    "Moring_Att_Status": null,
    "Night_Att_EntryTime": null,
    "Night_Att_Status": null,
    "MorningAttStatus": null,
    "stud_ID": null,
    "entrydate": "0001-01-01T00:00:00+05:30",
    "iostatus": null,
    "studentnumber": "7418019956",
    "indate": null,
    "outdate": null,
    "outdatestr": null,
    "indatestr": null,
    "Bedno": 0.0,
    "IVRNO": "04223501087",
    "email": null,
    "DOB": null,
    "IVR_Language": "Tamil",
    "AlterIVRApprovalNo": null,
    "PaymentStatus": null
}
```

**Leave Entry Summary**
```json
// GET http://hss.psgtech.ac.in/WebAPI/StudentLeaveApply/summary?page=0&per_page=0

Request: 
{
  "Authorization" : "Bearer token"
}

Response:
[
    {
        "Student_Leave_Seq": 484862.0,
        "StudentSeq": 0.0,
        "Roll_No": null,
        "StudentName": null,
        "ParentStudentLeaveSeq": 0.0,
        "LeaveExtendButton": null,
        "From_Date": "2025-02-10T12:45:00+05:30",
        "To_Date": "2025-02-12T12:00:00+05:30",
        "From_Time": "2025-02-10T12:45:00+05:30",
        "To_Time": "2025-02-12T12:00:00+05:30",
        "Status_LSeq": 5.0,
        "Status": "Rejected",
        "Leave_Reason_Lseq": 20.0,
        "Leave_Reason_Type": "Personal",
        "Leave_Reason": "",
        "Leave_Type_Lseq": 0.0,
        "Leave_Type": "Leave",
        "Created_By": 0.0,
        "IVRCallCount": 1.0,
        "FTimeList": null,
        "TTimeList": null,
        "Dlist": null,
        "project_enable": "LTLE",
        "noofdate": 0,
        "reject_reason": null,
        "rej_btn": true,
        "EventName": null,
        "EventVenue": null,
        "Comments": null,
        "LeaveancelButtonapprove": false,
        "EnableLeaveextendButton": true,
        "LeavePreponeDateTime": null,
        "Leave_Preponedby": "",
        "Modified_Dt": "2025-02-10T12:30:13.663+05:30",
        "Total_LeaveCount": 66.0
    },
    ...
]
```

**Leave Entry Details**
```json
// GET http://hss.psgtech.ac.in/WebAPI/StudentLeaveApply/studentleavedetails?StudentLeaveSeq={seqId}

Request:
{
  "Authorization" : "Bearer token"
}

Response:
{
    "approvalDetails": [],
    "IVROutgoingDetails": [
        {
            "SNo": 0,
            "IVRApprovalNo": "9994139956",
            "CallDate": "2025-02-10T12:29:34.497+05:30",
            "Status": null,
            "Type": "Outgoing",
            "KeysPressed": "0",
            "ResponseStatusSeq": 729559.0
        }
    ],
    "outCallDetails": [],
    "IsOutSMS": true,
    "IsInSMS": true,
    "ManuallyApprovedBy": null,
    "inCallDetails": [],
    "manualAppDetails": null,
    "Keys": [
        "0"
    ],
    "ManualAppDate": null,
    "cancelby": null,
    "LeavePreponeDateTime": null,
    "Leave_Preponedby": "",
    "Modified_Dt": null
}
```

**Leave Entry Save**
![alt text](image.png)
```json
// POST http://hss.psgtech.ac.in/WebAPI/StudentLeaveApply/save

Request:
{
  "Authorization" : "Bearer token",
  leave_details,
}

Response: 
{}
```