import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import { editThongTinKhachHang, changePassword } from "assets/serviceAPI/userService";
import { Card, Table, Button, Image } from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Timkiem() {
   

    return (
       <>
       
       
       </>
  );
}

export default Timkiem;
