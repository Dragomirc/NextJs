import axios from "axios";
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
      Cookie:
        "reed.co.ukV10Auth=051B5C6AE0A3EB02986E3A118097033620064A455A9CD7D9A1EDD0B3F23ED317492620FA6B4EA6FB5ED0330837D25DEA94229F8898482A12B0DF7E66AFBB292D7B6A10B4EF14178D450F8A676DDEEE2B8AC0AD6B718DF167151AF3367829666FCB65B9736DDE197B0737E99065F16F59D44088D1BB1BA311FF5A581FA5346FFD63D6A6171B782E156D4EC911B3989B584A6F7E94; path=/; domain=.reed.co.uk; Expires=Tue, 19 Jan 2038 03:14:07 GMT;"
    }
  });

  return { profile: profile.data.model };
};

export default Index;
