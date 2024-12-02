import React from 'react';
import logoBlack from '/public/images/logo_black.png';
import CustomImage from '../CustomImage';
import facebookLogo from '/public/images/facebook.png';
import linkedlnLogo from '/public/images/linkedln.png';
import twitterLogo from '/public/images/twitter.png';
import instagramLogo from '/public/images/instagram.png';
import youtubeLogo from '/public/images/youtube.png';
import homeLogo from '/public/images/home.png';
import gmailLogo from '/public/images/gmail.png';
import phoneLogo from '/public/images/phone.png';
import webLogo from '/public/images/web.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useTrans from '../../../../lib/hooks/useTrans';

const Footer = ({ data }) => {
    const trans = useTrans();

    return (
        <motion.footer
            className="bg-[#010125] border-t-[1px] border-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
        
        </motion.footer>
    );
};

export default Footer;
