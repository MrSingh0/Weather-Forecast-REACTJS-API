import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./infoBox.css"


export default function InfoBox({ info }) {

  let url;

  if (info.weather === "few clouds") {
    url = "https://images.unsplash.com/photo-1565498546237-caee5443b06a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }

  else if (info.weather == "overcast clouds") {
    url = "https://images.unsplash.com/photo-1665668892651-9820b807ba77?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }

  else if (info.weather == "rain") {
    url = "https://images.unsplash.com/photo-1513172128806-2d00531a9f20?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }

  else if (info.weather == "smoke") {
    url = "https://images.unsplash.com/photo-1580462611434-39cde8c29330?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  else if (info.weather == "mist") {
    url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNvtYrH_yOsEdUWDV9YjGmZBLEbPW0fbvVA&usqp=CAU";
  }
  else if (info.weather == "scattered clouds") {
    url = "https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  else if (info.weather == "clear sky") {
    url = "https://images.unsplash.com/photo-1623846736569-1d90cba76d65?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  else {
    url = "https://images.unsplash.com/photo-1626847038141-14f86210fac0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdlYXRoZXIlMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D";
  }

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 350 }} style={{ border: '2px solid black', borderRadius: '2rem', boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.5)'}}>
        <CardMedia
          sx={{ height: 200 }}
          image={url}
          style={{borderBottom: '2px solid black'}}
        />
        <CardContent color="black" style={{ backgroundColor: 'rgb(225,225,225)'}}>
          <Typography gutterBottom variant="h5" component="div" color="black">
            <b>{info.city}</b>
            {info.humidity>80
              ?<ThunderstormIcon/>
              :info.temp>15
              ?<WbSunnyIcon/>
              :<AcUnitIcon/>
            }
          </Typography>
          <Typography variant="body2" color="black">
            <b>Temperature - </b>{info.temp}°C<br /><br />
            <b>Mini - </b>{info.tempMin}°C<br /><br />
            <b>Max - </b>{info.tempMax}°C<br /><br />
            <b>Humidity - </b>{info.humidity}<br /><br />
            The weather can be described as <b>{info.weather}</b> and feels like <b>{info.feelslike}°C</b>.
          </Typography>
        </CardContent>

      </Card>
      <br /><br />
      <p className="footer">Made with &#9829; by Priyam Kumar </p>
    </div>
  );
}