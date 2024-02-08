// ExchangeRateInput.tsx
"use client";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Config } from "../../../config";

const ExchangeRateInput: React.FC = () => {
  const [dollars, setDollars] = useState<number>(1);
  const [rubyPerDollar, setRubyPerDollar] = useState<number>(1);
  const [data, setData] = useState<object>({});

  const handleDollarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setDollars(isNaN(value) ? 0 : value);
  };

  const handleRubyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setRubyPerDollar(isNaN(value) ? 0 : value);
  };

  const handleUpdateClick = async () => {
    console.log(`dollars, rubyPerDollar`, dollars, rubyPerDollar);
    try {
      const response = await axios.post(
        `${Config.UrlForUpdate}/update-balance`,
        {
          dollar: dollars,
          ruby: rubyPerDollar,
        }
      );
      console.log(`Updating database: Ruby for 1 Dollar`, response);

      toast.success(response?.data?.message);
      getAllData();
    } catch (error: any) {
      toast.error(error?.message);
    }
  };


  const getAllData = async () => {
    try {
      const response = await axios.get(
        `${Config.UrlForUpdate}/get-balance`
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async (id:string) => {
    try {
      const response = await axios.delete(
        `${Config.UrlForUpdate}/delete-balance/${id}`
      );
      getAllData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (id: string) => {
    deleteData(id);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-5 mb-16">
      <div>
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="dollars" className="text-lg font-bold">
            Rupees:
          </label>
          <input
            type="number"
            id="dollars"
            value={dollars}
            onChange={handleDollarChange}
            className="border p-2 ml-2"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="ruby" className="text-lg font-bold align-right">
            Ruby:
          </label>
          <input
            type="number"
            id="ruby"
            value={rubyPerDollar}
            onChange={handleRubyChange}
            className="border p-2 ml-2"
          />
        </div>
      </div>

      <div>
        <button
          onClick={handleUpdateClick}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Update Database
        </button>
      </div>
      <div>
        <div className="text-xl font-bold mt-4">
          {new Intl.NumberFormat('en-US').format(dollars)} Rupees is equal to {rubyPerDollar} Ruby
        </div>
        <Toaster />
      </div>

      <table className="border-collapse border-2 border-gray-500 mt-4 w-[30rem]">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">Ruby</th>
            <th className="border border-gray-500 p-2">Rupees</th>
            <th className="border border-gray-500 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((item) => (
            <tr key={item._id}>
              <td className="border border-gray-500 p-2 text-center">
                {item.ruby}
              </td>
              <td className="border border-gray-500 p-2 text-center">
                {item.dollar}
              </td>
              <td className="border border-gray-500 p-2 flex justify-center align-center">
                <button
                  onClick={() => handleDeleteClick(item._id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRateInput;
