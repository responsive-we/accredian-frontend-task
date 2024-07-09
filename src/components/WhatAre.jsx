import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const mockData = {
  'Product Management': [
    { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  ],
  'Strategy & Leadership': [
    { name: 'Leadership Program in Business', referrerBonus: '₹ 8,000', refereeBonus: '₹ 9,500' },
    { name: 'Executive Leadership Program', referrerBonus: '₹ 9,500', refereeBonus: '₹ 12,000' },
    { name: 'Strategic Leadership Certification', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { name: 'Advanced Program in Strategic Leadership', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Certificate in Strategic Leadership', referrerBonus: '₹ 7,500', refereeBonus: '₹ 9,000' },
    { name: 'Executive Leadership Training', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { name: 'Advanced Leadership Skills', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
  ],
  'Business Management': [
    { name: 'MBA in Business Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { name: 'Executive MBA in Business Management', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { name: 'Certificate in Business Management', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { name: 'Advanced Diploma in Business Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Professional Business Management Course', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { name: 'Business Management for Executives', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { name: 'Strategic Business Management Program', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
  ],
  'Fintech': [
    { name: 'Certificate in Fintech Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Advanced Fintech Program', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { name: 'Fintech Innovation and Technology', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { name: 'Diploma in Fintech Solutions', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { name: 'Professional Fintech Certification', referrerBonus: '₹ 9,500', refereeBonus: '₹ 11,500' },
    { name: 'Fintech for Business Leaders', referrerBonus: '₹ 10,500', refereeBonus: '₹ 12,500' },
    { name: 'Strategic Fintech Management', referrerBonus: '₹ 11,500', refereeBonus: '₹ 13,500' },
  ],
  'Senior Management': [
    { name: 'Senior Management Program', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
    { name: 'Executive Program for Senior Managers', referrerBonus: '₹ 13,000', refereeBonus: '₹ 15,000' },
    { name: 'Advanced Senior Management Course', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { name: 'Diploma in Senior Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { name: 'Strategic Senior Management', referrerBonus: '₹ 12,500', refereeBonus: '₹ 14,500' },
    { name: 'Senior Management for Executives', referrerBonus: '₹ 13,500', refereeBonus: '₹ 15,500' },
    { name: 'Professional Senior Management Training', referrerBonus: '₹ 11,500', refereeBonus: '₹ 13,500' },
  ],
  'Data Science': [
    { name: 'Professional Certificate in Data Science', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Advanced Data Science Program', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { name: 'Data Science and Machine Learning', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { name: 'Diploma in Data Science', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { name: 'Professional Data Science Certification', referrerBonus: '₹ 9,500', refereeBonus: '₹ 11,500' },
    { name: 'Data Science for Business Leaders', referrerBonus: '₹ 10,500', refereeBonus: '₹ 12,500' },
    { name: 'Strategic Data Science Management', referrerBonus: '₹ 11,500', refereeBonus: '₹ 13,500' },
  ],
  'Digital Transformation': [
    { name: 'Certificate in Digital Transformation', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Advanced Digital Transformation Program', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { name: 'Digital Transformation and Innovation', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { name: 'Diploma in Digital Transformation', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { name: 'Professional Digital Transformation Certification', referrerBonus: '₹ 9,500', refereeBonus: '₹ 11,500' },
    { name: 'Digital Transformation for Business Leaders', referrerBonus: '₹ 10,500', refereeBonus: '₹ 12,500' },
    { name: 'Strategic Digital Transformation Management', referrerBonus: '₹ 11,500', refereeBonus: '₹ 13,500' },
  ],
};

const categories = Object.keys(mockData);

const WhatAre = () => {
  const [selectedCategory, setSelectedCategory] = useState('Product Management');
  const programs = mockData[selectedCategory];

  return (
    <div className="flex space-x-4 p-4 bg-gray-100 rounded-lg">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md rounded-xl">
        <div className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-tl-xl rounded-tr-xl">ALL PROGRAMS</div>
        <ul className="divide-y divide-gray-200">
          {categories.map((category) => (
            <li
              key={category}
              className={`px-4 py-2 cursor-pointer ${selectedCategory === category ? 'bg-gray-200' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Programs Table */}
      <Table className="bg-white shadow-md rounded-lg">
        <TableCaption>{selectedCategory} Programs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-4/5">Program</TableHead>
            <TableHead>Referrer Bonus</TableHead>
            <TableHead>Referee Bonus</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.map((program, i) => (
            <TableRow key={i}>
              <TableCell className="w-4/5">{program.name}</TableCell>
              <TableCell className="w-[10%]">{program.referrerBonus}</TableCell>
              <TableCell className="w-[10%]">{program.refereeBonus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WhatAre;
