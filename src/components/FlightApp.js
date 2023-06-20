import React, {useState, useEffect} from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { TbArrowsExchange, TbArrowsExchange2 } from "react-icons/tb";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";

const FlightApp = () => {
  // handle event
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));

  // state for toggle
  const [toggle, setToggle] = useState(false)

  // handle toggle
  const handleToggle = () => {
    setToggle(!toggle)
  }

  // watch toggle
  const departure = watch('departure')
  console.log('departure', departure)
  const arrival = watch('arrival')
  console.log('arrival', arrival)

  // swap input 
  useEffect(() => {
    setValue('departure', arrival);
    setValue('arrival', departure);

  }, [toggle]);

  // watch for trip type
  const tripType = watch('tripType')
  console.log('tripType', tripType)

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
            {/* header section */}
            <div className="h-24 flex justify-center items-center shadow ">
              <p className="uppercase font-bold text-4xl text-center">
                flight schedule app
              </p>
            </div>

            {/* body section */}
            <div>
              <div className="grid justify-center space-y-5 bg-indigo-50 pb-10">
                <div>
                  <div className="flex space-x-8 mt-10 ">
                    <div className="flex flex-col justify-center">
                      <p className="text-3xl font-bold uppercase">Round trip</p>
                      <input
                        type="radio" 
                        className={`w-10 h-10 ml-16 ${
                          errors.tripType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="roundTrip"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="text-3xl font-bold uppercase">one way</p>
                      <input
                        type="radio"
                        className={`w-10 h-10 ml-10 ${
                          errors.tripType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="oneWay"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <p className="text-3xl font-bold uppercase">multi-city</p>
                      <input
                        type="radio"
                        className={`w-10 h-10  ${
                          errors.tripType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="multyCity"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div>
                    {errors.tripType && (
                      <span className="text-sm text-red-500">
                        {errors.tripType.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Flight Multi City 1*/}
                <div>
                  <div className="flex space-x-4">
                    {/* departure section */}
                    <div>
                      {
                          (tripType == 'multyCity') &&
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">flying from</p>
                          <select
                            className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                              errors.departure &&
                              " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                            {...register("departure", {
                              required: {
                                value: true,
                                message: "Departure is required",
                              },
                            })}
                          >
                            <option value="" defaultValue disabled hidden>
                              --Select Airport--
                            </option>
                            <option value="ENIA">
                              {" "}
                              England Newcastle International Airport
                            </option>
                            <option value="INIA">
                              {" "}
                              Italy Naples International Airport
                            </option>
                            <option value="MMA"> Malaysia Mulu Airport</option>
                            <option value="KMA"> Kenya Malindi Airport</option>
                          </select>
                          <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " />
                        </div>
                        <div>
                          {errors.departure && (
                            <span className="text-sm text-red-500">
                              {errors.departure.message}
                            </span>
                          )}
                        </div>
                      </div>
                      }
                    </div>

                    {/* arrival section */}
                    <div>
                      {
                          (tripType == 'multyCity') &&
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">flying to</p>
                          <select 
                          className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                            errors.arrival &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                          }`}
                          {...register("arrival", {
                            required: {
                              value: true,
                              message: "Arrival is required",
                            },
                          })}
                          >
                            <option value="" defaultValue disabled hidden>
                              --Select Airport--
                            </option>
                            <option value="ENIA">
                              {" "}
                              England Newcastle International Airport
                            </option>
                            <option value="INIA">
                              {" "}
                              Italy Naples International Airport
                            </option>
                            <option value="MMA"> Malaysia Mulu Airport</option>
                            <option value="KMA"> Kenya Malindi Airport</option>
                          </select>
                          <FaPlaneArrival className="text-4xl absolute left-5 top-10 " />
                        </div>
                        <div>
                        {errors.arrival && (
                            <span className="text-sm text-red-500">
                              {errors.arrival.message}
                            </span>
                          )}
                        </div>
                      </div>
                      }
                    </div>
                  </div>
                  {/* arrival date section */}
                  <div>
                    {
                        (tripType == 'multyCity') &&
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">Date</p>
                        <input
                          type="date"
                          className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.departureDate &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                          {...register("departureDate", {
                            required: {
                              value: true,
                              message: "Departure date is required",
                            },
                          })}
                        />
                      </div>
                      <div>
                      {errors.arrival && (
                          <span className="text-sm text-red-500">
                            {errors.arrival.message}
                          </span>
                        )}
                      </div>
                    </div>
                    }
                  </div>              
                </div>
                {/* Flight Multi City 2*/}
                <div>
                  <div className="flex space-x-4">
                    {/* departure section */}
                    <div>
                      {
                          (tripType == 'multyCity') &&
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">flying from</p>
                          <select
                            className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                              errors.departure &&
                              " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                            {...register("departure", {
                              required: {
                                value: true,
                                message: "Departure is required",
                              },
                            })}
                          >
                            <option value="" defaultValue disabled hidden>
                              --Select Airport--
                            </option>
                            <option value="ENIA">
                              {" "}
                              England Newcastle International Airport
                            </option>
                            <option value="INIA">
                              {" "}
                              Italy Naples International Airport
                            </option>
                            <option value="MMA"> Malaysia Mulu Airport</option>
                            <option value="KMA"> Kenya Malindi Airport</option>
                          </select>
                          <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " />
                        </div>
                        <div>
                          {errors.departure && (
                            <span className="text-sm text-red-500">
                              {errors.departure.message}
                            </span>
                          )}
                        </div>
                      </div>
                      }
                    </div>

                    {/* arrival section */}
                    <div>
                      {
                          (tripType == 'multyCity') &&
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">flying to</p>
                          <select 
                          className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                            errors.arrival &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                          }`}
                          {...register("arrival", {
                            required: {
                              value: true,
                              message: "Arrival is required",
                            },
                          })}
                          >
                            <option value="" defaultValue disabled hidden>
                              --Select Airport--
                            </option>
                            <option value="ENIA">
                              {" "}
                              England Newcastle International Airport
                            </option>
                            <option value="INIA">
                              {" "}
                              Italy Naples International Airport
                            </option>
                            <option value="MMA"> Malaysia Mulu Airport</option>
                            <option value="KMA"> Kenya Malindi Airport</option>
                          </select>
                          <FaPlaneArrival className="text-4xl absolute left-5 top-10 " />
                        </div>
                        <div>
                        {errors.arrival && (
                            <span className="text-sm text-red-500">
                              {errors.arrival.message}
                            </span>
                          )}
                        </div>
                      </div>
                      }
                    </div>
                  </div>
                  {/* arrival date section */}
                  <div>
                    {
                        (tripType == 'multyCity') &&
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">Date</p>
                        <input
                          type="date"
                          className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.departureDate &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                          {...register("departureDate", {
                            required: {
                              value: true,
                              message: "Departure date is required",
                            },
                          })}
                        />
                      </div>
                      <div>
                      {errors.arrival && (
                          <span className="text-sm text-red-500">
                            {errors.arrival.message}
                          </span>
                        )}
                      </div>
                    </div>
                    }
                  </div>              
                </div>

                {/* Flight */}
                <div className="flex space-x-4">
                {/* departure section */}
                <div>
                  {
                      (tripType !== 'multyCity') &&
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">flying from</p>
                      <select
                        className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                          errors.departure &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        {...register("departure", {
                          required: {
                            value: true,
                            message: "Departure is required",
                          },
                        })}
                      >
                        <option value="" defaultValue disabled hidden>
                          --Select Airport--
                        </option>
                        <option value="ENIA">
                          {" "}
                          England Newcastle International Airport
                        </option>
                        <option value="INIA">
                          {" "}
                          Italy Naples International Airport
                        </option>
                        <option value="MMA"> Malaysia Mulu Airport</option>
                        <option value="KMA"> Kenya Malindi Airport</option>
                      </select>
                      <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " />
                    </div>
                    <div>
                      {errors.departure && (
                        <span className="text-sm text-red-500">
                          {errors.departure.message}
                        </span>
                      )}
                    </div>
                  </div>
                  }
                </div>

                {/* Toggle Section */}
                {
                  (tripType !== 'multyCity') &&
                  <div className="flex justify-center">
                    <div className="relative">
                    <p className="font-bold text-xl uppercase">&nbsp;</p>
                      {(toggle === false)?
                      <TbArrowsExchange className='h-16 text-6xl text-black' onClick={handleToggle} />:
                      <TbArrowsExchange2 className='h-16 text-6xl text-black' onClick={handleToggle} />
                      }
                    </div>
                  </div>
                }

                {/* arrival section */}
                <div>
                  {
                      (tripType !== 'multyCity') &&
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">flying to</p>
                      <select 
                      className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                        errors.arrival &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      {...register("arrival", {
                        required: {
                          value: true,
                          message: "Arrival is required",
                        },
                      })}
                      >
                        <option value="" defaultValue disabled hidden>
                          --Select Airport--
                        </option>
                        <option value="ENIA">
                          {" "}
                          England Newcastle International Airport
                        </option>
                        <option value="INIA">
                          {" "}
                          Italy Naples International Airport
                        </option>
                        <option value="MMA"> Malaysia Mulu Airport</option>
                        <option value="KMA"> Kenya Malindi Airport</option>
                      </select>
                      <FaPlaneArrival className="text-4xl absolute left-5 top-10 " />
                    </div>
                    <div>
                    {errors.arrival && (
                        <span className="text-sm text-red-500">
                          {errors.arrival.message}
                        </span>
                      )}
                    </div>
                  </div>
                  }
                </div>

                </div>

                {/* date section */}
                <div className="flex space-x-4">
                  {/* departure section */}
                  <div>
                    {
                      (tripType !== 'multyCity') &&
                    <div>
                      <div>
                        <p className="font-bold text-3xl uppercase">
                          departure date
                        </p>
                        <input
                          type="date"
                          className={`w-full h-20 text-3xl rounded-lg ${
                            errors.departureDate &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                          }`}
                          {...register("departureDate", {
                            required: {
                              value: true,
                              message: "Departure date is required",
                            },
                          })}
                        />
                      </div>
                      <div>
                        {errors.departureDate && (
                          <span className="text-sm text-red-500">
                            {errors.departureDate.message}
                          </span>
                        )}
                      </div>
                    </div>
                    }
                  </div>

                  {/* return section */}
                  <div>
                    {
                      (tripType !== 'multyCity') &&
                      <div>
                      <div>
                        <p className="font-bold text-3xl uppercase">
                          return date
                        </p>
                        <input
                          type="date"
                          // disabled={tripType === 'oneWay'}
                          className={`w-full h-20 text-3xl rounded-lg ${
                            errors.returnDate &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                          }`}
                          {...register("returnDate", {
                            required: {
                              value: true,
                              message: "Return date is required",
                            },
                          })}
                        />
                      </div>

                      <div>
                        {errors.returnDate && (
                          <span className="text-sm text-red-500">
                            {errors.returnDate.message}
                          </span>
                        )}
                      </div>
                    </div>
                    }
                    
                  </div>
                </div>

                {/* passenger section */}
                <div className="flex space-x-2">
                  {/* adult section */}
                  <div className="w-full">
                    {
                      (tripType !== 'multyCity') &&
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          {" "}
                          adults (18+)
                        </p>
                        <select 
                        className="w-full h-16 rounded-lg text-2xl pl-20"
                        {...register("adult", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <GiPerson className="text-4xl absolute left-5 top-10 " />
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                    }
                  </div>

                  {/* children section */}
                  <div className="w-full">
                    {
                      (tripType !== 'multyCity') &&
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          {" "}
                          children (0-17)
                        </p>
                        <select 
                        className="w-full h-16 rounded-lg text-2xl pl-20"
                        {...register("children", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <FaChild className="text-4xl absolute left-5 top-10 " />
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                    }
                  </div>
                </div>

                {/* class and price section */}
                <div className="flex space-x-2">
                  {/* class section */}
                  <div className="w-full">
                    {
                      (tripType !== 'multyCity') &&
                    <div>
                      <div>
                        <p className="font-bold text-xl uppercase"> class</p>
                        <select
                         className="w-full h-16 rounded-lg text-2xl pl-20"
                         {...register("class", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                         >
                          <option>Economy</option>
                          <option>Business</option>
                        </select>
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                    }
                  </div>

                  {/* price section */}
                  <div className="w-full">
                    {
                      (tripType !== 'multyCity') &&
                    <div>
                      <div>
                        <p className="font-bold text-xl uppercase"> price</p>
                        <select
                         className="w-full h-16 rounded-lg text-2xl pl-20"
                         {...register("price", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                         >
                          <option>All Prices</option>
                          <option>$ 1000</option>
                          <option>$ 2000</option>
                          <option>$ 3000</option>
                          <option>$ 4000</option>
                          <option>$ 5000</option>
                        </select>
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                    }
                  </div>
                </div>

                {/* btn section */}
                <div className="flex justify-center items-center">
                  <input
                    type="submit"
                    value="Find flight"
                    className="w-2/3 h-16 font-bold text-3xl uppercase rounded-lg bg-blue-500 text-white hover:bg-blue-900"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default FlightApp;
