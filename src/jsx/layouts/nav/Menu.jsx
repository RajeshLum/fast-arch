import { FaUserPlus, FaRegUserCircle  } from "react-icons/fa";
import { LuLayoutDashboard , LuFileCheck, LuSlidersVertical, LuFlag, LuFileSearch, LuCreditCard, LuSettings, LuShieldCheck } from "react-icons/lu";

export const MenuList = [
    //Dashboard
    {
        title: 'Dashboard',	
        classsChange: 'mm-collapse',		
        iconStyle:<LuLayoutDashboard  />,
        to: 'dashboard',
    },
    {   
        title:'Customer Registration',
        //classsChange: 'mm-collapse',
        iconStyle: <FaRegUserCircle />,
        to: 'dashboard/customer-registration',
    },
    {   
        title:'Document Verification',
        //classsChange: 'mm-collapse',
        iconStyle: <LuFileCheck />,
        to: 'dashboard/document-verification',
    },
    {   
        title:'Customer Profile',
        //classsChange: 'mm-collapse',
        iconStyle: <FaUserPlus />,
        to: 'dashboard/customer-profile',
    },
    {   
        title:'Search and Filter',
        //classsChange: 'mm-collapse',
        iconStyle: <LuSlidersVertical />,
        to: 'dashboard/search-filter',
    },
        {   
        title:'Flagging & Approval',
        //classsChange: 'mm-collapse',
        iconStyle: <LuFlag />,
        to: 'dashboard/flagging-approval',
    },
    {   
        title:'Additional Research',
        //classsChange: 'mm-collapse',
        iconStyle: <LuFileSearch />,
        to: 'dashboard/additional-research',
    },
    {   
        title:'Billing & Subscription',
        //classsChange: 'mm-collapse',
        iconStyle: <LuCreditCard />,
        to: 'dashboard/billing-subscription',
    },
    //Widget
    {   
        title:'Settings',
        //classsChange: 'mm-collapse',
        iconStyle: <LuSettings />,
        // to: 'widget-basic',
        to: 'dashboard/settings',
    },
    {   
        title:'Admin Panel',
        //classsChange: 'mm-collapse',
        iconStyle: <LuShieldCheck />,
        to: 'dashboard/admin-panel',
    },
]