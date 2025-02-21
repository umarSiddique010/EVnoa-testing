// Importing images
import ProductDesignTesting from "../../assets/productsImg/Product-Design&Testing.png";
import ProductRange from "../../assets/productsImg/Product-Range.png";
import ACCharger from "../../assets/productsImg/AC-Charger.png";
import DCCharger from "../../assets/productsImg/DC-Charger.png";
import DCChargers from "../../assets/productsImg/DC-Chargers.png";
import ACChargers from "../../assets/productsImg/AC-Chargers.png";


 const products = [
    {
      id: 1,
      heading: "Product Design & Testing",
      details: [
        "All products are Tested according to relevant standards.",
        "All our products are designed in detail and after close loop feedback.",
        "The Communication is tested on all major CMS presently working.",
      ],
      img: ProductDesignTesting,
    },
    {
      id: 2,
      heading: "Product Range",
      details: [
        "AC Chargers",
        "- OCPP based 3x3pin Socket AC charger",
        "- OCPP based Single Output 3pin socket AC charger",
        "- OCPP based Type 2 Single Gun 1Ph / 3Ph AC charger",
        "\nDC Fast Chargers",
        "- 30KW CCS2 Single Gun",
        "- 30KW + 30KW CCS2 Dual Gun",
        "- 60KW CCS2 Single Gun",
        "- 120KW CCS2 Single Gun",
        "- 15KW + 15KW GB/T Dual Gun",
      ],
      img: ProductRange,
    },
    {
      id: 3,
      heading: "AC Charger",
      details: [
        "OCPP BASED TYPE 2 SINGLE GUN 1 PHASE / 3 PHASE AC CHARGER",
        "Product code: T2AC-01SG-001/003",
        "- Single Phase 7.4KW, Three Phase 11KW & 22KW Type 2 Gun with 5m Cable",
        "- 4 Line Character Display / 4.3Inch Display option",
        "- Wi-fi for Network Connection",
        "- GSM option also available",
        "- Inbuilt Metering",
        "- Over / Under Current & Over / Under Voltage Protection",
        "- Earth-Fault Detection",
        "- DC Leakage Protection",
      ],
      img: ACCharger,
    },
    {
      id: 4,
      heading: "DC Charger",
      details: [
        "15 KW +15 KW GB/T DUAL GUN DC FAST CHARGER",
        "Product code: GBT0-30DG-000",
        "- 15+15KW Dual Gun; 15KW Single Gun GB/T Single or Dual Gun with 5m Cable",
        "- 7 inch LCD Display",
        "- Max. 95% Power Efficiency",
        "- OCPP 1.6J Enabled",
        "- Wi-fi for Network Connection",
        "- Robust Enclosure with Floor Mounting Option",
        "- Inbuilt Protection & Metering",
      ],
      img: DCCharger,
    },
    {
      id: 5,
      heading: "DC Chargers",
      details: [
        "30KW CCS2 SINGLE GUN DC FAST CHARGER",
        "Product code: CCS2-30SG-000",
        "- CCS Single Gun with 5m Cable",
        "- 7 inch LCD Display",
        "- Max. 95% Power Efficiency",
        "- OCPP 1.6J Enabled",
        "- Wi-fi for Network Connection",
        "- Compact Wallbox design",
        "- Inbuilt Protection & Metering",
        "- Wall or Pedestal Mounting",
        "",
        "30KW + 30KW CCS2 DUAL GUN DC FAST CHARGER",
        "Product code: CCS2-60DG-000",
        "- 30+30KW Dual Gun; 60KW Single Gun; 120KW Single Gun",
        "- CCS Single or Dual Gun with 5m Cable",
        "- 7 inch LCD Display",
        "- Max. 95% Power Efficiency",
        "- OCPP 1.6J Enabled",
        "- Wi-fi for Network Connection",
        "- Robust Enclosure with Floor Mounting Option",
        "- Inbuilt Protection & Metering",
      ],
      img: DCChargers,
    },
    {
      id: 6,
      heading: "AC Chargers",
      details: [
        "OCPP BASED 3 X 3 PIN SOCKET AC CHARGER",
        "Product code: OCPP-33PΙΝ-003",
        "- 3 Output of 3.3KW",
        "- 4 Line Character Display",
        "- Wi-fi for Network Connection GSM option also available",
        "- Inbuilt Metering",
        "- LED Indication",
        "- Over/Under Current & Over / Under Voltage Protection",
        "- Earth-Fault Detection",
        "- Push-Button Operation",
        "",
        "OCPP BASED SINGLE OUTPUT 3 PIN SOCKET AC CHARGER",
        "Product code: OCPP-13PΙΝ-001",
        "- 3.3kW/16A rating",
        "- Wi-fi for Network Connection GSM option also available",
        "- Inbuilt Metering",
        "- LED Indication",
        "- Over/Under Current & Over / Under Voltage Protection",
        "- Earth-Fault Detection",
      ],
      img: ACChargers,
    },
  ];


export default products