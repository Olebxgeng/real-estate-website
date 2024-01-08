import './Companies.css'
import Prologis from "../../Images/prologis.png"
import Realty from "../../Images/realty.png"
import Tower from "../../Images/tower.png"
import Equinix from "../../Images//equinix.png"

const Companies = () => {
  return (
     <section className="companies_wrapper">
        <div className="paddings innerWidth flexCenter companies_container">
            <img src={Prologis} alt="Prologis Logo" />
            <img src={Tower} alt="Tower Logo" />
            <img src={Equinix} alt="Equinix Logo" />
            <img src={Realty} alt="Realty Logo" />
        </div>
     </section>
  )
}

export default Companies