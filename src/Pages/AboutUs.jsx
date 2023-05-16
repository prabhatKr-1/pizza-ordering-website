import React from "react";
const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-8 italic font-serif">About Us</h1>
      <p className="item-center text-center my-2 mx-4 py-3 px-4 italic font-serif">
      Welcome to Pizza Paradiso! We're a haven for pizza lovers, dedicated to crafting mouthwatering pies with love and the finest ingredients. Our menu offers a delightful array of flavors, from classic margherita to creative gourmet combinations. With a commitment to quality and exceptional service, we strive to create an unforgettable dining experience. Join us and indulge in the true essence of authentic, handcrafted pizzas.
      </p>
      <p className="text-center font-semibold text-4xl italic font-serif">Our Team</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-black mt-8">
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://lh3.googleusercontent.com/pw/AJFCJaVcdnv2ueF61JpT7WpsvMAQ5A2V7ImPun08xgnHfYuCxrrcdwJm-x0W2yeapUSJCatZbaJWBHZ5C2o_MConMBFKASkj5oFzehgF8hvPhdL2nHYFYS3VEYkO-6SaV6bxy1Qakrx5W7_mI3z7-Zq4nNwDf-HwbbPwq9-Mnvs-c1JmcBWsZTEi4e5hcKJ0V2deFIzjtNo4merbWTIkjntyd7TEvVd6dzn3WJ9enQV-p0anVxczbuStQ2asSbKvMSy9UebBNUKnYwkW_LnF7GT9R7lYvqqAW4326_5QOHh74nq-PgAAdmUIWVx0iKOqolwNSRlh2lUpyE5fehb5YwtNhaSTFOosH6c00EP4XQ7W-EJyRwhHxfxdeMK-qB-10rbIaOoGr9mqwXbCqRqEEUlFSLf05jWOCp-_BUV9vCMAdKq6Cno5aUpxE57mfmiOTO3gJ6PbKburpnVL9HRf8Do2Xo___O3dgko0Oq5TzWX3nErvQKQjDQ3ioctFTp-ystQ6dkR4FAqsJKZFHOfaZJskSvqhafNAu8qEn53tYK_1JBelMNDsNqvXne3kjTmL7Xr3Lbvf2sCYbOuIr4oP0louKRpiizRZP-Q__ZkCylc7JRHNYV9uoNTQRZVO2NO9cwwPJHyVBYl8Prx5yTDsqzkcwUW6ig5g2cp5UCOGTMjh5pPocA6_kH_ARCi292kq6Cl924aeFWGuRmr0FcqzuKUCjjEkX10MUIpL_agiBhUfxRdzv5uzcDZqQ6ESHdHWQolzFn-VWYNl_4EdSO5Cp2Q3YFN520IWodyTIXNN2UkWMfOHqyKAm4gfGIzuzyCnr5XpuzNyNr5rIY2EhHS03N3yPwTLd2AXmWz8YwZuAqMEcFnk3ONDc7PGRBoXzXohG4sVcSOaS-FNh9ol77IeIR4J0dSpw9xjTVxhhkmXfDUc-PiV_0XFxtVWYpdINsE4o__PHLwAlm67G1Si-nOCHpFoQZmBuBn-Y-CSXLRQNrVk1m2CMl6h2Lnl3-aByWV9ze9fpgq5tPhjXGBng3cCbUX2JUjjtW-em69CJxpv8Q=w907-h907-s-no?authuser=5"
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 1"
            />
            <h2 className="text-xl font-bold mb-2 text-center">Aditya Shrivastav</h2>
            <p className="text-gray-700 text-center">Back-End Developer</p>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://lh3.googleusercontent.com/kwsFdUFPtbUSJY7pHxJ_-LyLgNsuATQDVisnR0XjdpmBQTHgRMpxtbAj7PyTSYXIBBm9KL7h0TUrIbHE8TSy7vjzKzb3mJmaGE17qPqw3D2RwfoXAQbgfsTxh280qeBamcXiqLfr2ULMXfPtG3UBp2TGclil7telYysgy_PCKw4LuXYgfL00frTz9aLITSIuVhgAY8ke3Fy4qAa6_wfuDwYMDYQBLqf1wJMf5Ycw71XMaqvCAa4ynbiMCOjn3bnMlBWGzfYn8tNZMpRM5nb5w5cwD6clE8rFniri1fzbfLigz9Mm1tHLvBubhvhAvHAcXaFCiKmyh1Kl1BZ190C0TCy1On3J_EY57-lg4FVlBhnQEUPb0rL32Hbz7a-RikHO2nMtUY4l0d9sy56DZFwW80qHFs-v_n0_B6r21vWvluGx8KGJlbEF14-xzdBVUtQyXW9B6tvyuXxDT4SUdWm_YS1hKNzvMFApc1QcdUuCkMnKaA7gCBr-KCJlefdIsu317J735RnxCu3TvJJRmWPqzJeWRsvOiOJ1lmd1Q3e97s3paB0htNEm01S-qbtRlOweUlm3lQ6di22mX-LgKA98iCYzbxsIi4D-FCGuUrifBbpHQ1N7Ta4nCLgKY6fkol5dcN1E2P395n1bm0f28kyVuUOdBgc_losjPhe9Nd_YB9EgMH3UUJ0B7yL28Ksz8fz5tC8ynJaQJMyXQbyjLCD7vEHlPUt3hfjascv0snvUZALZPMXbs0vVIwvR-Ir1hzWXjNWm-x0_blYXCiDcRNXLwsMw6Dsl0wJObEiIIH4D3TnGh5PRBW5S0EwAN_G56y-lQBRVWJFypQ5BIbYCQ1U8w9TuE4iA5_qo40y1RIXPvjHtJEcuJTxAJdI7tTTkLO0dRIbm7dhZbF-cPM9VioH2_NXMZDayAySlSEgh8qc33MBVDbO4zRmasTM_rfb143_2uoQlgDxWUGdvWYuaN835x15pFtAEZHMqqV0-1pYmBkjfmuWLqTx_C88q=w561-h990-s-no?authuser=2"
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 2"
            />
            <h2 className="text-xl font-bold mb-2 text-center">Prabhat Kumar</h2>
            <p className="text-gray-700 text-center">Project Leader & React Developer</p>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://lh3.googleusercontent.com/pw/AJFCJaUIEWhaHo2sp3mpXnj49EOnYLqbjJSncLQ43WOTK0i8ceL2LRYCjg7ymanpmm4ORqyp9aMEOitLuzJW0qU4GusxisNm1oJGl7ny5gWH0vbiULb266AkBPKZEUxXVCqEJvFAJP0TYSy33ya_1Vjxuqk0iLzLgobi5skNRh9im45nk-fcgOmVRM9fWdALer2G90HqKXUIA5DRs_0PpbjlzIwkzqy0csFdQ59pqEalpqitynaJWt780_FsvV7v7SLum7e-ZlcJFVVXgMtWthJWHLWzivWxHt9tE-gKXus97WYuRMH1XS1QK_99XLXpHZlA_l85mzpTP02ZiU5jLyzMu7RsD6zBpLeE48oqTXiFI6f1QU94wBeapgNMG24a5CS5jqPtzrWwnhIXf4snn0_c2tFE-vrzxmr5XqwJ5yj4TymrZUpFRUfNkJsRMnXkW1RiKTj3SOB_1chgAge84psIte3suDbHMtjy7FmWIl-O3Cm-G8fPF8Av0mdnBgiN7WXUKBv91-0Y2sHLobp6y1O2qIB9PCI2veZ37H6Do7NYyxIoglMM074pPHfkYDH39hmmjAHwEJYLVfaBgXClqMJORBBMriub98SfEkfEY8dzoE-cGvMwrXU3cOQ1Dh15AISAGd8czIJOnl78SMn5jl102a7TMZ5ahB5SB9R9ST9coV0BFQa2IztqlCGVzcnLZGeeXFofPgfOvSFUz0rn9Hj0Slx_1PnN7BdNtKwQs4itGenuut3WOsU35gcJGKISzirQ__IiB0ZRDIrkXqecgAu5MttXWzqNKtcaNVTih3RwkOnby0Nw8Ijm8CL-5qRDiXHUZU3JFVVdPkR6vb2d3iWf46OEtxr8WmFFFKFHBWAGS8UKJ77nKU-2Efo0v_pXw0N3udNLTcml7aY6mIK-7O_YsbQpcpRxYDOvbqXzOvkWLioChB03aL8i8mO4pkp_0X063dNO5DYqVUinY4AHoz7k2K3ff2Nv-_kjREstIyf1T9H0fknYaIzGMGttO7FGPWptcIxmlePsciKf-SQ8S5VPpcS7zuEs7KZcsAL1YQ=w862-h905-s-no?authuser=5"
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 3"
            />
            <h2 className="text-xl font-bold mb-2 text-center">Keshav Sharma</h2>
            <p className="text-gray-700 text-center">Front-End Developer</p>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://lh3.googleusercontent.com/pw/AJFCJaX-hY7xjWmbYPIg9ktug0KxCo1koksk0D4Z7Dpj_bMXueXzfcnKxlYDQz5-2tPTLnnBoauEBazsryaciSrE37qsR2k0ojV3pgT0DZku50w3eleZl1uDFxr6-sWZKiFR6VW9WtZ-dgWHztIqv_M4hcCQ8Z1Amp1It_t-eaqFGsjZPJv7bdV0ZU1jF7MaYlF0qCUMnOHFwttLpyPPAfgYpQxSaMxftP4_ewY7KNdubbi196Kd0u3MUFNG7THff6rBW0uEbV8CgzGxvP-6fjq6Kc-KQ4AlaeyX1KJNecOHW2RK8-4ILGOLUyUOJEujgQJlL2PFQaslBDEENaVDPJgCBFzM7K2WMR8DrwfZYHV-ZBfs9Ebnc3iBgL9-qTav1k_9EFp8uSAw5HrFK-jxSphbbf56kaZEiuRxiEflzHq0H1Z_D6Jnun5EC5ZYRS4xJcZdHnTEVoiQmVXcv1vpwnwLYqfZvohEAfQrAY8VnIPQHG3KwVDvljaCs9YbTKP5uOl--rps2Yx7MgVTBJven2DXDfekx5c8GouLNkWyJHbhyk2wsLdJZEZbsVVKQvfizvk2ImZeb3UH9alla5Ts7hivfj6P7bXruUsjoIh4UIEKvNMiC9yt4nzmiuTIWuIHoX1SaT_xER8z599DZjyLthrZ6wGWMAX0O_WijgJu3G-8P_ST8VvgH1f_Dx2pxDXctFxhhRD11L6zyw6bytqiv_ePpFJwQkQW4JyH8uHo8KUoecW7BPg7b0OZGWr-wDburoOXt-ZPLafG-L1X5FEl-PXWnvVdBAW6bUSZ-_QlL7TuWJ5xMkOZ_elwQF94i1Nsrq_xNFplLaKxohe1GdGJ3pvcOorPehnsyWmGIeUqfsORp1NvuxMWOARBUZcViI1rOBiTCoIm4_eHA3z5UyHDhxRoywtV_T5RgV5NdGNETx2O3Yq2olnjoGDqZMba5Zr5Mvfwbssczk19PLJLeGBugxkaYU-DRjSJkKA4WjggQ5IqIP1cbPE2C5AhwLuGrAbOKn0cyhjnlbf5MJ7dmKSBTXngR7ohOu8eo4sKOoXX_g=w880-h938-s-no?authuser=5"
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Shubham Choudhary</h2>
            <p className="text-gray-700 text-center">Front-End Developer</p>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://lh3.googleusercontent.com/pw/AJFCJaVm8LiLKM76NoZVfbaLeTGFWcQBd3hLhPGucoMjqHoB_ckFqqz2u98yc6ADR6yLiiz755QgFVcEl4qNB-QcrEIcldo0Vz3bvRvbKq-VMVnaG6kgcWooeRnB2L7ZSKvXHsn62DY_9qm0B6sfBz5DYfsSf4WvJSeUcemk8reY3cdVhSC9U1S5812uNo-zXBTOh2VVjV0OOOA2_lwGI65EvpKtDF-LtPQNTjIKQnEJlBBILAag0Qxlku1HjCWtp3o0rvJAYmTku0v5-jmPZf7wA1yWGc2nTw13eVzhp80VbU4NodrgTBcOceCpINpcIeIUn-5KcN0KWup2RMVVSZ4oFnzNfPctfVFi9RJYSeHwiETmYhildgUvB__xOCoTxrdeQlYBaSkKvHYFKZ2E77BzPwG1SIuL5mabru8ZN_bEPyXEq1DYftMa_fOZSwE1zMBxUtOVZo2zBhX8QWVPspjcgqIoGSQj6i1T1_5Uun5wTGjTrmwiEnWXcVQRYGZmthm7uu5NuU_lsgfT71nAomI32G_QAaUzjDLIbP_H0pNV0f15IZ0vs58TZlFlAF_qOe6D1LlwEuMkmqKMwt0wKrF4NR_qm1B0m57TSmL3aUabl9UwIq4a-kr7uQ2_CHWAeG04KWUDMhVfas-ydsbBlDj3zdjCNMwa9UC2E_Wmv35bc8jGVGxWU8dzH7WOxtQfanSa3Up6fSdurBMS5FSDXY5RaxLBnTXHXN9SN2o0I4GeUa50kKgNnK-_J1VI4LLcgYFWrwLrp4vRYZClFOkPa5BKksrf8sPSqORWuo6f0qPTgx7PkNKdUmeM0DjEneCWLvVTfVwl8z7mp8bio4jrrFdmdSPD4xxXwq2Ok0Uk1gxTwBIK936gY3z4LiwtOnWQoILPXLeq-cDgrvp8-b8SCxAyVlqMgXuAxDkN-i23jv5ur2bN1WSglSJ-xBVwTJY5cB3ALHm_LZJEa_NoeGzsTgcRNMS4cTyBJFeXTwroG5tife2jen7n1NfHoKv3U-rZuJwNiKA5s1Ruvk-ITbNKdV43-uzsF8kaQOANF0lJ9A=w345-h422-s-no?authuser=5"
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 5"
            />
            <h2 className="text-xl text-center font-bold mb-2">Harshita Dhingra</h2>
            <p className="text-gray-700 text-center">Back-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
