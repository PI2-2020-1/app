import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as MaterialIcons from 'react-icons/md';

export const SidebarData = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/home',
    icon: <BiIcons.BiBarChartSquare size={35} />,
    cName: 'nav-text',
  },
  {
    id: 2,
    title: 'Relatórios',
    path: '/reports',
    icon: <FaIcons.FaRegFileAlt size={35} />,
    cName: 'nav-text',
  },
  {
    id: 3,
    title: 'Perfil',
    path: '/profile',
    icon: <MaterialIcons.MdPersonOutline size={35} />,
    cName: 'nav-text',
  },
  {
    id: 4,
    title: 'Notificações',
    path: '/notification',
    icon: <MaterialIcons.MdNotificationsNone size={35} />,
    cName: 'nav-text',
  },
];
