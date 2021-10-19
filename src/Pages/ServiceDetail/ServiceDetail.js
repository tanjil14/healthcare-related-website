import React from "react";
import { useParams } from "react-router";
import "./ServiceDetail.css";
const details = [
  {
    id: 1,
    logo: "fas fa-notes-medical",
    title: "free checkups",
    description:
      "The innovation of these programs is the low-cost and free financing of health services that can be accessed by everyone. Also there is the innovation of community awareness for early detection of cancer.",
    photo: "https://i.ibb.co/F7RxgGR/s-1.jpg",
  },
  {
    id: 2,
    logo: "fas fa-ambulance",
    title: "24/7 ambulance",
    description:
      "Ministry of Health and Family Welfare (MoHFW) published a notice to provide free ambulance service for pregnant women in all medical college hospitals, specialized hospitals, district and sub-district level hospitals all over the country",
    photo: "https://i.ibb.co/Twrmx0P/s-2.jpg",
  },
  {
    id: 3,
    logo: "fas fa-user-md",
    title: "expert doctors",
    description:
      "it’s a profession that may be considered a special mission, a devotion. It calls for involvement, respect and willingness to help all other people.",
    photo: "https://i.ibb.co/6YQJMn0/s3.jpg",
  },
  {
    id: 4,
    logo: "fas fa-pills",
    title: "medicines",
    description:
      "The New England Journal of Medicine is a weekly general medical journal that publishes new medical research and review articles",
    photo: "https://i.ibb.co/LQbHGXN/s4.jpg",
  },
  {
    id: 5,
    logo: "fas fa-procedures",
    title: "bed facility",
    description:
      "Hospital beds (per 1,000 people). Data are from the World Health Organization, supplemented by country data.",
    photo: "https://i.ibb.co/HX4SQw2/s5.webp",
  },
  {
    id: 6,
    logo: "fas fa-heartbeat",
    title: "total care",
    description:
      "Total patient care is a nursing model where one nurse provides total care to a single patient or a group of patients during his/her shift",
    photo: " https://i.ibb.co/NNjhFqW/s6.webp",
  },
];
const ServiceDetail = () => {
  const {serviceId} = useParams();
const showDetail=details.find(detail=>detail.id===parseInt(serviceId));
const {photo,title,description}=showDetail;
  return (
    <div className="service-details-box">
      <img className="service-details-img" src={photo} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceDetail;
