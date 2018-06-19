import axios from "axios";
import { COOKIE } from "../config.env";
const Index = ({
  profile: {
    Forename,
    Surname,
    CandidateAddress: { Town },
    PhoneNumber,
    Email
  }
}) => {
  return (
    <div>
      <section className="container">
        <h1>About You</h1>
        <div className="name">
          {`${Forename} 
          ${Surname}`}
        </div>
        <span>{Town}</span>
        <span>{PhoneNumber}</span>
        <span>{Email}</span>
      </section>
      <style jsx>{`
        .container {
          width: 250px;
          border-radius: 4px;
          border: 1px solid #d6d6d6;
          padding: 15px;
          margin: 0 auto;
          text-align: center;
        }
        h1,
        .name {
          font-family: "Open Sans", Helvetica, Arial, sans-serif;
        }
        .name {
          color: #e25b89;
          font-size: 22px;
          font-weight: 600;
        }
        span {
          display: block;
          color: #333;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};

Index.getInitialProps = async () => {
  const profile = await axios({
    method: "get",
    url: "https://www.reed.co.uk/api/candidate/getprofileaboutyoumodel",
    withCredentials: true,
    headers: {
      Cookie: COOKIE

    }
  });

  return { profile: profile.data.model };
};

export default Index;
