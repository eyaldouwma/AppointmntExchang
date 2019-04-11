import {eDoctorType} from "./Enums/eDoctorType.js";
import {eEndAfter} from "./Enums/eEndAfter.js";
import {eDayWeekMonth} from "./Enums/eDayWeekMonth.js";
import {eRepeat} from "./Enums/eRepeat.js";
import * as XA from "./Enums/eRepeat";

let kDaysOfWeek = new Array(7);


export class Doctor 
{
    constructor()
    {
        this.ID;
        this.Name;
        this.Type;
    }
}

export class Appointment
{   
    constructor()
    {
        this.Date = new Date();
        this.startTime;
        this.endTime;
        this.Doctor = new Doctor();
        this.Location;
        this.Switchable;
    }
};

export class AppUser
{
    constructor()
    {
        this.ID;
        this.Name;
        this.Email;
        this.MyAppointmentsList; // List of Appointments
        this.MyWishList;
    }
};

export class Range
{
    constructor()
    {
        this.StartDate = new Date();
        this.EndDate = new Date();
        this.StartTime;
        //this.EndTime;
        this.AllDay; // bool
        this.Repeat;// eRepeat
        this.RepeatEvery = {Number: 0, DWM: eDayWeekMonth.Day};
        this.RepeatDaysOfWeek = kDaysOfWeek;
        this.EndAfter; //eEndAfter
    }

 
};

export class AppointmentRequierd
{
    constructor()
    {
        this.Range = new Range(); // Range
        this.WantLocation = "";
        this.WantDoctorType = ""; // eDoctorType
        this.DoctorID = ""; // DoctorID
    }

    _isInMyRange(i_AnotherRange) // return bool
    {
        // check if there is an xE(i_AnotherRange) such as xE(this) 
        return true;
    }

    _isInMyWantedLocation(i_Location)
    {

    }
    
    _isMyWantedDoctor(eDoctorType, i_DoctorID)
    {

    }

    CanSwapAppointment(i_AppointmentRequierd)
    {
        let res = false;
        if(this._isInMyWantedLocation(i_AppointmentRequierd.WantLocation))
        {
            if(this._isMyWantedDoctor(i_AppointmentRequierd.WantDoctorType, i_AppointmentRequierd.DoctorID))
            {
                res = true;
            }
        }

        return res;
    }

}

export class AppointmentListener
{
    constructor()
    {
        this.UserID = new AppUser(); // AppUserID
        this.AppointmentToSwitch = new Appointment(); // Appointment #
        this.AppointmentRequierd = new AppointmentRequierd();  //AppointmentRequierd
    }
}

// need to intigrate with firebase
export function getAppointmentListenersFromDatabase()
{
    return new AppointmentListener();
}

export function findAppointmentFromListeners(i_AppointmentRequierd)
{
    console.log(">>findAppointmentFromListeners()");
    let res = null;
    let appListenerList = getAppointmentListenersFromDatabase();
    for(let listiner of appListenerList)
    {
        if(listiner.AppointmentToSwitch !== null)
        {
            if(listiner.AppointmentRequierd !== null)
            {
                if(listiner.AppointmentRequierd.Range.CanSwapAppointment(i_AppointmentRequierd.Range))
                {
                    res = listiner;
                   //doGoodAndFound()
                }
            }
        }
    }

    return res;

    console.log("<<findAppointmentFromListeners()");
}

