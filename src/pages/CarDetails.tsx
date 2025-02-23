import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import {
  carDetailsActions,
  carDetailsSelector,
} from "../redux/reducers/sliceCarDetails";
import { BounceLoader } from "react-spinners";
import Layout from "../components/ui/Layout";
import CarDetailsHeader from "../components/car_details/CarDetailsHeader";
import CarHighlights from "../components/car_details/CarHighlights";
import Carousel from "../components/ui/Carousel";
import { useMediaQuery } from "react-responsive";
import { RequestCarsById } from "../services/RequestCarsServices";

const CarDetails = () => {
  const params = useParams();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { carDetails, loading } = useSelector(carDetailsSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.id) {
      navigate("/");
      return;
    }
  
    dispatch(carDetailsActions.setLoading(true));
    RequestCarsById(params.id)
      .then((res) => {
        dispatch(carDetailsActions.setCarDetailsData(res));
        dispatch(carDetailsActions.setLoading(false));
      })
      .catch(() => navigate("/"));
  }, [params.id]);

  return (
    <Layout>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BounceLoader />
        </div>
      ) : (
        <div className="max-w-7xl md:max-w-full pt-6">
          <CarDetailsHeader carDetails={carDetails} />
          <div className="flex items-center h-[452px] bg-[#F7F7F7]">
            <Carousel features={carDetails.model_features} />
          </div>
          {carDetails.model_highlights.map((highlight, index) => (
            <CarHighlights
              key={highlight.title}
              highlights={highlight}
              inverted={isDesktop ? index % 2 !== 0 : false}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default CarDetails;
