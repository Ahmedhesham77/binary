import { CCard, CCardBody, CCol, CRow, CBadge } from "@coreui/react";

const cardData = [
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "/images/docker.png", backGroundColor: "#E7F2FF", color: "#1B85FF" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "/images/bootstrap.png", backGroundColor: "#F8F0FF", color: "#5E3B7F" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "/images/suzuki.png", backGroundColor: "DEF3D5", color: "#6CA356", blend_mode: "true" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "/images/suzuki.png", backGroundColor: "#EDEEFF", color: "#22244D" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "/images/suzuki.png", backGroundColor: "#DEF3D5", color: "#6CA356", blend_mode: "true" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "/images/suzuki.png", backGroundColor: "#EDEEFF", color: "#22244D" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "/images/bootstrap.png", backGroundColor: "#F8F0FF", color: "#5E3B7F" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "/images/docker.png", backGroundColor: "#E7F2FF", color: "#1B85FF" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet..", image: "/images/docker.png", backGroundColor: "#E7F2FF", color: "#1B85FF" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet..", image: "/images/bootstrap.png", backGroundColor: "#F8F0FF", color: "#5E3B7F" },
];

const Home = () => {
    return (
        <div className="container mt-4">
            <CRow className="justify-content-center">
                {cardData.map((card, index) => (
                    <CCol key={index} xs={6} sm={6} md={6} lg={4} xl={3} >
                        <CCard className="company-card" >
                            <CCardBody className="new">
                                <div >
                                    <CBadge style={{ backgroundColor: `${card.backGroundColor}`, color: `${card.color}` }}>
                                        {card.title}
                                    </CBadge>
                                    <img
                                        src={card.image}
                                        alt={card.title}


                                    />
                                </div>
                                <div className="card-text">
                                    <h5>{card.title + " board"}</h5>
                                    <p className="text-muted">{card.description}</p>
                                </div>
                            </CCardBody>
                        </CCard>
                    </CCol>
                ))}
            </CRow>
        </div >
    );
};

export default Home;
