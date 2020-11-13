import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


async function registerForPushNotificationsAsync(){
    //console.log("inside register");
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalstatus = status;

    if (status !== 'granted'){
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalstatus = status;
    }
    if (finalstatus !== 'granted'){
        //console.log("no permission no notifications");
        return;
    }
}

export default function Notifier(){
    //console.log("inside Notifier");
    registerForPushNotificationsAsync();
}
