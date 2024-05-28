import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const LocationModal = ({ isOpen, onClose }) => {
  const position = { lat: 53.54992, lng: 10.00678 };
  if (!isOpen) return null;
  return (
    <APIProvider apiKey={"AIzaSyCdZDLYRQB5c-1IQVmjUO_MqPFFuYQgiBY"}>
      <div>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-11/12 md:w-1/2">
            <div className="p-4 flex justify-end">
              <button
                className="text-black hover:text-gray-700"
                onClick={onClose}
              >
                &times;
              </button>
            </div>
            {/* <div className="p-4">{children}</div> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 m-10 gap-6">
              <div>
                <h2 className="text-center font-anton text-3xl pb-6">Cambie</h2>
                <p>752 West 12th Avenue, Vancouver BC V5Z 3X7</p>
                <p>604-555-6262</p>
                <p>van-core-fitness@gmail.ca</p>
                <div>
                  <h3 className="text-center font-semibold text-xl text-neutral-500 py-6">
                    Hours
                  </h3>
                  <div className="flex justify-between">
                    <div>
                      <p>Monday</p>
                      <p>Tuesday</p>
                      <p>Wednesday</p>
                      <p>Thursday</p>
                      <p>Friday</p>
                      <p>Saturday</p>
                      <p>Sunday</p>
                      <p>Holidays</p>
                    </div>
                    <div className="text-right">
                      <p>6am-10pm</p>
                      <p>6am-10pm</p>
                      <p>6am-10pm</p>
                      <p>6am-10pm</p>
                      <p>6am-10pm</p>
                      <p>6am-10pm</p>
                      <p>8am-9pm</p>
                      <p>8am-9pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Map defaultCenter={position} defaultZoom={10}>
                  <Marker position={position} />
                </Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    </APIProvider>
  );
};

export default LocationModal;
