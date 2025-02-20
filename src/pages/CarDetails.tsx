import { useEffect } from "react";

import { useParams } from "react-router";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import {
  carDetailsActions,
  carDetailsSelector,
} from "../redux/reducers/sliceCarDetails";
import { BounceLoader } from "react-spinners";
import { getEgoApi } from "../api/baseEgoApi";
import Layout from "../components/ui/Layout";
import CarDetailsHeader from "../components/car_details/CarDetailsHeader";
import CarHighlights from "../components/car_details/CarHighlights";

const CarDetails = () => {
  const params = useParams();
  const { carDetails, loading } = useSelector(carDetailsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getEgoApi()
      .get(`models/${params.id}`)
      .then((response) => {
        dispatch(carDetailsActions.setCarDetailsData(response.data));
        dispatch(carDetailsActions.setLoading(false));
      });
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BounceLoader />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto pt-6">
          <CarDetailsHeader carDetails={carDetails} />
          <div className="h-[452px] bg-[#F7F7F7]">
            <span className="text-3xl">Carousel will be here</span>
          </div>
          {carDetails.model_highlights.map((highlight) => (
            <CarHighlights highlights={highlight} />
          ))}
          <div className="bg-black h-[50px]"></div>
        </div>
      )}
    </Layout>
  );
};

export default CarDetails;
