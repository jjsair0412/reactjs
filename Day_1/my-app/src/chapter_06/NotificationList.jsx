import React from "react";
import Notification from "./Notification";

const reservedNotification = [
    {
        id: 1,
        message: "안녕하세요"
    },
    {
        id: 2,
        message: "점심식사 시간"
    },
    {
        id: 3,
        message: "이제곧 미팅시작"
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        // 생성자에서 state 초기화
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotification.length){
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                // setState 함수로 update
                this.setState({
                    notifications: notifications,
                });
            }else {
                this.setState(
                    {
                        notifications: [],
                    }
                );
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                        key={notification.id}
                        id={notification.id}
                        message={notification.message} 
                    />;
                })}
            </div>
        )
    }
}

export default NotificationList;