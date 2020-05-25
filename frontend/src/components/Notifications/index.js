import React from 'react';

import { MdNotifications } from 'react-icons/md'

import { Container, Badge, NotificationList, Scroll, Notification } from './styles';

function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color='#7159c1' size={20} />
            </Badge>

            <NotificationList>
                <Scroll>
                    <Notification unread>
                        <p>Vocês possui um agendamento para bla bla bla</p>
                        <time>há 2 dias atrás</time>
                        <button type='button'>Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Vocês possui um agendamento para bla bla bla</p>
                        <time>há 2 dias atrás</time>
                        <button type='button'>Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um agendamento para bla bla bla</p>
                        <time>há 2 dias atrás</time>
                        <button type='button'>Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um agendamento para bla bla bla</p>
                        <time>há 2 dias atrás</time>
                        <button type='button'>Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um agendamento para bla bla bla</p>
                        <time>há 2 dias atrás</time>
                        <button type='button'>Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um agendamento para bla bla bla</p>
                        <time>há 2 dias atrás</time>
                        <button type='button'>Marcar como lida</button>
                    </Notification>
                </Scroll>
            </NotificationList>
        </Container>
    )
}

export default Notifications;