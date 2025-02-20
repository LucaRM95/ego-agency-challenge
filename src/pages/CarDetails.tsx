import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
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
import Carousel from "../components/ui/Carousel";

const CarDetails = () => {
  const params = useParams();
  const { carDetails, loading } = useSelector(carDetailsSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(carDetailsActions.setLoading(true));
    getEgoApi()
      .get(`models/${params.id}`)
      .then((response) => {
        dispatch(carDetailsActions.setCarDetailsData(response.data));
        dispatch(carDetailsActions.setLoading(false));
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BounceLoader />
        </div>
      ) : (
        <div className="max-w-7xl lg:max-w-full pt-6">
          <CarDetailsHeader carDetails={carDetails} />
          <div className="flex items-center h-[452px] bg-[#F7F7F7]">
            <Carousel features={carDetails.model_features} />
          </div>
          {carDetails.model_highlights.map((highlight, index) => (
            <CarHighlights
              key={highlight.title}
              highlights={highlight}
              inverted={index % 2 !== 0}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default CarDetails;
