import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaInstagram } from "react-icons/fa";
import React,{useEffect, useState} from "react";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../photos/logo.png";
import { MapPin, Clock } from "react-feather";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FileJsonIcon } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const JobListings = () => {
  const [loading, setLoading] = useState(true);
  const [jobdata, setjobdata] = useState([]);
  const [error, setError] = useState(null);
  console.log('info job', jobdata)
  const navigate = useNavigate();

  
    useEffect(() => {
      AOS.init({
        duration: 1000, // default duration (optional)
        once: true,     // whether animation should happen only once
      });
    }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
        console.log(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`)
        console.log('data', data.data);
        setjobdata(data.data)
      } catch (err) {
        console.error(err);
        setError('Failed to fetch job listings. Please try again later.');
      }finally{
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);


  const handleclick = () => {
    navigate('/job'); 
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400); // 1000 ms = 1 second

  };



  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
  
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
  
    const isToday = date.toDateString() === today.toDateString();
    const isTomorrow = date.toDateString() === tomorrow.toDateString();
  
    if (isToday) {
      return "Today";
    } else if (isTomorrow) {
      return "Tomorrow";
    } else {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  };
  
  return (
   <>
   </>
  );
};

export default JobListings;

