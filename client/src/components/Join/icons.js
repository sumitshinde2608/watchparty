import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaVimeoV } from 'react-icons/fa';
import { FaMixcloud } from 'react-icons/fa';
import {FaDailymotion} from 'react-icons/fa';
import {FaSoundcloud} from 'react-icons/fa';
import './icons.css'

const Icons =()=> {
    return (
        <div className='icons'>
            <FaFacebookSquare className='seperateicon'/>
            <FaYoutube className='seperateicon'/>
            <FaSoundcloud className='seperateicon'/>
            <FaTwitch className='seperateicon'/>
            <FaVimeoV className='seperateicon'/>
            <FaDailymotion className='seperateicon'/>
            <FaMixcloud className='seperateicon'/>
            </div>
    );
    
}

export default Icons;