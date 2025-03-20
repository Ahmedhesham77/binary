import { CCard, CCardBody, CCol, CRow, CBadge } from "@coreui/react";

const cardData = [
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/1bjfbz9e.png", backGroundColor: "#E7F2FF", color: "#1B85FF" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/9knecohn.png", backGroundColor: "#F8F0FF", color: "#5E3B7F" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/gxa7sts7.png", backGroundColor: "DEF3D5", color: "#6CA356" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/dtyg0z3i.png", backGroundColor: "#EDEEFF", color: "#22244D" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/yya3lkpd.png", backGroundColor: "#DEF3D5", color: "#6CA356" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/rm1ijpzz.png", backGroundColor: "#EDEEFF", color: "#22244D" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/9b43vj6e.png", backGroundColor: "#F8F0FF", color: "#5E3B7F" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet.", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/xx4hee03.png", backGroundColor: "#E7F2FF", color: "#1B85FF" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet..", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/1bjfbz9e.png", backGroundColor: "#E7F2FF", color: "#1B85FF" },
    { title: "Finance", description: "Lorem ipsum dolor sit amet..", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/9knecohn.png", backGroundColor: "#F8F0FF", color: "#5E3B7F" },
];

const Home = () => {
    return (
        <div className="container mt-4">
            <CRow className="justify-content-center">
                {cardData.map((card, index) => (
                    <CCol key={index} xs={12} sm={6} md={6} lg={3} className="d-flex justify-content-center">
                        <CCard className="mb-4" style={{ boxShadow: "0px 4px 30px #00000012", maxWidth: "320px" }}>
                            <CCardBody>
                                <div className="text-center mb-3">
                                    <CBadge className=" rounded-4 p-3" style={{ position: "absolute", right: "10px", top: "10px", backgroundColor: `${card.backGroundColor}`, color: `${card.color}` }}>
                                        {card.title}
                                    </CBadge>
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-100 mt-3"
                                        style={{ maxWidth: "100px", objectFit: "cover", borderRadius: "12px" }}
                                    />
                                </div>
                                <div className="text-center">
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
