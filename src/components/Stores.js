import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Stores.css';

function Stores({ isDarkMode }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const loadYandexMap = () => {
      if (window.ymaps && mapInstanceRef.current) return;

      window.ymaps.ready(() => {
        if (mapRef.current && !mapInstanceRef.current) {
          mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
            center: [55.7558, 37.6173],
            zoom: 2,
            controls: ['zoomControl', 'fullscreenControl'],
          });

          const stores = [
            {
              coords: [55.7558, 37.6173],
              title: 'МОСКВА',
              address: 'Кузнецкий мост, 7',
            },
            {
              coords: [59.9343, 30.3351],
              title: 'САНКТ-ПЕТЕРБУРГ',
              address: 'Невский пр-т, 45',
            },
            {
              coords: [25.2048, 55.2708],
              title: 'ДУБАЙ',
              address: 'Dubai Mall, Fashion Avenue',
            },
            {
              coords: [45.4642, 9.19],
              title: 'МИЛАН',
              address: 'Via Monte Napoleone, 12',
            },
            {
              coords: [40.7128, -74.006],
              title: 'НЬЮ-ЙОРК',
              address: 'SoHo, Mercer Street',
            },
            {
              coords: [51.5074, -0.1278],
              title: 'ЛОНДОН',
              address: 'Mayfair, Bond Street',
            },
          ];

          stores.forEach((store) => {
            const placemark = new window.ymaps.Placemark(
              store.coords,
              {
                balloonContentHeader: store.title,
                balloonContentBody: store.address,
                hintContent: store.title,
              },
              {
                preset: 'islands#darkBlueDotIconWithCaption',
              },
            );
            mapInstanceRef.current.geoObjects.add(placemark);
          });
        }
      });
    };

    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
    script.async = true;
    script.onload = loadYandexMap;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const storesList = [
    { city: 'МОСКВА', address: 'Кузнецкий мост, 7', hours: '11:00 - 21:00' },
    {
      city: 'САНКТ-ПЕТЕРБУРГ',
      address: 'Невский пр-т, 45',
      hours: '11:00 - 21:00',
    },
    {
      city: 'ДУБАЙ',
      address: 'Dubai Mall, Fashion Avenue',
      hours: '10:00 - 22:00',
    },
    {
      city: 'МИЛАН',
      address: 'Via Monte Napoleone, 12',
      hours: '10:00 - 19:00',
    },
    {
      city: 'НЬЮ-ЙОРК',
      address: 'SoHo, Mercer Street',
      hours: '11:00 - 20:00',
    },
    { city: 'ЛОНДОН', address: 'Mayfair, Bond Street', hours: '10:00 - 18:00' },
  ];

  return (
    <div className={`stores-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='stores-container'>
        <div className='stores-header'>
          <h1>STORES</h1>
          <p>НАШИ БУТИКИ ПО ВСЕМУ МИРУ</p>
        </div>

        <div className='stores-grid'>
          {storesList.map((store, index) => (
            <motion.div
              key={store.city}
              className='store-card'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}>
              <h3>{store.city}</h3>
              <p className='store-address'>{store.address}</p>
              <p className='store-hours'>{store.hours}</p>
              <button
                className='store-directions'
                onClick={() =>
                  window.open(
                    `https://yandex.ru/maps/?text=${store.address}`,
                    '_blank',
                  )
                }>
                ПОСТРОИТЬ МАРШРУТ →
              </button>
            </motion.div>
          ))}
        </div>

        <div className='stores-map-container'>
          <div ref={mapRef} className='stores-map'></div>
        </div>
      </div>
    </div>
  );
}

export default Stores;
