// JC 王者百题库数据
// 共 922 道题
var JC_QUESTIONS = 
[
  {
    "id": "jc_QM_001",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 1,
    "question": "Now, the nominal risk-free rate decreases. Keep the credit risk, liquidity risk and maturity\nrisk constant, if the inflation rate increases, the real risk-free rate will be:",
    "options": {
      "A": "Decrease",
      "B": "No change",
      "C": "Increase."
    },
    "answer": "A",
    "explanation": "The real risk free rate equals to the nominal risk-free rate minus the expected inflation rate. If the\nnominal risk-free rate decrease and expected inflation rate increase, the real risk-free rate should\ndecrease."
  },
  {
    "id": "jc_QM_002",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 2,
    "question": "The maturity premium can be best described as compensation to investors for the:",
    "options": {
      "A": "risk of loss relative to an investment’s fair value if the investment needs to be converted to cash quickly.",
      "B": "increased sensitivity of the market value of debt to a change in market interest rates as maturity is extended.",
      "C": "possibility that the borrower will fail to make a promised payment at the contracted time and in the contracted amount."
    },
    "answer": "B",
    "explanation": "Explain an interest rate as the sum of a real risk-free rate and premiums that compensate investors\nfor bearing distinct types of risk.\nThe maturity premium compensates investors for the increased sensitivity of the market value of\ndebt to a change in market interest rates as maturity is extended, in general (holding all else equal)."
  },
  {
    "id": "jc_QM_003",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 3,
    "question": "An investor is considering purchasing short-term corporate bonds with similar maturities\nto US Treasury bills. If the real risk-free rate of US Treasury bill is 0.5%, the inflation\npremium is 1.5%, the default risk premium is 1% and the term risk premium is 2%, what\nis the approximate opportunity cost of not making this investment?",
    "options": {
      "A": "2%",
      "B": "3%",
      "C": "5%"
    },
    "answer": "B",
    "explanation": "The opportunity cost of not investing in a short-term corporate bonds is equal to the sum of the\nnominal risk-free rate of US Treasury bill and the risk premium, and the nominal risk-free rate of\nUS Treasury bill is equal to the sum of the real risk-free rate of US Treasury bill and the inflation\npremium.\nIn this case, the real risk-free rate is 0.5%, the inflation premium is 1.5% and the default risk\npremium is 1%. Therefore, the nominal risk-free rate is approximately 2%, and the total opportunity\ncost is approximately 3%."
  },
  {
    "id": "jc_QM_004",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 4,
    "question": "The closing prices of a firm’s share are as follows:\nTime (years) Price\n0.5 99.25\n1.0 100\n1.5 101.25\nThe continuously compounded semi-annual return for the period t=1 to t=1.5 is closest to:",
    "options": {
      "A": "1.0125%",
      "B": "1.2423%",
      "C": "2.4845%"
    },
    "answer": "B",
    "explanation": "The continuously compounded return of an asset over a period is equal to the natural log of period’s\nchange. In this case: ln(101.25/100) =1.2423%"
  },
  {
    "id": "jc_QM_005",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 5,
    "question": "The table below shows the stock prices and dividends of GF Corporation for three years.\nYear Price Dividend\n1 70 1\n2 65 2\n3 70 0.5\nIf the dividends are not reinvested in the account, the three-year holding period return of\nthe stock is closest to:",
    "options": {
      "A": "5.00%",
      "B": "7.14%",
      "C": "8.95%."
    },
    "answer": "A",
    "explanation": "HPR=(FV-PV)/PV=(70+1+2+0.5-70)/70=5%"
  },
  {
    "id": "jc_QM_006",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 6,
    "question": "An investor is evaluating two fixed-term investments with the following features:\nTerm Deposit 1 Term Deposit 2\nCompounding frequency continuous monthly\nStated annual rate 6%\nWhat annual interest rate would make the investor indifferent between investing in Term\nDeposit 1 and Term Deposit 2?",
    "options": {
      "A": "5.83%",
      "B": "5.99%",
      "C": "6.18%"
    },
    "answer": "B",
    "explanation": "A is incorrect because it takes the natural logarithm of Term Deposit 2’s stated annual rate instead\nof its effective annual rate (EAR). Calculation: ln (1.06) = 0.058269 = 5.83%.\nB is correct because the investor will be indifferent if the EAR for both term deposits is the same.\nTherefore, we need to find the stated annual rate with continuous compounding that corresponds\nto the EAR of the monthly compounded term deposit. Calculations: EAR of Term Deposit 2 = (1 +\n0.06/12)12 – 1 = 0.061678. Hence, EAR of Term Deposit 1 = 0.061678 = er – 1, leading to a\nstated annual rate for Term Deposit 1 of r = ln (1.061678) = 0.059851 = 5.99%.\nC is incorrect because it is the EAR of Term Deposit 2, not the stated annual rate of Term Deposit\n1. EAR of Term Deposit 2 = (1 + 0.06/12)12 – 1 = 0.061678 = 6.17%. This answer is also closest\nto the calculations e0.06 – 1 = 0.061837 = 6.18% or e6.17% – 1 = 0.063643 = 6.36%."
  },
  {
    "id": "jc_QM_007",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 7,
    "question": "As winning a lottery, Mikey has three options to get bonus.\nOption 1: An ordinary annuity with 20 annual payments of $2,000.\nOption 2: An annuity due with 20 annual payments of $2,000.\nOption 3: A perpetuity with annual payments of $2,000.\nAssuming the annual discount rate is 5 percent, which option is the last one for Mikey to\nchoose? （1906自编）",
    "options": {
      "A": "Option 1",
      "B": "Option 2",
      "C": "Option 3."
    },
    "answer": "A",
    "explanation": "All else being equal, due to the different payments, PV of option 1 will be the lowest, while PV of\noption 3 is the highest.\nCalculation:\nThe present value for option 1 is $24,924. PMT=-2,000, N=20, I/Y=5, CPT: PV=24,924.\nThe present value for option 2 is $26,171. BGN mode,PMT=-2,000, N=20, I/Y=5, CPT: PV=26,171.\nThe present value for option 3 is $40,000, A=2,000, discount rate=5%.\nPV=A/r=2,000/0.05=40,000\nOption 1 (ordinary annuity) is the last option to choose."
  },
  {
    "id": "jc_QM_008",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 8,
    "question": "A saver deposits the following amounts in an account paying a stated annual rate of 4%,\ncompounded semiannually:\nYear End of Year Deposits ($)\n1 4000\n2 8000\n3 7000\n4 10000\nAt the end of Year 4, the value of the account is closest to:",
    "options": {
      "A": "$30,432",
      "B": "$30,447",
      "C": "$31,677"
    },
    "answer": "B",
    "explanation": "To solve for the future value of unequal cash flows, compute the future value of each payment as of\nYear 4 at the semiannual rate of 2%, and then sum the individual future values, as follows:\nYear End of Year Deposits ($) Factor Future Value ($)\n1 4,000 (1.02)6 4,504.65\n2 8,000 (1.02)4 8,659.46\n3 7,000 (1.02)2 7,282.80\n4 10,000 (1.02)0 10,000.00\nSum = - - 30,446.91"
  },
  {
    "id": "jc_QM_009",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 9,
    "question": "For planning purposes, an individual wants to be able to spend €80,000 per year, at the\nend of each year, for an anticipated 20 years in retirement. In order to fund this retirement\naccount, he will make annual deposits of €11,606.56 at the end of each of his working\nyears. What is the minimum number of such deposits he will need to make to fund his\ndesired retirement? Use 6% interest compounded annually for all calculations. (",
    "options": {
      "A": "29 payments 未知题目来源已改写",
      "B": "30 payments",
      "C": "31 payments"
    },
    "answer": "B",
    "explanation": "Using a financial calculator, first calculate the needed funds at retirement:\nN = 20, I/Y = 6, PMT =80,000, FV = 0; calculate PV =-917,593.6975.\nThen use 917,593.6975 as the FV of the accumulation phase annuity:\nI/Y = 6, PV = 0, PMT = -11,606.56, FV = 917,593.6975, CPT N=30."
  },
  {
    "id": "jc_QM_010",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 10,
    "question": "A client invests €40,000 in a four-year certificate of deposit (CD) that annually pays\ninterest of 7%. The annual CD interest payments are automatically reinvested in a separate\nsavings account at a stated annual interest rate of 4% compounded monthly. At maturity,\nthe value of the combined asset is closest to:",
    "options": {
      "A": "€ 51,200.00",
      "B": "€ 51,903.24",
      "C": "€ 58,831.19."
    },
    "answer": "C",
    "explanation": "Using a financial calculator: N = 8x12=96; the discount rate, I/Y = (6/12) = 0.5; PMT = 4,800; FV\n= 0; Mode = BGN; CPT PV = - 367,083.3329."
  },
  {
    "id": "jc_QM_011",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 11,
    "question": "The annuity is paid ten times, each time at $100,000, with the first payment occurring\nfour years later. If the discount rate is 5% per year, then today’s annuity value is closest\nto:",
    "options": {
      "A": "$635,269",
      "B": "$667,033",
      "C": "$772,173"
    },
    "answer": "B",
    "explanation": "A is incorrect because it assumes the ordinary annuity starts in Year 4 instead of Year 3. The present\nvalue of an ordinary annuity with 10 payments of $100,000 at a 6% discount rate is calculated as\nfollows:\nPV = A[1 – 1/(1 + r)N]/r\nPV4 = $100,000 × [1 – 1/(1 + 0.05)10]/0.05\nPV4 = $772,173.49\nThen the PV of the investment is incorrectly discounted from Year 4 instead of Year 3 such that:\nPV0 = FV5(1 + r)–N\nPV0 = $772,173.49 × (1 + 0.05)–4\nPV0 = $635,269.04 ≈ $635,269.\nCalculator solution: (1) END mode; N = 10; I = 5; PMT = –100,000; FV = 0; solve for PV =\n772,173.49.\n(2) END mode; N = 4; I = 5; PMT = 0; FV = –772,173.49; solve for PV = 635,269.04.\nB is correct because the present value in Year 3 of an ordinary annuity with 10 payments of $100,000\nat a 5% discount rate is calculated as follows:\nPV = A[1 – 1/(1 + r)N]/r\nPV3 = $1000,000 × [1 – 1/(1 + 0.05)10]/0.05\nPV3 = $772,173.49\nThen, using a time line, the PV of the annuity in today’s dollars is\nPV0 = FV3(1 + r)–N\nPV0 = $772,173.49 × (1 + 0.05)–3\nPV0 = $667,032.50 ≈ $667,033.\nCalculator solution: (1) END mode; N = 10; I = 5; PMT = –100,000; FV = 0; solve for PV =\n772,173.49.\n(2) END mode; N = 3; I = 5; PMT = 0; FV = –772,173.49; solve for PV = 667,032.50\nC is incorrect because it is an intermediate step in the calculation and it represents the value of the\nannuity in 3 years. The present value in Year 4 of an ordinary annuity with 7 payments of $10,000\nat a 6% discount rate is calculated as follows:\nPV = A[1 – 1/(1 + r)N]/r\nPV3 = $100,000 × [1 – 1/(1 + 0.05)10]/0.05\nPV3 = $772,173.49 ≈ $772,173\nCalculator solution: (1) END mode; N = 10; I = 5; PMT = –100,000; FV = 0; solve for PV =\n772,173.49."
  },
  {
    "id": "jc_QM_012",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 12,
    "question": "XYZ Corp. Annual Stock Returns\n2015 2016 2017 2018 2019 2020\n23% 6% -8% 12% 4% 12%\nWhat is the median return for XYZ stock?",
    "options": {
      "A": "8.2%",
      "B": "9.0%",
      "C": "12.0%."
    },
    "answer": "B",
    "explanation": "To find the median, rank the returns in order and take the middle value: -8%, 4%, 6%, 12%, 12%,\n23%. In this case, because there is an even number of observations, the median is the average of the\ntwo middle values, or (6%+ 12 %) / 2 = 9.0%."
  },
  {
    "id": "jc_QM_013",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 13,
    "question": "The following information is available for a portfolio:\nAsset Class Equities (60%) Bonds (40%)\nTime\nFirst year returns 15% 11%\nSecond year returns 11% -5.6%\nThird year returns -13.86% 12%\nThe geometric mean return on the portfolio is closest to: （2019.12考题回顾未改编）",
    "options": {
      "A": "3.9834%",
      "B": "3.5697%",
      "C": "4.5189%."
    },
    "answer": "C",
    "explanation": "The portfolio return is the weighted mean return and is calculated as follows:\n𝑛\n𝑋̅ =∑ 𝑤 𝑋 +𝑤 𝑋 =(15%×60%)+(11%×40%)=13.4%\n1 𝑒1 𝑒1 𝑏1 𝑏1\n𝑖=1\n𝑛\n𝑋̅ =∑ 𝑤 𝑋 +𝑤 𝑋 =(11%×60%)+(−5.6%×40%)=4.36%\n2 𝑒2 𝑒2 𝑏2 𝑏2\n𝑖=1\n𝑛\n𝑋̅ =∑ 𝑤 𝑋 +𝑤 𝑋 =(−13.86%×60%)+(12%×40%)=−3.52%\n3 𝑒3 𝑒3 𝑏3 𝑏3\n𝑖=1\n𝐺𝑒𝑜𝑚𝑒𝑡𝑟𝑖𝑐 𝑚𝑒𝑎𝑛= 𝑁√𝑋 𝑋 𝑋 = 3√(1+13.4%)(1+4.36%)(1−3.52%)−1=0.045189\n1 2 3"
  },
  {
    "id": "jc_QM_014",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 14,
    "question": "A manager invests €5,000 annually in a security for 5 years at the prices shown in the\nfollowing table.(原版书)\nPurchase Price of Security (€)\nYear 1 124.00\nYear 2 152.00\nYear 3 168.00\nYear 4 180.00\nYear 5 184.00\nThe average price paid for the security is closest to:",
    "options": {
      "A": "€ 161.6000",
      "B": "€ 134.1841",
      "C": "€ 158.2971."
    },
    "answer": "C",
    "explanation": "The harmonic mean is appropriate for determining the average price per unit. It is calculated by\nsumming the reciprocals of the prices; then averaging that sum by dividing by the number of prices;\nand finally, taking the reciprocal of the average:\n5/[(1/124.00) + (1/152.00) + (1/168.00) + (1/180.00)+ (1/184.00)] = €158.2971"
  },
  {
    "id": "jc_QM_015",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 15,
    "question": "When evaluating portfolio performance, which return measure is most influenced by\ninjecting additional funds into the portfolio just before a market downturn?",
    "options": {
      "A": "Arithmetic mean return",
      "B": "Geometric mean return",
      "C": "Money-weighted return"
    },
    "answer": "C",
    "explanation": "The money-weighted return, also known as the internal rate of return (IRR), takes into account the\ntiming and size of cash flows into and out of the portfolio. Therefore, if an investor adds funds to\nthe portfolio just before a market downturn, it will have a significant impact on the IRR calculation\nbecause the new funds will be invested at a lower price. In contrast, the arithmetic mean return and\ngeometric mean return do not consider the timing or size of cash flows, and are therefore less\naffected by such events."
  },
  {
    "id": "jc_QM_016",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 16,
    "question": "Which of the following statements is most accurate?（疑似改写题）",
    "options": {
      "A": "The first quintile generally exceeds the median",
      "B": "The first quintile generally exceeds the first quartile",
      "C": "The first quintile generally exceeds the first decile."
    },
    "answer": "C",
    "explanation": "The first quintile is the 20th percentile. The first decile is the 10th percentile, the first quartile is the\n25th percentile, and the median is the 50th percentile. While it is possible that these various\npercentiles or some subsets of them be equal (for example the 10th percentile possibly could be equal\nto the 20th percentile), in general the order from smallest to largest would be: first decile, first\nquintile, first quartile, median."
  },
  {
    "id": "jc_QM_017",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 17,
    "question": "In a sample of 55 observations, if the 27th observation is ranked in ascending order, it\nwould fall into which percentile category?",
    "options": {
      "A": "First quartile",
      "B": "Second quartile",
      "C": "Third quartile"
    },
    "answer": "B",
    "explanation": "B is correct because the 27th observation is located at the 48th percentile;\n;\n𝑦 27×100\n27=(1+55)×( );y=( )=48.21,\n100 1+55\nwhich is in the second quartile. The second quartile includes observations that are above the\n25th percentile and at or below the 50th percentile."
  },
  {
    "id": "jc_QM_018",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 18,
    "question": "The least accurate statement about measures of dispersion for a distribution is that the:",
    "options": {
      "A": "range provides no information about the shape of the data distribution",
      "B": "arithmetic average of the deviations around the mean will be equal to one",
      "C": "mean absolute deviation will be either less than or equal to the standard deviation."
    },
    "answer": "B",
    "explanation": "The arithmetic sum of the deviations around the mean will always equal zero, not one.\nRange does not provide information about the shape of the distribution.\nThe mean absolute deviation will always be less than or equal to the standard deviation."
  },
  {
    "id": "jc_QM_019",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 19,
    "question": "If the risk-free rate is equal to zero and the mean is more than the standard deviation,\ncompared with Sharpe ratio, the coefficient of variation is: （疑似改写题，未改编）",
    "options": {
      "A": "Same",
      "B": "Less",
      "C": "Greater"
    },
    "answer": "B",
    "explanation": "Sharpe ratio = [expected return (mean) – risk-free rate]/standard deviation = mean/standard\ndeviation; CV = standard deviation/expected return. The mean is more than the standard deviation,\nso compared with Sharpe ratio, the coefficient of variation is less."
  },
  {
    "id": "jc_QM_020",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 20,
    "question": "Given the arithmetic mean and the harmonic mean of a series of data are 12% and 10%\nrespectively, the geometric mean of the same data set is:",
    "options": {
      "A": "smaller than 10%",
      "B": "greater than 12%",
      "C": "between 10% to 12%."
    },
    "answer": "C",
    "explanation": "For a data set with non-zero variance, arithmetic mean is higher than geometric mean, which is\nhigher than harmonic mean. Hence the value of the geometric mean will between 12% and 10%.\nThe relation between different types of mean:\nHarmonic Mean≤ Geometric Mean ≤ Arithmetic Mean\nArithmetic mean × Harmonic mean ≈ Geometric mean2"
  },
  {
    "id": "jc_QM_021",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 21,
    "question": "An analyst gathered the following information:\nPortfolio Mean Return (%) Sharpe ratio (%)\n1 10 34\n2 10 37\nIf the risk-free rate of return is 5.0 percent, which portfolio’s coefficient of variation is\nlarger? （2012年12月考题回顾）",
    "options": {
      "A": "Portfolio 1",
      "B": "Portfolio 2",
      "C": "The same"
    },
    "answer": "A",
    "explanation": "Sharpe ratio = [E(R )- r]/σ, based on the Sharpe ratio formula,\np f\nwe can get the σ = [E(R )- r]/Sharpe ratio,\np f\nσ = (10%-5%)/34% = 14.71%,\n1\nσ = (10%-5%)/37% = 13.51%.\n2\nCV = σ/\nX , CV = 14.71%/10% = 1.471, CV = 13.51%/10% = 1.351.\n1 2\nThe portfolio 1’s CV is larger."
  },
  {
    "id": "jc_QM_022",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 22,
    "question": "Consider a sample of four returns for a security:\nAsset Security 1 Security 2 Security 3 Security 4\nReturn 3% 1% -3% -1%\nWhich of the following statements regarding the sample’s mean absolute deviation (MAD)\nand standard deviation (SD) is true?",
    "options": {
      "A": "MAD ＞ SD",
      "B": "MAD ＝ SD",
      "C": "MAD ＜ SD"
    },
    "answer": "C",
    "explanation": "Mean Absolute Deviation (MAD) measures the average distance between each data point and the\nmean of the dataset, reflecting the average magnitude of deviations. In contrast, Standard Deviation\n(SD) measures the dispersion of the dataset by considering the squares of these deviations, which\ntends to give more weight to larger deviations. While all values in this sample are deviations from\nzero, either negative or positive, SD is likely to be higher than MAD. This is due to the squaring of\ndeviations in the calculation of SD, which amplifies larger deviations. In this case, with two negative\ndeviations (-3% and -1%) and two positive deviations (1% and 3%), the squaring process in SD\ncalculation will result in a higher value compared to MAD."
  },
  {
    "id": "jc_QM_023",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 23,
    "question": "One year ago, an analyst expected his one year investment returns would present a normal\ndistribution. However, the actual distribution of one year investment returns had an excess\nkurtosis. Based on the given information, which of following item would be mostly\nundervalued by the analyst one year ago? （1912考题回顾）",
    "options": {
      "A": "The mean return of the one year investment returns",
      "B": "The median return of the one year investment returns",
      "C": "The probability that extreme returns occurs."
    },
    "answer": "C",
    "explanation": "Having an excess kurtosis, the actual distribution of one year investment returns is leptokurtic return\ndistribution. It is more peaked and has fatter tails than the normal distribution, which means more\nextremely large deviations from the mean than a normal distribution and an undervalued probability\nthan extreme returns occurs."
  },
  {
    "id": "jc_QM_024",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 24,
    "question": "Which of the following is most accurate regarding a distribution of returns that has a mean\ngreater than its median?",
    "options": {
      "A": "It is positively skewed",
      "B": "It is a symmetric distribution",
      "C": "It has positive excess kurtosis.（未知题目来源，已改编）"
    },
    "answer": "A",
    "explanation": "A distribution with a mean greater than its median is positively skewed, or skewed to the right. The\nskew pulls the mean. Kurtosis deals with the overall shape of a distribution, not its skewness."
  },
  {
    "id": "jc_QM_025",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 25,
    "question": "When analysing a distribtion, what is the power of the sample skewness and kurtosis\nrespectively? (改编)",
    "options": {
      "A": "4, 3",
      "B": "3, 4",
      "C": "2, 4."
    },
    "answer": "B",
    "explanation": "Sample skewness is measured using deviations raised to the third power.\nSample kurtosis is measured using deviations raised to the fourth power."
  },
  {
    "id": "jc_QM_026",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 26,
    "question": "Equity return series are best described as, for the most part: （未知题目来源，未改编）",
    "options": {
      "A": "platykurtic (less peaked than a normal distribution)",
      "B": "leptokurtic (more peaked than a normal distribution).",
      "C": "mesokurtic (identical to the normal distribution in peakedness)."
    },
    "answer": "B",
    "explanation": "Explain measures of sample skewness and kurtosis.\nMost equity return series have been found to be leptokurtic."
  },
  {
    "id": "jc_QM_027",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 27,
    "question": "An analyst gathered the following information: the probability of economy prosperity is\n80%, the probability of economy recession is 20%. For a company, when the economy is\nprosperity, there is 85% of probability that its EPS is $9.0 and 15% of probability that the\nEPS is $3.0. However, when the economy is recession, there is 10% of probability that\nthe EPS is $9.0 and 90% of probability that the EPS is $3.0. What is the variance of this\ncompany’s EPS, when the economy is prosperity? （疑似改写题，已改编）",
    "options": {
      "A": "6.54",
      "B": "4.59",
      "C": "3.24"
    },
    "answer": "B",
    "explanation": "When the economy prosperity:\nE(EPS) = 85% × 9 + 15% × 3 = 8.1\nVar(EPS) = 85% × (9-8.1)2 + 15% × (3 – 8.1)2 =4.59"
  },
  {
    "id": "jc_QM_028",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 28,
    "question": "A decision tree shows the potential outcomes of a company’s earnings per share\ndepending on two scenarios. Based on the provided probabilities and values, what is the\nexpected earnings per share?\nScenario Probabilities of scenario Earning per share Probabilities of earning\n$12 0.2\n1 0.65\n$10 0.8\n$5 0.6\n2 0.35\n$3 0.4",
    "options": {
      "A": "$6.76",
      "B": "$8.23",
      "C": "$14.60"
    },
    "answer": "B",
    "explanation": "To find the expected earnings per share, multiply each outcome by its probability and add them up.\nUnder the scenario 1, the probability-weighted average is 0.2 * $12 + 0.8 * $10 = $10.4.\nUnder the scenario 2, the probability-weighted average is 0.6 * $5 + 0.4 * $3 = $4.2.\nExpected earnings per share is 0.65 * $10.4 + 0.35 * $4.2=$8.23"
  },
  {
    "id": "jc_QM_029",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 29,
    "question": "The joint probability of the returns of Asset A and Asset B are given in the following\nfigure.\nJoint Probabilities R =0.40 R =0.20\nB1 B2\nR =0.20 0.30 0.20\nA1\nR =0.10 0 0.50\nA2\nThe correlation of returns for Asset A and Asset B is closest to:",
    "options": {
      "A": "0.0030",
      "B": "0.0024",
      "C": "0.6543."
    },
    "answer": "C",
    "explanation": "The expected returns and variance for the individual assets are determined as:\nE(R )=P(R ,R )R +P(R ,R )R =(0.50)(0.20)+(0.50)(0.10) =0.15\nA A1 B A1 A2 B A2\nσ^2(R )= P(R ,R ){ [(R -E(R )] ^2} + P(R ,R ){ [(R -E(R )] ^2 }\nA A1 B A1 A A2 B A2 A\n= (0.50)[(0.20-0.15) ^2]+(0.50)[(0.10-0.15) ^2] =0.0025\nσ(R ) =√𝜎^2(𝑅 ) = √0.0025 = 0.05\nA 𝐴\nE(R )=P(R ,R )R +P(R ,R )R = (0.30)(0.40)+(0.70)(0.20) =0.26\nB B1 A B1 B2 A B2\nσ^2(R )= P(R ,R ){ [(R -E(R )] ^2} + P(R ,R ){ [(R -E(R )] ^2 }\nB B1 A B1 B B2 A B2 B\n= (0.30)[(0.40-0.26) ^2]+(0.70)[(0.20-0.26) ^2] =0.0084\nσ(R ) =√𝜎^2(𝑅 ) = √0.0084 ≈ 0.0917\nB 𝐵\nThe covariance of the asset returns is determined as:\nCov(R ,R )=P(R ,R )[(R -E(R )] [(R -E(R )]+ P(R ,R )[(R -E(R )] [(R -\nA B A1 B1 A1 A B1 B A1 B2 A1 A B2\n(R )]+P(R ,R )[(R -E(R )] [(R -E(R )]\nB A2 B2 A2 A B2 B\n=0.30(0.20-0.15)(0.40-0.26)+ 0.20(0.20-0.15)(0.20-0.26)+0.50(0.10-0.15)(0.20-0.26)=0.003\nThe correlation between two random variables RA and RB is defined as:\nρ(R ,R ) = Cov(R ,R )/[σ(R ) ×σ(R )] = 0.003/(0.05×0.0917) ≈0.6543.\nA B A B A B"
  },
  {
    "id": "jc_QM_030",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 30,
    "question": "The correlation between two variables is +0.3. The most appropriate way to interpret this\nvalue is to say:",
    "options": {
      "A": "a scatter plot of the two variables is likely to show a strong linear relationship",
      "B": "when one variable is above its mean, the other variable tends to be above its mean as well.",
      "C": "a change in one of the variables usually causes the other variable to change in the same"
    },
    "answer": "B",
    "explanation": "Correlation of +0.3 indicates a positive linear relationship between the variables—one tends to be\nabove its mean when the other is above its mean. The value 0.3 indicates that the linear relationship\nis not particularly strong. Correlation does not imply causation."
  },
  {
    "id": "jc_QM_031",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 31,
    "question": "An individual wants to invest $300,000 in the following investment products:\nInvestment Expected Weights Standard\nCorrelation\nproducts Return deviation\nStock 6% 80% 25%\n0.2\nFund 8% 20% 30%\nWhat will be the rate of return and the standard deviation on the expected portfolio?",
    "options": {
      "A": "6.4% and 4.84%",
      "B": "6.4% and 22%.（",
      "C": "6.2% and 4.84%.未知题目来源，已改编）"
    },
    "answer": "B",
    "explanation": "𝐸(𝑋)=∑𝑃 ×𝑋 =80%×6%+20%×8%=6.4%\n𝑖 𝑖\n𝜎2=𝑤2 𝜎2 +𝑤2 𝜎2 +2×𝑤 ×𝑤 ×𝜎 ×𝜎 ×ρ\n𝑝 𝑠𝑡𝑜𝑐𝑘 𝑠𝑡𝑜𝑐𝑘 𝑓𝑢𝑛𝑑 𝑓𝑢𝑛𝑑 𝑠𝑡𝑜𝑐𝑘 𝑓𝑢𝑛𝑑 𝑠𝑡𝑜𝑐𝑘 𝑓𝑢𝑛𝑑 𝑠𝑡𝑜𝑐𝑘,𝑓𝑢𝑛𝑑\n=80%2×25%2+20%2×30%2+2×80%×20%×25%×30%×0.2=4.84%\n𝜎 =√4.84%=22%\n𝑝\nThe rate of return and the standard deviation of portfolio is 6.4% and 22%."
  },
  {
    "id": "jc_QM_032",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 32,
    "question": "An analyst develops the following covariance matrix of returns: （未知题目来源，已改编）\nHedge Fund Market Index\nHedge fund 225 90\nMarket index 90 64\nThe correlation of returns between the hedge fund and the market index is closest to:",
    "options": {
      "A": "0.005",
      "B": "0.75",
      "C": "0.00625."
    },
    "answer": "B",
    "explanation": "The correlation between two random variables R and R is defined as ρ(R,R) =\ni j i j\nCov(R,R)/[σ(R)σ(R)]. Using the subscript i to represent hedge funds and the subscript j to\ni j i j\nrepresent the market index, the standard deviations are σ(R) = 2251/2 = 15 and σ(R) = 641/2 = 8.\ni j\nThus, ρ(R,R) = Cov(R,R)/[σ(R)σ(R)] = 90/(15X8) = 0.75.\ni j i j i j"
  },
  {
    "id": "jc_QM_033",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 33,
    "question": "Professor Irene Wang comes across the following three statements made by his students.\n⚫ Evian: Covariance lies within the range -1 < Covariance < +1\n⚫ Nicholas: The covariance of a stock with itself is equal to its own variance.\n⚫ Alex: The covariance of returns is negative when the return of one asset is above its\nexpected value given that the return on the other asset tends to be below its expected\nvalue.\nThe statements made by which of the students are most likely correct?",
    "options": {
      "A": "Evian and Nicholas",
      "B": "Evian and Alex",
      "C": "Nicholas and Alex."
    },
    "answer": "C",
    "explanation": "Evian is incorrect because covariance may range from negative infinity to positive infinity,\ncorrelation lies within the range of -1 and +1.\nNicholas and Alex are correct."
  },
  {
    "id": "jc_QM_034",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 34,
    "question": "Consider two negatively correlated random variables. Suppose their covariance stays\nconstant while both variances decrease. How will this affect the correlation coefficient\nbetween them?",
    "options": {
      "A": "Increase",
      "B": "Decrease",
      "C": "Stay unchanged"
    },
    "answer": "B",
    "explanation": "The correlation coefficient between two random variables is defined as the ratio of their covariance\nto the product of their standard deviations:\nr = cov(X,Y) / (σX * σY)\nGiven that the negative covariance between X and Y remains constant, if both the variances of X\nand Y decrease, then the denominator of the above equation decreases. As a result, the correlation\ncoefficient r decreases."
  },
  {
    "id": "jc_QM_035",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 35,
    "question": "With Bayes’ formula, it is possible to update the probability for an event given some new\ninformation. Which of the following most accurately represents Bayes’ formula?\n𝑃(𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛|𝐸𝑣𝑒𝑛𝑡)",
    "options": {
      "A": "P(𝐸𝑣𝑒𝑛𝑡|𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛)= P(Event)",
      "B": "P(𝐸𝑣𝑒𝑛𝑡|𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛)= P(Event)",
      "C": "P(𝐸𝑣𝑒𝑛𝑡|𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛)= P(Information)"
    },
    "answer": "A",
    "explanation": "In probability natation, Bayes’ formula can be writtrn concisely as:\n𝑃(𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛|𝐸𝑣𝑒𝑛𝑡)\nP(𝐸𝑣𝑒𝑛𝑡|𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛)= P(Event)\n𝑃(𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛)"
  },
  {
    "id": "jc_QM_036",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 36,
    "question": "An analyst believes Davies Company has a 40% probability of earning more than $2 per\nshare. She estimates that the probability that Davies Company’s credit rating will be\nupgraded is 70% if its earnings per share are greater than $2 and 20% if its earnings per\nshare are $2 or less. Given the information that Davies Company’s credit rating has been\nupgraded, what is the updated probability that its earnings per share are greater than $2?",
    "options": {
      "A": "50%",
      "B": "60%",
      "C": "70%."
    },
    "answer": "C",
    "explanation": "This is an application of Bayes formula. As the tree diagram below shows, the updated probability\nthat earnings per share are greater than $2 is 28%/(28% + 12%)= 70%\n28% upgrade and EPS >$2\n12% no upgrade and EPS > $2\n12% upgrade and EPS < $2\n48% no upgrade and EPS > $2"
  },
  {
    "id": "jc_QM_037",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 37,
    "question": "As from the record of CFA Institute and GARP, the pass-through rate of CFA level I exam\nis 30%, and the pass-through rate of FRM exam is 40%. And as an investigation led by\nthe two institutes, among the people who has passed the FRM, the pass-through rate of\nCFA level 1 exams is 50%. So what is the pass-through rate of FRM members who has\nalso passed the CFA level 1 exam before? （疑似改写题，未改编）",
    "options": {
      "A": "48%",
      "B": "60%",
      "C": "67%"
    },
    "answer": "C",
    "explanation": "P(CFA I|FRM) =50%, P(FRM) = 40%\nP(CFA I and FRM) = P(CFA I|FRM) × P(FRM) = 50% × 40% = 20%\nP(FRM| CFA I)= P(CFA I and FRM)/ P(CFA I )=20%/30%=0.67"
  },
  {
    "id": "jc_QM_038",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 38,
    "question": "An analyst estimates the probability of a stock earning at least a risk-free rate given that\nthe overall portfolio does not give negative returns. This probability is best described as:",
    "options": {
      "A": "a priori",
      "B": "conditional",
      "C": "marginal."
    },
    "answer": "B",
    "explanation": "A probability of an event given (conditioned on) another event is a conditional probability. A priori\nprobability is one that is based on logical analysis. Marginal probability, or unconditional probability,\nis the probability of an event occurring irrespective of other events. In this case, the fact that the\nprobability is “given that the overall portfolio does not give negative returns” means that the\nprobability is affected by other events, and is therefore not unconditional."
  },
  {
    "id": "jc_QM_039",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 39,
    "question": "On 1 January 2014, the value of an investor’s portfolio is $90,000. The investor plans to\ndonate $7,000 to charity organization and pay $3,000 to his insurance account on 31\nDecember 2014, but meanwhile he does not want the year-end portfolio value to be below\n$90,000. If the expected return on the existing portfolio is 14% with a variance of 0.0225,\nthe safety-first ratio that would be used to evaluate the portfolio based on Roy’s criterion\nis closest to:（疑似改写题）",
    "options": {
      "A": "0.193",
      "B": "0.465",
      "C": "0.415."
    },
    "answer": "A",
    "explanation": "Roy’s safety-first criterion states that the optimal portfolio minimizes the probability that the return\nof the portfolio falls below some minimum acceptable level. This minimum acceptable level is\ncalled the “threshold” level. Symbolically, Roy’s safety-first criterion can be stated as: Maximize\nthe SFR where SFR = [E(R ) - R ] / σ\np L p\nWhere: R = portfolio return; R = threshold level return\np L\nR =10,000/90,000=11.11%, SFR = (14%-11.11%)/(0.0225 1/2) =2.89% / 0.15=19.27%\nL"
  },
  {
    "id": "jc_QM_040",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 40,
    "question": "The total number of parameters that fully characterizes a normal distribution is:",
    "options": {
      "A": "3. （2012考题回顾自编）",
      "B": "2",
      "C": "1."
    },
    "answer": "B",
    "explanation": "A normal distribution will have one mean and one variance."
  },
  {
    "id": "jc_QM_041",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 41,
    "question": "The return of a portfolio follows a normal distribution, with its mean return of 13% and\nits standard deviation of 5%. Given the following z-table, the probability that its return\nfalls between 7% and 19% is closest to:（疑似改写题）\nCumulative Probabilities for a Standard Normal Distribution\nP(Z ≤ x) = N(x) for x ≥ 0 or P(Z ≤ z) = N(z) for z ≥ 0\nx or z 0 0.01 0.02 0.03 0.04 0.05 0.06 0.07 0.08 0.09\n1.20 0.8849 0.8869 0.8888 0.8907 0.8925 0.8944 0.8962 0.8980 0.8997 0.9015\n1.30 0.9032 0.9049 0.9066 0.9082 0.9099 0.9115 0.9131 0.9147 0.9162 0.9177\n1.40 0.9192 0.9207 0.9222 0.9236 0.9251 0.9265 0.9279 0.9292 0.9306 0.9319\n1.50 0.9332 0.9345 0.9357 0.9370 0.9382 0.9394 0.9406 0.9418 0.9429 0.9441\n1.60 0.9452 0.9463 0.9474 0.9484 0.9495 0.9505 0.9515 0.9525 0.9535 0.9545\n1.70 0.9554 0.9564 0.9573 0.9582 0.9591 0.9599 0.9608 0.9616 0.9625 0.9633\n1.80 0.9641 0.9649 0.9656 0.9664 0.9671 0.9678 0.9686 0.9693 0.9699 0.9706\n1.90 0.9713 0.9719 0.9726 0.9732 0.9738 0.9744 0.9750 0.9756 0.9761 0.9767\nNotes:For example, to find the z-value leaving 2.5 percent of the area/probability in the upper tail, find\nthe element 0.9750 in the body of the table. Read 1.90 at the left end of the element’s row and 0.06 at the\ntop of the element’s column, to give 1.90+ 0.06= 1.96. (2023-L1V1-Appendix 1)",
    "options": {
      "A": "83.84%",
      "B": "76.98%",
      "C": "93.32%."
    },
    "answer": "B",
    "explanation": "First standardize the value of return for the given normal distribution:\nUsing the property of standard normal distribution,\nP(-1.2 < z < 1.2) = 1 – 2 × P(z > 1.2)=1 – 2 × [1 – P(z ≤ 1.2)] = 1 – 2 × [1 – N(1.2)] = 2 × N(1.2) -\n1\nGiven the z-table, N(1.2) = 0.8849, so P(-1.2 < z < 1.2) = 2 × N(1.2) – 1 = 76.98%"
  },
  {
    "id": "jc_QM_042",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 42,
    "question": "For a standard normal distribution, what is the probability that a random variable lies\nwithin 1 to 2 P(1< 𝐱 <2)?",
    "options": {
      "A": "13.5%",
      "B": "27%",
      "C": "15.5%"
    },
    "answer": "B",
    "explanation": "For a standard normal distribution, the probability that a random variable lies within 1 standard of\nthe mean is about 68%.\nThe probability that a random variable lies within 1.96 standard of the mean is about 95%.\nThe probability that a random variable lies within 1 standard deviation to 2 standard deviation is\nabout 13.5%."
  },
  {
    "id": "jc_QM_043",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 43,
    "question": "Which of the following statements about a normal distribution is most accurate? A normal distribution:",
    "options": {
      "A": "has an excess kurtosis of 3",
      "B": "is partially described by two parameters",
      "C": "can be the linear combination of two or more normal random variables."
    },
    "answer": "B",
    "explanation": "A normal distribution has an excess kurtosis of 0 (kurtosis of 3), is completely described by two\nparameters (mean and variance) and a liner combination of two or more normal random variables\nis also normally distributed."
  },
  {
    "id": "jc_QM_044",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 44,
    "question": "The notation “F (x) = P (X < x)” best describes which of the following?",
    "options": {
      "A": "Cumulative distribution function",
      "B": "Probability density function",
      "C": "Probability function."
    },
    "answer": "A",
    "explanation": "The cumulative distribution function gives the probability that a random variable X is less than or\nequal to a particular value x, P (X < x). For continuous random variables, “the probability function\nis denoted f(x) and called the probability density function (pdf), or just the density”."
  },
  {
    "id": "jc_QM_045",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 45,
    "question": "In contrast to normal distributions, lognormal distributions:",
    "options": {
      "A": "are skewed to the left",
      "B": "have outcomes that cannot be negative",
      "C": "are more suitable for describing asset returns than asset prices."
    },
    "answer": "B",
    "explanation": "(2020原版书)\nBy definition, lognormal random variables cannot have negative values."
  },
  {
    "id": "jc_QM_046",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 46,
    "question": "Continuous compounding refers to an interest rate that compounds continuously over time.\nIf a stock’s continuously compounded return follows a normal distribution, what is the\ndistribution of its future price?",
    "options": {
      "A": "Normal",
      "B": "Uniform",
      "C": "Log-normal"
    },
    "answer": "C",
    "explanation": "If a stock’s continuously compounded return is normally distributed, then its future price will be\nlog-normally distributed due to the nature of compound interest. Log-normal distributions arise\nnaturally in finance when dealing with continuously compounded returns, since compound growth\nleads to a multiplicative process, which follows a log-normal distribution. Thus, option C is the\ncorrect answer.\nOption A is incorrect as normal distributions represent additive processes rather than multiplicative\nones. Option B is incorrect since uniform distributions do not capture the potential positive skewness\nassociated with stock returns."
  },
  {
    "id": "jc_QM_047",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 47,
    "question": "Which of the following is least likely a property of Student’s t-distribution?",
    "options": {
      "A": "As the degrees of freedom get larger, the variance approaches zero",
      "B": "It is defined by a single parameter, the degrees of freedom, which is equal to n-1",
      "C": "It has more probability in the tails and less at the peak than a standard normal distribution."
    },
    "answer": "A",
    "explanation": "As the degrees of freedom get larger, the t-distribution approaches the normal distribution. As the\ndegrees of freedom fall, the peak of the t-distribution flattens and its tails get fatter (more probability\nin the tails—that’s why, all else the same, the critical t increases as the df decreases)."
  },
  {
    "id": "jc_QM_048",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 48,
    "question": "Which of the following statements about the F-distribution and chisquare distribution is\nleast accurate? Both distributions:",
    "options": {
      "A": "are typically asymmetrical",
      "B": "are bounded from below by zero",
      "C": "have means that are less than their standard deviations."
    },
    "answer": "C",
    "explanation": "There is no consistent relationship between the mean and standard deviation of the chi-square\ndistribution or F-distribution."
  },
  {
    "id": "jc_QM_049",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 49,
    "question": "Compared with normal distribution, which of the following statements about t-\ndistribution is the most accurate?（疑似改写题）",
    "options": {
      "A": "It has no difference with normal distribution",
      "B": "Its tails are fatter than the tails of normal distribution",
      "C": "It has less probability in the tails than the normal distribution."
    },
    "answer": "B",
    "explanation": "If the t-distribution and the normal distribution have a same significance level, the tails of the t-\ndistribution are fatter than the tails of normal distribution. As the degrees of freedom increase, the\nt-distribution approaches the standard normal."
  },
  {
    "id": "jc_QM_050",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 50,
    "question": "An analyst stated that as degrees of freedom increase, a t-distribution will become more\npeaked and the tails of the t-distribution will become less fat. Is the analyst’s statement\ncorrect with respect to the t-distribution:（疑似早年原版题原版书R10-21)\nBecoming more peaked? Tails becoming less\nfat?",
    "options": {
      "A": "No Yes",
      "B": "Yes No",
      "C": "Yes Yes"
    },
    "answer": "C",
    "explanation": "As degrees of freedom increase, the t-distribution will more closely resemble a normal distribution,\nbecoming more peaked and having less fat tails."
  },
  {
    "id": "jc_QM_051",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 51,
    "question": "A Monte Carlo simulation can be used to: (2020原版书)",
    "options": {
      "A": "directly provide precise valuations of call options",
      "B": "simulate a process from historical records of returns",
      "C": "test the sensitivity of a model to changes in assumptions."
    },
    "answer": "C",
    "explanation": "A characteristic feature of Monte Carlo simulation is the generation of a large number of random\nsamples from a specified probability distribution or distributions to represent the role of risk in the\nsystem."
  },
  {
    "id": "jc_QM_052",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 52,
    "question": "Which of the following statements about Monte Carlo simulation is least likely true?",
    "options": {
      "A": "Monte Carlo simulation is an analytical method",
      "B": "Monte Carlo simulation involves the use of a computer to represent the operation of a complex financial system.",
      "C": "Monte Carlo simulation is based on the repeated generation of one or more risk factors that affect security values."
    },
    "answer": "A",
    "explanation": "Monte Carlo simulation is a statistical method, not an analytical method.\nThe other two statements are correct."
  },
  {
    "id": "jc_QM_053",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 53,
    "question": "A research analyst makes two statements about repeated random sampling:\nStatement 1: When repeatedly drawing large samples from datasets, the sample means are\napproximately normally distributed.\nStatement 2: The underlying population from which samples are drawn must be normally\ndistributed in order for the sample mean to be normally distributed.\nWhich of the following best describes the analyst’s statements?",
    "options": {
      "A": "Statement 1 is false; Statement 2 is true",
      "B": "Both statements are true",
      "C": "Statement 1 is true; Statement 2 is false."
    },
    "answer": "C",
    "explanation": "According to the central limit theorem, Statement 1 is true. Statement 2 is false because the\nunderlying population does not need to be normally distributed in order for the sample mean to be\nnormally distributed."
  },
  {
    "id": "jc_QM_054",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 54,
    "question": "The following sample of 10 items is selected from a normally distributed population. The\npopulation variance is unknown.\n1st 2nd 3rd 4th 5th 6th 7th 8th 9th 10th\n11 21 -7 3 -8 6 0 -7 4 22\nThe standard error of the sample mean is closest to: （15、1706年mock题）",
    "options": {
      "A": "10.89",
      "B": "3.44",
      "C": "3.70."
    },
    "answer": "B",
    "explanation": "Mothed one: When the population variance is unknown, the standard error of the sample mean is\n𝑠\ncalculated as: Standard error=\n√𝑛\nDeviation from Mean Squared Deviation\n(11-4.5) = 6.5 42.25\n(21-4.5) = 16.5 272.25\n(–7 -4.5) = –11.5 132.25\n(3-4.5) = –1.5 2.25\n(–8 -4.5) = –12.5 156.25\n(6-4.5) = 1.5 2.25\n(0-4.5) = –4.5 20.25\n(-7-4.5) = –11.5 132.25\n(4-4.5) = –0.5 0.25\n(22-4.5) = 17.5 306.25\nTotal 1066.5\nVariance 1066.5/9 = 118.5\nStandard deviation (s): √118.5= 10.89\nThe standard error of the sample mean is: 10.89/100.5=3.44\nMethod two using BAII Plus:\n①2ND, 7, 2ND, CE/C\n②X01=11, X02=21, X03=-7, X04=3, X05=-8, X06=6 ,X07=0, X08=-7, X09=4, X10=22\n③2ND, 8, ↓, s\nx\n=10.8857\n④10.8857/100.5=3.44"
  },
  {
    "id": "jc_QM_055",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 55,
    "question": "Which of the following statements about the Central Limit Theorem is correct?",
    "options": {
      "A": "It assumes that the population must follow a normal distribution for it to apply",
      "B": "It states that the sample variance approaches the population variance as the sample size",
      "C": "It implies that the sample mean tends to converge towards the population mean as the sample"
    },
    "answer": "C",
    "explanation": "The Central Limit Theorem (CLT) states that the sample mean of a sufficiently large number of\nobservations drawn randomly from a population with finite variance will be approximately normally\ndistributed, regardless of the underlying population distribution. The sample size should be large\nenough such that the sampling distribution of the sample mean closely approximates a normal\ndistribution. As a consequence, the CLT implies that the sample mean is a consistent estimator of\nthe population mean as the sample size grows larger.\nOption A is incorrect because it is not a necessary condition for the CLT to hold. Option B is not a\npart of the CLT."
  },
  {
    "id": "jc_QM_056",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 56,
    "question": "An important difference between two-stage cluster sampling and stratified random\nsampling is that compared to stratified random sampling, two-stage cluster sampling:",
    "options": {
      "A": "uses all members of each sub-group (strata)",
      "B": "takes random samples all sub-groups (strata).",
      "C": "will not preserve differences in a characteristic across sub-groups."
    },
    "answer": "C",
    "explanation": "With cluster sampling, the randomly selected subgroups may have different distributions of the\nrelevant characteristic relative to the entire population. Cluster sampling uses only randomly\nselected subgroups, whereas stratified random sampling samples all subgroups to match the\ndistribution of characteristics across the entire population."
  },
  {
    "id": "jc_QM_057",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 57,
    "question": "A sample of 64 observations has a mean of 8. The standard deviation of the sample is 15.\nWhich of the following is the best estimate of the 95% confidence interval for this sample?",
    "options": {
      "A": "4.325 to 11.675",
      "B": "4.906 to 11.094",
      "C": "3.031 to 12.969"
    },
    "answer": "A",
    "explanation": "The standard error of the sample mean, when the sample standard deviation is known, is:\ns\nX\n=\ns\nn\n. In this case, s\nX\n=\n1 5\n6 4\n= 1 .8 7 5 .\nThe reliability factor for a 95% confidence interval with unknown population variance and sample\nsize greater than 30 is\nZ\n0.025\n=1.96.\nThe confidence interval estimate is:\nX  Z\n0.025\n s\nn\n .\nWith sample standard error of 1.875, the estimated confidence interval is:\n8  1 .9 6  1 .8 7 5 = 8  3 .6 7 5"
  },
  {
    "id": "jc_QM_058",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 58,
    "question": "All else held constant, the width of a confidence interval for a population mean is most\nlikely to be smaller if the sample size is: （mock 126）",
    "options": {
      "A": "larger and the degree of confidence is lower",
      "B": "larger and the degree of confidence is higher",
      "C": "smaller and the degree of confidence is lower."
    },
    "answer": "A",
    "explanation": "As the degree of confidence is increased, the confidence interval becomes wider. A larger sample\nsize decreases the width of a confidence interval."
  },
  {
    "id": "jc_QM_059",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 59,
    "question": "Which of the following techniques to improve the accuracy of confidence intervals on a\nstatistic is most computationally demanding?",
    "options": {
      "A": "The jackknife",
      "B": "Systematic resampling",
      "C": "Bootstrapping."
    },
    "answer": "C",
    "explanation": "Bootstrapping, repeatedly drawing samples of equal size from a large data set, is more\ncomputationally demanding than the jackknife. We have not defined \"systematic resampling\" as a\nspecific technique."
  },
  {
    "id": "jc_QM_060",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 60,
    "question": "An analyst considers a large sample size to estimate a population parameter. A larger\nsample size is most likely to improve the estimator’s:",
    "options": {
      "A": "consistency",
      "B": "efficiency",
      "C": "unbiasedness."
    },
    "answer": "A",
    "explanation": "The three desirable properties of an estimator are:\nUnbiasedness: Its expected value is equal to the parameter being estimated.\nEfficiency: It has the lowest variance as compared to other unbiased estimators of the same\nparameter.\nConsistency: As sample size increases, the sampling error decreases and the estimates get closer\nto the actual value.\nUnbiasedness and efficiency are properties that hold for any size sample."
  },
  {
    "id": "jc_QM_061",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 61,
    "question": "An analyst selects random subsamples from an existing dataset multiple times to estimate\nthe standard deviation of a population. This process is called:",
    "options": {
      "A": "Stratified Sampling",
      "B": "Resampling Method",
      "C": "Systematic Sampling"
    },
    "answer": "B",
    "explanation": "Resampling involves randomly selecting different subsets of data points from an existing dataset\nmultiple times to obtain estimates of population characteristics, such as mean and standard deviation,\nwithout making strong assumptions about underlying distributions. One common resampling\ntechnique is Bootstrap Method, which uses repeated random sampling with replacement to generate\nestimates of the variability associated with an estimate.\nIn contrast, Cluster Sampling Method involves dividing a large population into smaller groups\n(clusters) and selecting a sample from each group rather than choosing individual units randomly.\nConvenience Sampling Method selects participants according to availability, accessibility, or\nproximity to the researcher."
  },
  {
    "id": "jc_QM_062",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 62,
    "question": "A sample has less than 30 data selecting from a normal distributed population with known\nvariance. If an analyst wants to test the sample mean, which of the following distribution\nshould be used? （未知来源）",
    "options": {
      "A": "t-student distribution",
      "B": "Z distribution",
      "C": "F distribution"
    },
    "answer": "B",
    "explanation": "For testing a sample mean with a small sample size and known population variance, Z distribution\nshould be used."
  },
  {
    "id": "jc_QM_063",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 63,
    "question": "Assume that the population mean is μ, sample mean is x̅ and sx̅ is the standard error of\nthe sample mean. Which of the following is a condition for rejecting the null hypothesis\nat the 95 percent confidence interval ?",
    "options": {
      "A": "(X̄ – μ ) / s ̅ > 1.96",
      "B": "(X̄ – μ ) > 1.96",
      "C": "μ – X̄ / s > 1.96"
    },
    "answer": "A",
    "explanation": "At 5% level of significance or 95% confidence interval, we calculate the z-values that correspond\nto 0.05/2 = 0.025 level of significance. These are +1.96 and -1.96.\nWe reject the null hypothesis if we find that the test statistic ((̄X̄ – μ ) / s ) is less than -1.96 or\n0 x̅\ngreater than +1.96."
  },
  {
    "id": "jc_QM_064",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 64,
    "question": "Investment analysts often use earnings per share (EPS) forecasts. One test of\nforecasting quality is the zero-mean test, which states that optimal forecasts should\nhave a mean forecasting error of 0. (Forecasting error = Predicted value of variable −\nActual value of variable.)\nPerformance in Forecasting Quarterly Earnings per Share\nMean Forecast Error Standard Deviations of\nNumber of Forecasts\n(Predicted – Actual) Forecast Errors\n100 0.06 0.20\nTo test whether the mean forecasting error is 0, the t-statistic calculated is most likely:",
    "options": {
      "A": "3.015",
      "B": "3.000",
      "C": "0.060."
    },
    "answer": "B",
    "explanation": "The t-test is based on\nt\nX\ns / n\n0\n\n=\n−\n.\nFor this test, we have t =\n0\n0\n.2\n.0\n0\n6\n/\n−\n1\n0\n0 0\n= 3"
  },
  {
    "id": "jc_QM_065",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 65,
    "question": "An analyst conducts a two-tailed test to determine if earnings estimates are significantly\ndifferent from reported earnings. The sample size was over 90. The computed Z-statistic\nis 1.30. Using a 5 percent significant level, which of the following statements is TRUE?",
    "options": {
      "A": "Both the null and the alternative are significant",
      "B": "You cannot determine what to do with the information given",
      "C": "Fail to reject the null hypothesis and conclude that the earnings estimates are not significantly"
    },
    "answer": "C",
    "explanation": "The sample size was over 90, which was more than 30, so z-test is appropriate. Using a 5%\nsignificant level, the critical value of a two-tailed test is 1.96. The z-statistic is 1.30, which is less\nthan 1.96, so the analyst fail to reject null hypothesis."
  },
  {
    "id": "jc_QM_066",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 66,
    "question": "Which of the following statements of null and alternative hypotheses requires a two-tailed test? （13年mock）",
    "options": {
      "A": "H : θ = θ versus H : θ ≠ θ",
      "B": "H : θ ≤ θ versus H : θ > θ",
      "C": "H : θ ≥ θ versus H : θ < θ"
    },
    "answer": "A",
    "explanation": "Define a hypothesis, describe the steps of hypothesis testing, describe and interpret the choice of\nthe null and alternative hypotheses, and distinguish between one-tailed and two-tailed tests of\nhypotheses.\nWhen the null and alternative hypotheses are of the form: H : θ = θ versus H : θ ≠ θ , the correct\n0 0 a 0\napproach is to use a two-tailed test."
  },
  {
    "id": "jc_QM_067",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 67,
    "question": "Consider a two-tailed test of the hypothesis that the population mean is zero. The sample\nhas 50 observations. The population is normally distributed with a known variance.\nt Distribution\nDegree of freedom p=0.10 p=0.05 p=0.025\n49 1.299 1.677 2.010\n50 1.299 1.676 2.009\nz-Distribution α=0.10 α=0.05 α=0.025\n1.645 1.960 2.330\nAt a 0.05 significance level, the rejection points are most likely at:（16/17年mock题）",
    "options": {
      "A": "-2.010 and 2.010",
      "B": "-2.009 and 2.009",
      "C": "-1.960 and 1.960."
    },
    "answer": "C",
    "explanation": "The appropriate test statistic is a z-statistic because the sample comes from a normal distributed\npopulation with known variance. A z-test does not use degrees of freedom. This test is two-sided\nat the 0.05 significance level, and the rejection point conditions are z > 1.960 and z < –1.960."
  },
  {
    "id": "jc_QM_068",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 68,
    "question": "A small-cap growth fund’s monthly returns for the past 36 months have been consistently\noutperforming its benchmark. An analyst is determining whether the standard deviation\nof monthly returns is greater than 5%. Which of the following best describes the\nhypothesis to be tested? （17、18B 年mock题）",
    "options": {
      "A": "𝐻 :σ2 ≤0.25%",
      "B": "𝐻 :σ2 >5%",
      "C": "𝐻 :σ2 ≥0.25%"
    },
    "answer": "A",
    "explanation": "This is a one-tailed hypothesis testing with a “greater than” alternative hypothesis. A squared\nstandard deviation is being used to obtain a test of variance.\nThe hypotheses are 𝐻 :σ2 ≤0.25% versus 𝐻 :σ2 >0.25%\n0 a"
  },
  {
    "id": "jc_QM_069",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 69,
    "question": "Using a two-tailed test of the hypothesis that the population mean is zero, the calculated\ntest statistic is 2.41. The sample has 24 observations. The population is normally\ndistributed with an unknown variance. （17/18A 年mock题）\nDegrees of p = 0.10 p = 0.05 p = 0.025 p = 0.01 p = 0.005\nfreedom\n21 1.323 1.721 2.080 2.518 2.831\n22 1.321 1.717 2.074 2.508 2.819\n23 1.319 1.714 2.069 2.500 2.807\n24 1.318 1.711 2.064 2.492 2.797\nAn analyst will most likely reject the null hypothesis at significance levels of:",
    "options": {
      "A": "0.10, 0.05, and 0.01",
      "B": "0.10 and 0.05",
      "C": "0.10 only."
    },
    "answer": "B",
    "explanation": "This is a two-tailed hypothesis testing because it concerns whether the population mean is zero.\n𝐻 :μ=0 versus 𝐻 :μ≠0\n0 a\nWith degrees of freedom (df) = n – 1 = 24 – 1 = 23, the rejection points are as follows:\nSignificance level Rejection points for t-test\n0.10 t < –1.714 and t > 1.714\n0.05 t < –2.069 and t > 2.069\n0.01 t < –2.807 and t > 2.807\nBecause the calculated test statistic is 2.41, the null hypothesis is thus rejected at the 0.05 and 0.10\nlevels of significance but not at 0.01."
  },
  {
    "id": "jc_QM_070",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 70,
    "question": "The value of a test statistic is best determined as the difference between the sample\nstatistic and the value of the population parameter under H divided by the:\n0",
    "options": {
      "A": "appropriate value from the t-distribution",
      "B": "standard error of the sample statistic",
      "C": "sample standard deviation."
    },
    "answer": "B",
    "explanation": "A test statistic is determined by the following formula:\nt\nx\ns /\n0\nn\n\n=\n−"
  },
  {
    "id": "jc_QM_071",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 71,
    "question": "In setting the confidence interval for the population mean of a normal or approximately\nnormal distribution and given that the sample size is small, Student’s t-distribution is the\npreferred approach when the variance is:",
    "options": {
      "A": "large",
      "B": "known",
      "C": "unknown. （13、15、1706、18C 年mock）"
    },
    "answer": "C",
    "explanation": "Describe the properties of Student’s t-distribution and calculate and interpret its degrees of\nfreedom.\nWhen the sample size is small, the Student’s t-distribution is preferred if the variance is unknown."
  },
  {
    "id": "jc_QM_072",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 72,
    "question": "Jill Batten is analyzing how the returns on the stock of Stellar Energy Corp. are related\nwith the previous month’s percent change in the US Consumer Price Index for Energy\n(CPIENG). Based on 248 observations, she has computed the sample correlation between\nthe Stellar and CPIENG variables to be −0.1452. She also wants to determine whether the\nsample correlation is statistically significant. The critical value for the test statistic at the\n0.05 level of significance is approximately 1.96. Batten should conclude that the statistical\nrelationship between Stellar and CPIENG is: (原版书课后题)",
    "options": {
      "A": "significant, because the calculated test statistic has a lower absolute value than the critical value",
      "B": "significant, because the calculated test statistic has a higher absolute value than the critical value",
      "C": "not significant, because the calculated test statistic has a higher absolute value than the critical"
    },
    "answer": "B",
    "explanation": "The calculated test statistic is:\n𝑟√𝑛−2 −0.1452√248−2\nt= = =−2.30177\n√1−𝑟2 √1−(−0.1452)2\nBecause the absolute value of t = −2.30177 is greater than 1.96, the correlation coefficient is\nstatistically significant."
  },
  {
    "id": "jc_QM_073",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 73,
    "question": "When testing whether a population mean is significantly different from zero, what should\nbe the alternative hypothesis formulation?",
    "options": {
      "A": "H : μ < 0",
      "B": "H :μ≠0",
      "C": "H : μ > 0"
    },
    "answer": "B",
    "explanation": "To test whether the population mean is different from zero, the alternative hypothesis must specify\nthat the mean is different from zero. The symbol “≠” indicates that the researcher wants to show\nthat the population mean is significantly different from zero."
  },
  {
    "id": "jc_QM_074",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 74,
    "question": "When comparing the means of two normally distributed populations, what test statistic\nshould be used in a hypothesis test?",
    "options": {
      "A": "t-statistic",
      "B": "F-statistic",
      "C": "Chi-square statistic"
    },
    "answer": "A",
    "explanation": "When conducting a hypothesis test involving the comparison of two normally distributed\npopulations’ means, the t-statistic is typically used. It relies on the differences between group\nmeans, variances, and sample sizes."
  },
  {
    "id": "jc_QM_075",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 75,
    "question": "A two-tailed test of the null hypothesis that the mean of a distribution is equal to 4.00 has\na p-value of 0.0567. Using a 5% level of significance (i.e., α = 0.05), the best conclusion\nis to: （18Mock MS Q24）",
    "options": {
      "A": "fail to reject the null hypothesis",
      "B": "increase the level of significance to 5.67%",
      "C": "reject the null hypothesis."
    },
    "answer": "A",
    "explanation": "The p-value is the smallest level of significance at which the null hypothesis can be rejected. The\nsmaller the p-value, the stronger the evidence against the null hypothesis. Because the p-value\n(0.0567) exceeds the stated level of significance (0.05), the null hypothesis cannot be rejected.\nA 5% confidence level does not allow the significance level to be increased beyond 5%."
  },
  {
    "id": "jc_QM_076",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 76,
    "question": "The null hypothesis of a two-tailed test is least likely to be rejected when the p-value of\nthe test statistic:",
    "options": {
      "A": "exceeds a specified level of significance",
      "B": "falls below half of a specified level of significance",
      "C": "falls below a specified level of significance."
    },
    "answer": "A",
    "explanation": "If the p-value is less than the specified level of significance, the null hypothesis is rejected.\nDefinetion of p-value: the smallest level of significance at which the null hypothesis can be reject."
  },
  {
    "id": "jc_QM_077",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 77,
    "question": "All else being equal, if the probability that fail to reject the null hypothesis when it’s\nactually false increases, how about the width of confidence interval?",
    "options": {
      "A": "Increase",
      "B": "Decrease",
      "C": "No change"
    },
    "answer": "A",
    "explanation": "When the probability of Type II error increase, the probability of Type I error will decrease, which\nmeans that the significance level (α) will decrease. So the width of confidence interval will increase."
  },
  {
    "id": "jc_QM_078",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 78,
    "question": "What term describes the probability of correctly rejecting a false null hypothesis?",
    "options": {
      "A": "Significance level",
      "B": "Power of test",
      "C": "Confidence interval width"
    },
    "answer": "B",
    "explanation": "The power of a statistical test measures the probability of correctly rejecting a false null hypothesis.\nIn other words, it is the probability of obtaining statistically significant results when an alternative\nhypothesis is true.\nSignificance level (option A) is the probability of rejecting a null hypothesis when it is actually true\n(Type I error).\nConfidence interval width (option C) refers to the range of values within which the population\nparameter is likely to fall with a certain degree of confidence."
  },
  {
    "id": "jc_QM_079",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 79,
    "question": "In hypothesis testing, which of the following best describes a Type II error?",
    "options": {
      "A": "Rejecting a true null hypothesis",
      "B": "Rejecting a false null hypothesis",
      "C": "Failure to reject a false null hypothesis"
    },
    "answer": "C",
    "explanation": "A is incorrect because if we mistakenly reject the null hypothesis, we can only be making a Type I\nerror.\nB is incorrect because rejecting a false null hypothesis is a correct decision and therefore not a Type\nII error.\nC is correct because, when we make a decision in a hypothesis test, we run the risk of making either\na Type I or a Type II error. These are mutually exclusive errors: If we mistakenly reject the null\nhypothesis, we can only be making a Type I error; if we mistakenly fail to reject the null, we can\nonly be making a Type II error."
  },
  {
    "id": "jc_QM_080",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 80,
    "question": "An analyst wants to test whether the samples were drawn from a Chi-square distribution\nor not, he should choose a/an:",
    "options": {
      "A": "T-test",
      "B": "χ2-test",
      "C": "nonparametric test."
    },
    "answer": "C",
    "explanation": "The test of the shape of sampling distribution is a test not concerning a parameter, therefore, a\nnonparametric test is more suitable."
  },
  {
    "id": "jc_QM_081",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 81,
    "question": "A contingency table can be used to test:",
    "options": {
      "A": "a null hypothesis that rank correlations are equal to zero",
      "B": "whether multiple characteristics of a population are independent",
      "C": "the number of p-values from multiple tests that are less than adjusted critical values."
    },
    "answer": "B",
    "explanation": "A contingency table is used to determine whether two characteristics of a group are independent."
  },
  {
    "id": "jc_QM_082",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 82,
    "question": "A non-parametric test of independence for data in a contingency table with 6 rows and 8\ncolumns is based on a chi-squared distribution. How many degrees of freedom does this\ntest statistic have?",
    "options": {
      "A": "14",
      "B": "35",
      "C": "48"
    },
    "answer": "B",
    "explanation": "For a contingency table with 6 rows and 8 columns, the degrees of freedom would be (6-1)*(8-1)\n= 35."
  },
  {
    "id": "jc_QM_083",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 83,
    "question": "In a study investigating the relationship between two variables using parametric tests,\nsuppose we obtained a sample size of n=66 and a sample correlation coefficient r=0.5.\nThe t-statistic is likely to be closer to:",
    "options": {
      "A": "0.05",
      "B": "4.62",
      "C": "5.66"
    },
    "answer": "B",
    "explanation": "A is incorrect because this is the result if the positions of √(1 – r2) and √(n – 2) are swapped, i.e.\nthe formula used is r√(1 – r2) / √(n – 2) = (0.5)√(1 – 0.25) / √(66 – 2) = (0.5)(0.75)/8 = 0.046875 ≈\n0.05.\nB is correct because for a Parametric Test of a Correlation if the two variables are normally\ndistributed, we can test to determine whether the null hypothesis (H0: ρ = 0) should be rejected\nusing the sample correlation, r. The formula for the t-test is\nr√(n – 2) / √(1 – r2)\" = (0.5)√(66 – 2) / √(1 – 0.25) = (0.5)(8)/0.86603 = 4.62.\nC is incorrect because this is the result if the r in the denominator is not squared, i.e.\nr√(n – 2) / √(1 – r) = (0.5)√(66 – 2) / √(1 – 0.5) = (0.5)(8)/0.70711 = 5.6568 ≈ 5.66."
  },
  {
    "id": "jc_QM_084",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 84,
    "question": "For a dataset with 50 observations, which scenario suggests parametric tests would likely\nperform better than non-parametric tests?",
    "options": {
      "A": "The data come from a skewed population",
      "B": "The data contain ties",
      "C": "The data follow a normal distribution."
    },
    "answer": "C",
    "explanation": "Nonparametric tests assume little about the underlying population distribution and therefore are\ngenerally robust against departures from normality. However, when the data comes from a\nnormally distributed population, parametric tests such as t-tests, ANOVA, etc. are preferred since\nthey are usually more powerful and easier to interpret compared to nonparametric tests. Outliers\nand ties do not necessarily rule out the possibility of performing a parametric test; however, they\nmay lead to larger standard errors and reduced power, respectively.\nIn this context, the presence of outliers, ties, and skewness can still allow for the usage of non-\nparametric tests depending on the nature of the study. On the other hand, if the data follow a\nnormal distribution, parametric tests are often preferred."
  },
  {
    "id": "jc_QM_085",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 85,
    "question": "Which of the following is least likely a necessary assumption of simple linear regression\nanalysis?",
    "options": {
      "A": "The residuals are normally distributed",
      "B": "There is a constant variance of the error term.",
      "C": "The dependent variable is uncorrelated with the residuals."
    },
    "answer": "C",
    "explanation": "The model does not assume that the dependent variable is uncorrelated with the residuals. It does\nassume that the independent variable is uncorrelated with the residuals."
  },
  {
    "id": "jc_QM_086",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 86,
    "question": "What is the most appropriate interpretation of a slope coefficient estimate of 10.0?",
    "options": {
      "A": "The predicted value of the dependent variable when the independent variable is zero is 10.0",
      "B": "For every one unit change in the independent variable, the model predicts that the dependent",
      "C": "For every 1-unit change in the independent variable, the model predicts that the dependent"
    },
    "answer": "B",
    "explanation": "The slope coefficient is best interpreted as the predicted change in the dependent variable for a 1-\nunit change in the independent variable. If the slope coefficient estimate is 10.0 and the independent\nvariable changes by 1 unit, the dependent variable is expected to change by 10 units. The intercept\nterm is best interpreted as the value of the dependent variable when the independent variable is equal\nto zero."
  },
  {
    "id": "jc_QM_087",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 87,
    "question": "Which of the following is statement about a linear regression model is least accurate?",
    "options": {
      "A": "It computes the best fit line through the scatter plot",
      "B": "The best fit is the line with the smallest distance between itself and each point on the scatter",
      "C": "The regression line should pass through all points on the scatter plot."
    },
    "answer": "C",
    "explanation": "The regression line may pass through some points, but not through all of them."
  },
  {
    "id": "jc_QM_088",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 88,
    "question": "An analyst is researching the relationship between Gross National Product (GNP) growth\nand stock market returns in a certain country. Specifically, she is interested in whether\neconomic growth affects equity returns in the same period. She intends to use yearly data\non GNP growth and returns on a broad stock market index in that country over a 20-year\nperiod.\nWhich of the following statements is most likely to be inaccurate about her model?",
    "options": {
      "A": "The dependent variable is yearly index returns",
      "B": "The independent variable is GNP growth",
      "C": "The variation in yearly GNP growth is being explained by the variation in index returns."
    },
    "answer": "C",
    "explanation": "The variation in index returns is being explained by the variation in yearly GNP growth."
  },
  {
    "id": "jc_QM_089",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 89,
    "question": "Bill Coldplay, CFA, is analyzing the performance of the Vigorous Growth Index Fund\n(VIGRX) over the past three years. The fund employs a passive management investment\napproach designed to track the performance of the MSCI US Prime Market Growth Index,\na broadly diversified index of growth stocks of large U.S. companies. Coldplay estimates\na regression using excess monthly returns on VIGRX (exVIGRX) as the dependent\nvariable and excess monthly returns on the S&P 500 Index (exS&PSOO) as the\nindependent variable. The data are expressed in decimal terms (e.g., 0.03, not 3%).\n𝐞𝐱𝐕𝐈𝐆𝐑𝐗 =𝒃 +𝒃 (𝐞𝐱𝐒&𝐏𝟓𝟎𝟎 )+𝜺\n𝒕 𝟎 𝟏 𝐭 𝐭\nResults from that analysis are presented in the following figures.\nCritical t-values, level of significance of 0.01: One-sided,right side: +2.4411\nEstimated Coefficients\nCoefficients Coefficient Estimate Standard Error\n𝒃 0.0023 0.0022\n𝟎\n𝒃 1.1163 0.0624\n𝟏\nPartial ANOVA Table\nSource of Variation Sum of Squares\nRegression (explained) 0.0228\nError (unexplained) 0.0024\nColdplay would like to test the following hypothesis:𝑯 :𝒃 ≤𝟏versus 𝑯 :𝒃 >𝟏at the\n𝟎 𝟏 𝟏 𝟏\n1 % significance level. The calculated t-statistic and the appropriate conclusion are:\nCalculated t-statistic Appropriate conclusion",
    "options": {
      "A": "1.86 Reject 𝑯",
      "B": "1.86 Fail to reject 𝑯",
      "C": "2.44 Reject 𝑯"
    },
    "answer": "B",
    "explanation": "Note that this is a one-tailed test. The critical one-tailed 1 % t-statistic with 34 degrees of freedom\nis approximately 2.44. The calculated t-statistic for the slope coefficient is (1.1163 - 1) / 0.0624 =\n1.86. Therefore, the slope coefficient is not statistically different from one at the 1 % significance\nlevel and Coldplay should fail to reject the null hypothesis."
  },
  {
    "id": "jc_QM_090",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 90,
    "question": "Bill Coldplay, CFA, is analyzing the performance of the Vigorous Growth Index Fund\n(VIGRX) over the past three years. The fund employs a passive management investment\napproach designed to track the performance of the MSCI US Prime Market Growth Index,\na broadly diversified index of growth stocks of large U.S. companies. Coldplay estimates\na regression using excess monthly returns on VIGRX (exVIGRX) as the dependent\nvariable and excess monthly returns on the S&P 500 Index (exS&PSOO) as the\nindependent variable. The data are expressed in decimal terms (e.g., 0.03, not 3%).\n𝐞𝐱𝐕𝐈𝐆𝐑𝐗 =𝒃 +𝒃 (𝐞𝐱𝐒&𝐏𝟓𝟎𝟎 )+𝜺\n𝒕 𝟎 𝟏 𝐭 𝐭\nResults from that analysis are presented in the following figures.\nEstimated Coefficients\nCoefficients Coefficient Estimate Standard Error\n𝒃 0.0023 0.0022\n𝟎\n𝒃 1.1163 0.0624\n𝟏\nPartial ANOVA Table\nSource of Variation Sum of Squares\nRegression (explained) 0.0228\nError (unexplained) 0.0024\nThe 𝑹𝟐from the regression is closest to:",
    "options": {
      "A": "0.095",
      "B": "0.295",
      "C": "0.905."
    },
    "answer": "C",
    "explanation": "SST is equal to the sum of RSS and SSE: 0.0228 + 0.0024 = 0.0252. R2 = RSS /SST= 0.0228 /\n0.0252 = 0.905"
  },
  {
    "id": "jc_QM_091",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 91,
    "question": "Bill Coldplay, CFA, is analyzing the performance of the Vigorous Growth Index Fund\n(VIGRX) over the past three years. The fund employs a passive management investment\napproach designed to track the performance of the MSCI US Prime Market Growth Index,\na broadly diversified index of growth stocks of large U.S. companies. Coldplay estimates\na regression using excess monthly returns on VIGRX (exVIGRX) as the dependent\nvariable and excess monthly returns on the S&P 500 Index (exS&PSOO) as the\nindependent variable. The data are expressed in decimal terms (e.g., 0.03, not 3%).\n𝐞𝐱𝐕𝐈𝐆𝐑𝐗 =𝒃 +𝒃 (𝐞𝐱𝐒&𝐏𝟓𝟎𝟎 )+𝜺\n𝒕 𝟎 𝟏 𝐭 𝐭\nResults from that analysis are presented in the following figures.\nEstimated Coefficients\nCoefficients Coefficient Estimate Standard Error 𝒃 0.0023 0.0022\n𝟎\n𝒃 1.1163 0.0624\n𝟏\nPartial ANOVA Table\nSource of Variation Sum of Squares\nRegression (explained) 0.0228\nError (unexplained) 0.0024\nThe standard error of estimate (SEE) is closest to:",
    "options": {
      "A": "0.008",
      "B": "0.014",
      "C": "0.049."
    },
    "answer": "A",
    "explanation": "Because n = 36, and the degrees of freedom for the sum of squared errors (SSE) is n - 2 in simple\nlinear regression, the degrees of freedom for SSE is 34, and the mean squared error is SSE / 34. The\nstandard error of estimate (SEE) is equal to the square root of the mean squared error:\n0.0024\nSEE=√ =0.008\n34"
  },
  {
    "id": "jc_QM_092",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 92,
    "question": "An analyst is exploring the relationship between corporate earnings growth and stock\nreturns. Specifically, he wants to explain the variation that he observes in stock prices by\nusing the variation seen in earnings per share (EPS). He collects the data in the following\nExhibit on EPS revisions and stock price returns for a sample of six companies.\nCompany Stock Returns EPS Growth (𝒀 −𝒀̅)𝟐 (𝑿 −𝑿̅̅̅ )𝟐 (𝒀 −𝒀̅)(𝑿 −𝑿̅̅̅)\n𝒊 𝒊 𝒊 𝒊 𝒊 𝒊 𝒊 𝒊\n(Yi) (Xi)\nA 9.00 4.00 28.44 25.84 27.11\nB 7.00 5.00 53.78 16.67 2994\nC 17.00 9.00 7.11 0.01 (0.22)\nD 23.00 13.00 75.11 15.34 33.94\nE 11.00 9.50 11.11 0.17 (1.39)\nF 19.00 14.00 21.78 24.17 22.94\nSum 86.00 54.50 197.33 82.21 112.33\nMean 14.33 9.08\nS.D. 6.28 4.05\nWhich one of the following computations for the simple linear regression model is least\naccurate?",
    "options": {
      "A": "The slope coefficient for the model is closest to 1.37",
      "B": "The intercept for this regression model is closest to 1.89",
      "C": "The pairwise correlation between Stock Returns and EPS Growth is closest to 0.25."
    },
    "answer": "C",
    "explanation": "The pairwise correlation between Stock Returns and EPS Growth is 0.88. It will be calculated as,\nCorrelation = (112.33 / 5) / (6.28)(4.05) = 0.88\nSlope coefficient and intercept will be calculated as,\nSlope Coefficient = b1 = (112.33 / 82.21) = 1.37\nIntercept = 14.33 – 1.37 × 9.08 =1.89"
  },
  {
    "id": "jc_QM_093",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 93,
    "question": "An analyst estimates a simple linear time-series model by regressing revenues of a\ncompany against time measured in years. He plots the company’s observed revenues and\nthe estimated regression line, as shown in Exhibit 1. He also plots the residuals from this\nregression model, as shown in Exhibit 2. Which of the following seems least likely when studying the patterns seen in Exhibits 1\nand 2?",
    "options": {
      "A": "The correct model is linear as reflected in the pattern of the revenues",
      "B": "There seems to be potential heteroskedasticity",
      "C": "Lack of independence of observations could also be an issue with this model."
    },
    "answer": "A",
    "explanation": "The correct model is not linear, as evident from the pattern of the revenues in Exhibit 1."
  },
  {
    "id": "jc_QM_094",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 94,
    "question": "You are examining the results of a regression estimation that attempts to explain the return\non equity of a company based on the variations in asset turnover. The analysis of variance\noutput for the regression is given in the following table. The regression was based on five\nobservations (n = 5).\nANOVA Table for Return of Equity Regressed Against Asset Turnover\nSource df Sum of Squares Mean Square F p-value\nRegression 1 95 95 31.4922 0.0112\nTesidual 3 9.1 3.0166\nTotal 4 104.1\nBased on the data shown in the ANOVA table, which of the following conclusions is least\naccurate?",
    "options": {
      "A": "The sample variance of the dependent variable would be 26.025",
      "B": "The standard error of the estimate 4.5",
      "C": "The calculated value of the F-statistic is 31.4922. The corresponding p-value is less than 0.05,"
    },
    "answer": "B",
    "explanation": "The standard error of estimate (SEE) = 3.0166^0.5 =1.7368\nThe sample variance of the dependent variable is the sum of squares total divided by its degrees of\nfreedom (n − 1 = 5 − 1 = 4, as given). Thus, the sample variance of the dependent variable is 104.1\n÷ 4 = 26.025."
  },
  {
    "id": "jc_QM_095",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 95,
    "question": "Which of the following factors is least desirable when selecting a correct functional form\nfor a regression model?",
    "options": {
      "A": "High R2",
      "B": "Low F-stat",
      "C": "low SEE"
    },
    "answer": "B",
    "explanation": "High F-Stat is better."
  },
  {
    "id": "jc_QM_096",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 96,
    "question": "From conducting a simple linear regression analysis, an analyst obtains the following\nresults:\nCoefficient of determination (R^2) 0.9\nSum of squared regression 90\nNumbers of observations 50\nWhat is the standard error of estimate?",
    "options": {
      "A": "432.07",
      "B": "0.46",
      "C": "0.21"
    },
    "answer": "B",
    "explanation": "A is incorrect because it is the F-statistic calculated as MSR / MSE; 90 / 0.2083 = 432.0691. For a\nsimple linear regression, the F-Statistic is MSR divided by MSE, where the mean square regression\n(MSR) is the same as the sum of squares regression [SSR] and the mean square error (MSE) is\ncalculated as the sum of squares error (SSE) adjusted by its degrees of freedom, SSE / (n – 2); 10 /\n(50 – 2) = 0.2083. R^2=SSR/(SSR+SSE)=90/(90+SSE)=0.9, So, SSE is 10.\nB is correct because it is the standard error of the estimate calculated as the square root of the mean\nsquare error; (0.2083)0.5 = 0.4564. The mean square error (MSE) is calculated as SSE / (n – 2); 10\n/ (50 – 2) = 0.2083, where SSE is calculated as R^2=SSR/(SSR+SSE), 90/(90+SSE)=0.9, So, SSE\nis 10.\nC is incorrect because it is the mean square error (MSE) calculated as SSE / (n – 2), where SSE is\nthe sum of squares error; 10 / (50 – 2) = 0.2083."
  },
  {
    "id": "jc_QM_097",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 97,
    "question": "Evian Wang, an analyst of Golden Future, runs a regression analysis using monthly stock\n(601857) returns of China National Petroleum Corporation as the dependent variable and\nthe monthly change in China-Automobile Health Index (C-AHI) as the independent\nvariable. The following table displays the results of this regression model.\nRegression Statistics\nCoefficients Standard error t-statistic\nIntercept 0.0138 0.0046 3.0275\nC-AHI (%) -0.6486 0.2818 -2.3014\nBased on the regression, if the C-AHI decreases by 1.0%, the monthly stock return of\nChina National Petroleum Corporation during the next period is closest to:",
    "options": {
      "A": "0.0073 (0.73%)",
      "B": "0.0138 (1.38%)",
      "C": "0.0203 (2.03%)."
    },
    "answer": "C",
    "explanation": "From the regression equation, expected return = 0.0138 + (−0.6486 × −0.01) = 0.0138 + 0.006486\n= 0.0203, or 2.03%."
  },
  {
    "id": "jc_QM_098",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 98,
    "question": "Elena Vasileva recently joined EnergyInvest as a junior portfolio analyst. Vasileva’s\nsupervisor asks her to evaluate a potential investment opportunity in Amtex, a\nmultinational oil and gas corporation based in the United States. Vasileva’s supervisor\nsuggests using regression analysis to examine the relation between Amtex shares and\nreturns on crude oil.\nVasileva runs a regression of Amtex share returns on crude oil returns using the monthly\ndata she collected. Selected regression output is presented in Exhibit 1. She uses a 1%\nlevel of significance in all her tests.\nVasileva expects the crude oil return next month, Month 37, to be −0.01. She computes\nthe standard error of the forecast to be 0.0469.\nExhibit 1 Selected Data for Crude Oil Returns and Amtex Share Returns\nCoefficient Standard Error\nIntercept 0.0095 0.0078 Oil return 0.2354 0.0760\nCritical t-values for a 1% level of significance:\nOne-sided, left side: −2.441\nOne-sided, right side: +2.441\nTwo-sided: ±2.728\nUsing information from Exhibit 2, the 99% prediction interval for Amtex share return for\nMonth 37 is best described as:",
    "options": {
      "A": "𝑌̂ ±0.0053",
      "B": "𝑌̂ ±0.0469",
      "C": "𝑌̂ ±0.1279"
    },
    "answer": "C",
    "explanation": "Confidence interval estimate: 𝒀̂±(𝒕 ×𝑺 )\n𝒄 𝒇\nIn the 1% significance level of two tailed test, the value of t statistic is 2.728. So 𝒕 =2.728. the\n𝒄\nstandard error of the forecast(𝑺 ) is 0.0469.\n𝒇\n𝒕 ×𝑺 =2.728×0.0469=0.1279\n𝒄 𝒇"
  },
  {
    "id": "jc_QM_099",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 99,
    "question": "FinTech can be defined in a general way as:",
    "options": {
      "A": "The application of technology to traditional banking and financial activities",
      "B": "Use of big data analytics to improve decision-making in financial markets",
      "C": "Automation of investment processes through machine learning techniques."
    },
    "answer": "A",
    "explanation": "FinTech, short for Financial Technology, refers to technological advancements in financial services\nand products designed to enhance user experience, reduce costs, and create new business\nopportunities. It encompasses various technologies like artificial intelligence, blockchain, cloud\ncomputing, mobile payments, robo-advisors, etc., used in banking and financial services. While\noptions B and C are subsets of FinTech applications, they do not capture its full scope. Option A\naccurately describes FinTech’s overall definition in its broadest sense."
  },
  {
    "id": "jc_QM_100",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 100,
    "question": "To identify changes in sentiment within an analyst’s report, which technique is commonly\nemployed?",
    "options": {
      "A": "Tokenization",
      "B": "Data processing",
      "C": "Natural language processing"
    },
    "answer": "C",
    "explanation": "Sentiment analysis is a natural language processing technique that helps extract subjective\ninformation, such as emotions or opinions, from text data. It involves analyzing the use of words\nand phrases in the text to understand whether it reflects positive, negative, or neutral sentiment\ntowards a particular topic or entity. Therefore, it can be used to detect changes in sentiment in an\nanalyst’s commentary, where understanding the tone and attitude towards a company, product, or\nevent is crucial for investors."
  },
  {
    "id": "jc_QM_101",
    "source": "JC_QM",
    "subject": "数量分析",
    "subjectEn": "Quantitative Methods",
    "num": 101,
    "question": "Machine learning models can fail to make accurate predictions due to:",
    "options": {
      "A": "Overfitting the model, but not under-fitting the model",
      "B": "Under-fitting the model, but not overfitting the model",
      "C": "Both overfitting and underfitteed the model. 2024BT.2.1.23  Solutions 1. Quantitative"
    },
    "answer": "C",
    "explanation": "Overfitting occurs when a machine learning model becomes too complex and performs poorly when\napplied to new data outside the training set. Underfitting happens when a model fails to capture the\nunderlying trend in data, leading to poor performance even within the training set. Thus, either\noverfitting or underfitting can cause a machine learning model to fail in predicting outcomes\naccurately. To prevent these issues, practitioners use techniques such as regularization, cross-\nvalidation, feature selection, etc., ensuring the model has enough complexity to capture relevant\npatterns but remains generalizable to new inputs."
  },
  {
    "id": "jc_ETH_001",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 1,
    "question": "Which of the following statements is least accurate about Code of ethics?",
    "options": {
      "A": "The shared principles and expected behaviors of a profession’s members",
      "B": "The general guide for how community members should act",
      "C": "The benchmarks for the minimally acceptable behavior"
    },
    "answer": "C",
    "explanation": "Code of ethics serves as a general guide for how community members should act and the Code is\nthe shared principles and expected behaviors of a profession’s members. Standards of conduct\nserve as benchmarks for the minimally acceptable behavior of community members and can help\nclarify the code of ethics."
  },
  {
    "id": "jc_ETH_002",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 2,
    "question": "The following choices describe the importance of trust except:",
    "options": {
      "A": "Since the nature of investment products and services is intangible, trust is essential to the increase of investment willing.",
      "B": "Trust can be replaced by laws since laws are always the best mechanism to reduce unethical",
      "C": "Trust is the very foundation of the relationship between investors and investment managers. 10.2. The Process for the Enforcement of the Code and Standards"
    },
    "answer": "B",
    "explanation": "The law is not always the best mechanism to reduce unethical behavior. Ethical conduct goes\nbeyond what is legally required and encompasses what different societal groups or communities,\nincluding professional associations, consider to be ethically correct behavior."
  },
  {
    "id": "jc_ETH_003",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 3,
    "question": "From the point of view of an investor, unethical behavior by investment professionals\ncan most likely lead to which of the following?",
    "options": {
      "A": "Increased willingness to accept risk",
      "B": "Rise in the demand for investments",
      "C": "Demand for a higher return"
    },
    "answer": "C",
    "explanation": "Unethical behavior erodes and destroys trust. Investors with low levels of trust are less willing to\naccept risk and, therefore, will likely demand a higher return for the use of their capital. They may\nalso choose to invest elsewhere or to not invest at all."
  },
  {
    "id": "jc_ETH_004",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 4,
    "question": "Which of the following is not a component of the CFA Institute Code of Ethics?",
    "options": {
      "A": "Place the integrity of the investment profession and the interests of clients above your own",
      "B": "Practice and encourage others to practice in a professional and ethical manner that will reflect",
      "C": "Promote financial integrity and seek to prevent and punish abuses in the financial markets"
    },
    "answer": "C",
    "explanation": "Punishing abuse in the financial markets is not one of the six components of the Code of Ethics."
  },
  {
    "id": "jc_ETH_005",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 5,
    "question": "Giddings, CFA, is an equity trader at Global Investment Bank (GB). Giddings traded\nthe bank’s investment portfolio profitably for the past five years and earned significant\nbonuses for his efforts. Subsequently, internal auditors of GB formally accused\nGiddings of exceeding his trading authority and engaging in unauthorized trades.\nAccording to the CFA Institute Code of Ethics and Standards of Professional Conduct,\nGiddings should most likely:",
    "options": {
      "A": "disclose the complaint to CFA Institute",
      "B": "refuse further bonuses until the issue is resolved",
      "C": "request a temporary suspension of his CFA Institute membership"
    },
    "answer": "A",
    "explanation": "As members and candidates must self-disclose on the annual Professional Conduct Statement all\nmatters that question their professional conduct, such as involvement in civil litigation or a\ncriminal investigation or being the subject of a written complaint."
  },
  {
    "id": "jc_ETH_006",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 6,
    "question": "An analyst in a rating agency has been accused of violations of Codes and Standards.\nHowever, he refuses the charges and does not accept the proposed sanctions. Which of\nthe parties has the responsibility of dealing with this matter?",
    "options": {
      "A": "The hearing panel",
      "B": "The CFA institute board of governors",
      "C": "Professional Conduct Program."
    },
    "answer": "A",
    "explanation": "The hearing panel’s task is to determine whether a violation of the Code and Standards occurred\nand, if so, what sanction should be imposed.\nThe Professional Conduct staff may conclude the inquiry with no disciplinary sanction, issue a\ncautionary letter, or continue proceedings to discipline the member or candidate. The CFA institute\nboard of governors maintains oversight and responsibility for the Professional Conduct Program\n(PCP), which, in conjunction with the Disciplinary Review Committee (DRC), is responsible for\nenforcement of the Code and Standards."
  },
  {
    "id": "jc_ETH_007",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 7,
    "question": "Which of the following groups is most likely responsible for maintaining oversight and\nresponsibility for the Professional Conduct Program (PCP)?",
    "options": {
      "A": "CFA Institute Board of Governors",
      "B": "Disciplinary Review Committee",
      "C": "Professional Conduct Division"
    },
    "answer": "A",
    "explanation": "All CFA Institute members and candidates enrolled in the CFA Program are required to comply\nwith the Code and Standards. The CFA Institute Board of Governors maintains oversight and\nresponsibility for the Professional Conduct Program (PCP)."
  },
  {
    "id": "jc_ETH_008",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 8,
    "question": "Sanctions imposed by CFA Institute for violations of the CFA Institute Code of Ethics\nor Standards of Professional Conduct least likely include:",
    "options": {
      "A": "monetary fines",
      "B": "public censure",
      "C": "revocation of a CFA Charter"
    },
    "answer": "A",
    "explanation": "Sanctions available to CFA Institute do not include monetary fines. However, sanctions imposed\nby CFA Institute may have significant consequences; they include public censure, suspension of\nmembership and use of the CFA designation, and revocation of the CFA charter. Candidates\nenrolled in the CFA Program who have violated the Code and Standards or testing policies may be\nsuspended or prohibited from further participation in the CFA Program."
  },
  {
    "id": "jc_ETH_009",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 9,
    "question": "If a member self-discloses a matter that questions his professional conduct in his\nannual statement to the CFA Institute, an initial investigation is conducted by the:",
    "options": {
      "A": "Standard of Practice Council",
      "B": "Disciplinary Review Committee",
      "C": "Professional Conduct Program staff."
    },
    "answer": "C",
    "explanation": "Professional Conduct inquiries come from a number of sources. First, members and candidates\nmust self-disclose on the annual Professional Conduct Statement all matters that question their\nprofessional conduct, such as involvement in civil litigation or a criminal investigation or being\nthe subject of a written complaint. When an inquiry is initiated, the Professional Conduct staff\nconducts an investigation.\nStandard of Practice Council (SPC) is charged with maintaining and interpreting the Code and\nStandards and ensuring that they are effective. The SPC does not investigate possible Standards\nviolations.\nCFA Institute Board of Governors maintains oversight and responsibility for the Professional\nConduct Program. It does not conduct investigations."
  },
  {
    "id": "jc_ETH_010",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 10,
    "question": "James Woods, CFA, is a portfolio manager at ABC Securities. Woods has reasonable\ngrounds to believe his colleague, Sandra Clarke, a CFA Level II candidate, is engaged\nin unethical trading activities that may also be in violation of local securities laws.\nWoods is not Clarke's supervisor, and her activities do not impact Woods or any of the\nportfolios for which he is responsible. Based on the Code and Standards, the\nrecommended course of action is for Woods to: (1912)",
    "options": {
      "A": "report Sandra Clarke to ABC's trading supervisor or compliance department",
      "B": "not take any action because he is not directly involved",
      "C": "report Sandra Clarke to the appropriate governmental or regulatory organization"
    },
    "answer": "A",
    "explanation": "Under Standard I(A) in situations where a member or candidate is aware of employer engagement\nin unethical or illegal activity, it is recommended that they attempt to stop the behavior by\nbringing it to the attention of a supervisor or the firm's compliance department."
  },
  {
    "id": "jc_ETH_011",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 11,
    "question": "Myers, CFA, is an analyst with a hedge fund and works closely with Pellie who earned\nher CFA designation 10 years ago. Myers becomes aware that Pellie uses her CFA\ndesignation even though she no longer pays her membership dues. During several\nmeetings that Pellie and Myers have with the firm’s clients, Pellie emphasizes that all\nher team members, including herself, are CFA charterholders. To be consistent with the Standards, Myers should:",
    "options": {
      "A": "only dissociate himself from activities involving Pellie",
      "B": "only report Pellie 's conduct to the fund's compliance department",
      "C": "dissociate himself from activities involving Pellie and report Pellie's conduct to the fund's"
    },
    "answer": "C",
    "explanation": "According to Standard I(A), Knowledge of the Law, Members and Candidates must not\nknowingly participate or assist in and must dissociate from any violation of such laws, rules, or\nregulations. In this case, by staying silent in a client meeting in which he knows false information\nis being given to a potential investor that could cause harm to that investor, Myers would be seen\nas assisting Pellie in providing that false information, even though Myers is not actively engaging\nin the misconduct himself. Myers should report her conduct to the fund’s compliance department\nfor it to address and should dissociate himself from activities involving Pellie and report Pellie 's\nconduct to the fund's compliance department."
  },
  {
    "id": "jc_ETH_012",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 12,
    "question": "Linda Chin, CFA, is a member of a political group advocating less governmental\nregulation in all aspects of life. She works in a country where local securities laws are\nminimal and insider trading is not prohibited. Chin’s politics are reflected in her\ninvestment strategy, where she follows her country’s mandatory legal and regulatory\nrequirements. Which of the following actions by Chin is most consistent with the CFA\nInstitute Standards of Professional Conduct?2013mock",
    "options": {
      "A": "Follow the CFA Code and Standards",
      "B": "Continue her current investment strategy",
      "C": "Disclose her political advocacy to clients."
    },
    "answer": "A",
    "explanation": "Standard I (A) Knowledge of the Law requires members and candidates to comply with the more\nstrict law, rules, or regulations and follow the highest requirement, which in this case would be the\nCFA Institute Standards of Professional Conduct. Standard II (A) Material Nonpublic Information\nwould also apply because members and candidates who possess material nonpublic information\nthat could affect the value of an investment must not act or cause others to act on the information.\nDisclosure that she meets local mandatory legal requirements, not the more strict law rule or\nregulation of the Code and Standards, would not excuse the member from following the Code and\nStandards."
  },
  {
    "id": "jc_ETH_013",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 13,
    "question": "Jennifer Ducumon, CFA, is a portfolio manager for high-net-worth individuals at\nNortheast Investment Bank. Northeast holds a large number of shares in Babyskin Care\nInc., a manufacturer of baby care products. Northeast obtained the Babyskin shares\nwhen they underwrote the company’s recent IPO. Ducumon has been asked by the\ninvestment banking department to recommend Babyskin to her clients, who currently\ndo not hold any shares in their portfolios. Although Ducumon has a favorable opinion\nof Babyskin, she does not consider the shares a buy at the IPO price nor at current price\nlevels. According to the CFA Institute Code of Ethics and Standards of Professional\nConduct the most appropriate action for Ducumon is to:",
    "options": {
      "A": "ignore the request",
      "B": "recommend the shares after additional analysis.",
      "C": "follow the request as soon as the share price declines"
    },
    "answer": "A",
    "explanation": "Ducumon should refuse to recommend the shares as her opinion of the Babyskin shares must not\nbe affected by internal pressure. If Ducumon followed the request from the investment banking\ndepartment at her company, she would be in violation of Standard I(B)–Independence and\nObjectivity. Ducumon must refuse to recommend the Babyskin shares until they are an attractive\npurchase based on fundamental analysis and market pricing."
  },
  {
    "id": "jc_ETH_014",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 14,
    "question": "Jiro Sato, CFA, deputy treasurer for May College, manages the Student Scholarship\nTrust. Sato issued a request for proposal (RFP) for domestic equity managers. Pamela\nPeters, CFA, a good friend of Sato, introduces him to representatives from Capital\nInvestments, which submitted a proposal. Sato selected Capital as a manager based on\nthe firm's excellent performance record. Shortly after the selection, Peters, who had\noutstanding performance as an equity manager with another firm, accepted a lucrative\njob with Capital. Which of the CFA charterholders violated the CFA Institute Standards\nof Professional Conduct? ★2015Mock",
    "options": {
      "A": "Both",
      "B": "Neither",
      "C": "Peters"
    },
    "answer": "B",
    "explanation": "Members should use reasonable care and judgment to maintain independence and objectivity, as\nstated in Standard I (B). There is no indication of inappropriate behavior in the selection of the\nequity manager or in the acceptance of employment with that manager; both decisions were based\non the excellent performance records of the manager and the member, respectively."
  },
  {
    "id": "jc_ETH_015",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 15,
    "question": "Andrew Smith, CFA, works for Granite, a commercial bank that also has a sizable\nsell-side research division. Smith is presenting financing solutions to a potential\nbusiness client, Dynamic Materials Corp. As part of his presentation, Smith mentions\nthat Granite will initiate research coverage on Dynamic. Is Smith's arrangement most\nlikely appropriate with regard to the Code and Standards? 2016Mock",
    "options": {
      "A": "No, because Smith cannot offer to provide research coverage on a company if it becomes a Corporate finance client.",
      "B": "No, because Granite cannot provide research coverage on a corporate finance client because it constitutes a violation of research independence.",
      "C": "Yes"
    },
    "answer": "C",
    "explanation": "Under Standard I(B), members and candidates must protect their independence and objectivity.\nAgreeing to provide objective research coverage of a company does not constitute a violation of\nthis standard, provided the analyst writing the report is free to come up with his own independent\nconclusion. Smith can agree to provide research coverage but cannot commit Granite's research\ndepartment to providing a favorable recommendation."
  },
  {
    "id": "jc_ETH_016",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 16,
    "question": "Dilshan Kumar, CFA, is a world-renowned mining analyst based in London. Recently,\nhe received an invitation from Cerberus Mining, a company listed on the London Stock\nExchange with headquarters in Johannesburg, South Africa. Cerberus asked Kumar to\njoin a group of prominent analysts from around the world on a tour of its mines in\nSouth Africa, some of which are in remote locations and not easily accessible. The\ninvitation also includes an arranged wildlife safari to Krueger National Park for the\nanalysts. Kumar accepts the invitation, planning to visit other mining companies he\ncovers in Namibia and Botswana after the safari. To prevent violating any CFA Institute\nStandards of Professional Conduct, it is most appropriate for Kumar to only accept\nwhich type of paid travel arrangements from Cerberus? ★2014Mock",
    "options": {
      "A": "Flights on a private airplane to the remote mining sites in South Africa",
      "B": "Economy class round trip ticket from London to Johannesburg",
      "C": "Ground transportation to Krueger National Park."
    },
    "answer": "A",
    "explanation": "Standard I(B): Independence and Objectivity requires members and candidates to use reasonable\ncare and judgment to maintain their independence and objectivity in their professional activities.\nBest practice dictates that Kumar only accept transportation to the remote mining sites because it\nis unlikely he would be able to source commercial flights to the locations and ground\ntransportation may not be viable. Because Kumar would normally visit mining sites around the\nworld as part of his job and because he is combining this trip with trips to other mine sites in\ndifferent countries, it would be inappropriate for Cerberus to pay for the analyst's travel expenses\nfrom London. Although Kumar could go on safari with the group of analysts, he should pay his\nown way so as to restrict any influence such a gift could possibly have when making his\ninvestment recommendations on Cerberus."
  },
  {
    "id": "jc_ETH_017",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 17,
    "question": "Marsha, CFA, discovered that her employer, Superior Investments Inc. (SII), inflates\ninvestment performance in SII's marketing brochure. In accordance with firm policy,\nMarsha uses SII’s marketing brochure to present to prospective clients. In addition,\nMarsha emails stock recommendations to her clients in capsule form and offers\nadditional information only upon request. Marsha has most likely violated the\nStandards:",
    "options": {
      "A": "by emailing stock recommendations to her clients in capsule form",
      "B": "only by using SII’s marketing brochure to present to prospective clients",
      "C": "both by emailing stock recommendations to her clients in capsule form and by using SII’s"
    },
    "answer": "B",
    "explanation": "Because according to Standard I(C), Misrepresentation members and Candidates must not\nknowingly make any misrepresentations relating to investment analysis, recommendations, actions,\nor other professional activities. By using SII’s marketing brochure that inflates performance to\npresent to prospective clients, Marsha has violated Standard I(C)."
  },
  {
    "id": "jc_ETH_018",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 18,
    "question": "Solomon Sulzberg, CFA, is a research analyst at Blue Water Management. Sulzberg's\nrecommendations typically go through a number of internal reviews before they are\npublished. In developing his recommendations, Sulzberg uses a model developed by a\nquantitative analyst within the firm. Sulzberg made some minor changes to the model\nbut retained the primary framework. In his reports, Sulzberg attributes the model to\nboth the quantitative analyst and himself. Before the internal reviews of his reports are\ncompleted, Sulzberg buys shares in one of the companies. After the internal review is\ncomplete, he fails to recommend the purchase of the stock to his clients and erases all\nof his research related to this company. Sulzberg least likely violated the CFA Institute\nStandards of Professional Conduct related to: ★2014Mock",
    "options": {
      "A": "Misrepresentation",
      "B": "Record Retention",
      "C": "Priority of Transactions"
    },
    "answer": "A",
    "explanation": "The research analyst has not violated Standard I(C): Misrepresentation because he has not\nknowingly made any misrepresentations related to investment analysis, recommendations, actions,\nor other professional activities. The research analyst has correctly attributed the model to both the\nquantitative analyst and to himself because he has revised the original model. Research developed\nwhile employed by a firm is the property of the firm, and the analyst is in violation of Standard\nV(C): Record Retention because members and candidates must develop and maintain appropriate\nrecords to support their investment analysis, recommendations, actions, and other\ninvestment-related communications with clients and prospective clients. As a general matter,\nrecords created as part of a member's or candidate's professional activity on behalf of his or her\nemployer are the property of the firm. The analyst also violated Standard VI(B): Priority of\nTransactions by taking advantage of his knowledge of the stock's value before allowing his\nemployer to benefit from that information."
  },
  {
    "id": "jc_ETH_019",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 19,
    "question": "Gabrielle Gabbe, CFA has been accused of professional misconduct by one of her\ncompetitors. The allegations concern Gabbe's personal bankruptcy filing 10 years ago\nwhen she was a college student and had a large amount of medical bills she could not\npay. By not disclosing the bankruptcy filing to her clients, did Gabbe most likely\nviolate any CFA Institute Standards of Professional Conduct? 2017Mock",
    "options": {
      "A": "No",
      "B": "Yes, related to Misrepresentation",
      "C": "Yes, related to Misconduct"
    },
    "answer": "A",
    "explanation": "A personal bankruptcy does not necessarily constitute a violation of Standard I(C)–\nMisrepresentation or Standard I(D)–Misconduct. If the circumstances of the bankruptcy involved\nfraudulent or deceitful business conduct, then failing to disclose it may constitute a violation of the\nStandards of Professional Conduct."
  },
  {
    "id": "jc_ETH_020",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 20,
    "question": "Jean-Luc Schlumberger, CFA, is an independent research analyst providing equity\nresearch on listed companies. He incorporates factual information published by State\nStatistics Bureau without acknowledging the source into the body of his research\nreports. In addition, Schlumberger issues a buy recommendation of Baby-skin Care Inc. basing on the conclusions and models from a well-known analyst Rebecca Wong’s\nresearch without any indications or disclosures. Schlumberger has least likely violated\nthe Standards by? (mock 125 9 改编)",
    "options": {
      "A": "Using factual information published by State Statistics Bureau",
      "B": "Using the conclusions from a well-known analyst",
      "C": "Using the models established by a well-known analyst."
    },
    "answer": "A",
    "explanation": "Members and candidates must not copy (or represent as their own) original ideas/material without\npermission. They must acknowledge and identify the source of ideas/material that is not their own.\nUsing factual information from well-known financial institutions without acknowledgment is\npermitted by Standard I(C)."
  },
  {
    "id": "jc_ETH_021",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 21,
    "question": "Emily, CFA, is an analyst covering the banking sector. She has declared bankruptcy\ndue to large unpaid personal medical bills. On weekends, she participates in public\nprotests for climate protection. She was recently arrested for trespassing during a\nprotest, which is an act of civil disobedience in her country. Has Emily violated the\nStandards?",
    "options": {
      "A": "No",
      "B": "Yes, she has violated the Standard relating to misconduct",
      "C": "Yes, she has violated the Standard relating to loyalty, prudence and care"
    },
    "answer": "A",
    "explanation": "According to Standard I (D), Misconduct, personal bankruptcy may not reflect on the integrity or\ntrustworthiness of the person declaring bankruptcy, but if the circumstances of the bankruptcy\ninvolve fraudulent or deceitful business conduct, the bankruptcy may be a violation of this\nstandard. Also, generally, Standard I(D) is not meant to cover legal transgressions resulting from\nacts of civil disobedience in support of personal beliefs because such conduct does not reflect\npoorly on the member’s or candidate’s professional reputation, integrity, or competence. Therefore,\nEmily has not violated Standard I (D). Further, Standard III (A), Loyalty, Prudence, and Care,\nstates that Members and Candidates have a duty of loyalty to their clients and must act with\nreasonable care and exercise prudent judgment. Members and Candidates must act for the benefit\nof their clients and place their clients’ interests before their employer’s or their own interests.\nNeither Emily 's bankruptcy no nor the act of trespassing during a protest imposes on her duty of\nloyalty to her clients. She has not violated Standard III (A)."
  },
  {
    "id": "jc_ETH_022",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 22,
    "question": "Abdul Naib, CFA, was recently asked by his employer to submit an updated document\nproviding the history of his employment and qualifications. The existing document on\nfile was submitted when he was hired five years ago. His employer notices the updated\nversion shows Naib obtained his MBA two years ago, whereas the earlier version\nindicated he had already obtained his MBA at the time of his hire. Because the position\nNaib was hired for had a minimum qualification of an MBA, Naib is asked to explain\nthe discrepancy. He justifies his actions by stating: \"I knew you would not hire me if I\ndid not have an MBA, but I already had my CFA designation. Knowing you required an\nMBA, I went back to school on a part-time basis after I was hired to obtain it. I graduated at the top of my class, but this should not come as any surprise because you\nhave seen evidence I passed all of my CFA exams on the first attempt.\" Did Naib most\nlikely violate the CFA Institute Standards of Professional Conduct? 2014Mock",
    "options": {
      "A": "Yes, with regard to Misconduct",
      "B": "No",
      "C": "Yes, with regard to Reference to the CFA Designation"
    },
    "answer": "A",
    "explanation": "Naib knowingly misrepresented his qualifications at the time of his hire by stating he had obtained\nan MBA when in fact he had not. This action reflects adversely on his professional integrity,\nviolating Standard I(D):Misconduct. Stating he passed his CFA exams in three consecutive years\nis not a violation of Standard VII(B): Reference to CFA Institute, the CFA Designation, and the\nCFA Program if it is factual. There is no evidence given to indicate he did not pass as claimed."
  },
  {
    "id": "jc_ETH_023",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 23,
    "question": "Nicholas Bennett, CFA, is a trader at a stock exchange. Another trader approached\nBennett on the floor of the exchange and verbally harassed him about a poorly\nexecuted trade. In response, Bennett pushed the trader and knocked him to the ground.\nAfter investigating the incident, the exchange cleared Bennett from any wrongdoing.\nWhich of the following best describes Bennett's conduct in relation to the CFA Institute\nCode of Ethics or Standards of Professional Conduct? Bennett: 2015 Mock",
    "options": {
      "A": "violated the standard relating to professionalism",
      "B": "did not violate any of the Code of Ethics or Standards of Professional Conduct",
      "C": "violated both the standard relating to professionalism and integrity of capital markets."
    },
    "answer": "A",
    "explanation": "The CFA Institute Code of Ethics requires members to act with integrity, competence, diligence,\nrespect, and in an ethical and professional manner. The Standards of Professional Conduct relating\nto professional misconduct state members and candidates must not commit any act reflecting\nadversely on their professional reputation, integrity, or competence. Bennett's actions violated the\nCode of Ethics and StandardI(D)–Professionalism, but not Standard II–Integrity of Capital\nMarkets."
  },
  {
    "id": "jc_ETH_024",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 24,
    "question": "According to the CFA Institute Code of Ethics and Standards of Professional Conduct,\ntrading on material nonpublic information is least likely to be prevented by establishing:\n(1912)",
    "options": {
      "A": "personal trading limitations",
      "B": "selective disclosure",
      "C": "firewalls"
    },
    "answer": "B",
    "explanation": "Selective disclosure occurs when companies discriminate in making material nonpublic\ninformation public. Corporations that disclose information on a limited basis create the potential\nfor insider-trading violations. See Standard II(A)."
  },
  {
    "id": "jc_ETH_025",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 25,
    "question": "Lisa, CFA, overhears the CEO of Brodeur Retail saying that the quarterly report to be\nreleased next week will miss analysts' expectations. Lisa immediately calls her brother\nwho owns the stock to tell him what she overheard. One week later, Lisa writes a report\non another company, ABD retail. She uses public and nonmaterial nonpublic\ninformation for her analysis to issue a \"buy\" recommendation. Has Lisa most likely\nviolated the Standards?",
    "options": {
      "A": "No",
      "B": "Yes, by calling her brother to tell him what she overheard",
      "C": "Yes, by using public and nonmaterial nonpublic information for her analysis to issue a \"buy\""
    },
    "answer": "B",
    "explanation": "Because according to Standard II (A), Material Nonpublic Information, Members and Candidates\nwho possess material nonpublic information that could affect the value of an investment must not\nact or cause others to act on the information. Also, Information is “material” if its disclosure\nwould probably have an impact on the price of a security or if reasonable investors would want to\nknow the information before making an investment decision -- such as the results of an upcoming\nquarterly report from a reliable source (the CEO). Lisa prompted her brother to act on it, hence,\nviolated the Standard."
  },
  {
    "id": "jc_ETH_026",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 26,
    "question": "When a client asks her how she makes investment decisions, Petra Vogler, CFA, tells\nthe client she uses mosaic theory. According to Vogler, the theory involves analyzing\npublic and nonmaterial nonpublic information, including the evaluation of statements\nmade to her by company insiders in one-on-one meetings in which management\ndiscusses new earnings projections not known to the public. Vogler also gathers general\nindustry information from industry experts she has contacted. Vogler most likely\nviolates the CFA Institute Standards of Professional Conduct because of her use of:\n★2014Mock",
    "options": {
      "A": "nonmaterial nonpublic information",
      "B": "one-on-one meeting information",
      "C": "industry expert information"
    },
    "answer": "B",
    "explanation": "A violation of Standard II(A): Material Nonpublic Information is likely to occur when using\ninformation that is selectively disclosed by corporations to a small group of investors, analysts, or\nother market participants. Earnings estimates given in a one-on-one meeting would likely be\nconsidered material and nonpublic information. Information made available to analysts remains\nnonpublic until it is made available to investors in general. Under the mosaic theory, it is\nacceptable to use information from industry contacts as long as the analyst uses appropriate\nmethods to arrive at her conclusions. Additionally, it is acceptable to use nonmaterial nonpublic\ninformation in her analysis; this use is not a violation of Standard II(A): Material Nonpublic\nInformation."
  },
  {
    "id": "jc_ETH_027",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 27,
    "question": "Edo Ronde, CFA, an analyst for a hedge fund, One World Investments, is attending a\nkey industry conference for the microelectronics industry. At lunch in a restaurant\nadjacent to the conference venue, Ronde sits next to a table of conference attendees and\nis able to read their nametags. Ronde realizes the group includes the president of a\npublicly traded company in the microelectronics industry, Fulda Manufacturing, a\ncompany Ronde follows. Ronde overhears the president complain about a production\ndelay problem Fulda's factories are experiencing. The president mentions that the delay\nwill reduce Fulda's earnings by more than 20% during the next year if not solved.\nRonde relays this information to the portfolio manager he reports to at One World explaining that in a recent research report he recommended Fulda as a buy. The\nmanager asks Ronde to write up a negative report on Fulda so the fund can sell the\nstock. According to the CFA Institute Standards of Professional Conduct, Ronde should\nleast likely: (1916百题)",
    "options": {
      "A": "request the portfolio manager not act on the information",
      "B": "leave his research report as it is",
      "C": "revise his research report"
    },
    "answer": "C",
    "explanation": "Ronde should refuse to follow his supervisor's request. If Ronde revises his research report based\non the information he overheard at the industry conference, he would violate Standard\nII(A): Material Nonpublic Information. The production delay information is material and\nconsidered nonpublic until it is widely distributed. Therefore, it should not be included in Ronde's\nresearch report or acted on until it becomes public. Ronde should try to encourage Fulda to make\nthe information public."
  },
  {
    "id": "jc_ETH_028",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 28,
    "question": "What is the theory that best describes the process by which financial analysts combine\nmaterial public information and nonmaterial nonpublic information as a basis for\ninvestment recommendations even if those conclusions would have been material\ninside information had they been communicated directly to the analyst by the\ncompany?",
    "options": {
      "A": "Mosaic theory",
      "B": "Economic theory",
      "C": "Probability theory"
    },
    "answer": "A",
    "explanation": "The process by which financial analysts combine material public information and nonmaterial\nnonpublic information as a basis for investment recommendations even if those conclusions would\nhave been material inside information had they been communicated directly to the analyst by the\ncompany is known as Mosaic Theory."
  },
  {
    "id": "jc_ETH_029",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 29,
    "question": "During an on-site company visit, Marsha Ward, CFA, accidentally overheard the Chief\nExecutive Officer (CEO) of Stargazer, Inc., discussing the company’s tender offer to\npurchase Dynamica Enterprises, a retailer of Stargazer products. According to the CFA\nInstitute Standards of Professional Conduct, Ward most likely cannot use the\ninformation because:",
    "options": {
      "A": "it relates to a tender offer",
      "B": "it was overheard and might be considered unreliable",
      "C": "she does not have a reasonable and adequate basis for taking investment action."
    },
    "answer": "A",
    "explanation": "Trading on the information is restricted as it relates to a tender offer; it is clearly material,\nnonpublic information [Standard II(A)].\nThe information could be considered to come from a reliable source because if it comes from\nsenior management, is nonpublic, and should not be used since it concerns a tender offer.\nThe information is material and is nonpublic so that it should not be used as the basis for taking\ninvestment action. There is simply not enough information provided to determine if there is a\nreasonable and adequate basis for investment action."
  },
  {
    "id": "jc_ETH_030",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 30,
    "question": "Justin Blake, CFA, a retired portfolio manager, owns 20,000 shares of a small public\ncompany that he would like to sell because he is worried about the company's prospects.\nHe posts messages on several internet bulletin boards. The messages read, \"This stock\nis going up once the pending patents are released, so now is the time to buy. The stock\nis a buy at anything below $3. I have done some close research on these guys.\"\nAccording to the Standards of Practice Handbook, Blake most likely violated the Code\nand Standards associated with: 2017Mock",
    "options": {
      "A": "Integrity of Capital Markets, but not Conflicts of Interest",
      "B": "neither Integrity of Capital Markets nor Conflicts of Interest",
      "C": "Integrity of Capital Markets, and Conflicts of Interest"
    },
    "answer": "A",
    "explanation": "Blake violated Standard II(B) regarding the Integrity of Capital Markets by engaging in a practice\nthat is likely to artificially inflate trading volume."
  },
  {
    "id": "jc_ETH_031",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 31,
    "question": "Which of the following actions violate the Standard relating to market manipulation?",
    "options": {
      "A": "Entering large buy and sell trades between multiple proprietary accounts of the firm with the intent to increase trading volume.",
      "B": "Exploiting perceived market inefficiencies through aggressive trading strategies",
      "C": "Placing the securities mentioned as material nonpublic information on the firm’s restricted"
    },
    "answer": "A",
    "explanation": "Standard II(B), Market Manipulation precludes transaction-based manipulation such as attempting\nto “buy and sell the stock using the accounts in hopes of raising the trading volume and the price.”"
  },
  {
    "id": "jc_ETH_032",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 32,
    "question": "Peter Chang, CFA, spreads rumors on social media about a potential acquisition of\nAdvanced Electronics Company (AEC) after buying the stock for his personal account.\nDespite the rumors, AEC's stock price declines and Chang closes his position at a\nsignificant loss. Has Chang violated the Standards?",
    "options": {
      "A": "No",
      "B": "Yes, the Standard relating to market manipulation only",
      "C": "Yes, both the Standard relating to market manipulation and the Standard relating to misconduct"
    },
    "answer": "C",
    "explanation": "According to Standard II(B), Market Manipulation, \"[i]nformation-based manipulation includes,\nbut is not limited to, spreading false rumors to induce trading by others. For example, members\nand candidates must refrain from “pumping up” the price of an investment by issuing misleading\npositive information or overly optimistic projections of a security’s worth only to later “dump” the\ninvestment (i.e., sell it) once the price, fueled by the misleading information’s effect on other\nmarket participants, reaches an artificially high level.\" Chang spreads rumors on social media\nabout a potential acquisition of AEC after buying the stock for his personal account. Therefore,\nChang has violated the Standard II(B), Market Manipulation.\nIn addition, Standard I(D), Misconduct, \"addresses all conduct that reflects poorly on the\nprofessional integrity, good reputation, or competence of members and candidates. Any act that\ninvolves lying, cheating, stealing, or other dishonest conduct is a violation of this standard if the\noffense reflects adversely on a member’s or candidate’s professional activities.\" Spreading rumors\non social media to push up the stock price reflects poorly on Chang's professional integrity.\nTherefore, Chang has violated the Standard I(D), Misconduct."
  },
  {
    "id": "jc_ETH_033",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 33,
    "question": "Beth Kozniak, a CFA candidate, is an independent licensed real estate broker and a\nwell-known property investor. She is currently brokering the sale of a commercial\nproperty on behalf of a client in financial distress. If the client's building is not sold\nwithin 30 days, he will lose the building to the bank. A year earlier, another client of\nKozniak's had expressed interest in purchasing this same property. However, she is\nunable to contact this client, and she has not discovered any other potential buyers.\nGiven her distressed client's limited time frame, Kozniak purchases the property herself\nand forgoes any sales commission. Six months later, she sells the property for a nice\nprofit to the client who had earlier expressed interest in the property. Has Kozniak most\nlikely violated the CFA Institute Standards of Professional Conduct? (1916百题)",
    "options": {
      "A": "Yes, she did not disclose her potential conflicts of interest to either client",
      "B": "Yes, she profited on the real estate to the detriment of her financially stressed client",
      "C": "No"
    },
    "answer": "C",
    "explanation": "Kozniak does not appear to have violated any CFA Institute Standards of Professional Conduct.\nBecause she is known in the market for investing and brokering property and both parties have\nworked with Kozniak in the past, both parties would know of her interests. In addition, in both\ncases, she acts for her own account as a primary investor, not as a broker. She buys the property\nfor her own portfolio and then sells the property from her own portfolio. Therefore, Kozniak did\nnot violate Standard VI(A)–Disclosure of Conflicts. When she purchased the property for her\nportfolio, she saved her client from losing the building to the bank and did not charge a sales\ncommission. Because the sale of the property to her other client did not take place until six months\nafter her purchase, and she was unable to contact the client who had earlier expressed interest\nprior to her purchase, she cannot be accused of violating Standard III(A)–Loyalty, Prudence, and\nCare with either client."
  },
  {
    "id": "jc_ETH_034",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 34,
    "question": "Jack Steyn, CFA, recently became the head of the trading desk at a large investment\nmanagement firm that specializes in domestic equities. While reviewing the firm's\ntrading operations, he notices clients give discretion to the manager to select brokers on\nthe basis of their overall services to the management firm. Despite the client directive,\nSteyn would most likely violate Standard III(A): Loyalty, Prudence, and Care if he\npays soft commissions for which of the following services from the brokers?",
    "options": {
      "A": "Database services for offshore investments",
      "B": "Equity research reports",
      "C": "Investment conference attendance"
    },
    "answer": "A",
    "explanation": "Standard III(A): Loyalty, Prudence, and Care stipulates that the client owns the brokerage.\nTherefore, members and candidates are required to use client brokerage only to the benefit of the\nclients (soft commissions policy). Because the firm specializes in domestic equities, an offshore\ninvestment database service would not benefit the clients."
  },
  {
    "id": "jc_ETH_035",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 35,
    "question": "Jorge Lopez, CFA, is responsible for proxy voting on behalf of his bank's asset\nmanagement clients. Lopez recently performed a cost–benefit analysis that showed the\nproxy-voting policies might not benefit the bank's clients. As a result, Lopez\nimmediately changes the proxy-voting policies and procedures without informing\nanyone. Lopez now votes client proxies on the side of management on all issues, with\nthe exception of major mergers in which a significant impact on the stock price is\nexpected. Lopez least likely violated the CFA Institute Standards of Professional\nConduct in regard to:",
    "options": {
      "A": "cost-benefit analysis",
      "B": "voting with management",
      "C": "proxy-voting policy disclosures"
    },
    "answer": "A",
    "explanation": "Performing a cost–benefit analysis showing that voting all proxies might not benefit the client and\nconcluding that voting proxies may not be necessary in all instances is not a violation of Standard\nIII(A): Loyalty, Prudence, and Care. However, even though voting proxies may not be necessary\nin all instances, part of a member's or candidate's duty of loyalty under Standard III(A) includes\nvoting proxies in an informed and responsible manner, which is not being done when Lopez\nautomatically votes with management on the majority of issues. In addition, members and\ncandidates should disclose to clients their proxy-voting policies, including any changes to that\npolicy, as required by Standard III(A), which has not been done."
  },
  {
    "id": "jc_ETH_036",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 36,
    "question": "Henrietta Huerta, CFA, writes a weekly investment newsletter to market her services and obtain new asset management clients. A third party distributes the free newsletter\non her behalf to those individuals on its mailing list. As a result, it is widely read by\nthousands of individual investors. The newsletter recommendations reflect most of\nHuerta's investment actions. After completing further research on East-West Coffee\nRoasters, Huerta decides to change her initial buy recommendation to a sell. To avoid\nviolating the CFA Institute Standards of Professional Conduct, it would be most\nappropriate for Huerta to distribute the new investment recommendation to:",
    "options": {
      "A": "newsletter recipients and asset management clients simultaneously",
      "B": "asset management clients first",
      "C": "newsletter recipients first"
    },
    "answer": "B",
    "explanation": "According to Standard III(A): Loyalty, Prudence, and Care, members and candidates must place\ntheir clients’ interests before their own interests. The temptation may be to release the changed\nrecommendation to newsletter recipients simultaneously with or even before the asset\nmanagement clients to try to obtain new clients. But to avoid violating Standard III(A), Huerta\nmust ensure any change in an investment recommendation is first distributed to her asset\nmanagement clients before any newsletter recipients, who are not necessarily clients (that is, they\nreceive the newsletter for free from a third-party distribution list)."
  },
  {
    "id": "jc_ETH_037",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 37,
    "question": "Sanjay Gupta, CFA, is interviewed by the First Faithful Church to manage the church’s\nvoluntary retirement plan’s equity portfolio based upon his superior return history.\nEach church staff member chooses whether to opt in or out of the retirement plan\naccording to his or her own investment objectives. The plan trustees tell Gupta that\nstocks of companies involved in the sale of alcohol, tobacco, gambling, or firearms are\nnot acceptable investments given the objectives and constraints of the portfolio. Gupta\ntells the trustees he cannot reasonably execute his strategy with these restrictions and\nthat all his other accounts hold shares of companies involved in these businesses\nbecause he believes they have the highest alpha. By agreeing to manage the account\naccording to the Trustees’ wishes, does Gupta violate the CFA Institute Standards of\nProfessional Conduct? 2013Mock",
    "options": {
      "A": "No",
      "B": "Yes, because the manager was hired based upon his previous investment strategy",
      "C": "Yes, because the restrictions provided by the Trustees are not in the best interest of the members."
    },
    "answer": "A",
    "explanation": "According to Standard III (A) Loyalty, Prudence, and Care, Gupta’s duty of loyalty, prudence, and\ncare is owed to the participants and beneficiaries (members) of the pension plan. As a church plan,\nthe restrictions are appropriate given the objectives and constraints of the portfolio."
  },
  {
    "id": "jc_ETH_038",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 38,
    "question": "Charlie Mancini, CFA, is the Managing Director for Business Development at SV\nFinancial, (SVF), a large U.S.-based mutual fund organization. Mancini has been under\npressure recently to increase revenues. In order to secure business from a large hedge\nfund manager based in Asia, Mancini recently approved flexible terms for the fund's\nclient agreement. To allow for time zone differences, the agreement permits the hedge\nfund to trade in all of SVF's mutual funds six hours after the close of U.S. markets,\nwhich is prohibited by U.S. regulators. Did Mancini violate any CFA Institute\nStandards of Professional Conduct? (1912)",
    "options": {
      "A": "No",
      "B": "Yes, with regard to Fair Dealing and Material Nonpublic Information.",
      "C": "Yes, with regard to Fair Dealing"
    },
    "answer": "B",
    "explanation": "Clients should be treated fairly and impartially according to Standard III(B). In addition, the\nflexible trading terms allow the hedge fund manager to enrich itself and are a violation of Standard\nII(A), which concerns trading on material nonpublic information. This situation is also a conflict\nof interest, and thus a violation of Standard VI(A)-Disclosure of Conflicts."
  },
  {
    "id": "jc_ETH_039",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 39,
    "question": "Heidi Halvorson, CFA, is the chief investment officer for Tukwila Investors, an asset\nmanagement firm specializing in fixed-income investments. Tukwila is in danger of\nlosing one of its largest clients, Quinault Jewelers, which accounts for nearly one-third\nof its revenues. Quinault recently told Halverson that Tukwila would be fired unless the\nperformance of Quinault's portfolio improves significantly. Shortly after this\nconversation, Halvorson purchases two corporate bonds she believes are suitable for\nany of her clients based on third-party research from a reliable and diligent source.\nImmediately after the purchase, one bond increases significantly in price while the\nother bond declines significantly. At the end of the day, Halvorson allocates the\nprofitable bond trade to Quinault and the other bond to two of her largest institutional\naccounts. Halvorson most likely violated the CFA Institute Standards of Professional\nConduct in regard to: (1912)",
    "options": {
      "A": "client suitability",
      "B": "third-party research",
      "C": "trade allocations."
    },
    "answer": "C",
    "explanation": "The investment officer failed to deal fairly by allocating profitable trades to a favored client at the\nexpense of others, a violation of Standard III(B): Fair Dealing. The standard requires members and\ncandidates to treat all clients fairly when taking investment action. Tukwila should have a\nsystematic approach to allocating trades, such as pro rata, before or at the time of trade execution,\nor as soon as possible after trades are executed. The analyst believes the bonds are suitable for any\nof her clients, so she has not violated Standard III(C): Suitability"
  },
  {
    "id": "jc_ETH_040",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 40,
    "question": "Miranda Grafton, CFA, purchased a large block of stock at varying prices during the\ntrading session. The stock realized a significant gain in value before the close of the\ntrading day, so Grafton reviewed her purchase prices to determine what prices should\nbe assigned to each specific account. According to the Standards of Practice Handbook,\nGrafton's least appropriate action is to allocate the execution prices: 2017Mock",
    "options": {
      "A": "across the participating client accounts at the same execution price",
      "B": "across the participating client accounts pro rata on the basis of account size",
      "C": "on a first-in, first-out basis with consideration of bundling orders for efficiency"
    },
    "answer": "B",
    "explanation": "According to Standard III (B) best practices include allocating pro rata on the basis of order size,\nnot account size. All clients participating in the block trade should receive the same execution\nprice and be charged the same commission."
  },
  {
    "id": "jc_ETH_041",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 41,
    "question": "Sheila Schleif, CFA, is an equity analyst at an investment banking division of Mokara\nFinancial Group, a full service financial group. Schleif uses a multifactor computer\nmodel to make stock recommendations for all clients of Mokara. Schleif discovers the\nmodel contains an error. If the error were corrected, her most recent buy\nrecommendation communicated to all clients would change to a sell. Schleif corrects\nthe error, changing the buy to a sell recommendation, and then simultaneously\ndistributes via e-mail the revision to all investment banking clients who received the\ninitial recommendation. A week later, Schleif sells the same shares she held in her\npersonal portfolio. Concerning her actions, Schleif most likely violated which of the\nfollowing CFA Institute Standards of Professional Conduct? 2014mock",
    "options": {
      "A": "Priority of Transactions",
      "B": "Diligence and Reasonable Basis",
      "C": "Fair Dealing"
    },
    "answer": "C",
    "explanation": "The analyst violated Standard III(B): Fair Dealing by selectively distributing the revised\nrecommendation only to investment banking clients despite being responsible for making\ninvestment recommendations to all group clients. Schleif should distribute the change in\nrecommendation to all clients who received the initial recommendation, not just those within the\ninvestment banking division of the group."
  },
  {
    "id": "jc_ETH_042",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 42,
    "question": "Monique Gretta, CFA, is a research analyst at East West Investment Bank. Previously,\nGretta worked at a mutual fund management company and has a long-standing client\nrelationship with the managers of the funds and their institutional investors. Gretta\noften provides fund managers, who work for Gretta's former employer, with draft\ncopies of her research before disseminating the information to all of the bank's clients.\nThis practice has helped Gretta avoid several errors in her reports, and she believes it is beneficial to the bank's clients, even though they are not aware of this practice.\nRegarding her research, Gretta least likely violated the CFA Institute Standards of\nProfessional Conduct because:",
    "options": {
      "A": "the long-standing client relationships are not disclosed",
      "B": "this practice benefits all clients",
      "C": "her report is a draft"
    },
    "answer": "A",
    "explanation": "The analyst does not violate any of the Standards of Professional Conduct by having long-standing\nclient relationships and generally is not required to disclose such relationships. However, the\nanalyst is not treating all clients fairly as required by Standard III(B)–Fair Dealing when\ndisseminating investment recommendations; disclosure of the relationship with long-standing\nclients is not the issue. The analyst has advantaged some clients over others by providing advance\ninformation, and all clients do not have a fair opportunity to act on the information within the draft\nreport. Members and candidates may differentiate their services to clients, but different levels of\nservice must not disadvantage or negatively affect clients."
  },
  {
    "id": "jc_ETH_043",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 43,
    "question": "Atlantic Capital Management has access to a limited number of shares in a popular new\nissue expected to be oversubscribed. Atlantic’s portfolio managers have determined the\nissue to be a prudent addition within Atlantic’s developing growth equity strategy. A\nnumber of the firm’s investment professionals have family-member accounts that are\nmanaged to the developing growth strategy. Which of the following allocation options\nmost likely adheres to the Code and Standards? Atlantic should allocate the shares:",
    "options": {
      "A": "to family-member accounts only after non-family accounts have been allocated their shares",
      "B": "on a prorated basis across all developing growth accounts, including the family-member",
      "C": "on a prorated basis across all developing growth accounts, excluding the family-member"
    },
    "answer": "B",
    "explanation": "Under Standard III(B) if an investment professional’s family member accounts are being managed\nsimilarly to other clients of the firm, they should not be excluded from buying such shares as they\nare considered clients despite their familial relationships."
  },
  {
    "id": "jc_ETH_044",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 44,
    "question": "IPS should be updated repeatedly at least: 讲义",
    "options": {
      "A": "Annually",
      "B": "Semi-annually",
      "C": "Quarterly"
    },
    "answer": "A",
    "explanation": "Updating the IPS should be repeated at least annually and also prior to material changes to any\nspecific investment recommendations."
  },
  {
    "id": "jc_ETH_045",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 45,
    "question": "Molly Burnett, CFA, is a portfolio manager for a fund that only invests in\nenvironmentally friendly companies. A multinational utility company recently acquired\none of the fund's best-performing investments, a wind power company. The wind\npower company's shareholders received utility company shares as part of the merger\nagreement. The utility has one of the worst environmental records in the industry, but\nits shares have been one of the top performers over the past 12 months. Because the\nutility pays a high dividend every three months, Burnett holds the utility shares until\nthe remaining two dividends are paid for the year then sells the shares. Burnett most\nlikely violated the CFA Institute Standard of Professional Conduct concerning:\n(1912)",
    "options": {
      "A": "Independence and Objectivity",
      "B": "Suitability",
      "C": "Disclosure of Conflicts"
    },
    "answer": "B",
    "explanation": "The utility is not a suitable investment for a fund that only invests in companies with good\nenvironmental records. Continuing to hold this investment, therefore, was a violation of Standard\nIII(C)–Suitability."
  },
  {
    "id": "jc_ETH_046",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 46,
    "question": "Leng Bo, CFA, is a bond portfolio manager for individual investors. Last year, a client\nwhose portfolio is limited to investment-grade bonds approved Bo's purchase of a\nbelow-investment-grade bond. Because yields in the high-grade fixed-income markets\ndeclined, Bo subsequently decides to enhance the client's portfolio by investing in\nseveral additional bonds with ratings one or two notches below investment grade. The\ninvestment strategy implemented by Bo most likely violated which of the following\nCFA Institute Standards of Professional Conduct? 2017Mock",
    "options": {
      "A": "Independence and Objectivity",
      "B": "Suitability",
      "C": "Communication with Clients and Prospective Clients"
    },
    "answer": "B",
    "explanation": "The client only approved the purchase of one below-investment-grade bond, whereas the portfolio\nmanager has purchased several additional bonds below investment grade without client approval,\nwhich is in violation of Standard III(C)–Suitability."
  },
  {
    "id": "jc_ETH_047",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 47,
    "question": "Sherry Buckner, CFA, manages equity accounts for government entities whose\nportfolios are classified as being conservative and risk averse. Since the objective of her clients is to maximize returns with the lowest possible risk, Buckner considers\nadding to their holdings a new, thinly traded, leveraged derivative product that she\nbelieves has the potential for high returns. To make her investment decision, Buckner\nrelies upon comprehensive research from an investment bank with a solid reputation\nfor top quality research. After her review of that research, Buckner positions her\naccounts so each has a 10% allocation to the derivative product. Did Buckner most\nlikely violate any CFA Institute Standards of Professional Conduct by purchasing the\nderivative product for her clients? 2017Mock",
    "options": {
      "A": "No",
      "B": "Yes, related to Suitability",
      "C": "Yes, related to Loyalty, Prudence, and Care"
    },
    "answer": "B",
    "explanation": "Buckner is in violation of Standard III(C) since she did not consider issues\nsuch as the limited liquidity or any potential leverage of this new product when she invested a\nsubstantial percentage of her clients’ portfolios in these instruments."
  },
  {
    "id": "jc_ETH_048",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 48,
    "question": "Amanda, CFA, is a portfolio manager. She has a new client and develops an investment\npolicy statement (IPS) that addresses the client's risk and return objectives and\nconstraints. The client does not disclose assets managed by other firms and Amanda\nagrees to only manage the portion of the client's assets disclosed to her. In a separate\ndocument, Amanda develops an investment program and strategic asset allocation for\nthe portion of client assets she manages. Has Amanda most likely violated the Standard\nrelating to suitability?",
    "options": {
      "A": "No",
      "B": "Yes, by keeping the investment program and strategic asset allocation in a document that is separate from the IPS.",
      "C": "Yes, by agreeing to manage a portion of the client's assets without knowledge of the client's"
    },
    "answer": "A",
    "explanation": "According to Standard III (C), Suitability, suitability review can be done most effectively when\nthe client fully discloses his or her complete financial portfolio, including those portions not\nmanaged by the member or candidate. If clients withhold information about their financial\nportfolios, the suitability analysis conducted by members and candidates cannot be expected to be\ncomplete; it must be based on the information provided. Amanda may develop an investment\nprogram that is suitable for the client without knowing about their other assets, even though the\ninformation is not complete. In addition, Standard III (C) also states after formulating long-term\ncapital market expectations, members and candidates can assist in developing an appropriate\nstrategic asset allocation and investment program for the client, whether these are presented in\nseparate documents or incorporated in the IPS or in appendices to the IPS. Amanda may keep\nthese records in a separate document."
  },
  {
    "id": "jc_ETH_049",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 49,
    "question": "Sam Snead, CFA, is the founder and portfolio manager of the Everglades Fund. In its\nfirst year the fund generated a return of 30%. Building on the fund’s performance,\nSnead created new marketing materials that showed the fund’s gross 1-year return as\nwell as the 3-, and 5-year returns which he calculated by using back-tested performance\ninformation. As the marketing material is used only for presentations to institutional\nclients, Snead did not mention the inclusion of back-tested data. According to the\nStandards of Practice Handbook, did Snead violate any CFA Institute Standards of\nProfessional Conduct? 2010Mock",
    "options": {
      "A": "No",
      "B": "Yes, because he did not disclose the use of back-tested data",
      "C": "Yes, because he failed to deduct all fees and expenses before calculating the fund’s track"
    },
    "answer": "B",
    "explanation": "The Standard III (D) Performance Presentation prohibits members/candidates from making any\nstatements that misrepresent the performance achieved by them or their firms and requires every\nreasonable effort to be made to ensure that performance information is fair, accurate, and complete.\nBy failing to identify the simulated performance results, Snead violated the standard. Snead\nshould have disclosed the fact that the returns were generated only in one year of the fund’s\noperation and the other performance information is back-tested."
  },
  {
    "id": "jc_ETH_050",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 50,
    "question": "Which of the following is an appropriate benchmark? (改编)",
    "options": {
      "A": "Select a small-cap stocks index as a benchmark for high risk-averse clients",
      "B": "Display hedge fund’s performance to clients who mainly invest in money market securities",
      "C": "Suggest clients who have high risk aversion take S&P500 index as return objective"
    },
    "answer": "C",
    "explanation": "Clients can be misled if the benchmark’s results are not reported on a basis comparable to that of\nthe fund’s or client’s results. The best practice is that selecting the most appropriate available\nbenchmark from a universe of available options."
  },
  {
    "id": "jc_ETH_051",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 51,
    "question": "Kyle Taylor of Taylor Trust Company, noting the performance of Taylor’s common\ntrust fund for the past two years, states in a brochure sent to his potential clients, “You\ncan expect steady 25% annual compound growth of the value of your investments over\nthe year.” Taylor Trust’s common trust fund did increase at the rate of 25% per year for\nthe past year, which mirrored the increase of the entire market. The fund has never\naveraged that growth for more than one year, however, and the average rate of growth\nof all of its trust accounts for five years is 5% per year. Tylor least likely violates the\nCFA Institute Standard of Professional Conduct concerning: 原版书case",
    "options": {
      "A": "Performance presentation",
      "B": "Misrepresentation",
      "C": "Suitability"
    },
    "answer": "C",
    "explanation": "Taylor’s brochure is in violation of Standard III(D). Taylor should have disclosed that the 25%\ngrowth occurred only in one year.\nAdditionally, Taylor did not include client accounts other than those in the firm’s common trust\nfund. A general claim of firm performance should take into account the performance of all\ncategories of accounts. Finally, by stating that clients can expect a steady 25% annual compound\ngrowth rate, Taylor is also violating Standard I(C)–Misrepresentation, which prohibits assurances\nor guarantees regarding an investment."
  },
  {
    "id": "jc_ETH_052",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 52,
    "question": "Hui Chen, CFA, develops marketing materials for an investment fund he founded three\nyears ago. The materials show the 3-year, 2-year, and 1-year returns for the fund. He\nincludes a footnote that states in small print “Past performance does not guarantee\nfuture returns.” He does not claim compliance with GIPS® in the disclosures or\nfootnotes. He also includes a separate sheet showing the most recent semi-annual and\nquarterly returns, which notes that they have been neither audited nor verified. Has\nChen most likely violated any CFA Institute Standards of Professional Conduct?",
    "options": {
      "A": "No",
      "B": "Yes, because he included un-audited and unverified results.",
      "C": "Yes, because he did not adhere to the Global Investment Performance standards."
    },
    "answer": "A",
    "explanation": "The Standards require members to make reasonable efforts to make sure performance information\nis fair, accurate, and complete. The Standards do not require compliance with Global Investment\nPerformance Standards (GIPS), auditing, or verification requirements [Standard III(D)]."
  },
  {
    "id": "jc_ETH_053",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 53,
    "question": "Danielle Deschutes, CFA, is a portfolio manager who is part of a 10-person team that\nmanages equity portfolios for institutional clients. A competing firm, South West\nManagers, asks Deschutes to interview for a position with its firm and to bring her\nperformance history to the interview. Deschutes receives written permission from her\ncurrent employer to bring the performance history of the stock portfolio with her. At\nthe interview, she discloses that the performance numbers represent the work of her\nteam and describes the role of each member. To bolster her credibility Deschutes also\nprovides the names of institutional clients and related assets constituting the portfolio.\nDuring her interview, Deschutes most likely violated the CFA Institute Standards of\nProfessional Conduct with regard to: (1912)",
    "options": {
      "A": "her contribution to the portfolio's returns",
      "B": "providing details of the institutional clients",
      "C": "the stock portfolio's performance history"
    },
    "answer": "B",
    "explanation": "Deschutes most likely violated Standard III(E): Preservation of Confidentiality by failing to\npreserve the confidentiality of client records when she disclosed specific details about clients in\nthe equity portfolio."
  },
  {
    "id": "jc_ETH_054",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 54,
    "question": "While at a bar in the financial district after work, Ellen Miffitt, CFA, overhears several\nemployees of a competitor discuss how they will manipulate down the price of a thinly\ntraded micro-cap stock's price over the next few days. Miffitt's clients have large\npositions of this stock, so when she arrives at work the next day, she immediately sells\nall of these holdings. Because she had determined the micro-cap stock was suitable for\nall of her accounts at its previously higher price, Miffitt buys back her client's original\nexposure at the end of the week at the new, lower price. Which CFA Institute Standards\nof Professional Conduct did Miffitt least likely violate? 2017Mock",
    "options": {
      "A": "Material Nonpublic Information",
      "B": "Preservation of Confidentiality",
      "C": "Market Manipulation"
    },
    "answer": "B",
    "explanation": "Miffitt has not violated Standard III (E)–Preservation of Confidentiality, which involves\ninformation about former, current, and prospective clients."
  },
  {
    "id": "jc_ETH_055",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 55,
    "question": "Teresa Staal, CFA, is an investment officer in a bank trust department. She manages\nmoney for celebrities and public figures, including an influential local politician. She\nreceives a request from the politician's political party headquarters to disclose his stock\nholdings. The request indicates local law requires the disclosure. What steps should\nStaal most likely take to ensure she does not violate any CFA Institute Standards of\nProfessional Conduct? 2016 Mock",
    "options": {
      "A": "Provide the information and inform her client",
      "B": "Check with her firm's compliance department to determine her legal responsibilities",
      "C": "Send the requested documents and inform her supervisor."
    },
    "answer": "B",
    "explanation": "In order to avoid violating Standard III(E)–Preservation of Confidentiality, Staal should determine\nwhether applicable securities regulations require disclosing the records before she provides the\nconfidential information concerning her client's investments."
  },
  {
    "id": "jc_ETH_056",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 56,
    "question": "John, CFA, is an investment advisor. A friend asks John to share client contacts in order\nto solicit charitable donations. John responds that he is unable to share current clients'\ncontact details and instead provides e-mail addresses of several former clients. The next\nday, John finds out that one of his colleagues, Lauren, a Level II candidate in the CFA\nProgram, has failed to inform her supervisor about her personal bankruptcy resulting\nfrom large medical bills. Have the Standards most likely been violated?",
    "options": {
      "A": "No",
      "B": "Yes, by Lauren",
      "C": "Yes, by John."
    },
    "answer": "C",
    "explanation": "According to Standard III (E), Preservation of Confidentiality, this standard protects the\nconfidentiality of client information even if the person or entity is no longer a client of the\nmember or candidate. Therefore, members and candidates must continue to maintain the\nconfidentiality of client records even after the client relationship has ended. Thus revealing\ne-mails of former clients is a violation."
  },
  {
    "id": "jc_ETH_057",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 57,
    "question": "Jimmy Lan, CFA, is a technology analyst at Pacific Securities, Inc. and is a leading\nauthority on Japanese technology companies. Lan's clients include many leading\nJapanese equity managers. While still employed at Pacific, Lan makes plans during the\nweekends to start a new company, JL Consulting. His plans consist of contracting\noffice space, interviewing potential employees, and purchasing office equipment. Once\nhe feels ready to launch his new firm, Lan provides Pacific with his resignation notice.\nAfter leaving, Lan constructs earnings models of the technology companies he\npreviously covered, using the knowledge and experience gained while at Pacific. He\nthen contacts former clients by using public sources and encourages them to become\nclients of his new firm. Are Lan's actions in compliance with the Code and\nStandards?16Mock",
    "options": {
      "A": "No, because the names of former clients, modeling skills, and experience gained by Lan are confidential information of Pacific Securities.",
      "B": "Yes, assuming he is not in breach of any non-compete agreement signed while at Pacific",
      "C": "No, because he is prohibited from engaging in activities related to starting his new business"
    },
    "answer": "B",
    "explanation": "Lan's actions do not violate Standard IV (A) – Duties to Employers. Lan does not use company\ntime to make arrangements for his new venture, nor does he misappropriate any information\n(financial models or client contacts) from his former employer. All of Lan's actions are permissible\nunder Standard IV (A)."
  },
  {
    "id": "jc_ETH_058",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 58,
    "question": "Marc Davidson, CFA, works as a trust specialist for Integrity Financial. Davidson starts\na part-time consulting business providing advice to trustees for a fee. He conducts this\nbusiness on his own time and therefore did not notify Integrity Financial of his\nconsulting. Davidson asks his assistant to compile a list of Integrity's clients and their\ncontact information. The following month, Davidson is offered a similar role at\nIntegrity's largest competitor, Legacy Trust Services, Inc. After he begins working at\nLegacy, his new manager arranges for him to meet with a number of prospective clients,\nmany of whom are clients of Integrity. After meeting with Davidson, a number of\nformer Integrity clients decide to transfer their business to Legacy. Did Davidson's\naction violate the Code and Standards? (1912)",
    "options": {
      "A": "Yes, both Davidson's part-time consulting business and his meetings with Integrity clients are violations of the Standards.",
      "B": "Yes, Davidson's part-time consulting business is a violation of the Standards",
      "C": "No"
    },
    "answer": "B",
    "explanation": "Members and candidates are required to disclose any compensation arrangement to their\nemployers that involves performing tasks or services that their employers can charge for.\nDisclosure is required even if the activities occur during non-work hours."
  },
  {
    "id": "jc_ETH_059",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 59,
    "question": "Elbie Botha, CFA, an equity research analyst at an investment bank, disagrees with her\nresearch team's buy recommendation for a particular company's rights issue. She\nacknowledges the team's recommendation is based on a well-developed process and\nextensive research, but she feels the valuation is overpriced based on her assumptions.\nDespite her contrarian view, her name is included on the research report to be\ndistributed to all of the investment bank's clients. To avoid violating any CFA Institute\nStandards of Professional Conduct, it would be least appropriate for Botha to undertake\nwhich of the following? ★ 2014Mock",
    "options": {
      "A": "Insist her name be removed from the report",
      "B": "Leave her name on the report",
      "C": "Issue a new report."
    },
    "answer": "C",
    "explanation": "Standard IV(A): Loyalty calls for employees to be loyal to their employer by not causing harm. If\nBotha released a contradictory research recommendation report to clients, it could possibly cause\nconfusion amongst clients and embarrassment to the firm."
  },
  {
    "id": "jc_ETH_060",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 60,
    "question": "Chris Rodriguez, CFA, is a portfolio manager at Nisqually Asset Management, which\nspecializes in trading highly illiquid shares. Rodriguez has been using Hon Securities\nBrokers almost exclusively when making transactions for Nisqually clients, as well as\nfor his own relatively small account. Hon always executes Rodriguez's personal trades\nat a more preferential price than for Rodriguez's clients' accounts. This special pricing\noccurs regardless of whether or not Rodriguez personally trades before or after clients.\nRodriguez should least likely do which of the following in order to comply with the\nCFA Institute Standards of Professional Conduct? (1912)",
    "options": {
      "A": "Trade client accounts before his own account",
      "B": "Eliminate the exclusive trading arrangement",
      "C": "Average trade prices across all trading accounts"
    },
    "answer": "C",
    "explanation": "Rodriguez is in violation of Standard IV(A): Loyalty, which requires that, in matters related to\ntheir employment, members and candidates must act for the benefit of their employer and not\ndeprive their employer of the advantage of their skills and abilities, divulge confidential\ninformation, or otherwise cause harm to their employer. Rodriguez should not accept the special\ntreatment from Hon; instead, he should ask Hon to lower costs for the transactions of his\nNisqually clients. Rodriguez should not average transaction costs because his clients should be\ngiven the lower preferential prices according to Standard III(A): Loyalty, Prudence, and Care."
  },
  {
    "id": "jc_ETH_061",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 61,
    "question": "Which of the following is most likely correct regarding the use of social media\naccount?",
    "options": {
      "A": "To promote asset management business, members and candidates can create specific accounts",
      "B": "Members and candidates can keep social media accounts created by their former employers",
      "C": "There is no need for members and candidates to discuss with their employers how profiles"
    },
    "answer": "A",
    "explanation": "Members and candidates may have developed profiles on these platforms that include connections\nwith individuals who are clients of the firm, as well as individuals unrelated to their employer.\nSpecific accounts and user profiles of members and candidates may be created for solely\nprofessional reasons."
  },
  {
    "id": "jc_ETH_062",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 62,
    "question": "When Jefferson Piedmont, CFA, joined Branch Investing, Branch began using a\nquantitative stock selection model Piedmont had developed on his own personal time\nprior to his employment with Branch. One year later when Piedmont left the firm, he\nfound the original copy of the model he had developed in a file at his home and\npresented it to his new employer, who immediately began using the model. According\nto the Standards of Practice Handbook, did Piedmont most likely violate any CFA\nInstitute Standards of Professional Conduct?",
    "options": {
      "A": "No",
      "B": "Yes, because he misappropriated property now belonging to Branch",
      "C": "Yes, because he failed to inform his new employer the model was the same one used by his previous employer."
    },
    "answer": "A",
    "explanation": "Although departing employees may not take employer property when departing [Standard IV(A)–\nDuties to Employers (Loyalty)], the model Piedmont presented to his new employer was not\nBranch’s property. It was created by Piedmont prior to his employment with Branch. The model\nwas not created for Branch in the course of his employment, but was adopted by Branch."
  },
  {
    "id": "jc_ETH_063",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 63,
    "question": "Rex Leopold, CFA, is a financial advisor. Leopold plans to leave his current employer\nto start his own competing business. During non-business hours, and before giving\nnotice of termination to his current employer, Leopold undertakes preparations to start\nhis own firm, including procuring the appropriate regulatory approvals, leasing office\nspace, and hiring an office manager. Has Leopold most likely violated the Standards?",
    "options": {
      "A": "No",
      "B": "Yes, the Standard relating to loyalty.",
      "C": "Yes, the Standard relating to misconduct."
    },
    "answer": "A",
    "explanation": "According to Standard IV (A), Loyalty, “does not preclude members or candidates from entering\ninto an independent business while still employed, [but] members and candidates who plan to\nengage in independent practice for compensation must notify their employer and describe the\ntypes of services they will render to prospective independent clients, the expected duration of the\nservices, and the compensation for the services. Members and candidates should not render\nservices until they receive consent from their employer to all of the terms of the arrangement.\n'Practice' means any service that the employer currently makes available for remuneration.\n'Undertaking independent practice' means engaging in competitive business, as opposed to making\npreparations to begin such practice.” Additionally, “[a] departing employee is generally free to\nmake arrangements or preparations to go into a competitive business before terminating the\nrelationship with his or her employer as long as such preparations do not breach the employee's\nduty of loyalty.” Thus, Leopold is free to prepare for his competing business, but not to start\ncompeting, or undertaking competitive activity, or violate his duty of loyalty. Therefore, he did not\nviolate the Standard relating to loyalty. With respect to Standard I (D), Misconduct, “Members and\nCandidates must not engage in any professional conduct involving dishonesty, fraud, or deceit or\ncommit any act that reflects adversely on their professional reputation, integrity, or competence.”\nThere is nothing in this case to suggest a violation of this Standard because members are free to\nprepare for a competing business and it is not an example of dishonesty, fraud, or deceit."
  },
  {
    "id": "jc_ETH_064",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 64,
    "question": "Jefferson Piedmont, CFA, a portfolio manager for Park Investments, plans to manage\nthe portfolios of several family members in exchange for a percentage of each\nportfolio's profits. Because his family members have extensive portfolios requiring\nsubstantial attention, they have requested that Piedmont provide the services outside of\nhis employment with Park. Piedmont notifies his employer in writing of his prospective\noutside employment. Two weeks later, Piedmont begins managing the family members'\nportfolios. By managing these portfolios, which of the following CFA Institute\nStandards of Professional Conduct has Piedmont violated? 2015Mock",
    "options": {
      "A": "Conflicts of Interest",
      "B": "Additional Compensation",
      "C": "Both Additional Compensation and Conflicts of Interest"
    },
    "answer": "C",
    "explanation": "According to Standard IV(B) and Standard VI(A), members should disclose all potential conflicts\nof interest, should disclose the substantial time involved in managing family accounts and, when\nengaging in independent practice for compensation, should not render services until receiving\nwritten consent from all parties."
  },
  {
    "id": "jc_ETH_065",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 65,
    "question": "When Abdullah Younis, CFA, was hired as a portfolio manager at an asset management\nfirm two years ago, he was told he could allocate his work hours as he saw fit. At that\ntime, Younis served on the board of three non-public golf equipment companies and\nmanaged a pooled investment fund for several members of his immediate family.\nYounis was not compensated for his board service or for managing the pooled fund.\nYounis's investment returns attract interest from friends and co-workers who persuade\nhim to include their assets in his investment pool. Younis recently retired from all board\nresponsibilities and now spends more than 80% of his time managing the investment\npool for which he charges non-family members a management fee. Younis has never told his employer about any of these activities. To comply with the CFA Institute\nStandards of Professional Conduct with regard to his business activities over the past\ntwo years, Younis would least likely be required to disclose which of the following to\nhis employer? ★2014Mock",
    "options": {
      "A": "Family investment pool management",
      "B": "Board activities",
      "C": "Non-family member management fees"
    },
    "answer": "B",
    "explanation": "Golf equipment is a business independent of the financial services industry such that any board\nobligations would not likely be considered a conflict of interest requiring disclosure according to\nStandard IV(B): Additional Compensation Arrangements. Standard IV(B) requires members and\ncandidates to obtain permission from their employer before accepting compensation or other\nbenefits from third parties for the services that might create a conflict with their employer's\ninterests. Managing investments for family and non-family members could likely create a conflict\nof interest for Younis's employer and should be disclosed to his employer."
  },
  {
    "id": "jc_ETH_066",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 66,
    "question": "According to the recommended procedures for compliance with the Standard relating\nto additional compensation arrangements, a member should make an immediate written\nreport specifying the proposed compensation arrangements:",
    "options": {
      "A": "only to her supervisor",
      "B": "only to her supervisor and to her firm's compliance officer",
      "C": "to her supervisor, to her firm's compliance officer, and to her clients."
    },
    "answer": "B",
    "explanation": "According to the recommended procedures for compliance with Standard IV(B), Additional\nCompensation Arrangements, “Members and candidates should make an immediate written\nreport to their supervisor and compliance officer specifying any compensation they propose to\nreceive for services...”"
  },
  {
    "id": "jc_ETH_067",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 67,
    "question": "Francesca Ndenda, CFA, and Grace Rutabingwa work in the same department for New\nAge Managers, with Rutabingwa reporting to Ndenda. Ndenda learns that Rutabingwa\nreceived a Notice of Enquiry from the Professional Conduct Program at CFA Institute\nregarding a potential cheating violation when she sat for the CFA exam in June. As\nRutabingwa's supervisor, Ndenda is afraid that Rutabingwa's behavior will be seen as a\nviolation of the Code and Standards. Does Ndenda most likely have cause for concern?\n(1906百题)",
    "options": {
      "A": "Yes",
      "B": "No, because her responsibilities do not apply",
      "C": "No, not until Rutabingwa is found guilty of cheating"
    },
    "answer": "B",
    "explanation": "A supervisor's responsibilities relate to detecting and preventing violations by anyone subject to\ntheir supervision or authority regarding activities they supervise. Ndenda had no way of detecting\nand/or preventing Rutabingwa from cheating during the CFA exam, if in fact that is what she did,\nbecause it was an event she did not attend."
  },
  {
    "id": "jc_ETH_068",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 68,
    "question": "Mariam Musa, CFA, head of compliance at Dunfield Brokers, questions her colleague\nOmar Kassim, a CFA candidate and a research analyst, about his purchase of shares in\na company for his own account immediately before he publishes a \"buy\"\nrecommendation. He defends his actions by stating he has done nothing wrong because\nDunfield does not have any personal trading policies in place. The CFA Institute Standards of Professional Conduct were most likely violated by: (1912)",
    "options": {
      "A": "only Musa",
      "B": "only Kassim",
      "C": "both Musa and Kassim"
    },
    "answer": "C",
    "explanation": "Both Musa and Kassim violated the Standards of Professional Conduct. Musa violated Standard\nIV(C)–Responsibilities of Supervisors by not ensuring policies were in place to prevent violations\nof the Standards of Professional Conduct (in this case, Standard VI(B)–Priority of Transactions)\nby someone subject to her supervision. As the head of compliance, Musa supervised Kassim and\nmust meet her supervisory responsibilities outlined in the Standards of Professional Conduct.\nKassim violated Standard VI(B)–Priority of Transactions because he did not give sufficient\npriority to Dunfield's clients before trading on his recommendation."
  },
  {
    "id": "jc_ETH_069",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 69,
    "question": "Madeline Smith, CFA, was recently promoted to senior portfolio manager. In her new\nposition, Smith is required to supervise three portfolio managers. Smith asks for a copy\nof her firm's written supervisory policies and procedures but is advised that no such\npolicies are required by regulatory standards in the country where Smith works.\nAccording to the Standards of Practice Handbook, Smith's most appropriate course of\naction would be to: ★2017Mock",
    "options": {
      "A": "require her firm to adopt the CFA Institute Code of Ethics and Standards of Professional Conduct.",
      "B": "decline to accept supervisory responsibility until her firm adopts procedures to allow her to adequately exercise such responsibility.",
      "C": "require the employees she supervises to adopt the CFA Institute Code of Ethics and Standards of Professional Conduct."
    },
    "answer": "B",
    "explanation": "According to guidance for Standard (IV(C), if a member cannot fulfill supervisory responsibilities\nbecause of the absence of a compliance system or because of an inadequate compliance system,\nthe member should decline in writing to accept supervisory responsibility until the firm adopts\nreasonable procedures to allow the member to adequately exercise such responsibility."
  },
  {
    "id": "jc_ETH_070",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 70,
    "question": "Eileen Fisher, CFA, has been a supervisory analyst at SL Advisers for the past 10 years.\nRecently, one of her analysts was found to be in violation of the CFA Institute\nStandards of Professional Conduct. Fisher has placed limits on the analyst's activities\nand is now monitoring all of his investment activities. Although SL did not have any\ncompliance procedures up to this point, to avoid future violations, Fisher has put in\nplace procedures industry standards. Did Fisher most likely violate any CFA Institute\nStandards of Professional Conduct? 2016Mock",
    "options": {
      "A": "No, because she is taking steps to implement compliance procedures that are more than adequate.",
      "B": "Yes",
      "C": "No, because she has taken steps to ensure the violations will not be repeated by the analyst"
    },
    "answer": "B",
    "explanation": "Under Standard IV(C)–Responsibility of Supervisors, a member should exercise reasonable\nsupervision by establishing and implementing compliance procedures in place prior to the\npossibility of any violation occurring, which has not been done in this case."
  },
  {
    "id": "jc_ETH_071",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 71,
    "question": "Kim Klausner, CFA, monitors several hundred employees as head of compliance for a\nlarge investment advisory firm. Klausner has always ensured that his company's\ncompliance program met or exceeded those of its competitors. Klausner, who is going\non a long vacation, has delegated his supervisory responsibilities to Sue Chang.\nKlausner informs Chang that her responsibilities include detecting and preventing\nviolations of any capital market rules and regulations and the CFA Institute Standards\nof Professional Conduct. Klausner least likely violated the CFA Institute Standards of\nProfessional Conduct by failing to instruct Chang to also consider: ★2014Mock",
    "options": {
      "A": "industry standards",
      "B": "firm policies",
      "C": "legal restrictions."
    },
    "answer": "A",
    "explanation": "The requirement under Standard IV(C): Responsibilities of Supervisors does not include any\nreference to industry standards. Standard IV(C) requires supervisors to instruct those subordinate\nto them to whom supervision is delegated about detection methods to prevent violations of laws,\nrules, regulations, firm policies, and the CFA Institute Code and Standards."
  },
  {
    "id": "jc_ETH_072",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 72,
    "question": "Kirsten Kelso, CFA, is a research analyst at an independent research firm. Kelso is part\nof a team of analysts who focus on the automobile industry. Recently, Kelso disagreed\nwith two research sell recommendations written by her team, even though she felt\nconfident the research process was properly conducted. In a webcast open to all\ninstitutional but not retail clients, Kelso states, \"Even though my name is on the sell\nreports, these stocks are a buy in part because sales and share prices for both auto\ncompanies will rise significantly because of strong demand for their vehicles.\" Kelso's\nactions would least likely violate which of the following CFA Institute Standards of\nProfessional Conduct?2017Mock",
    "options": {
      "A": "Communication with Clients",
      "B": "Diligence and Reasonable Basis",
      "C": "Fair Dealing"
    },
    "answer": "B",
    "explanation": "The recommendation is based on a reasonable and adequate research process, so the analyst could\nfollow the research team's opinion, as required by Standard V(A)–Diligence and Reasonable\nBasis."
  },
  {
    "id": "jc_ETH_073",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 73,
    "question": "Rodney Rodrigues, CFA, is responsible for identifying professionals to manage\nspecific asset classes for his firm. In selecting external advisers, Rodrigues reviews the\nadviser's investment process, established code of ethics, the quality of the published\nreturn information, and the compliance and integrated control framework of the\norganization. In completing his review, Rodrigues most likely violated the CFA\nInstitute Standards of Professional Conduct with regard to his due diligence on:\n★2017Mock",
    "options": {
      "A": "internal control procedures",
      "B": "adherence to strategy.",
      "C": "performance measures"
    },
    "answer": "B",
    "explanation": "Standard V(A): Diligence and Reasonable Basis applies to the level of review necessary to select\nan external adviser or subadviser and would at minimum include reviewing the adviser's\nadherence to its stated strategy."
  },
  {
    "id": "jc_ETH_074",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 74,
    "question": "Barry Cannon is the lead quantitative analyst at a Hedge Fund. He found some\nintriguing research that can be used in his model through an internet blog, run by\nExpert CFA. Under the pressure of his company, Barry includes these online research\nfactors to his new model without further research and recommends it to several fund\nmanagers. Did Cannon violate the CFA Institute Code and Standards? 讲义case 改编",
    "options": {
      "A": "Yes, related to Diligence and Reasonable Basis",
      "B": "Yes, related to Independence and Objectivity",
      "C": "No"
    },
    "answer": "A",
    "explanation": "Cannon has violated Standard V(A)-diligence and reasonable basis by failing to have a reasonable\nbasis for the new recommendations made to the portfolio managers. Barry should fully test the\nfactors put into his model and determine the effect on the model before he make recommendation\nfor it."
  },
  {
    "id": "jc_ETH_075",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 75,
    "question": "Wouter Duyck, CFA, is the sole proprietor of an investment advisory firm serving\nseveral hundred middle class retail clients. Duyck claims to be different from his\ncompetitors because he conducts research himself. He discloses that to simplify the\nmanagement of all these accounts he has created a recommended list of stocks, from\nwhich he selects investments for all of his clients based on their suitability. Duyck’s\nrecommended list of stocks is obtained from his primary broker, who has completed\ndue diligence on each stock. Duyck’s recommended list least likely violates which of\nthe following CFA Institute Standards of Professional Conduct? (Mock 2018)",
    "options": {
      "A": "Fair Dealing",
      "B": "Misrepresentation",
      "C": "Diligence and Reasonable Basis"
    },
    "answer": "A",
    "explanation": "A is correct because Standard III(B)–Fair Dealing concerns the fair treatment of clients when\nmaking investment recommendations or taking investment action, but there is no indication that\nthe advisor has discriminated against any clients with regard to his recommendations as he invests\nall clients in the same universe of stocks. The advisor has violated Standard I(C)–\nMisrepresentation with his research, which is not independently created and instead relies upon\ninformation provided by his broker. This is contrary to the advisor telling clients he does his own\nindependent investment research. In addition, the advisor has violated Standard V(A)–Diligence\nand Reasonable Basis, as he has not made reasonable and diligent efforts to determine if the third\nparty’s research is sound."
  },
  {
    "id": "jc_ETH_076",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 76,
    "question": "William Wong, CFA, is an equity analyst with Hayswick Securities. Based on his\nfundamental analysis, Wong concludes that the stock of a company he follows, Nolvec\nInc., is substantially undervalued and will experience a large price increase. He delays\nrevising his recommendation on the stock from “hold” to “buy” to allow his brother to\nbuy shares at the current price. Wong is least likely to have violated the CFA Institute\nStandards of Professional Conduct related to:",
    "options": {
      "A": "duty to clients",
      "B": "reasonable basis",
      "C": "priority of transactions."
    },
    "answer": "B",
    "explanation": "There is nothing to suggest that Wong does not have a reasonable basis for his conclusion related\nto Nolvec [Standard V(A)]."
  },
  {
    "id": "jc_ETH_077",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 77,
    "question": "Colin Caldwell, CFA, is the chief investment officer of Northwest Mutual Fund, whose\ninvestment objective is to invest in fixed income emerging market securities. Caldwell\nallocates the fund’s assets primarily to bonds of commodity producers in emerging\nmarkets and invests in a combination of several different investments to ensure an\nacceptable level of risk. The allocation is clearly disclosed in all fund communications.\nHigh volatility in the commodities markets at the start of the year makes Caldwell\npessimistic about returns, so he shifts the fund into emerging market and U.S. government securities, positions he maintains at the end of the year. This change is\nnoted in the next annual report to fund shareholders. Caldwell’s investment change\nleast likely violated the CFA Institute Code of Ethics and Standards of Professional\nConduct concerning: 2012Mock",
    "options": {
      "A": "Diversification",
      "B": "Communication with clients",
      "C": "Investments outside his mandate"
    },
    "answer": "A",
    "explanation": "The investment officer has invested in a combination of several different investments to ensure an\nacceptable level of risk rather than having all assets in a single investment, and he has sought a\nreasonable amount of diversification. However, the shift into emerging market and U.S.\ngovernment securities was communicated to clients in the annual report and not on an ongoing\nbasis, in violation of Standard V(B) Communication with Clients and Prospective Clients.\nAdditionally, the investment officer has not followed the investment style previously\ncommunicated to fund investors (i.e., to invest in fixed income emerging market securities),\nspecifically, when he invested in U.S. government securities, a violation of Standard III (C)\nSuitability."
  },
  {
    "id": "jc_ETH_078",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 78,
    "question": "Which of the following statements concerning requirements under Standard V(B)–\nCommunication with Clients and Prospective Clients is least likely accurate? This\nstandard requires members and candidates to: 2017Mock",
    "options": {
      "A": "divulge the number of investment related personnel responsible for external communication",
      "B": "distinguish between fact and opinion in the presentation of investment analysis and recommendations.",
      "C": "disclose the basic format and general principles of the investment process"
    },
    "answer": "A",
    "explanation": "Standard V(B)–Communication with Clients and Prospective Clients does not limit the type or\nnumber of staff responsible for external communication."
  },
  {
    "id": "jc_ETH_079",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 79,
    "question": "Agnes Trimbach, CFA, works at an investment firm that serves individual investors.\nTrimbach recommends the purchase of German government bonds to a client. She tells\nthe client: “The government guarantees that you will receive the promised principal\nand interest on the bonds. In addition, interest rate fluctuations could add to your gains\nor cause losses.” Has Trimbach most likely violated the Standards?",
    "options": {
      "A": "No",
      "B": "Yes, the Standard relating to misrepresentation",
      "C": "Yes, the Standard relating to communication with clients and prospective clients"
    },
    "answer": "A",
    "explanation": "Trimbach has not violated Standard I (C), Misrepresentation, which “does not prohibit members\nand candidates from providing clients with information on investment products that have\nguarantees built into the structure of the product itself or for which an institution has agreed to\ncover any losses.” Here, Trimbach is simply stating that the government is guaranteeing the\nprincipal and interest, which is not a misrepresentation.\nNor has Trimbach violated Standard V (B), Communication with Clients and Prospective Clients.\nMembers are required to “distinguish between fact and opinion in the presentation of investment\nanalyses and recommendations.” Trimbach stated two facts (guaranteed principal and interest, as\nwell as consequences of interest rate fluctuations) and did not represent an opinion as fact and\ntherefore did not violate the Standard."
  },
  {
    "id": "jc_ETH_080",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 80,
    "question": "Arshani Madan, CFA, develops a product that selects mutual funds based on historical\ndata. Madan tests her methodology and produces simulated performance results. The\npromotional material for the product does not indicate that the results are simulated.\nMadan has violated the Standards relating:",
    "options": {
      "A": "only to performance presentation",
      "B": "only to communication with clients and prospective clients",
      "C": "both to performance presentation and communication with clients and prospective clients."
    },
    "answer": "C",
    "explanation": "Standard III(D), Performance Presentation, “requires members and candidates to provide credible\nperformance information to clients and prospective clients and to avoid misstating performance or\nmisleading clients and prospective clients about the investment performance of members or\ncandidates or their firms. This standard encourages full disclosure of investment performance data\nto clients and prospective clients.” By not disclosing that the results related to the product were\nsimulated Madan has violated Standard III(D). Also, according to Standard V(B), Communication\nwith Clients and Prospective Clients, members must “[d]isclose to clients and prospective clients\nthe basic format and general principles of the investment processes they use to analyze\ninvestments, select securities, and construct portfolios and must promptly disclose any changes\nthat might materially affect those processes.” By not disclosing the use of simulated results,\nMadan has also violated Standard V(B)."
  },
  {
    "id": "jc_ETH_081",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 81,
    "question": "Guillermo Sandoval, CFA, owns an asset management firm with offices downtown, To\nminimize rent expenses, each year Sandoval ships the previous year’s research records\nto a nearby warehouse. There, the reports are digitized and stored in both electronic and\nhard-copy forms. After five years, all paper copies are destroyed and only electronic\ncopies are retained. Are Sandoval’s record-retention procedures in compliance with the\nCFA Institute Standards of Practice? 2010Mock",
    "options": {
      "A": "Yes",
      "B": "No, because he did not retain the copies in his offices",
      "C": "No, because he failed to retain the original documents"
    },
    "answer": "A",
    "explanation": "The Standards do not require on-site storage."
  },
  {
    "id": "jc_ETH_082",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 82,
    "question": "Gina, CFA, is an equity analyst. She recently left her job at Provo Capital (PC) to join\nHensley Investments (HI). Gina obtains the express consent of PC to take one of her\nhistorical research reports with her. At HI, she diligently updates and publishes the\nreport. Afterwards, she re-creates supporting records from memory for record keeping\npurposes. Has Gina violated the Standards?",
    "options": {
      "A": "No",
      "B": "Yes, by publishing the updated research report",
      "C": "Yes, by re-creating supporting records from memory."
    },
    "answer": "C",
    "explanation": "According to Standard V (C), Record Retention, a member must not re-create supporting records\nfrom memory. Standard V(C), Record Retention, states the member or candidate cannot use\nhistorical recommendations or research reports created at the previous firm because the supporting\ndocumentation is unavailable. For future use, the member or candidate must re-create the\nsupporting records at the new firm with information gathered through public sources or directly\nfrom the covered company and not from memory or sources obtained at the previous employer."
  },
  {
    "id": "jc_ETH_083",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 83,
    "question": "Umi Grabbo, CFA, is a highly regarded portfolio manager for Atlantic Advisors, a\nmid-sized mutual fund firm investing in domestic securities. She has watched the\nhedge fund boom and on numerous occasions suggested her firm creates such a fund.\nSenior management has refused to commit resources to hedge funds. Attracted by\npotential higher fees associated with hedge funds, Grabbo and several other employees\nbegin development of their own hedge fund to invest in international securities. Grabbo\nand her colleagues are careful to work on the fund development only on their own time. Because Atlantic management thinks hedge funds are a fad, she does not inform her\nsupervisor about the hedge fund creation. According to the Standards of Practice\nHandbook, Grabbo should most likely address which one of the Codes and Standards\nimmediately? 2017Mock",
    "options": {
      "A": "Disclosure of Conflicts",
      "B": "Additional Compensation Arrangements",
      "C": "Priority of Transactions"
    },
    "answer": "A",
    "explanation": "According to Standard VI(A) Disclosure of Conflicts, Grabbo should disclose to her employer her\nhedge fund development because this activity could possibly interfere with her responsibilities at\nAtlantic. In setting up a hedge fund, Grabbo was not acting for the benefit of her employer. She\nshould have informed Atlantic she wanted to organize the hedge fund and come to some mutual\nagreement on how this process would occur."
  },
  {
    "id": "jc_ETH_084",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 84,
    "question": "Heidi Katz is a CFA candidate and an analyst at a pension consulting firm. Her father is\na major shareholder and managing director at Saturn Partners, a large hedge fund.\nWhen assisting in an alternative manager search for a pension client, Katz plans to\nrecommend Saturn's market-neutral strategy because she believes it meets all of the\npension plan's criteria. Given this situation, the best course of action for Katz is to:\n2016Mock",
    "options": {
      "A": "disclose the potential conflict to the pension client when discussing this recommendation",
      "B": "disclose the potential conflict to her employer and follow their guidance regarding disclosure",
      "C": "not present this strategy to the client and recommend another strategy"
    },
    "answer": "A",
    "explanation": "Standard VI(A) requires disclosure of conflicts but does not prohibit members from making\nrecommendations as long as the potential conflicts are appropriately disclosed."
  },
  {
    "id": "jc_ETH_085",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 85,
    "question": "Adira Badaw, CFA, who owns a research and consulting company, is an independent\nboard member of a leading cement manufacturer in a small local market. Because of\nBadawi's expertise in the cement industry, a foreign cement manufacturer looking to\nenter the local market has hired him to undertake a feasibility study. Under what\ncircumstances can Badawi most likely undertake the assignment without violating the\nCFA Institute Code of Ethics and Standards of Professional Conduct? ★2016Mock",
    "options": {
      "A": "He makes full disclosure to both companies",
      "B": "He signs confidentiality agreements with both companies",
      "C": "He receives written permission from the local company"
    },
    "answer": "A",
    "explanation": "Making full and fair disclosure of all matters that could reasonably be expected to impair one's\nindependence and objectivity or interfere with respective duties to one's clients is required by\nStandard VI(A)–Disclosure of Conflicts."
  },
  {
    "id": "jc_ETH_086",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 86,
    "question": "Ian O'Sullivan, CFA, is the owner and sole employee of two companies, a public\nrelations firm and a financial research firm. The public relations firm entered into a\ncontract with Mallory Enterprises to provide public relations services, with O'Sullivan\nreceiving 40,000 shares of Mallory stock in payment for his services. Over the next 10\ndays, the public relations firm issued several press releases that discussed Mallory's\nexcellent growth prospects. O'Sullivan, through his financial research firm, also\npublished a research report recommending Mallory stock as a \"buy.\" According to the\nCFA Institute Standards of Professional Conduct, O'Sullivan is most likely required to\ndisclose his ownership of Mallory stock in: 2016Mock",
    "options": {
      "A": "the press releases only",
      "B": "both the press release and the research report",
      "C": "the research report only"
    },
    "answer": "B",
    "explanation": "Members should disclose all matters that reasonably could be expected to impair the member’s\nobjectivity as outlined in StandardⅠ(B), and StandardⅥ(A)."
  },
  {
    "id": "jc_ETH_087",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 87,
    "question": "Johannes Meir, CFA, is a compliance officer for Family Estate Planning, LLC, a\nprivate wealth consulting firm. Many of his colleagues have family members who have\nstarted their own retail businesses. Some of Meir’s colleagues have been asked by\nrelatives to serve as non-executive directors or advisors to their companies. Meir should most likely recommend which of the following policies to ensure compliance\nwith the CFA Institute Standards?",
    "options": {
      "A": "Prohibit employees from becoming directors or advisors",
      "B": "Require employees to declare all income sources annually",
      "C": "Require employees to declare all outside business interests"
    },
    "answer": "C",
    "explanation": "Standard VI(A) requires the disclosure of conflicts. For Meir to understand what potential\nconflicts of interest employees may have with the firm and with their clients, he would need to\nknow the outside interests of each staff member. The staff members themselves may not know\nenough about the company and its clients to disclose those interests that would present a potential\nconflict. Therefore, it may be best to have all employees declare their outside business interests on\nan annual basis so Meir can make the determination as to what outside business interests need to\nbe disclosed to clients."
  },
  {
    "id": "jc_ETH_088",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 88,
    "question": "Several years ago, Leo Peek, CFA, co-founded an investment club. The club is fully\ninvested but has not actively traded its account for at least a year and does not plan to\nresume active trading of the account. Peek's employer requires an annual disclosure of\nemployee stock ownership. Peek discloses all of his personal trading accounts but does\nnot disclose his holdings in the investment club. Peek's actions are least likely to be a\nviolation of which of the CFA Institute Standards of Professional Conduct? 2017Mock",
    "options": {
      "A": "Misrepresentation",
      "B": "Transaction priority",
      "C": "Conflicts of interest"
    },
    "answer": "B",
    "explanation": "There is no indication that the investment club is trading ahead of clients. See Standard VI(B)."
  },
  {
    "id": "jc_ETH_089",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 89,
    "question": "Margie Germainne, CFA, is a risk management consultant who has been asked by a\nsmall investment bank to recommend policies to prevent bank employees from front\nrunning client orders. These clients generally invest in one or more of the bank's large\ncap equity unit trusts. To ensure compliance with the CFA Institute Standards of\nProfessional Conduct, Germainne should least likely recommend which of the\nfollowing? Employees should be restricted from trading: ★2016Mock",
    "options": {
      "A": "equity-related securities",
      "B": "without prior permission",
      "C": "during established time periods"
    },
    "answer": "A",
    "explanation": "Although Standard VI(B)–Priority of Transactions is designed to prevent any potential conflict of\ninterest or the appearance of a conflict of interest with respect to personal transactions, it does not\nban employees from trading securities. A ban on all equity-related securities could be excessively\nrestrictive to employees and unnecessary if appropriate personal transaction policies and\nprocedures are in place."
  },
  {
    "id": "jc_ETH_090",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 90,
    "question": "Mike, CFA, is a portfolio manager at an investment firm. After comprehensive research,\nMike buys ABC stock for all his clients for whom the investment is suitable. He then\nbuys ABC shares for his brother's fee-paying account. ABC's stock price declines\nsignificantly after a month, resulting in substantial losses for all his clients. Are Mike 's\nactions consistent with the Standards?",
    "options": {
      "A": "Yes",
      "B": "No, Mike's actions are not consistent with the Standard relating to priority of transactions",
      "C": "No, Mike's actions are not consistent with the Standard relating to diligence and reasonable"
    },
    "answer": "B",
    "explanation": "According to Standard VI(B), Priority of Transactions, family accounts that are client accounts\nshould be treated like any other firm account and should neither be given special treatment nor be\ndisadvantaged because of the family relationship. Mike should treat his brother's fee paying\naccount like any other firm account and should not be disadvantaged. Therefore, Mike 's actions\nare not consistent with the Standard relating to priority of transactions."
  },
  {
    "id": "jc_ETH_091",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 91,
    "question": "Referral fee should be updated repeatedly at least:",
    "options": {
      "A": "Annually",
      "B": "Semi-annually",
      "C": "Quarterly"
    },
    "answer": "C",
    "explanation": "Employers should have investment professionals provide to the clients notification of approved\nreferral fee programs at least quarterly."
  },
  {
    "id": "jc_ETH_092",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 92,
    "question": "Jackson Barnes, CFA, works for an insurance company providing financial planning\nservices to clients for a fee. Barnes has developed a network of specialists, including\naccountants, lawyers, and brokers who contribute their expertise to the financial\nplanning process. Each of the specialists is an independent contractor. Each contractor\nbills Barnes separately for the work he or she performs, providing a discount based\nupon the number of clients Barnes has referred. What steps should Barnes take to be\nconsistent with the CFA Institute Standards of Professional Conduct? 2013mock",
    "options": {
      "A": "Have his independent contractors approved by the insurance company",
      "B": "List the consideration he receives from the specialists on monthly client invoices",
      "C": "Inform potential clients about his arrangement with the contractors before they agree to hire"
    },
    "answer": "C",
    "explanation": "The referral arrangements should be disclosed to potential clients “before entry into any formal\nagreement for services” and not after the fact. This allows potential clients to consider whether the\narrangement causes them any potential harm as a result of the arrangement (e.g., higher fees and\npotential conflicts of interests)."
  },
  {
    "id": "jc_ETH_093",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 93,
    "question": "Claus Holm, CFA, directs most of his clients' trades to RRT Company (RRT), despite\nRRT's higher-than-average commissions. In return, RRT refers individual clients to\nHolm for asset management services. Holm does not disclose the arrangement to his\nclients or prospective clients. Holm has most likely violated the Standard(s) relating:",
    "options": {
      "A": "only to referral fees",
      "B": "only to loyalty, prudence, and care",
      "C": "both to referral fees and to loyalty, prudence, and care"
    },
    "answer": "C",
    "explanation": "According to Standard III (A), Loyalty, Prudence and Care, “Conflicts may arise when an\ninvestment manager uses client brokerage to purchase research services, a practice commonly\ncalled 'soft dollars' or 'soft commissions.' A member or candidate who pays a higher brokerage\ncommission than he or she would normally pay to allow for the purchase of goods or services,\nwithout corresponding benefit to the client, violates the duty of loyalty to the client.” Paying\nhigher fees in return for referrals does not represent a corresponding benefit to Holm's clients.\nTherefore, this arrangement violates the duty of loyalty to his clients. In addition, Holm has\nviolated Standard VI (C), Referral Fees, which states \"the responsibility of members and\ncandidates to inform their employer, clients, and prospective clients of any benefit received for\nreferrals of customers and clients.”"
  },
  {
    "id": "jc_ETH_094",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 94,
    "question": "Which of the following relating to conduct as participants in CFA Institute Programs is\nmost likely violate? A candidate:",
    "options": {
      "A": "Expresses opinions regarding CFA Institute in an online forum",
      "B": "tells her brother, after taking the exam, how glad she was that no questions about the binomial model were asked.",
      "C": "publishes on a social media website her disappointment about what she thinks is an overly"
    },
    "answer": "B",
    "explanation": "According to Standard VII (A), Conduct as Participants in CFA Institute Programs, CFA Institute\nprogram rules, regulations, and policies prohibit candidates from disclosing confidential material\ngained during the exam process. Examples of information that cannot be disclosed by candidates\nsitting for an exam include the questions and formulas tested or not tested on the exam. Therefore,\nthe candidate has violated Standard VII (A) by telling her brother how glad she was that no\nquestions about the binomial model were asked."
  },
  {
    "id": "jc_ETH_095",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 95,
    "question": "Pia Nilsson is a sole proprietor investment adviser. An economic recession has reduced\nthe number of clients she advises and caused revenues to decline. As a result, Nilsson\nhas not paid her CFA Institute membership dues for the past two years. When a national\nfinancial publication recently interviewed Nilsson, she indicated that up until two years\nago, she had been a CFA charterholder and a CFA Institute member in good standing.\nIn addition, she stated the completion of the CFA Program enhanced her portfolio\nmanagement skills and enabled her to achieve superior returns on behalf of her clients.\nWhich of Nilsson's actions most likely violated the CFA Institute Standards of\nProfessional Conduct? ★ 2017Mock",
    "options": {
      "A": "Nonpayment of CFA Institute membership dues",
      "B": "Indicating that being a CFA charterholder has enhanced her portfolio management skills",
      "C": "Attributing her superior returns to participation in the CFA Program"
    },
    "answer": "C",
    "explanation": "It is a violation of Standard VII(B)–Reference to CFA Institute, the CFA Designation, and the CFA\nProgram to claim that the CFA charter helped her to achieve superior returns."
  },
  {
    "id": "jc_ETH_096",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 96,
    "question": "Vishal Chandarana, an unemployed research analyst, recently registered for the CFA\nLevel I exam. After two months of intense interviewing, he accepts a job with a stock\nbrokerage company in a different region of the country. Chandarana posts on a blog\nhow being a CFA candidate really helped him get a job. He also notes how relieved he\nwas when his new employer did not ask him about being fired from his former\nemployer. Which CFA Institute Standards of Professional Conduct did Chandarana\nleast likely violate? 2015Mock",
    "options": {
      "A": "Loyalty to Employers",
      "B": "Reference to CFA Institute, the CFA Designation, and the CFA Program",
      "C": "Misconduct."
    },
    "answer": "B",
    "explanation": "There is no evidence Chandarana violated Standard VII(B)–Reference to CFA Institute, the CFA\nDesignation, and the CFA Program with regard to his being a CFA candidate. Specifically,\nChandarana does not overstate his competency or imply he will achieve superior performance as a\nresult of his CFA designation. It does appear, however, Chandarana did not act with integrity when\nhe hid information that could potentially harm his new employer's reputation, thus violating\nStandard I(D)–Misconduct and Standard IV(A)–Loyalty."
  },
  {
    "id": "jc_ETH_097",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 97,
    "question": "David Donnigan enrolled to take the Level II CFA examination in the current year,\nhowever he did not take the exam. Donnigan advised his employer he passed Level II.\nSubsequently, he registered to take the Level II exam the next year. Which CFA\nInstitute Standard of Professional Conduct did Donnigan least likely violate?",
    "options": {
      "A": "Duty to employer",
      "B": "Professional misconduct",
      "C": "Referencing Candidacy in the CFA Program"
    },
    "answer": "C",
    "explanation": "Because as he registered to take the exam in the next year he still qualifies to state he is a\ncandidate in the CFA Program. He would not, however, be authorized to reference that he is a\nLevel III candidate and if asked would need to specify that he is a Level II candidate."
  },
  {
    "id": "jc_ETH_098",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 98,
    "question": "Jeffrey Jones passed the Level I CFA examination in 1997 and the Level II examination\nin 2009. He is not currently enrolled for the Level III examination. According to the\nCFA Institute Standards of Professional Conduct, which of the following is the most\nappropriate way for Jones to refer to his participation in the CFA Program?",
    "options": {
      "A": "Jeffrey Jones, CFA (expected 2014)",
      "B": "Candidate in the CFA Institute CFA Program",
      "C": "Passed Level II of the CFA examination in 2009"
    },
    "answer": "C",
    "explanation": "Because no designation exists for someone who has passed Level I, Level II, or Level III of the\nCFA exam [Standard VII(B)]. Persons who have passed a certain level of the exam may state that\nthey have completed that level. A person can only state he is a Candidate if he is currently enrolled\nin the CFA Program. It is also an improper reference to use “expected” a part of the designation."
  },
  {
    "id": "jc_ETH_099",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 99,
    "question": "In cases where applicable local laws governing calculation and presentation of\ninvestment performance conflict with the GIPS standards, firms are: (1912)",
    "options": {
      "A": "required to comply with local regulations and make full disclosure of the conflict to claim",
      "B": "unable to claim GIPS compliance in cases where local regulations prohibit accurate",
      "C": "required to calculate and maintain two sets of performance data in order to claim GIPS"
    },
    "answer": "A",
    "explanation": "In cases where applicable local laws governing calculation and presentation of investment\nperformance conflict with the GIPS standards, firms must comply with local regulations and fully\ndisclose the conflict in the compliant presentation."
  },
  {
    "id": "jc_ETH_100",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 100,
    "question": "The Global Investment Performance Standards least likely require: 2015Mock",
    "options": {
      "A": "nondiscretionary portfolios to be included in composites",
      "B": "non-fee-paying portfolios to be excluded in the returns of appropriate composites",
      "C": "composites to be defined according to similar investment objectives and/or strategies."
    },
    "answer": "A",
    "explanation": "Composites (Standard IV – Composites) must be defined according to similar investment\nobjectives and/or strategies. Terminated portfolios must be included in the historical returns of\nappropriate composites, and only fee-paying portfolios are to be included in composites.\nNon-discrectionary portfolios must not be included in a firm's composites."
  },
  {
    "id": "jc_ETH_101",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 101,
    "question": "Which of the following is least likely a requirement of the GIPS standards? Firms are\nrequired to: (1912)",
    "options": {
      "A": "have their performance records verified by an independent third party",
      "B": "include all discretionary, fee-paying portfolios in at least one composite",
      "C": "present a minimum of five years of annual investment performance compliant with GIPS"
    },
    "answer": "A",
    "explanation": "Firms are encouraged to pursue independent verification from a third party on a firm-wide basis,\nverification is not an obligation."
  },
  {
    "id": "jc_ETH_102",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 102,
    "question": "Who is most likely responsible for claiming and maintaining compliance with the CFA\nInstitute Global Investment Performance Standards (GIPS®)?",
    "options": {
      "A": "The firm claiming compliance",
      "B": "Independent verification firms",
      "C": "The performance measurement department"
    },
    "answer": "A",
    "explanation": "Firms that claim compliance with the GIPS standards are responsible for their claim of compliance\nand for maintaining that compliance.\nAn independent party is not responsible for the claim or for maintaining compliance. Independent\nthird-party verifiers can be voluntarily hired by the firm claiming compliance to verify\ncompliance.\nGIPS compliance is the responsibility of the firm claiming compliance and is not done on a\ndepartment or on an individual basis."
  },
  {
    "id": "jc_ETH_103",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 103,
    "question": "Fundamental asset managers claim compliance with the CFA Institute Global\nInvestment Performance Standards (GIPS®) and manage both discretionary and\nnondiscretionary segregated accounts. When constructing a single composite for the\nfirm, Juma Dzuya includes all discretionary, fee-paying segregated accounts with both\nvalue and growth strategies. Does the composite constructed by Dzuya most likely\nmeet GIPS criteria?",
    "options": {
      "A": "Yes",
      "B": "No, because of dissimilar investment strategies",
      "C": "No, because nondiscretionary segregated accounts are not included"
    },
    "answer": "B",
    "explanation": "A composite must include all actual, fee-paying, discretionary portfolios managed in accordance\nwith the same investment mandate, objective, or strategy. By including both the value and growth\nportfolios, the composite is made up of portfolios with different investment mandates or strategies."
  },
  {
    "id": "jc_ETH_104",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 104,
    "question": "The GIPS® standards were most likely developed for the benefit of:",
    "options": {
      "A": "prospective clients",
      "B": "middle-office operations",
      "C": "broker/dealers"
    },
    "answer": "A",
    "explanation": "The GIPS standards benefit asset managers and their prospective clients and asset owners and\ntheir oversight bodies. GIPS reports allow prospective clients to know that the track record of a\nGIPS-compliant firm is complete and fairly presented."
  },
  {
    "id": "jc_ETH_105",
    "source": "JC_ETH",
    "subject": "职业道德",
    "subjectEn": "Ethics",
    "num": 105,
    "question": "When making performance presentations to prospective clients, a GIPS®-compliant\nfirm should least likely do which of the following?",
    "options": {
      "A": "Selectively report its top account performance",
      "B": "Include the account performance of former clients",
      "C": "Report performance history for all market cycles under review Solutions  10. Ethics and Professional Standards"
    },
    "answer": "A",
    "explanation": "When a firm complies with GIPS standards, it cannot selectively choose its top account\nperformances while excluding weaker-performing accounts. It must include all fee-paying\ndiscretionary accounts managed to a similar investment mandate, objective, or strategy."
  },
  {
    "id": "jc_FSA_001",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 1,
    "question": "Providing information about the performance and financial position of companies so\nthat users can make economic decisions best describes the role of:",
    "options": {
      "A": "auditing",
      "B": "financial reporting",
      "C": "financial statement analysis"
    },
    "answer": "B",
    "explanation": "The role of financial reporting by companies is to provide information about a company’s\nperformance, financial position, and changes in financial position that is useful to a wide range of\nusers in making economic decisions.\nThe role of financial statement analysis is to use financial reports prepared by companies,\ncombined with other information, to evaluate the past, current, and potential performance and\nfinancial position of a company for the purpose of making investment, credit, and other economic\ndecisions."
  },
  {
    "id": "jc_FSA_002",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 2,
    "question": "Providing information about the performance of a company, its financial position, and\nchanges in financial position that is useful to a wide range of users is most accurately\ndescribed as the role of:",
    "options": {
      "A": "financial reporting",
      "B": "the audit report",
      "C": "financial statement analysis."
    },
    "answer": "A",
    "explanation": "The role of financial reporting is to provide information about the performance of a company, its\nfinancial position, and changes in financial position that is useful to a wide range of users in\nmaking economic decisions.\nAudit reports express an opinion about the fair presentation of the financial statements.\nThe role of financial statement analysis is to take the financial reports and evaluate the past,\ncurrent, and prospective performance and financial position of a company for the purpose of\nmaking investment, credit, and other economic decisions."
  },
  {
    "id": "jc_FSA_003",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 3,
    "question": "Information about material events and uncertainties would best be found in:",
    "options": {
      "A": "footnotes",
      "B": "the proxy statement",
      "C": "management’s discussion and analysis"
    },
    "answer": "C",
    "explanation": "This is a component of management’s discussion and analysis.\nManagement's commentary [also known as management's report, operating and financial review,\nand Management's Discussion and Analysis (MD&A)] is one of the most useful sections of the\nannual report.\nFinancial statement notes (footnotes), provide further details about the information summarized in\nthe financial statements.\nProxy statements are issued to shareholders when there are matters that require a shareholder vote."
  },
  {
    "id": "jc_FSA_004",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 4,
    "question": "Which of the following reports is the least common to be submitted to the US SEC?",
    "options": {
      "A": "Annual report",
      "B": "Form 10-K",
      "C": "Proxy statement"
    },
    "answer": "A",
    "explanation": "Annual report is not a requirement of the US SEC. Both 10-K and proxy statement are required by\nthe US SEC. Proxy statements are prepared and distributed to shareholders on matters that are to\nbe put to a vote at shareholder meetings."
  },
  {
    "id": "jc_FSA_005",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 5,
    "question": "Assume U.S. GAAP applies unless otherwise noted. Which of the following statements\nbest describes the level of accuracy provided by a standard audit report?",
    "options": {
      "A": "There is reasonable assurance that the financial statements contain no errors.",
      "B": "There is full assurance that the financial statements are free of material errors",
      "C": "There is reasonable assurance that the financial statements are fairly presented"
    },
    "answer": "C",
    "explanation": "Audits provide reasonable assurance that the financial statements are fairly presented, meaning\nthat there is a high degree of probability that they are free of material error, fraud or illegal acts."
  },
  {
    "id": "jc_FSA_006",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 6,
    "question": "In the audit report, an additional paragraph that explains an exception to an accounting\nstandard is best described as a(n):",
    "options": {
      "A": "adverse opinion",
      "B": "qualified opinion",
      "C": "disclaimer of opinion."
    },
    "answer": "B",
    "explanation": "A qualified opinion is one in which there is some scope limitation or exception to accounting\nstandards that is described in additional explanatory paragraphs."
  },
  {
    "id": "jc_FSA_007",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 7,
    "question": "In the financial analysis framework, common-size financial statements are typically the\noutput of which step?",
    "options": {
      "A": "Collect data",
      "B": "Analyze/interpret data",
      "C": "Process data"
    },
    "answer": "C",
    "explanation": "A is incorrect. The financial statements are obtained in the collect data step, but not converted into\ncommon-size statements until the process step.\nB is incorrect. Preparing common-size financial statements is part of the process data stage, after\nwhich the analyst will analyze/interpret the processed data.\nC is correct. Preparing common-size financial statements is part of the process data step."
  },
  {
    "id": "jc_FSA_008",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 8,
    "question": "In which phase of the financial statement analysis framework do the updated reports and\nrecommendations occur?",
    "options": {
      "A": "Follow-up",
      "B": "Analyze/interpret the processed data",
      "C": "Develop and communicate conclusions and recommendations"
    },
    "answer": "A",
    "explanation": "A is correct. The follow-up phase involves gathering information and repeating the analysis to\ndetermine whether it is necessary to update reports and recommendations."
  },
  {
    "id": "jc_FSA_009",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 9,
    "question": "Assume U.S. GAAP applies unless otherwise noted. Which of the following is least\nlikely to be classified as a financial statement element?",
    "options": {
      "A": "Revenue",
      "B": "Liability",
      "C": "Net income"
    },
    "answer": "C",
    "explanation": "Net income is not an element of the financial statements, but the net result of revenues less\nexpenses. The elements are: assets, liabilities, owners’ equity, revenue and expenses."
  },
  {
    "id": "jc_FSA_010",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 10,
    "question": "At the start of the year, a company's capital contributed by owners and retained earnings\naccounts had balances of $10,000 and $6,000, respectively. During the year, the\nfollowing events took place:\nNet income earned $4,000\nInterest paid on debt $500\nRepayment of long-term debt $1,000\nProceeds from shares issued $2,000\nDividends paid $600\nThe end-of-year owners' equity is closest to:",
    "options": {
      "A": "$19,900",
      "B": "$19,400",
      "C": "$21,400."
    },
    "answer": "C",
    "explanation": "Start-of-year capital contributed by owners $10,000\nAdditional shares issued $2,000\nInitial retained earnings $6,000\nNet income $4,000\nLess dividends paid (600)\nIncrease in retained earnings $3,400 $3,400\nEnding owners’ equity $21,400"
  },
  {
    "id": "jc_FSA_011",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 11,
    "question": "Before adjusting accounting entries, a liability and a cash has been occurred in the\nbalance sheet. This process is most likely to be:",
    "options": {
      "A": "an unearned revenue",
      "B": "a prepaid expense",
      "C": "an accrued expense."
    },
    "answer": "A",
    "explanation": "The process has recognized as a liability, with cash has been received, but the transaction haven’t\noccurred. So this should be recognized as an unearned revenue."
  },
  {
    "id": "jc_FSA_012",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 12,
    "question": "The International Financial Reporting Standards (IFRS) Conceptual Framework\nidentifies fundamental qualitative characteristics that make financial information useful.\nWhich of the following is least likely to be one of these characteristics?",
    "options": {
      "A": "Faithful representation",
      "B": "Relevance",
      "C": "Materiality"
    },
    "answer": "C",
    "explanation": "The two fundamental qualitative characteristics that make financial information useful are\nrelevance and faithful representation. Materiality relates to the level of detail of the information\nneeded to achieve relevance."
  },
  {
    "id": "jc_FSA_013",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 13,
    "question": "Under International Financial Reporting Standards (IFRS), which of the following is\nmost likely one of the general features underlying the preparation of financial statements?",
    "options": {
      "A": "Understandability",
      "B": "Timeliness",
      "C": "Consistency"
    },
    "answer": "C",
    "explanation": "Consistency is one of the general features underlying the preparation of financial statements based\non IFRS.\nUnderstandability is one of the qualitative characteristics of financial statements under IFRS\nframework for the preparation and presentation of financial statements. It is not a general feature.\nTimeliness is one of the qualitative characteristics of financial statements under IFRS framework\nfor the preparation and presentation of financial statements. It is not a general feature."
  },
  {
    "id": "jc_FSA_014",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 14,
    "question": "Under the International Accounting Standards Board's (IASB's) Conceptual Framework,\none of the qualitative characteristics of useful financial information is that different\nknowledgeable users would agree that the information is a faithful representation of the\neconomic events that it is intended to represent. This characteristic is best described as:",
    "options": {
      "A": "comparability",
      "B": "verifiability",
      "C": "understandability."
    },
    "answer": "B",
    "explanation": "Under the IASB’s Conceptual Framework, verifiability means that different knowledgeable and\nindependent users would agree that the information presented faithfully represents the economic\nevents that it is intended to represent."
  },
  {
    "id": "jc_FSA_015",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 15,
    "question": "An artists’ cooperative sells its artwork on a consignment basis through a local art\ngallery. The cooperative should most likely recognize revenue when the art gallery:",
    "options": {
      "A": "signs the contract",
      "B": "fulfills related obligations regarding the sale of the artwork",
      "C": "determines the amount related to the obligations"
    },
    "answer": "B",
    "explanation": "Revenue is recognized by the cooperative when the art gallery fulfills related obligations because\nthat is the point at which the risks and rewards transfer from the cooperative to a third party and\nthe amount of revenue is measurable."
  },
  {
    "id": "jc_FSA_016",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 16,
    "question": "An example of an expense classification by function is:",
    "options": {
      "A": "tax expense",
      "B": "interest expense",
      "C": "cost of goods sold"
    },
    "answer": "C",
    "explanation": "Cost of goods sold is a classification by function. The other two expenses represent classifications\nby nature."
  },
  {
    "id": "jc_FSA_017",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 17,
    "question": "A company sells a two-year service contract for €400. Based on historical patterns, the\ncompany expects to incur 25% of service costs in the first year of the contract and the\nremainder in the second year. The amount of revenue the company recognizes in the\nfirst year is closest to:",
    "options": {
      "A": "€100",
      "B": "€420",
      "C": "€200."
    },
    "answer": "A",
    "explanation": "Service revenues are recognized by reference to the stage of completion of the service contract.\nHistorical patterns provide evidence that 25% of the services performed under the contract are\nincurred during the contract’s first year. As such, only 25% of the contract revenue would be\nrecognized in the first year:\nTotal contract value €400\nStage of completion at end of first year 25%\nRevenue recognized in first year €100"
  },
  {
    "id": "jc_FSA_018",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 18,
    "question": "Which of the following statement is least likely a non-operating item for a\nmanufacturing company?",
    "options": {
      "A": "Receiving dividends from investments classified as available-for-sale",
      "B": "Paying interest on subordinated debentures",
      "C": "Recording bad debt expense for accounts receivables"
    },
    "answer": "C",
    "explanation": "Bad debt expense is an operating expense. Alternatively, it cannot be classified as non-operating\nitems for a manufacturing firm."
  },
  {
    "id": "jc_FSA_019",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 19,
    "question": "If practical, changes in accounting policies should be reported:",
    "options": {
      "A": "retrospectively",
      "B": "prospectively",
      "C": "retrospectively and prospectively."
    },
    "answer": "A",
    "explanation": "companies may be permitted to adopt new standards prospectively, but changes in accounting\npolicies are reported through retrospective application unless it is impractical to do so."
  },
  {
    "id": "jc_FSA_020",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 20,
    "question": "Assume U.S. GAAP applies unless otherwise noted. Two companies are identical\nexcept for their accounting treatment of R&D costs. One company expenses all such\ncosts immediately, while the other capitalizes a portion of the costs. Compared with the\ncompany that capitalizes costs, the company that expenses immediately will least likely:",
    "options": {
      "A": "earn a lower return on assets",
      "B": "have lower financial leverage",
      "C": "report lower cash flow from operations in the statement of cash flows."
    },
    "answer": "B",
    "explanation": "Companies that capitalize R&D costs report those expenditures in CFI; companies that expense\nR&D costs report those expenditures in CFO. Companies that expensed will report a higher\nexpense, lower NI,and then a lower equity,therefore, it would incur a worse financial leverage."
  },
  {
    "id": "jc_FSA_021",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 21,
    "question": "Under IFRS, BAURU, S.A., a Brazilian corporation, borrows capital from a local bank\nto finance the construction of its manufacturing plant. The loan has the following\nconditions:\nBorrowing date 1 January 2009\nAmount borrowed 500 million Brazilian real (BRL)\nAnnual interest rate 14 percent\nTerm of the loan 3 years, Annual payment of interest only.\nPayment method Principal amortization is due at the end of the loan term.\nThe construction of the plant takes two years, during which time BAURU earned BRL\n10 million by temporarily investing the loan proceeds. Which of the following is the\namount of interest related to the plant construction (in BRL million) that can be\ncapitalized in BAURU's balance sheet?（原版书Reading30）",
    "options": {
      "A": "130",
      "B": "140",
      "C": "210"
    },
    "answer": "A",
    "explanation": "Borrowing costs can be capitalized under IFRS until the tangible asset is ready for use. Also,\nunder IFRS, income earned on temporarily investing the borrowed monies decreases the amount\nof borrowing costs eligible for capitalization. Therefore, Total capitalized interest = (500 million ×\n14% × 2 years)- 10 million = 130 million."
  },
  {
    "id": "jc_FSA_022",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 22,
    "question": "Which of the following expenses could be capitalized?",
    "options": {
      "A": "Advertising",
      "B": "R&D",
      "C": "Software development costs"
    },
    "answer": "C",
    "explanation": "Costs incurred to develop software for sale are expensed as incurred until the product earns\ntechnological feasibility, after which costs are capitalized under both IFRS and U.S. GAAP."
  },
  {
    "id": "jc_FSA_023",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 23,
    "question": "JOOVI Inc. has recently purchased and installed a new machine for its manufacturing\nplant. The company incurred the following costs: (原版书)\nPurchase price $12,980\nFreight and insurance $1,200\nInstallation $700\nTesting $100\nMaintenance staff training costs $500\nThe total cost of the machine to be shown on JOOVI's balance sheet is closest to:",
    "options": {
      "A": "$14,180",
      "B": "$14,980",
      "C": "$15,480"
    },
    "answer": "B",
    "explanation": "Only costs necessary for the machine to be ready to use can be capitalized. Therefore, Total\ncapitalized costs = 12,980 + 1,200 + 700 + 100 = $14,980."
  },
  {
    "id": "jc_FSA_024",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 24,
    "question": "After reading the financial statements and footnotes of a company that follows IFRS, an\nanalyst identified the following intangible assets: (原版书)\n⚫ Product patent expiring in 40 years;\n⚫ Copyright with no expiration date; and\n⚫ Goodwill acquired 2 years ago in a business combination.\nWhich of these assets is an intangible asset with a finite useful life?\nProduct Patent Copyright Goodwill",
    "options": {
      "A": "Yes Yes No",
      "B": "Yes No No",
      "C": "Yes Yes Yes"
    },
    "answer": "B",
    "explanation": "A product patent with a defined expiration date is an intangible asset with a finite useful life. A\ncopyright with no expiration date is an intangible asset with an indefinite useful life. Goodwill is\nno longer considered an intangible asset under IFRS and is considered to have an indefinite useful\nlife."
  },
  {
    "id": "jc_FSA_025",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 25,
    "question": "Assume U.S. GAAP applies unless otherwise noted. An analyst gathered the following\ninformation about a company:\nShares of common stock 1,500,000\nNet income for the year $3,000,000\nPar value of convertible bonds with a 4% coupon rate $20,000,000\nPar value of cumulative preferred stock with a 7% dividend rate $4,000,000\nTax rate 25%\nThe bonds were issued at par and can be converted into 600,000 common shares. All\nsecurities were outstanding for the entire year. Dilutive earnings per share for the\ncompany are closest to:",
    "options": {
      "A": "$1.81",
      "B": "$1.58",
      "C": "$1.36"
    },
    "answer": "B",
    "explanation": "Preferred stock dividends of $280,000 (0.07× 4,000,000) should be deducted from net income to\nderive amount available for common shareholders: $2,720,000 = (3,000,000 - 280,000).\nBasic EPS = $2,720,000/1,500,000 = $1.81 per share.\nDilutive EPS would consider the convertible bonds if they were dilutive. Interest on the bonds\nwould be $800,000 and the after-tax add back to net income would be $800,000 (0.75) or\n$600,000. Dilutive EPS would be $3,320,000/2,100,000 shares assuming conversion = $1.58 per\nshare."
  },
  {
    "id": "jc_FSA_026",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 26,
    "question": "Bingo Ltd. had 900,000 average shares outstanding during all of 2022. During 2022,\nBingo also had 20,000 options outstanding with exercise prices of $16 each. The\naverage stock price of Bingo during 2022 was $20. For purposes of computing diluted\nearnings per share, how many shares would be used in the denominator?",
    "options": {
      "A": "920,000",
      "B": "807,200",
      "C": "904,000"
    },
    "answer": "C",
    "explanation": "With stock options, the treasury stock method must be used. Under that method, the company\nwould receive $320,000 (20,000 × $16) and would repurchase 16,000 shares ($320,000/$20). The\nshares for the denominator would be:\nShares outstanding 900,000\nOptions exercises 20,000\nTreasury shares purchased (16,000)\nDenominator 904,000"
  },
  {
    "id": "jc_FSA_027",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 27,
    "question": "An analyst gathered the following information about a company:\n⚫ 1,000,000 common shares outstanding from the beginning of the year.\n⚫ Earnings of $1,250,000.\n⚫ 1,000 preferred stocks, which pay fixed dividend of 7% each year, and its face\nvalue is $1000 for each preferred stock\n⚫ For preferred stocks, 700 preferred stocks can be converted into 25 shares each,\nand these stocks are outstanding as of the beginning of the year.\n⚫ The tax rate is 40%.\nThe company’s diluted EPS is closest to: (模考题改编，1906考题回顾)",
    "options": {
      "A": "$1.21",
      "B": "$1.18",
      "C": "$1.15"
    },
    "answer": "B",
    "explanation": "Preferred stock dividends of $70,000 (0.07× 1,000,000)\n𝑁𝑒𝑡 𝑖𝑛𝑐𝑜𝑚𝑒−𝑝𝑟𝑒𝑓𝑒𝑟𝑟𝑒𝑑 𝑑𝑖𝑣𝑖𝑑𝑒𝑛𝑑𝑠\nBEPS=\n𝑊𝑒𝑖𝑔ℎ𝑡𝑒𝑑 𝑎𝑣𝑒𝑟𝑎𝑔𝑒 𝑛𝑢𝑚𝑏𝑒𝑟 𝑜𝑓 𝑐𝑜𝑚𝑚𝑜𝑛 𝑠ℎ𝑎𝑟𝑒𝑠 𝑜𝑢𝑡𝑠𝑡𝑎𝑛𝑑𝑖𝑛𝑔\n1,250,000−70,000\n= =1.18\n1,000,000\n𝑁𝑒𝑡 𝑖𝑛𝑐𝑜𝑚𝑒−D +converted preferred dividends\n𝑝𝑠\nDEPS=\nWACSO+number of shares converted\n1,250,000−70,000+49,000\n= =1.2079\n1,000,000+700×25\nBecause DEPS for the company is 1.21, which is larger than its BEPS, which is 1.18, so the\npreferred stock is an anti-dilutive stock, DEPS for the company is 1.18."
  },
  {
    "id": "jc_FSA_028",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 28,
    "question": "In order to compute the diluted EPS for the company, which one of the security will\nleast likely to influence the numerator? （1906考题回顾）",
    "options": {
      "A": "Convertible debt",
      "B": "Convertible preferred stocks",
      "C": "Stock options."
    },
    "answer": "C",
    "explanation": "adjusted income available for common shares\nDiluted EPS=\nweighted avg. common & potential common shares out\n[NI- div ]+[ div ]+[interest ](1-t)\npreferred convertible convertible\npreferred debt\n=\nWACSO+[shares ]+[shares ]+[shares ]\nconversion of conversion of issuable from\nconv. pfd. shares conv. debt stock opt.\nBased on the formula shown above, to calculate DEPS, both convertible debt and convertible\npreferred stocks will influence both the numerator and denominators.\nTreasury stock method is used for stock options, and only denominator is influenced to calculate\nDEPS."
  },
  {
    "id": "jc_FSA_029",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 29,
    "question": "Which of the following is not included in other comprehensive income?",
    "options": {
      "A": "Foreign currency translation adjustment on a foreign subsidiary",
      "B": "Unrealized G/L on derivatives contracts accounted for as cash flow hedges",
      "C": "Unrealized G/L on hold-for-maturity securities"
    },
    "answer": "C",
    "explanation": "Foreign currency translation adjustment on a foreign subsidiary;\nUnrealized G/L on derivatives contracts accounted for as cash flow hedges;\nUnrealized G/L on available for sale securities;\nCertain costs of a company’s defined benefit post-retirement plans that are not recognized in the\ncurrent period."
  },
  {
    "id": "jc_FSA_030",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 30,
    "question": "The following data are available on a company for the current year:\nMetric £ thousands\nTotal comprehensive income 345,000\nDividends paid 45,000\nDividend declared 80,000\nEnding retained earnings 985,000\nOpening retained earnings 643,000\nThe company will most likely report other comprehensive income (OCI) (in £ thousands)\nas a:",
    "options": {
      "A": "loss of 42,000",
      "B": "loss of 77,000",
      "C": "gain of 422,000"
    },
    "answer": "B",
    "explanation": "Metric £ thousands\nEnding retained earnings 985,000\nLess: opening retained earnings (643,000)\nAdd back: dividends declared 80,000\nNet income 422,000\nComprehensive income 345,000\nOCI = Comprehensive income − net income -77,000"
  },
  {
    "id": "jc_FSA_031",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 31,
    "question": "Assume a company’s beginning shareholders’ equity is €210 million, its net income for\nthe year is €30 million, its cash dividends for the year are €13 million, and there was no\nissuance or repurchase of common stock. The company’s actual ending shareholders’\nequity is €247 million. What amount has bypassed the net income calculation by being\nclassified as other comprehensive income?",
    "options": {
      "A": "€0",
      "B": "€13 million",
      "C": "€20 million."
    },
    "answer": "C",
    "explanation": "If the company’s actual ending shareholders’ equity is €247 million, then €10 million [€247–\n(€210 + €30 – €13)] has bypassed the net income calculation by being classified as other\ncomprehensive income."
  },
  {
    "id": "jc_FSA_032",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 32,
    "question": "Resources controlled by a company as a result of past events are: (原版书)",
    "options": {
      "A": "equity",
      "B": "assets",
      "C": "liabilities"
    },
    "answer": "B",
    "explanation": "Assets are resources controlled by a company as a result of past events."
  },
  {
    "id": "jc_FSA_033",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 33,
    "question": "Which of the following statements is most accurate?（协会模拟考试题）",
    "options": {
      "A": "A classified balance sheet arises when in an auditor's opinion the financial statements",
      "B": "Non-controlling interest on the balance sheet represents a position the company owns in other",
      "C": "Treasury stock is non-voting and receives no dividends."
    },
    "answer": "C",
    "explanation": "Treasury stock is non-voting and does not receive dividends."
  },
  {
    "id": "jc_FSA_034",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 34,
    "question": "Assume U.S. GARP applies unless otherwise noted. For financial assets classified as\navailable for sale, how are unrealized gains and losses reflected in shareholders’ equity?",
    "options": {
      "A": "They are not recognized",
      "B": "They flow through retained earnings",
      "C": "Other comprehensive income."
    },
    "answer": "C",
    "explanation": "For financial assets classified as available for sales, unrealized gains and losses are not recorded\non the income statement but do appear on the balance sheet.\nShareholders’ equity is adjusted through a separate line item for valuation gains and losses termed\n“other comprehensive income."
  },
  {
    "id": "jc_FSA_035",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 35,
    "question": "Based on the above information about a company’s trade receivables, the bad debt expense (in millions) for 2014 is closest to:\n(£ millions) 2014 2013\nAccounts receivables, gross 6,620 4,840\nAllowance for doubtful accounts 92 56\nWrite-offs during the year 84",
    "options": {
      "A": "£36",
      "B": "£84",
      "C": "£120"
    },
    "answer": "C",
    "explanation": "The allowance for doubtful accounts increases by the bad debt expense recognized for the year\nand decreases by the amounts written off during the year.\nBeginning balance allowance £56 million\nPlus bad debt expense ?\nLess write-offs (£84 million)\nEnding balance allowance £92 million\nSolve for bad debt expense = 120"
  },
  {
    "id": "jc_FSA_036",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 36,
    "question": "Trade receivables are:",
    "options": {
      "A": "typically reported at gross value",
      "B": "owed by customers for products and services to be delivered",
      "C": "based on the company’s estimate of amounts that ultimately will be collectible."
    },
    "answer": "C",
    "explanation": "Trade receivables are typically reported at net realizable value, based on estimates of collectability\nTrade receivables are reported net of an allowance for doubtful accounts or at their net realizable\nvalue.\nTrade receivables are amounts owed to a company by its customers for products and services\nalready delivered, not for items with delivery pending."
  },
  {
    "id": "jc_FSA_037",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 37,
    "question": "A conversion of a face value $1 million convertible bond for $1 million of common\nstock would most likely be: （原版书课后题）",
    "options": {
      "A": "reported as a $1 million investing cash inflow and outflow",
      "B": "reported as a $1 million financing cash outflow and inflow",
      "C": "reported as supplementary information to the cash flow statement"
    },
    "answer": "C",
    "explanation": "Non-cash transactions, if significant, are reported as supplementary information, not in the\ninvesting or financing sections of the cash flow statement."
  },
  {
    "id": "jc_FSA_038",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 38,
    "question": "Purchasing other companies’ long-term bonds should be classified as:",
    "options": {
      "A": "operating activities.",
      "B": "investing activities",
      "C": "financing activities"
    },
    "answer": "B",
    "explanation": "Purchasing other companies’ long-term bond generally should be classified as investing activities,\nwhich should be classified as operating activities for financial institutions."
  },
  {
    "id": "jc_FSA_039",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 39,
    "question": "In the statement of cash flows, interest paid by a company is most likely included in:",
    "options": {
      "A": "either the operating or financing section under US GAAP",
      "B": "either the operating or financing section under IFRS",
      "C": "only the financing section under both IFRS and US GAAP"
    },
    "answer": "B",
    "explanation": "US GAAP requires that interest paid be classified as an operating cash flow; IFRS allows interest\npaid to be classified as either an operating or financing activity."
  },
  {
    "id": "jc_FSA_040",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 40,
    "question": "A company recorded the following in Year 1:\nProceeds from issuance of long-term debt €380,000\nPurchase of equipment €210,000\nLoss on sale of equipment €73,000\nProceeds from sale of equipment €150,000\nEquity in earnings of affiliate €17,000\nOn the Year 1 statement of cash flows, the company would report net cash flow from\ninvesting activities closest to:",
    "options": {
      "A": "(€150,000)",
      "B": "(€60,000)",
      "C": "€200,000"
    },
    "answer": "B",
    "explanation": "The only two items that would affect the investing section are the purchase of equipment and the\nproceeds from sale of equipment: (€210,000) + €150,000 = (€60,000). The loss on sale of\nequipment and the equity in earnings of affiliate affect net income but are not cash flows. The\nissuance of debt is a financing cash flow."
  },
  {
    "id": "jc_FSA_041",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 41,
    "question": "On 31 December 2018, a company issued a £30,000 180-day note at 8 percent and used\nthe cash received to pay for inventory and issued £110,000 long-term debt at 11 percent\nannually and used the cash received to pay for new equipment. Which of the following\nmost accurately reflects the combined effect of both transactions on the company’s cash\nflows for the year ended 31 December 2018 under IFRS? Cash flows from:",
    "options": {
      "A": "operations are unchanged",
      "B": "financing increase £110,000",
      "C": "operations decrease £30,000."
    },
    "answer": "C",
    "explanation": "The payment for inventory would decrease cash flows from operations. The issuance of debt (both\nshort-term and long-term debt) is part of financing activities and would increase cash flows from\nfinancing activities by £140,000. The purchase of equipment is an investing activity. Note that the\ntreatment under US GAAP would be the same for these transactions."
  },
  {
    "id": "jc_FSA_042",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 42,
    "question": "An analyst gathered the following information from a company's 2022 financial\nstatements (in $ millions):\nYear Ended 31 December 2021 2022\nNet sales 296.5 384.6\nCost of goods sold (D&A excluded) 157.4 168.3\nAccounts receivable 152.3 155.5\nInventory 66.3 74.8\nAccounts payable 35.5 34.1\nBased only on the information above, the company's 2022 statement of cash flows in the\ndirect format would include amounts (in $ millions) for cash received from customers\nand cash paid to suppliers, respectively, that are closest to:\ncash received from customers cash paid to suppliers",
    "options": {
      "A": "381.4 178.2",
      "B": "387.8 178.2",
      "C": "381.4 175.4"
    },
    "answer": "A",
    "explanation": "Cash received from customers = Sales - increase in accounts receivable = 384.6 – (155.5-152.3) =\n381.4. Cash paid to suppliers = Cost of goods sold + Increase in inventory + decrease in accounts\npayable = 168.3+(74.8-66.3)+(35.5-34.1)=178.2."
  },
  {
    "id": "jc_FSA_043",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 43,
    "question": "Under GAAP, an analyst gathered the following information from a company’s\nfinancial statements. Using indirect method, the company’s operating cash flows are\nclosest to:\nNet income $240\nDecrease in inventory $40\nDepreciation $50\nIncrease in account receivables $20\nDecrease in wages payable $10\nIncrease in unearned revenues $30\nIncrease in PP&E $70 Gains from the sale of a segment $4",
    "options": {
      "A": "$197",
      "B": "$270",
      "C": "$326"
    },
    "answer": "C",
    "explanation": "CFO = Net income + depreciation + delta current liabilities - delta current asset + loss – gains =\n240 + 40 + 50 – 20 – 10 + 30 – 4. Note that the increase in PP&E cannot be classified as cash\nflows from operating activities."
  },
  {
    "id": "jc_FSA_044",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 44,
    "question": "The following items are from a company's cash flow statement.\nClassification of Cash Description Amount\nOperating acFtliovwiti es Cash received from customers (£ t1h1o0u,0sa0n0d s)\nInvesting activities Interest and dividends received 200,000\nFinancing activities Net repayment of revolving credit loan 24,000\nWhich of the following standards and formats did the company most likely use in the\npreparation for its financial statements?（协会模拟考试题改数字）",
    "options": {
      "A": "IFRS, indirect format",
      "B": "Either IFRS or US GAAP, direct format",
      "C": "IFRS, direct format"
    },
    "answer": "C",
    "explanation": "The direct method of cash flow statement presentation shows the specific cash inflows and\noutflows that result in reported cash flow from operating activities (e.g., cash from customers and\nash to suppliers). Companies using IFRS can decide to report interest and dividend receipts as ther\nan investing or operating activity, whereas under US GAAP, they must report such income\nas an operating activity. The listed operating and investment activities indicate that the company\nreports under IFRS using the direct method."
  },
  {
    "id": "jc_FSA_045",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 45,
    "question": "The following annual financial data are available for a company:\n£ millions\nBeginning interest payable 40.9\nCash paid for interest 130.3\nEnding interest payable 58.4\nInterest expense (in millions) for the year is closest to:",
    "options": {
      "A": "137.8",
      "B": "147.8",
      "C": "157.8"
    },
    "answer": "B",
    "explanation": "Interest expense can be determined from the following relationship:\n£ millions\nBeginning interest payable 40.9\nPlus interest expense ?\nMinus cash paid for interest –130.3\nEnding interest payable 58.4\nSolving for interest expense = 147.8"
  },
  {
    "id": "jc_FSA_046",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 46,
    "question": "An analyst gathers the following information from a company’s current financial\nstatements:\nYear Ended 31 December ($ millions) 2023\nRevenue 26,430\nCost of goods sold 12,381\nOperating expenses 9,280\nIncome tax expense 1,727\nNet Income 2,520\nYear Ended 31 December ($ millions) 2023 2022\nAccounts receivable 1,134 1,072\nAccounts payable 4,588 3,274\nInventory 4,246 3,706\nIf the company uses the direct method to prepare its cash flow statement, the cash\nreceived from customers (in $ millions) will be closest to:",
    "options": {
      "A": "26,368",
      "B": "25,296",
      "C": "26,492"
    },
    "answer": "A",
    "explanation": "Accounts receivable increased; therefore, cash collected from customers will be less than reported\nrevenue. Calculations are as follows:\nCalculation $ Millions\nRevenue 26,430\nLess increase accounts receivable 1,134 – 1,072 = 62\nCash received from customers 26,368"
  },
  {
    "id": "jc_FSA_047",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 47,
    "question": "Orange Beverages Plc., a fictitious manufacturer of tropical drinks, reported cost of\ngoods sold for the year of $100 million. Total assets increased by $55 million, but\ninventory declined by $6 million. Total liabilities increased by $45 million, but accounts\npayable decreased by $2 million. How much cash did the company pay to its suppliers\nduring the year?",
    "options": {
      "A": "$96 million",
      "B": "$104 million",
      "C": "$108 million"
    },
    "answer": "A",
    "explanation": "Cost of goods sold of $100 million less the decrease in inventory of $6 million equals purchases\nfrom suppliers of $94 million. The decrease in accounts payable of $2 million means that the\ncompany paid $96 million in cash ($94 million plus $2 million)."
  },
  {
    "id": "jc_FSA_048",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 48,
    "question": "Black Ice, a fictitious sportswear manufacturer, reported other operating expenses of\n$30 million. Prepaid insurance expense increased by $4 million, and accrued utilities\npayable decreased by $7 million. Insurance and utilities are the only two components of\nother operating expenses. How much cash did the company pay in other operating\nexpenses?",
    "options": {
      "A": "$19 million",
      "B": "$33 million",
      "C": "$41 million."
    },
    "answer": "C",
    "explanation": "Other operating expenses of $30 million plus the increase in prepaid insurance expense of $4\nmillion plus the decrease in accrued utilities payable of $7 million equals $41 million."
  },
  {
    "id": "jc_FSA_049",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 49,
    "question": "Silverago Incorporated, an international metals company, reported a loss on the sale of equipment of $2 million in 2010. In addition, the company’s income statement shows\ndepreciation expense of $8 million and the cash flow statement shows capital\nexpenditure of $10 million, all of which was for the purchase of new equipment. Using\nthe following information from the comparative balance sheets, how much cash did the\ncompany receive from the equipment sale? (CFA Level 1 Curriculum, Volume 3)\nBalance Sheet Item 12/31/2009 12/31/2010 Change\nEquipment $100 million $105 million $5 million\nAccumulated depreciation—equipment $40 million $46 million $6 million",
    "options": {
      "A": "$1 million",
      "B": "$2 million",
      "C": "$3 million"
    },
    "answer": "A",
    "explanation": "Ending year net book value is $59 million (=105 –46), and the beginning year net book value is\n$60 million (=100 –40).\nNBV = NBV + purchase – depreciation.\nending beginning\nCash received from equipment sale= NBV + purchase – depreciation - NBV – loss =\nbeginning ending\n60 +10 -8 – 59 - 2 =1 million"
  },
  {
    "id": "jc_FSA_050",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 50,
    "question": "Assume U.S. GAAP applies unless otherwise noted. At the end of the year, a company\nsold equipment for $40,000 cash. The company paid $100,000 for the equipment several\nyears ago and had accumulated depreciation of $60,000 for the equipment at the time of\nsale. All else equal, the equipment sale will result in the company's cash flow from:",
    "options": {
      "A": "investing activities decreasing by $10,000",
      "B": "investing activities increasing by $40,000",
      "C": "operating activities being $40,000 more than net income"
    },
    "answer": "B",
    "explanation": "CFI consist of the inflows and outflows of cash resulting from the acquisition or disposal of long-\nterm assets and certain investments."
  },
  {
    "id": "jc_FSA_051",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 51,
    "question": "In 20X8, a company recorded several transactions under U.S. GAAP. The company\npurchased a new machine to update its manufacturing line for $150,000. During the year,\n$140,000 of convertible preferred stocks were exercised; $24,000 dividends were\nreceived; and $42,000 dividends were paid. The mortgage payment of the company\nincludes $34,000 of principal. The investing cash flows and the financing cash flows of\nthe company were closest to:\nCFI CFF",
    "options": {
      "A": "($10,000) ($42,000)",
      "B": "($150,000) ($42,000)",
      "C": "($150,000) ($76,000)"
    },
    "answer": "C",
    "explanation": "CFI = -purchased of new machine = -150,000\nCFF = -dividends paid – principal paid = -42,000 – 34,000 = -76,000\nConvertible preferred stock – non-cash\nDividends received – operating cash flows"
  },
  {
    "id": "jc_FSA_052",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 52,
    "question": "Copper, Inc., a fictitious brewery and restaurant chain, reported a gain on the sale of\nequipment of $12 million. In addition, the company’s income statement shows\ndepreciation expense of $8 million and the cash flow statement shows capital\nexpenditure of $15 million, all of which was for the purchase of new equipment.\nBalance sheet item 12/31/2017 12/31/2018 Change\nEquipment $100 million $109 million $9 million\nAccumulated depreciation- $30 million $36 million $6 million\nequipment\nUsing the above information from the comparative balance sheets, how much cash did\nthe company receive from the equipment sale?",
    "options": {
      "A": "$12 million",
      "B": "$16 million",
      "C": "$18 million."
    },
    "answer": "B",
    "explanation": "Selling price (cash inflow) minus book value equals gain or loss on sale; therefore, gain or loss on\nsale plus book value equals selling price (cash inflow). The amount of gain is given, $12 million.\nTo calculate the book value of the equipment sold, find the historical cost of the equipment and the\naccumulated depreciation on the equipment.\nHistorical cost of equipment sold = 100+15-109=6 million\nAccumulated depreciation on the equipment sold = 30+8-36=2 million\nTherefore, the book value of the equipment sold was $6 million minus $2 million, or $4 million.\nBecause the gain on the sale of equipment was $12 million, the amount of cash received must\nhave been $16 million."
  },
  {
    "id": "jc_FSA_053",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 53,
    "question": "Based on the following information for Pinkerly Inc., a fictitious company, what are the\ntotal adjustments that the company would make to net income in order to derive\noperating cash flow?\nIncome statement item 12/31/2018\nNet income $30 million\nDepreciation $7 million\nBalance sheet item 12/31/2017 12/31/2018 Change\nAccounts receivable $15 million $30 million $15 million\nInventory $16 million $13 million ($3 million)\nAccounts payable $10 million $20 million $10 million",
    "options": {
      "A": "Add $5 million",
      "B": "Add $21 million",
      "C": "Subtract $9 million."
    },
    "answer": "A",
    "explanation": "To derive operating cash flow, the company would make the following adjustments to net income:\nadd depreciation (a non-cash expense) of $7 million; subtract the decrease in inventory of $3\nmillion; add the increase in accounts payable of $10 million; and subtract the increase in accounts\nreceivable of $15 million. Total additions of $20 million and total subtractions of $15 million\nresult in net total additions of $5 million."
  },
  {
    "id": "jc_FSA_054",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 54,
    "question": "Assume U.S. GAAP applies unless otherwise noted. An analyst gathered the following\nannual information ($ millions) about a company that pays no dividends and has no debt:\nNet income 91.6\nDepreciation 36.4\nLoss on sale of equipment 3.2\nDecrease in accounts receivable 8.4\nIncrease in inventories 10.8\nIncrease in accounts payable 9\nCapital expenditures 14.6\nProceeds from issuance of new shares 17\nThe company's annual free cash flow to equity ($ millions) is closest to:（未知改编）",
    "options": {
      "A": "106.2",
      "B": "116.8",
      "C": "123.2"
    },
    "answer": "C",
    "explanation": "CFO = net income + depreciation + loss on sale of equipment + decrease in accounts receivable -\nincrease in inventories + increase in accounts payable.\nIt would have been deducted in the calculation of net income but the loss is not the cash impact of\nthe transaction (the proceeds received, if any, would be the cash effect) and cash flows related to\nequipment transactions are investing activities, not operating activities.\nCFO = 91.6 + 36.4 + 3.2 + 8.4 –10.8 +9 = $137.8 million; so FCFE = 137.8-14.6=$123.2 million."
  },
  {
    "id": "jc_FSA_055",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 55,
    "question": "An analyst is planning to make a valuation on a privately held company by using a FCF\nModel. In order to determine the free cash flow to all capital suppliers, he collected the\nfollowing data (in million):\nOperating cash flow 500 Interest paid 30\nInvestment in working capital 80\nInvestment in fixed asset 60\nTax rate 30%\nThe free cash flow the analyst is planning to determine is closest to:",
    "options": {
      "A": "440",
      "B": "381",
      "C": "461"
    },
    "answer": "C",
    "explanation": "Free cash flow = CFO + interest paid (1 - tax rate) – investment in fixed asset\n= 500 + 30×0.7– 60 = 461."
  },
  {
    "id": "jc_FSA_056",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 56,
    "question": "Which of the following is an appropriate method of computing free cash flow to the\nfirm?",
    "options": {
      "A": "Add operating cash flows plus capital expenditures and deduct after-tax interest payments",
      "B": "Add operating cash flows plus after-tax interest payments and deduct capital expenditures",
      "C": "Deduct both after-tax interest payments and capital expenditures from operating cash flows"
    },
    "answer": "B",
    "explanation": "Free cash flow to the firm can be computed as operating cash flows plus after-tax interest expense\nless capital expenditures."
  },
  {
    "id": "jc_FSA_057",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 57,
    "question": "If a company capitalizes an expenditure related to capital assets instead of expensing it,\nignoring taxes, the company will most likely report: （协会模拟考试题）",
    "options": {
      "A": "the same free cash flow to the firm (FCFF) in that period",
      "B": "a lower cash flow per share in that period",
      "C": "a higher earnings per share in future periods."
    },
    "answer": "A",
    "explanation": "The FCFF [Cash flow from operations (CFO) + Interest × (1– t) – Capital expenditures] would be\nthe same. CFO and capital expenditures would both increase by the same amount (ignoring taxes).\nTherefore, net effect on FCFF would be zero."
  },
  {
    "id": "jc_FSA_058",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 58,
    "question": "After reviewing the inventory records for Argo, the following cost related to inventory\nwere incurred:\nFixed production overhead $540,000\nDirect material purchased $522,000\nDirect labour cost $153,000\nStorage costs incurred during production $52,000\nStorage cost incurred before deliver to customers $21,500\nNormal waste costs $5,700\nAbnormal waste costs $40,000\nThe inventory value capitalized in the balance sheet of Argo is closest to: （自编）",
    "options": {
      "A": "$1,272,700",
      "B": "$1,294,200",
      "C": "$1,312,700"
    },
    "answer": "A",
    "explanation": "The total capitalized costs include fixed production costs, the direct conversion costs of material\nand labor, storage costs required as part of production, normal waste cost but not abnormal waste\ncosts. $540,000 +$522,000 +$153,000+$52,000+$5,700 = $1,272,700."
  },
  {
    "id": "jc_FSA_059",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 59,
    "question": "Compared to using the weighted average cost method to account for inventory, during a\nperiod in which prices are generally rising, the current ratio of a company using the\nFIFO method would most likely be: （原版书Reading29）",
    "options": {
      "A": "lower",
      "B": "higher",
      "C": "dependent upon the interaction with accounts payable"
    },
    "answer": "B",
    "explanation": "In a rising price environment, inventory balances will be higher for the company using the FIFO\nmethod. Accounts payable are based on amounts due to suppliers, not the amounts accrued based\non inventory accounting."
  },
  {
    "id": "jc_FSA_060",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 60,
    "question": "During the period when inventory’s price is rising, compared to companies using FIFO\nmethod, firms using weighted average cost for inventory would be most likely to report\nlower value for its:",
    "options": {
      "A": "return on sales",
      "B": "inventory turnover",
      "C": "debt-to-equity ratio."
    },
    "answer": "A",
    "explanation": "During the periods of rising prices, compared to FIFO method, weighted average cost method\nresults in a lower inventory value and a higher COGS, so that the net income udner weighted\naverage cost method would have a lower net income. The lower net income lead to a lower return\non sales, as well as a lower retained earnings, so the debt-to-equity ratio under weighted average\nmothod would be higher. The combination of lower inventory and higher COGS would show a\nhigher inventory turnover (COGS/inventory)."
  },
  {
    "id": "jc_FSA_061",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 61,
    "question": "A company that prepares its financial statements using IFRS wrote down its inventory\nvalue by €20,000 at the end of year 1. In year 2, prices increased and the same inventory\nat the end of the year was worth €30,000 more than its value at the end of the prior year.\nWhich of the following statements is most accurate? In year 2, the company’s cost of\nsales：",
    "options": {
      "A": "was unaffected",
      "B": "decreased by €30,000",
      "C": "decreased by €20,000"
    },
    "answer": "C",
    "explanation": "Under IFRS, the recovery of a previous write-down is limited to the amount of the original write-\ndown (€20,000) and is reported as a decrease in the cost of sales."
  },
  {
    "id": "jc_FSA_062",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 62,
    "question": "Compared with using the FIFO (first in, first out) method to account for inventory,\nduring a period of rising prices, which of the following is most likely higher for a\ncompany using LIFO (last in, first out):",
    "options": {
      "A": "Current ratio",
      "B": "Gross margin",
      "C": "Inventory turnover"
    },
    "answer": "C",
    "explanation": "During a period of rising prices, ending inventory under LIFO will be lower than that of FIFO and\ncost of goods sold higher; therefore, inventory turnover (Cost of goods sold/Average inventory)\nwill be higher."
  },
  {
    "id": "jc_FSA_063",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 63,
    "question": "For which of the following inventory valuation methods is the gross profit margin least\nlikely to be the same under both a perpetual inventory system and a periodic inventory\nsystem?",
    "options": {
      "A": "LIFO",
      "B": "Specific identification",
      "C": "FIFO"
    },
    "answer": "A",
    "explanation": "The periodic and perpetual systems result in the same inventory and cost of goods sold values (and\nthus gross profit margin) using both FIFO and specific identification valuation methods, but not\nalways under LIFO."
  },
  {
    "id": "jc_FSA_064",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 64,
    "question": "During a period of rising inventory costs, a company decides to change its inventory\nmethod from FIFO to the weighted average cost method. Under the weighted average\nmethod, which of the following financial metrics will most likely be higher than under\nFIFO?",
    "options": {
      "A": "Current ratio",
      "B": "Number of days in inventory",
      "C": "Debt-to-equity ratio."
    },
    "answer": "C",
    "explanation": "If all else is held constant, in a period of rising costs the ending inventory will be lower under the\nweighted average cost method and the cost of goods sold will be higher (compared to FIFO),\nresulting in lower net income and retained earnings. There will be no impact on the debt level,\ncurrent or long-term. Therefore, the debt-to-equity ratio (Total debt/Total shareholders’ equity)\nwill increase because of the decrease in retained earnings (and lower shareholders’ equity)."
  },
  {
    "id": "jc_FSA_065",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 65,
    "question": "For a manufacturing company, its information is shown in the table below:\n$ million\nEnding inventory (under FIFO) 4.3\nNRV 4.1\nReplacement cost 3.8\nNormal profit margin 0.5\nIf the company is using International Financial Reporting Standards (IFRS) instead of\nUS GAAP, its cost of goods sold (in millions) is most likely:",
    "options": {
      "A": "0.3 higher",
      "B": "0.3 lower",
      "C": "The same"
    },
    "answer": "C",
    "explanation": "(协会模考题改编)\nUnder both IFRS and US GAAP, the inventory would be written down to its net realizable value\n($4.1 million); therefore, the costs of goods sold would be the same. There are some exceptions\nunder US GAAP for inventory valued using the retail method, which would not apply to a\nmanufacturing company or for inventory valued under LIFO."
  },
  {
    "id": "jc_FSA_066",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 66,
    "question": "For a manufacturing company using US GAAP, its information is shown in the table\nbelow:\n$ million\nEnding inventory (under LIFO) 4.3\nNRV 4.1\nReplacement cost 3.8\nNormal profit margin 0.5\nIts cost of goods sold (in millions) will most likely:",
    "options": {
      "A": "increase by 0.2",
      "B": "increase by 0.5",
      "C": "decrease by 0.5"
    },
    "answer": "B",
    "explanation": "Under US GAAP (LIFO + retail method), if NRV- Normal profit margin ＜ Replacement cost ＜\nNRV, the market value = replacement cost.\nTherefore the inventory would be written down to its replacement cost ($3.8 million), loss in value\nis 0.5(=4.3-3.8).\nLoss in value (expense) generally is reflected in the income statement in the cost of goods sold,\nand COGS will increase by 0.5."
  },
  {
    "id": "jc_FSA_067",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 67,
    "question": "Fernando’s Pasta purchased inventory and later wrote it down. The current net realisable\nvalue is higher than the value when written down. Fernando’s inventory balance will\nmost likely be:",
    "options": {
      "A": "higher if it complies with IFRS",
      "B": "higher if it complies with US GAAP",
      "C": "the same under US GAAP and IFRS"
    },
    "answer": "A",
    "explanation": "IFRS require the reversal of inventory write-downs if net realisable values increase; US GAAP do\nnot permit the reversal of write-downs."
  },
  {
    "id": "jc_FSA_068",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 68,
    "question": "Zimt AG wrote down the value of its inventory in 2007 and reversed the write-down in\n2008. Compared to the ratios that would have been calculated if the write-down had\nnever occurred, Zimt's reported 2007:（原版书Reading9）",
    "options": {
      "A": "current ratio was too high",
      "B": "gross margin was too high.",
      "C": "inventory turnover was too high"
    },
    "answer": "C",
    "explanation": "The write-down reduced the value of inventory and increased cost of sales in 2007. The higher\nnumerator and lower denominator mean that the inventory turnover ratio as reported was too high.\nGross margin and the current ratio were both too low."
  },
  {
    "id": "jc_FSA_069",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 69,
    "question": "Under US GAAP, which of the following is least likely a disclosure concerning\ninventory? Information about the:",
    "options": {
      "A": "reversal of any inventory write-down",
      "B": "amount of inventories pledged as security for liabilities",
      "C": "inventory valuation method used"
    },
    "answer": "A",
    "explanation": "A is correct. US GAAP does not allow the reversal of inventory write-downs, therefore it would\nnot be a disclosure.\nB is incorrect. This is a required disclosure of both IFRS and US GAAP.\nC is incorrect. This is a required disclosure of both IFRS and US GAAP."
  },
  {
    "id": "jc_FSA_070",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 70,
    "question": "The reversal of an inventory write-down:",
    "options": {
      "A": "reduces cost of sales",
      "B": "increases other comprehensive income",
      "C": "is permitted under both IFRS and US GAAP."
    },
    "answer": "A",
    "explanation": "In each period subsequent to inventory write-down, “a new assessment of net realisable value is\nmade. Reversal (limited to the amount of original write-down) is required for a subsequent\nincrease in value of inventory previously written down. The reversal of any write-down of\ninventories is recognized as a reduction in cost of sales (reduction in the amount of inventories\nrecognized as an expense).”"
  },
  {
    "id": "jc_FSA_071",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 71,
    "question": "An investor collected a company’s inventory data as follows:\n2009 2008\nCOGS 1200 1430\nLIFO Reserve 800 820\nIf the company used FIFO method to recognize, what would the cost of goods sold be?",
    "options": {
      "A": "1220",
      "B": "1200",
      "C": "1180."
    },
    "answer": "A",
    "explanation": "COGS(FIFO) = COGS(LIFO) – (ending LIFO reserve – beginning LIFO reserve) = 1200 – (800-\n820) = 1220."
  },
  {
    "id": "jc_FSA_072",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 72,
    "question": "Assume U.S. GAAP applies unless otherwise noted. Sipex Corporation uses the LIFO\ninventory method, but most of the other companies in Sipex industry use FIFO. To\nadjust Sipex's ending inventory to the FIFO method, the amount reported for Sipex's\nending inventory should be:",
    "options": {
      "A": "increased by the ending balance in Sipex's LIFO reserve",
      "B": "decreased by the ending balance in Sipex's LIFO reserve",
      "C": "increased by the change in Sipex's LIFO reserve for that period"
    },
    "answer": "A",
    "explanation": "Adding the ending balance in the LIFO reserve to the LIFO inventory would equal the ending\nbalance for inventory on FIFO basis."
  },
  {
    "id": "jc_FSA_073",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 73,
    "question": "Assume U.S. GAAP applies unless otherwise noted. Sauerbraten Corp. reported 2017\nsales ($ in millions) of $4,314 and cost of goods sold of $3,654. Inventories at year-end\n2017 and 2016, respectively, were $1,106 and $1,124. The company uses the LIFO\nmethod for inventory valuation and discloses that if the FIFO inventory valuation\nmethod had been used, inventories would have been $126.6 million and $113.6 million\nhigher in 2017 and 2016, respectively. Compared to the inventory turnover ratio\nreported, if Sauerbraten had exclusively used the FIFO method its inventory turnover\nratio would have been closest to:",
    "options": {
      "A": "2.95",
      "B": "3.28",
      "C": "3.49"
    },
    "answer": "A",
    "explanation": "Inventory turnover is cost of goods sold divided by average inventory. As reported, this was\n$3,654 / $1,115 = 3.28. Under FIFO, cost of goods sold would have been $3,641 and inventory\nwould have been $1,232.6 and $1,237.6 (average $1,235.1). Adjusted inventory turnover would\nthus be 2.95."
  },
  {
    "id": "jc_FSA_074",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 74,
    "question": "An analyst can most accurately identify a LIFO liquidation by observing a(n):",
    "options": {
      "A": "increase in gross margin",
      "B": "decrease in the LIFO reserve",
      "C": "change in inventory out of line with change in sales"
    },
    "answer": "B",
    "explanation": "The most appropriate way to identify a LIFO liquidation is by reviewing the inventory footnotes\nfor a decrease in the LIFO reserve. Although a LIFO liquidation may result in an increase in gross\nmargin or changes in inventory out of line with changes in sales there are other factors that could\nexplain those changes."
  },
  {
    "id": "jc_FSA_075",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 75,
    "question": "An analyst gathers the following information about a company:\n($ thousands) 2014 2013\nSales 2,173 2,080\nEnd-of-year inventories (LIFO) 310 270\nLIFO reserve 77 59\nGross profit margin 0.48 0.47\nUsing end-of-year inventories, if first-in, first-out (FIFO) instead of last-in, first-out\n(LIFO) is used to determine the number of days in inventory on hand for 2014, the\ndifference in days will be greater by an amount closest to:",
    "options": {
      "A": "25",
      "B": "27",
      "C": "13"
    },
    "answer": "B",
    "explanation": "LIFO cost of goods sold (COGS) = (1 – Gross profit margin) × Sales\n= (1 – 0.48) × 2,173 = 1,130.0\nChange in LIFO reserve = LIFO reserve 2014 – LIFO reserve 2013\n= 77 – 59 = 18\nFIFO COGS = LIFO COGS – Change in LIFO reserve\n= 1,130.0 – 18 = 1,112.0\nFIFO inventory = LIFO inventory + LIFO reserve\n= 310 + 77 = 387.\nInventory Turnover Ratio Days in Inventory\nInventory turnover ratio = Days in inventory = 365/Inventory\nCOGS/Inventory turnover ratio\nFIFO 1,112.0/387 = 2.87 365/2.87 = 127.18\nLIFO 1,130.0/310 = 3.65 365/3.65 = 100.0\nDifference 127.1 – 100.0 = 27.1"
  },
  {
    "id": "jc_FSA_076",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 76,
    "question": "An analyst gathers the following information about a company:\n($ thousands) 2014 2013\nSales 2,125 2,003\nEnd-of-year inventories (LIFO) 312 280\nLIFO reserve 82 64\nNet profit margin 4.9% 4.0% If first-in, first-out (FIFO) instead of last-in, first-out (LIFO) is used, the net income (in\n$ thousands) for 2014 will be higher by an amount closest to:",
    "options": {
      "A": "18.0",
      "B": "57.4",
      "C": "12.6."
    },
    "answer": "C",
    "explanation": "Net income (LIFO) = Net profit margin × Sales\n= 0.049 × 2,125 = 104.1\nChange in LIFO reserve = LIFO reserve 2014 – LIFO reserve 2013\n= 82 – 64 = 18\nNet income (FIFO) = LIFO net income + Change in LIFO reserve × (1 – Tax rate)\n= 104.1 + 18 × (1 – 0.30) = 116.7\nIncrease in net income = 116.7 – 104.1 = 12.6\nMore simply, the difference is the change in the LIFO reserve, after tax.\n18 × (1 – 0.3) = 12.6"
  },
  {
    "id": "jc_FSA_077",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 77,
    "question": "A financial analyst is analyzing the result of the sale of a vehicle for $ 65,000 on 31\nDecember 2022. The analyst compiles the following information about the vehicle:\nAcquisition cost of the vehicle $ 100,000\nAcquisition date 1 January 2019\nEstimated residual value at acquisition date $ 10,000\nExpected useful life 9 years\nDepreciation method Straight-line\nThe result of the sale of the vehicle is most likely:（2012原版书后Reading30）",
    "options": {
      "A": "a loss of $5,000",
      "B": "a gain of $5,000",
      "C": "No gain or loss"
    },
    "answer": "B",
    "explanation": "Gain or loss on the sale = Sale proceeds – Carrying amount = 65,000 - [100,000 - (100,000 -\n10,000)/9 years) × 4 years] = 5,000."
  },
  {
    "id": "jc_FSA_078",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 78,
    "question": "Assume U.S. GAAP applies unless otherwise noted. Which of the following adjustments\nto the assumed useful life and assumed salvage value of a company’s assets would most\nlikely decrease the company’s total asset turnover ratio?\nAssumed useful life Assumed salvage value",
    "options": {
      "A": "Longer Lower",
      "B": "Longer Higher",
      "C": "Shorter Lower"
    },
    "answer": "B",
    "explanation": "A longer useful life and higher salvage value are consistent with lower depreciation expense,\nwhich results in a higher net asset value. Asset turnover (Sales/Total assets) would decrease\nbecause sales would be constant while assets would be higher due to smaller depreciation charges."
  },
  {
    "id": "jc_FSA_079",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 79,
    "question": "An analyst has gathered the following information about a company’s capital assets:\nYear ending 2017 2016 2015\nProperty, plant, and equipment €5,000 €5,000 €5,000\nAccumulated depreciation 750 500 250\nNet book value 4,250 4,500 4750\nAs of the end of 2017, the expected remaining life of the assets, in years, is closest to:",
    "options": {
      "A": "6. （协会模拟考试题改编）",
      "B": "17",
      "C": "20"
    },
    "answer": "B",
    "explanation": "The expected remaining useful life of a company’s\n= Net PPE ÷ Depreciation expense.\noverall asset base\nDepreciation expense equals the change in accumulated\n750 – 500 = 250\ndepreciation *\nThe expected remaining useful life 4,250 ÷ 250 = 17 years\n*This is true when there are no asset dispositions or acquisitions, as appears to be the case\nhere because the gross PPE does not change."
  },
  {
    "id": "jc_FSA_080",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 80,
    "question": "At the start of the year, a company acquired new equipment at a cost of €100,000,\nestimated to have a three-year life and a residual value of €10,000. If the company\ndepreciates the asset using the double declining balance method, the depreciation\nexpense that the company will report for the third year is closest to:",
    "options": {
      "A": "€7,407.（协会模拟考试题改编）",
      "B": "€1,111",
      "C": "€6,656"
    },
    "answer": "B",
    "explanation": "Under the double declining balance method, the depreciation rate is 2 × Straight line rate. The\nstraight line rate is 33.3% (i.e., 1/3 years), so the double declining rate is 66.6%, or two-thirds\ndepreciation rate per year. But the asset should not be depreciated below its assumed residual\nvalue in any year.\nDouble Declining Balance Method of Depreciation\nYear Net Book Value at Start of Year Depreciation Net Book Value at End of Year\n1 €100,000 €66,667 €33,333\n2 33,333 22,222 11,111\n3 11,111* 1,111** 10,000\n* Alternative calculation for start of Year 3 net book value:\n€10,000 × (1 – 0.667) × (1 – 0.667) = €1,111.\n** Depreciation cannot be 2/3 × €11,111 = €7,407 because that would reduce book value\nto less than the estimated €10,000."
  },
  {
    "id": "jc_FSA_081",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 81,
    "question": "Using the following information, a Mexican corporation is computing the depreciation\nexpense for a piece of manufacturing equipment that it purchased at the start of the\ncurrent year. The company takes a full year's depreciation in the year of acquisition.\nCost of equipment MXN2,000,000\nEstimated residual value MXN200,000\nExpected useful life 10 years Total productive capacity 5,000,000 units\nProduction during year 800,000 units\nThe depreciation expense (in MXN) will most likely be higher by: （协会模拟考试题）",
    "options": {
      "A": "112,000, using the double-declining method compared with the units-of-production method",
      "B": "140,000, using the units-of-production method compared with the straight-line method",
      "C": "180,000, using the double-declining balance method compared with the straight-line method."
    },
    "answer": "A",
    "explanation": "The difference between the double-declining balance method and the units-of-production method\n(in MXN) is 400,000 – 288,000 = 112,000.\nStraight Line Units of Production Declining Balance\nRate 1/10 5,000,000 units 1/10 × 2 = 20%\nAnnual (2,000,000– (2,000,000 – 200,000)\n0.20 × 2,000,000\nexpense 200,000)/10 × (800,000/5,000,000)\n= 180,000 = 288,000 = 400,000"
  },
  {
    "id": "jc_FSA_082",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 82,
    "question": "Assume U.S. GAAP applies unless otherwise noted. An analyst determined the\nfollowing information concerning Franklin, Inc.’s stamping machine:\nAcquired January 1, 1998\nCost $22 million\nDepreciation straight line method\nEstimated useful life 12 years\nSalvage value $4 million\nAs of December 31, 2004, the stamping machine is expected to generate $1,500,000 per\nyear for five more years and will then be sold for $1,000,000. The stamping machine is:",
    "options": {
      "A": "impaired because its carrying value exceeds expected future cash flows",
      "B": "impaired because expected salvage value has declined",
      "C": "not impaired because annual expected revenue exceeds annual depreciation"
    },
    "answer": "A",
    "explanation": "The carrying value of the stamping machine is its cost less accumulated depreciation. Depreciation\ntaken through 2004 was (($22,000,000 - $4,000,000) / 12×7 =) $10,500,000 so carrying value is\n($22,000,000 - $10,500,000 =) $11,500,000. Because the $11,500,000 carrying value is more than\nexpected future cash flows of ((5×$1,500,000) + $1,000,000 =) $8,500,000, the stamping machine\nis impaired."
  },
  {
    "id": "jc_FSA_083",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 83,
    "question": "The demand of products sold by Argo has been decreased due to the market place\nchange for the company, and this decrease is not expected to recover to the previous\ncondition in the forseeable future. The following information is provided by Argo about\na customer list:\nItem description $ (thousands)\nCarrying value amount 930,000\nUndiscounted expected future cash flows 960,000\nPresent value of expected future cash flows 886,000\nFair value if sold 890,000\nCosts to sell 7,000\nWhich of the following statements is most accurate? As an intangible asset with\nindifinate life, the customer list is impaired:（未知改编）",
    "options": {
      "A": "IFRS only",
      "B": "U.S. GAAP only",
      "C": "both IFRS and U.S. GAAP"
    },
    "answer": "A",
    "explanation": "Under IFRS,the recoverable amount for customer list is the higher of:\n⚫ Value in use, which is the present value of the future cash flows: $886,000.\n⚫ Fair value less costs to sell: $890,000 -7,000 = $883,000.\nThe recoverable amount ($886,000) is lower than the carrying value ($930,000).\nTherefore, the asset is impaired and should be written down to that amount.\nUnder U.S. GAAP, the carrying value of the customer list is lower than undiscounted future cash\nflow, so the customer list is not impaired under US GAAP."
  },
  {
    "id": "jc_FSA_084",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 84,
    "question": "A company that reports in accordance with IFRS does not use the cost model to value its\ninvestment properties and property, plant, and equipment. Information related to an\ninvestment property and a plant is as follows:\nEnd of Year\n€ thousands Carrying Value Fair Value\nInvestment property 1,100 2,000\nPlant 1,200 3,000\nThe impact on its net income for the year will most likely be a gain (in thousands) of:",
    "options": {
      "A": "€900",
      "B": "€1,800",
      "C": "€2,700"
    },
    "answer": "A",
    "explanation": "The fair value model would be used for the investment property, and the €900 thousand gain\nshould be recognized on the company’s income statement. The revaluation model would be used\nfor the plant, and the €1,800 thousand gain should be recognized in the revaluation surplus\naccount on the balance sheet with no impact on net income. Therefore, only the €100 thousand\nwill affect net income."
  },
  {
    "id": "jc_FSA_085",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 85,
    "question": "An analyst is studying the impairment of the manufacturing equipment of WLP Corp. a\nU.K.-based corporation that follows IFRS. He gathers the following information about\nthe equipment: In thousands\nCarrying value of equipment (net book value) £500\nUndiscounted expected future cash flows £550\nFair value £480\nPresent value of expected future cash flows £440\nCosts to sell £50\nThe amount of the impairment loss on WLP Corp.'s income statement related to its\nmanufacturing equipment is closest to (in thousands):",
    "options": {
      "A": "£0",
      "B": "£70",
      "C": "£60"
    },
    "answer": "C",
    "explanation": "Under IFRS, an asset is considered to be impaired when its carrying amount exceeds its\nrecoverable amount (the higher of fair value less cost to sell or value in use).\nFair value less costs to sell: 480 – 50 = 430\nValue in use = Present value of expected future cash flows = 440\nRecoverable amount (higher value of the above two amounts) = 440\nImpairment loss under IFRS = Carrying value (net book value) – recoverable amount\nImpairment loss = 500 – 440 = 60"
  },
  {
    "id": "jc_FSA_086",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 86,
    "question": "An intangible asset with an indefinite useful life is:",
    "options": {
      "A": "not subjected to impairment testing",
      "B": "tested at least annually for impairment",
      "C": "only tested for impairment if there is an indication of impairment."
    },
    "answer": "B",
    "explanation": "\"An intangible asset with an indefinite useful life is not amortised. Instead, at least annually, the\nreasonableness of assuming an indefinite useful life for the asset is reviewed and the asset is tested\nfor impairment.\" \"Intangible assets with indefinite lives are not amortised. Instead, they are\ncarried on the balance sheet at historical cost but are tested at least annually for impairment.\nImpairment exists when the carrying amount exceeds its fair value.\""
  },
  {
    "id": "jc_FSA_087",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 87,
    "question": "An asset recorded at the fair value at purchase at 50 million. During year 2015, the value\nof the asset increased to 52 million, and the company wrote up the asset to the new\nmarket value. In 2016, the asset suffers an impairment and its fair value reduced to 51\nmillion and the company recorded this 1 million loss in the income statement directly.\nWhich of the following model is most likely to be used by the company to record the\nvalue of the asset? （1906押题）",
    "options": {
      "A": "Fair value model",
      "B": "Revaluation model",
      "C": "Historical cost model"
    },
    "answer": "A",
    "explanation": "Under IFRS, an asset can be written up under FV and revaluation model. With the 1 million loss\nrecorded in income statement, the asset was recorded under fair value model.\nUnder IFRS, other comprehensive income includes certain changes in the value of long-lived\nassets that are measured using the revaluation model rather than the cost model."
  },
  {
    "id": "jc_FSA_088",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 88,
    "question": "Under IFRS, Segeo owns several investment properties and these properties are valued\nunder fair value model, based on prevailing rental market. The table shows a summary\nfor the valuation of investment properties:\nInitial cost (acquired in 2019) $50 million\nValue of property revalued at 31 Dec. 2020 $50.25 million\nValue of property revalued at 31 Dec. 2021 $55.75 million\nValue of property revalued at 31 Dec. 2022 $48.25 million\nWhich of the following most accurately describes the accounting treatment for the\ninvestment property owned by Segeo in 2017?",
    "options": {
      "A": "5.25 million charged to OCI, and 1.75 million charged to net income",
      "B": "7.5 million charged to OCI",
      "C": "7.5 million charged to net income"
    },
    "answer": "C",
    "explanation": "For investment properties, the fair value model requires the company to recognize its revaluation\ngains or losses directed to net income, so Segeo should recognize 55.75- 48.25 =7.5 million\ndirectly to net income."
  },
  {
    "id": "jc_FSA_089",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 89,
    "question": "Equipment held for the purpose of producing a company's goods and services may be\nreported using the:",
    "options": {
      "A": "cost model or the fair value model",
      "B": "cost model or the revaluation model",
      "C": "revaluation model or the fair value model."
    },
    "answer": "B",
    "explanation": "“Other long-lived tangible assets (i.e., property considered to be property, plant, and equipment)\nare owner-occupied properties used for producing the company's goods and services or for\nhousing the company's administrative activities.” “The revaluation model is an alternative to the\ncost model for the periodic valuation and reporting of long-lived assets. IFRS permit the use of\neither the revaluation model or the cost model.”"
  },
  {
    "id": "jc_FSA_090",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 90,
    "question": "Fairmont Golf issued fixed rate debt when interest rates were 6 percent. Rates have\nsince risen to 7 percent. Using only the carrying amount (based on historical cost)\nreported on the balance sheet to analyze the company's financial position would most\nlikely cause an analyst to:（原版书）",
    "options": {
      "A": "overestimate fairmont's economic liabilities",
      "B": "underestimate fairmont's economic liabilities",
      "C": "underestimate fairmont's interest coverage ratio"
    },
    "answer": "A",
    "explanation": "When interest rates rise, bonds decline in value. Thus, the carrying amount of the bonds being\ncarried on the balance sheet is higher than the market value. The company could repurchase the\nbonds for less than the carrying amount, so the economic liabilities are overestimated. Because the\nbonds are issued at a fixed rate, there is no effect on interest coverage."
  },
  {
    "id": "jc_FSA_091",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 91,
    "question": "On 1 January 2022 the market rate of interest on a company's bonds is 5 percent and it\nissues a bond with the following characteristics:\nFace value $500 million\nCoupon rate, paid annually 3%\nMaturity date December 31,2031 (10 years)\nIssue price 84.56\nIf the company uses IFRS, its interest expense (in millions) in 2022 is closest to:",
    "options": {
      "A": "$18.46",
      "B": "$21.14",
      "C": "$24.78"
    },
    "answer": "B",
    "explanation": "IFRS recommends the effective interest method for the amortization of bond discounts/premiums.\nThe bond is issued for 0.8456 × 500 = 422.80 million\nInterest expense = 422.80 × 5% = 21.14million"
  },
  {
    "id": "jc_FSA_092",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 92,
    "question": "A company issued a $50,000 seven- year bond for $47,565. The bonds pay 9% per\nannum, and the yield to maturity at issue was 10%. The company uses the effective\ninterest rate method to amortize any discounts or premiums on bonds. After the first year,\nthe yield to maturity on bonds equivalent in risk and maturity to these bonds is 9%. The\namount of the bond discount amortization recorded in the first year is closest to:",
    "options": {
      "A": "$257",
      "B": "$0",
      "C": "$348."
    },
    "answer": "A",
    "explanation": "Interest paid = Coupon rate at issue × Issued amount of bonds = 9% × $50,000 = 4,500\nInterest expense = Market rate at issue × Carrying (book value) of bonds\nAmortization of discount = Interest expense – Interest paid\nB A S E\n47,565 4757 4500 47822\nAmortization of discount= 4757-4500=257"
  },
  {
    "id": "jc_FSA_093",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 93,
    "question": "Oil Exploration LLC paid $45,000 in printing, legal fees, commissions, and other costs\nassociated with its recent bond issue. It is most likely to record these costs on its\nfinancial statements as:（原版书课后题）",
    "options": {
      "A": "an asset under U.S. GAAP and reduction of the carrying value of the debt under IFRS",
      "B": "a liability under U.S. GAAP and reduction of the carrying value of the debt under IFRS",
      "C": "a cash outflow from investing activities under both U.S. GAAP and IFRS"
    },
    "answer": "A",
    "explanation": "Under U.S. GAAP, expenses incurred when issuing bonds are generally recorded as an asset and\namortized to the related expense (legal, etc.) over the life of the bonds. Under IFRS, they are\nincluded in the measurement of the liability. The related cash flows are financing activities."
  },
  {
    "id": "jc_FSA_094",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 94,
    "question": "Comte Industries issues $3,000,000 worth of three-year bonds dated 1 January 2022.\nThe bonds pay interest of 8% annually on 31 December. The market interest rate on\nbonds of comparable risk and term is 6%. The sales proceeds of the bonds are\n$3,160,381. Under the straight-line method, the interest expense in the first year is\nclosest to:",
    "options": {
      "A": "$189,620",
      "B": "$186,540",
      "C": "$184,520."
    },
    "answer": "B",
    "explanation": "Under the straight-line method, the bond premium is amortized equally over the life of the bond.\nThe annual interest payment is $240,000 ($3,000,000 × 8%) and annual amortization of the\npremium under the straight-line method is $53,460 [($3,160,381 – $3,000,000)/3)]. The interest\nexpense is the interest payment less the amortization of the premium ($240,000 – $53,460 =\n$186,540)."
  },
  {
    "id": "jc_FSA_095",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 95,
    "question": "Assume U.S. GAAP applies unless otherwise noted. At the beginning of the year, a\nlessee company enters into a new lease agreement that is correctly classified as a finance\nlease, with the following terms:（未知）\nAnnual lease payments due at the end of the year $100,000\nLease term 5 years\nAppropriate discount rate 12%\nDepreciation method straight-line basis\nEstimated salvage value $0\nWith respect to the effect of the lease on the company’s financial statements in the first\nyear of the lease, which of the following is most accurate? The reduction in the\ncompany’s:",
    "options": {
      "A": "pretax income is $72,096.",
      "B": "cash flow from financing is $56,742",
      "C": "cash flow from operations is $72,096"
    },
    "answer": "B",
    "explanation": "The present value of the lease is $360,477.62. (n = 5, I/Y= 12%, PMT = $100,000) 12% of the\noriginal PV is $43,257.31 and represents the interest component of the payment in the first year.\nThe difference between the annual payment and the interest is the amortization of the lease\nobligation included in cash flow from financing. $100,000 – 43,257.31 = $56,742.69.\nDepreciation is $360,477.62/5 or $72,095.52 so the total reduction in pretax income would be\ninterest plus depreciation or $115,352.83. CFO would be reduced by the amount of the interest\nonly because the depreciation would be added back to determine cash flow from operations."
  },
  {
    "id": "jc_FSA_096",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 96,
    "question": "If a lease is recognized as an operating lease instead of finance lease, the company will\nrecognize higher:",
    "options": {
      "A": "Right of use asset",
      "B": "Lease liability",
      "C": "Rent expense"
    },
    "answer": "C",
    "explanation": "For operating lease, the company needs to recognize ROU asset and lease liability on its balance\nsheet, and rent expense is recognized on its income statement. However, for finance lease, ROU\nasset and lease liability is recognized on balance sheet, but rent expense is not recognized on its\nincome statement."
  },
  {
    "id": "jc_FSA_097",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 97,
    "question": "Under US GAAP, which of the following would require the lessee to classify a lease as\na capital lease?",
    "options": {
      "A": "The term is 60% of the useful life of the asset",
      "B": "The lease contains an option to purchase the asset at fair value",
      "C": "The present value of the lease payments is 95% of the fair value"
    },
    "answer": "C",
    "explanation": "If the present value of the lease payments is greater than 90% of the fair value of the asset, the\nlease is considered a capital lease. A lease with a term that is 75% or more of the useful life of the\nasset is deemed to be a capital lease. The option to purchase the asset must be deemed to be cheap\n(bargain purchase option), not just include the option to purchase the asset."
  },
  {
    "id": "jc_FSA_098",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 98,
    "question": "A lessee that enters into a finance lease will report the:",
    "options": {
      "A": "lease payable on its balance sheet",
      "B": "full lease payment on its income statement",
      "C": "full lease payment as an operating cash flow."
    },
    "answer": "A",
    "explanation": "A finance lease is similar to borrowing money and buying an asset; a company that enters into a\nfinance lease as the lessee reports an asset (leased asset) and related debt (lease payable) on its\nbalance sheet. A company that enters into a finance lease as the lessee will report interest expense\nand depreciation expense on its income statement. A company that enters into an operating lease\nwill report the lease payment on its income statement. For a finance lease, only the portion of the\nlease payment relating to interest expense reduces operating cash flow; the portion of the lease\npayment that reduces the lease liability appears as a cash outflow in the financing section. A\ncompany that enters into an operating lease as the lessee will report the full lease payment as an\noperating cash outflow."
  },
  {
    "id": "jc_FSA_099",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 99,
    "question": "Under U.S. GAAP, a lessor's reported revenues at lease inception will be highest if the\nlease is classified as a(n):（未知）",
    "options": {
      "A": "sales-type lease",
      "B": "operating lease",
      "C": "direct financing lease"
    },
    "answer": "A",
    "explanation": "Sales-type lease treats the lease as a sale of the asset, and revenue is recorded at the time of sale\nequal to the present value of future lease payments. Under a direct financing lease, only interest\nincome is reported as earned. Under an operating lease, revenue from rent is reported when\ncollected."
  },
  {
    "id": "jc_FSA_100",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 100,
    "question": "A manufacturer of jets also enters purchase and leaseback arrangements of used aircraft.\nThe buy and leaseback arrangements are classified as operating leases, with the lease\npayments due in advance at the beginning of each period. The company depreciates\nthese used aircraft on a straight-line basis over the life of the lease. The most likely\neffect on the manufacturer's financial statements of entering into one of these purchase\nand leaseback arrangements is an increase in its:（协会模拟考试题）",
    "options": {
      "A": "lease receivables",
      "B": "EBIT by an amount equal to the lease payments",
      "C": "capital assets"
    },
    "answer": "C",
    "explanation": "The used aircraft that the manufacturer buys and leases back are classified as operating leases. For\nthe lessor, these assets under operating leases would be classified in property, plant, and\nequipment in capital assets and thus would lead to an increase in capital assets. With payments in\nadvance, there would be no lease receivable arising from the operating lease; long-term lease\nreceivables arise from financing leases, not operating leases. Although revenues will increase by\nthe lease payments, the leased assets are depreciated, and therefore EBIT will increase by the lease\npayment received minus depreciation expense."
  },
  {
    "id": "jc_FSA_101",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 101,
    "question": "A company that prepares its financial statements according to IFRS leased a piece of\nequipment on 1 January 2020. Information relevant to the transaction is as follows:\n⚫ Five annual lease payments of $25,000, with the first payment due 1 January 2020\n⚫ Interest rate on similar company debt is currently 8%\n⚫ The fair value of the equipment is $115,000\n⚫ Useful life of the equipment is seven years\n⚫ The company depreciates other equipment in the same asset class on a straight-line\nbasis\nThe total expense related to the lease on the company’s 2020 income statement will be\nclosest to:",
    "options": {
      "A": "$25,000",
      "B": "$28,185",
      "C": "$22,024."
    },
    "answer": "B",
    "explanation": "Under IFRS 16 all leases are classified as a finance lease and must be capitalized.\nUsing a financial calculator for an annuity due at the beginning of the period:\nPV of lease payments: PMT = $25,000, i = 8%, N = 5, Mode = Begin, Compute PV. PV =\n$107,803\nTherefore, the lease would be capitalized at $107,803.\nPresent value of the lease (asset value capitalized and initial liability): $107,803\nPayment 1 January 2020: –25,000\nLiability value 1 January 2020: $82,803\nInterest expense in 2020:0.08 × $82,803 = $6,624.25\nAmortization expense for the year using the lease term as the useful life (no indication that the\nlease will be renewed beyond the initial term): $107,803/5 = $21,560.63\nTotal expense in 2020: $28,184.88"
  },
  {
    "id": "jc_FSA_102",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 102,
    "question": "Penben Corporation has a defined benefit pension plan. At 31 December, its pension\nobligation is €10 million and pension assets are €9 million. Under either IFRS or US\nGAAP, the reporting on the balance sheet would be closest to which of the following?",
    "options": {
      "A": "€10 million is shown as a liability, and €9 million appears as an asset",
      "B": "€1 million is shown as a net pension obligation.（原版书课后题）",
      "C": "Pension assets and obligations are not required to be shown on the balance sheet but only disclosed in footnotes."
    },
    "answer": "B",
    "explanation": "The company will report a net pension obligation of €1 million equal to the pension obligation\n(€10 million) less the plan assets (€9 million)."
  },
  {
    "id": "jc_FSA_103",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 103,
    "question": "The following information is available from a company’s current financial data,\nprepared according to US GAAP: （协会模拟考试题）\nDefined Benefit Plan: $ Thousands\nContributions to defined benefit plan 1,500\nEmployees’ service cost for the period 1,400\nInterest expense accrued on the beginning pension obligation 200\nExpected return on plan assets 400\nActuarial gains for the period 100\nThe pension expense (in $ thousands) reported in the current year is closest to:",
    "options": {
      "A": "1,200",
      "B": "1,500",
      "C": "1,400"
    },
    "answer": "A",
    "explanation": "Plan Expense Components under US GAAP $ Thousands\nDefined benefit plan Employee service costs 1,400\nInterest expense accrued on beginning pension obligation 200\nLess expected ROA on plan assets (400)\nTotal Expense 1,200"
  },
  {
    "id": "jc_FSA_104",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 104,
    "question": "Under IFRS, it is most appropriate to include which of the following pension costs of a\ndefined-benefit plan in other comprehensive income?",
    "options": {
      "A": "Net interest expense accrued on the beginning net pension liability",
      "B": "Actuarial gains or losses",
      "C": "Employees service cost 3.31. Share-Based Compensation"
    },
    "answer": "B",
    "explanation": "Under IFRS, only actuarial gains or losses can be recognized in other comprehensive income."
  },
  {
    "id": "jc_FSA_105",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 105,
    "question": "Which of the following statements is true?",
    "options": {
      "A": "Stock grants' fair value is usually based on the market value at the grant date, while option",
      "B": "Companies record stock grants by spreading compensation expenses over the employee service period, while compensation expenses for stock options are recognized immediately",
      "C": "Compensation expense is calculated using the stock's market value on the grant date, whereas the value of an option is determined when the employee exercises it."
    },
    "answer": "A",
    "explanation": "The compensation for a stock grant is based on the market value at the date of the stock grant. For\na stock option, the value is not definitively known and must be estimated. Answer B is not correct\nbecause companies account for both stock grants and option grants by allocating the value of the\ngrant over the service period (often the vesting period). Answer C is not correct because for both a\nshare grant and an option grant, the value of the grant is determined based on the date of the grant."
  },
  {
    "id": "jc_FSA_106",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 106,
    "question": "Assume GF Company, an online education company provides the following disclosure\nabout its stock compensation plans:\n“The average fair value of shares granted was USD40, USD20, and USD10 in 2022,\n2021, and 2020 respectively.” If the company granted 100,000 shares, with a four-year\nvesting period in 2022, what is the annual compensation expense for the 2022 shares\ngranted?",
    "options": {
      "A": "USD1,000,000",
      "B": "USD500,000",
      "C": "USD250,000"
    },
    "answer": "A",
    "explanation": "Calculated as follows: 100,000 shares × by average fair value at grant date of USD40 =\nUSD4,000,000 total compensation. Divide this amount by the four-year vesting period, and the\nresult is USD1,000,000 annual compensation expense."
  },
  {
    "id": "jc_FSA_107",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 107,
    "question": "A company reported the following information of its tax related events.\n(‘000) 2022 2021\nDeferred tax assets 500 420\nDeferred tax liabilities 800 620\nEarnings before taxes 9,000 8,600\nIncome taxes at the statutory rate 2,600 2,880\nCurrent income tax expense 3,000 2,800\nThe company’s income tax expense during 2022 is closest to:未知）",
    "options": {
      "A": "$3,000",
      "B": "$3,100",
      "C": "$3,500."
    },
    "answer": "B",
    "explanation": "Income tax expense = taxes payable (current income tax expense) + △ DTL - △DTA = 3000 +\n(800-620) – (500-420) = 3100."
  },
  {
    "id": "jc_FSA_108",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 108,
    "question": "The following information is available for a company that prepares its financial\nstatements according to US GAAP:\n2022 2021\nDeferred tax assets $ 1,200 $ 1,000\nDeferred tax liabilities $ 700 $ 800 Valuation allowance $ 600 $ 500\nThe overall effect on 2022 net income from the above changes in the company’s\ndeferred tax accounts is closest to a:",
    "options": {
      "A": "$200 increase",
      "B": "$300 increase",
      "C": "$200 decrease"
    },
    "answer": "A",
    "explanation": "A is correct. A valuation allowance reduces the value of the deferred tax assets under US GAAP,\nso the total change in net income as a result of the changes in the three accounts can be calculated\nas follows:\nEffect of Change on Net Income\nAccount Change in Account from 2021 Direction Dollar Effect\nDeferred tax assets $ 200 increase Increase $200\nDeferred tax liabilities $ 100 decrease Increase $100\nValuation allowance $ 100 increase Decrease ($100)\nOverall effect: A net increase of: $200"
  },
  {
    "id": "jc_FSA_109",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 109,
    "question": "The following information is about a company equipment, which was purchased on 1\nJanuary 2007:\nAccounting Purposes Tax Purposes\n2007 Acquisition cost $100,000 $100,000\nDepreciation method Straight-line Double-declining balance method\nUseful life 10 years 8 years\nSalvage value $20,000 $0\nTax rate 30% 30%\nAt the end of 2007, the balance sheet should occur:（未知）",
    "options": {
      "A": "$3,600 deferred tax liability",
      "B": "$5,100 deferred tax asset",
      "C": "$5,100 deferred tax liability"
    },
    "answer": "C",
    "explanation": "Straight line depreciation expense = (100,000 – 20,000) / 10 = 8,000\nDDB depreciation expense = (2/8) × 100,000 = 25,000\nDTL = 30% × (25,000 – 8,000) = 5,100"
  },
  {
    "id": "jc_FSA_110",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 110,
    "question": "At the beginning of the year, a company purchased a fixed asset for $1,000,000 with no\nexpected residual value. The company depreciates similar assets on a straight line basis\nover 10 years, whereas the tax authorities allow declining balance depreciation at the\nrate of 14% per year. In both cases, the company takes a full year's depreciation in the\nfirst year and the tax rate is 30%. Which of the following statements concerning this\nasset at the end of the year is most accurate?（协会模拟考试题改数字）",
    "options": {
      "A": "The deferred tax asset is $10,000",
      "B": "The temporary difference is $40,000",
      "C": "The tax base is $1,000,000"
    },
    "answer": "B",
    "explanation": "The temporary difference is the difference between the net book value (NBV) of the asset for\naccounting purposes and the NBV for taxes\nNBV accounting [1,000,000 – (1,000,000/10)] $900,000\nNBV taxes [1,000,000 – 0.14 × (1,000,000)] $860,000\nTemporary difference $40,000"
  },
  {
    "id": "jc_FSA_111",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 111,
    "question": "When certain expenditures result in tax credits that directly reduce taxes, the company\nwill most likely record:",
    "options": {
      "A": "a deferred tax asset",
      "B": "a deferred tax liability",
      "C": "no deferred tax asset or liability"
    },
    "answer": "C",
    "explanation": "Tax credits that directly reduce taxes are a permanent difference, and permanent differences do not\ngive rise to deferred tax."
  },
  {
    "id": "jc_FSA_112",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 112,
    "question": "Deferred tax assets could arise when:",
    "options": {
      "A": "taxable income is greater than accounting profit",
      "B": "the carrying amount of an asset exceeds its tax base",
      "C": "the carrying amount of a liability is lower than its tax base"
    },
    "answer": "A",
    "explanation": "\"Deferred tax assets, which appear on the balance sheet, arise when an excess amount is paid for\nincome taxes (taxable income higher than accounting profit) and the company expects to recover\nthe difference during the course of future operations.\""
  },
  {
    "id": "jc_FSA_113",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 113,
    "question": "Deferred tax liabilities could arise when:",
    "options": {
      "A": "accounting profit is greater than taxable income",
      "B": "the tax base of equipment is greater than its carrying value",
      "C": "tax authorities do not allow an expense item for tax purposes. 3.33. Deferred Tax: Measurement"
    },
    "answer": "A",
    "explanation": "“Deferred tax liabilities result from temporary timing differences between a company's income as\nreported for tax purposes (taxable income) and income as reported for financial statement\npurposes (reported income).” Deferred tax liabilities “arise when a deficit amount is paid for\nincome taxes and company expects to eliminate the deficit over the course of future operations. In\nthis case, financial accounting income tax expense exceeds income taxes payable.”"
  },
  {
    "id": "jc_FSA_114",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 114,
    "question": "Deferred tax liabilities should be treated as equity when:（原版书reading31）",
    "options": {
      "A": "they are not expected to reverse",
      "B": "the timing of tax payments is uncertain",
      "C": "the amount of tax payments is uncertain"
    },
    "answer": "A",
    "explanation": "If the liability will not reverse, there will be no required tax payment in the Future and the\n\"liability\" should be treated as equity."
  },
  {
    "id": "jc_FSA_115",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 115,
    "question": "Zimt AG presents its financial statements in accordance with US GAAP. In 2007, Zimt\ndiscloses a valuation allowance of $1,101 against total deferred tax assets of $19,201. In\n2006, Zimt disclosed a valuation allowance of $1,325 against total deferred tax assets of\n$17,325. The change in the valuation allowance most likely indicates that Zimt’s:",
    "options": {
      "A": "deferred tax liabilities were reduced in 2007. （原版书 Reading 30）",
      "B": "expectations of future earning power has increased",
      "C": "expectations of future earning power has decreased"
    },
    "answer": "B",
    "explanation": "The valuation allowance is taken against deferred tax assets to represent uncertainty that future\ntaxable income will be sufficient to fully utilize the assets. By decreasing the allowance, Zimt is\nsignaling greater likelihood that future earnings will be offset by the deferred tax asset."
  },
  {
    "id": "jc_FSA_116",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 116,
    "question": "Assume U.S. GAAP applies unless otherwise noted. GF Company has a deferred tax\nliability balance of $1,800,000 at the end of 2022. Tax rates increased from 20 percent\nto 25 percent in 2022. Fred Company should increase its tax liability account and also\nincrease its:（未知）",
    "options": {
      "A": "2022 income tax expense by $120,000",
      "B": "2022 income tax expense by $450,000",
      "C": "income taxes payable by $450,000"
    },
    "answer": "B",
    "explanation": "The change in Fred’s rates causes its deferred tax liability account to increase ((25 – 20) / 20) ×\n$1,800,000 =) $450,000. The corresponding increase is to current income tax expense."
  },
  {
    "id": "jc_FSA_117",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 117,
    "question": "When the tax authorities decided to reduce the tax rate, what will be the effect on a\ncompany’s deferred tax asset and deferred tax liability respectively?",
    "options": {
      "A": "not be affected. (自编)",
      "B": "increase",
      "C": "decrease"
    },
    "answer": "C",
    "explanation": "A decrease in the tax rate will result in a decrease in the previously reported amounts of deferred\ntax assets."
  },
  {
    "id": "jc_FSA_118",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 118,
    "question": "Carnation Corporation had a deferred tax liability of $30,000 on January 1,20X2 that is\nexpected to reverse in 20X4. In 20X2, Carnation generated pretax financial income of\n$300,000 and taxable income of $150,000 due to a difference in depreciation. The tax\nrate for 20X2 is 30% but Carnation enacted a reduction in tax rates on January 1, 20X3\nto 25%, Carnation's income tax expense for 20X2 is closest to: （原版书）",
    "options": {
      "A": "$75,000",
      "B": "$77,500",
      "C": "$82,500."
    },
    "answer": "B",
    "explanation": "Current tax expense = Taxable income × Current tax rate= 150,000 × 30% = 45,000\n20X2.1.1\nDTL (old) =30,000\nTemporary difference (old) = 30,000/30% = 100,000\n20X2.12.31\nAdditional temporary difference = 300,000-150,000=150,000\nTemporary difference (new) = 100,000 + 150,000 = 250,000\nDTL (new) = Temporary difference (new) × tax rate (new)= 250,000 × 25% = 62,500\nDelta DTL = 62,500 – 30,000 = 32,500\nIncome tax expense = tax payable + delta DTL = 45,000 + 32,500 = 77,500"
  },
  {
    "id": "jc_FSA_119",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 119,
    "question": "Compared with aggressive accounting, conservative accounting is most likely associated\nwith:",
    "options": {
      "A": "increased sustainability of earnings",
      "B": "higher current reported performance",
      "C": "recognition of losses once certain"
    },
    "answer": "A",
    "explanation": "A is correct. Conservative accounting choices decrease a company’s reported performance and\nresults in the current period and may increase its reported performance and financial position in\nlater periods. Therefore, it typically avoids a sustainability issue.\nB is incorrect because higher current reported performance is a result associated with aggressive\naccounting choices, not conservative ones.\nC is incorrect because in general, conservatism means that losses are recognized when probable;\nwaiting to recognize losses until they are certain would be an aggressive approach rather than a\nconservative one."
  },
  {
    "id": "jc_FSA_120",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 120,
    "question": "A high-quality financial report may reflect:",
    "options": {
      "A": "earnings smoothing",
      "B": "low earnings quality",
      "C": "understatement of asset impairment"
    },
    "answer": "B",
    "explanation": "High-quality financial reports offer useful information, meaning information that is relevant and\nfaithfully represents actual performance. Although low earnings quality may not be desirable, if\nthe reported earnings are representative of actual performance, they are consistent with high-\nquality financial reporting. Highest-quality financial reports reflect both high financial reporting\nquality and high earnings quality."
  },
  {
    "id": "jc_FSA_121",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 121,
    "question": "Which of the following companies would most likely be considered to have the lowest\nfinancial reporting quality, other things equal?",
    "options": {
      "A": "A company that provides high quality, decision-useful information under GAAP but delays",
      "B": "A company that reports significant profits due to a favorable exchange rate movement",
      "C": "A company that reports the results from two different segments as a combined entity."
    },
    "answer": "C",
    "explanation": "Combining the results from two segments is an example of biased reporting, which falls in the\nmiddle of the quality spectrum. It is difficult to interpret the profitability of each segment when\ntheir results are combined.\nThe company’s reports are high quality, but the delay in reporting impairs their usefulness\nsomewhat. The reporting is still better than biased reporting.\nThis is an example of decision-useful information about a result that may not be sustainable.\nReporting is not of the highest quality but is better than biased reporting."
  },
  {
    "id": "jc_FSA_122",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 122,
    "question": "An analyst has calculated a ratio using as the numerator the sum of operating cash flow,\ninterest, and taxes, and as the denominator the amount of interest. What is this ratio,\nwhat does it measure, and what does it indicate? (原版书)",
    "options": {
      "A": "This ratio is an interest coverage ratio, measuring a company's ability to meet its interest obligations and indicating a company's solvency",
      "B": "This ratio is an effective tax ratio, measuring the amount of a company's operating cash flow used for taxes, and indicating a company's efficiency in tax management.",
      "C": "This ratio is an operating profitability ratio, measuring the operating cash flow generated for taxes and interest and indicating a company's liquidity."
    },
    "answer": "A",
    "explanation": "This is the interest coverage ratio using operating cash flow rather than earnings before interest,\ntax, depreciation, and amortization (EBITDA)."
  },
  {
    "id": "jc_FSA_123",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 123,
    "question": "The following selected financial information is available：\nMetric (in $ millions)\nSales 421\nCOGS 315\nPurchase 300\nAverage accounts receivable 40\nAverage inventories 36\nAverage accounts payable 33\nThe company’s cash conversion cycle (in days) is closest to:",
    "options": {
      "A": "36.8",
      "B": "36.4",
      "C": "36.2"
    },
    "answer": "C",
    "explanation": "Cash conversion cycle = DOH + DSO – Days of payables\nFormula Calculation Days\nDOH: Days of inventory (365/Inventory turnover) 365/8.75 41.7\non hand\nInventory turnover (COGS/Average inventory) 315/36= 8.75\nDSO: Days of sales (365/Receivables turnover) 365/10.53 34.7\noutstanding\nReceivables turnover (Sales/Average accounts 421/40 = 10.53\nreceivable)\nNumber of days of (365/Payables turnover) 365/9.09 –40.2\npayables\nPayables turnover (Purchase/Average accounts 300/33 = 9.09\npayable)\nCash conversion cycle 36.2"
  },
  {
    "id": "jc_FSA_124",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 124,
    "question": "Galambos Corporation had an average receivables collection period of 19 days in 2003.\nGalambos has stated that it wants to decrease its collection period in 2004 to match the\nindustry average of 15 days. Credit sales in 2003 were $300 million, and analysts expect\ncredit sales to increase to $400 million in 2004. To achieve the company’s goal of\ndecreasing the collection period, the change in the average accounts receivable balance\nfrom 2003 to 2004 that must occur is closest to:",
    "options": {
      "A": "–$420,000",
      "B": "$420,000",
      "C": "$836,000"
    },
    "answer": "C",
    "explanation": "Accounts receivable turnover is equal to 365/19 (collection period in days) = 19.2 for 2003 and\nneeds to equal 365/15 = 24.3 in 2004 for Galambos to meet its goal. Sales/turnover equals the\naccounts receivable balance. For 2003, $300,000,000/19.2 = $15,625,000, and for 2004,\n$400,000,000/24.3 = $16,460,905. The difference of $835,905 is the increase in receivables\nneeded for Galambos to achieve its goal."
  },
  {
    "id": "jc_FSA_125",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 125,
    "question": "Assuming no changes in other variables, which of the following would decrease ROA?",
    "options": {
      "A": "A decrease in the effective tax rate",
      "B": "A decrease in interest expense",
      "C": "An increase in average assets. (原版书)"
    },
    "answer": "C",
    "explanation": "Assuming no changes in other variables, an increase in average assets (an increase in the\ndenominator) would decrease ROA. A decrease in either the effective tax rate or interest expense,\nassuming no changes in other variables, would increase ROA."
  },
  {
    "id": "jc_FSA_126",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 126,
    "question": "The following information is selected from a company’s balance sheet:\nCash $4,100\nMarketable securities $17,200\nAccounts receivable $225,300\nInventory $229,400\nTotal current assets $475,500\nCurrent liabilities $339,600\nThe company’s quick ratio is closest to:",
    "options": {
      "A": "1.40",
      "B": "0.06",
      "C": "0.73"
    },
    "answer": "C",
    "explanation": "A is incorrect. It is the current ratio: (Current assets/Current liabilities) = (475,500/339,600) =\n1.40.\nB is incorrect. It is the cash ratio: (Cash + Marketable Securities)/Current liabilities = (4,100 +\n17,200)/339,600 = 0.06.\nC is correct. The quick ratio is\n(Cash + Marketable securities + Accounts receivable) / Current liabilities = (4,100 + 17,200 +\n225,300) / 339,600 = 0.73"
  },
  {
    "id": "jc_FSA_127",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 127,
    "question": "Income statements for two companies (A and B) and the common-sized income\nstatement for the industry are provided below:\nAll $ figures in ’000s Company A Company B Industry\nSales $ 21,000 $ 16,500 100.0%\nCost of goods sold 12,706 10,478 63.8%\nSelling, general, and administrative 5,250 4,042 24.8%\nexpenses\nInterest expense 1,680 1,072 7.0%\nPretax earnings 1,364 908 4.4%\nTaxes 410 290 1.6%\nNet earnings $ 954 $ 618 2.8%\nThe best conclusion an analyst can make is that:（协会模拟考试题改编）",
    "options": {
      "A": "Company B’s interest rate is the industry average",
      "B": "both companies’ tax rates are higher than the industry average",
      "C": "Company A earns a higher gross margin than both Company B and the industry"
    },
    "answer": "C",
    "explanation": "Common-sized analysis of the income statements shows that Company A has a lower percentage\ncost of goods sold and hence a higher gross margin than the industry.\nCo A Co B Industry Co A Co B\nSales $21,000 $ 16,500 100.0% 100% 100%\nCost of goods sold 12,706 10,478 63.8% 60.5% 63.5%\nGross margin 36.2% 39.5% 36.5%\nCompany A earns a higher gross margin than both Company B and the industry\nPretax earnings 1,364 908 4.4% 6.5% 5.5%\nTaxes 410 290 1.6% 2.0% 1.8%\nTax rate = Taxes ÷ Pretax earnings 36% 30% 32%\nThe tax rates for the companies are not higher than the industry.\nThe interest rate is not a function of sales and cannot be analyzed on a common-sized income\nstatement. Tax rates are determined based on taxes ÷ pretax earnings, not as a percentage of sales\n(as shown in common-sized analysis)."
  },
  {
    "id": "jc_FSA_128",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 128,
    "question": "The following financial data is available for a company:\nReturn on assets (ROA) 3.8%\nTotal asset turnover 1.82\nFinancial leverage 1.65\nDividend payout ratio 47.1%\nThe company’s sustainable growth rate is closest to:（协会模拟考试题改编）",
    "options": {
      "A": "3.00%",
      "B": "3.32%",
      "C": "3.78%"
    },
    "answer": "B",
    "explanation": "Sustainable growth rate = retention ratio (b) × ROE.\nb = 1- Dividend payout ratio 1 - 0.471 = 0.529\nROE = ROA x Financial leverage 0.038 x 1.65 = 0.0627\nSustainable growth rate = b x ROE 0.529 x 0.0627 = 3.32%"
  },
  {
    "id": "jc_FSA_129",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 129,
    "question": "Consider the following information available for a company for last year:\nROE 16%\nNet profit margin 20%\nRevenue $500,000\nAverage total assets $800,000\nThe average shareholder’s equity is closest to:",
    "options": {
      "A": "645,000",
      "B": "625,000",
      "C": "605,000"
    },
    "answer": "B",
    "explanation": "The DuPont equation is:\nNet income Revenue Average total assets\nROE= × ×\nRevenue Average total assets Average shareholders′equity\n$500,000 $800,000\n16%=20%× ×\n$800,000 Average shareholders′equity\nAverage shareholders’ equity = $625,000"
  },
  {
    "id": "jc_FSA_130",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 130,
    "question": "A measure of operating performance is most likely to be represented by which of the\nfollowing ratios?",
    "options": {
      "A": "Defensive interval ratio",
      "B": "Working capital turnover ratio",
      "C": "Cash ratio"
    },
    "answer": "B",
    "explanation": "A is incorrect. The defensive interval ratio is an example of a liquidity ratio.\nB is correct. Activity ratios are typically used to measure operating performance. Working capital\nturnover is an example of an activity ratio; the defensive interval ratio and cash ratio are liquidity\nratios used to measure a company’s ability to meet its short-term obligations.\nC is incorrect. The cash ratio is an example of a liquidity ratio."
  },
  {
    "id": "jc_FSA_131",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 131,
    "question": "A company’s most recent balance sheet shows the following values (NZ$ thousands):\nAccounts payable 3,800\nLong-term debt 5,590\nOther long-term liabilities 800\nCommon stock 1,200\nRetained earnings 1,810\nThe company’s debt- to- capital ratio is closest to:",
    "options": {
      "A": "0.77",
      "B": "1.86",
      "C": "0.65"
    },
    "answer": "C",
    "explanation": "The debt- to- capital ratio is\n𝑇𝑜𝑡𝑎𝑙 𝑑𝑒𝑏𝑡 5,590\n= =0.65\n𝑇𝑜𝑡𝑎𝑙 𝑑𝑒𝑏𝑡+𝑇𝑜𝑡𝑎𝑙 𝑠ℎ𝑎𝑟𝑒ℎ𝑜𝑙𝑑𝑒𝑟𝑠′𝑒𝑞𝑢𝑖𝑡𝑦 5,590+1,200+1,810\nWhere total debt includes only interest- bearing debt."
  },
  {
    "id": "jc_FSA_132",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 132,
    "question": "The following common-size income statement data and tax rates are available on a\ncompany.\nFinancial Item Current Year (%)\nRevenues 100\nCost of goods sold 37.6\nInterest expense 3.0\nResearch expenses 4.3\nSelling and general expenses 31.9\nIncome tax rate 20%\nPrior Year’s Profitability Ratios\nGross profit margin 61.5%\nOperating profit margin 25.8%\nNet profit margin 17.8%\nThe profitability ratio that had the largest absolute increase in value in the current year\nis the: （协会模拟考试题改编）",
    "options": {
      "A": "operating profit margin",
      "B": "net profit margin",
      "C": "gross profit margin"
    },
    "answer": "C",
    "explanation": "The gross profit margin increased the most in the current year.\nCurrent Year (%) Prior Year (%) Increase\nRevenues 100\nCost of goods sold 37.6\nGross profit margin 62.4 61.5 +0.9\nResearch expenses 4.3\nSelling and general expenses 31.9\nOperating margin 26.2 25.8 +0.4\nInterest expense 3.0\nEarnings before tax 23.2\nMinus income tax expense 20% × 23.2 = 4.64\nNet profit margin 18.56 17.8 +0.76"
  },
  {
    "id": "jc_FSA_133",
    "source": "JC_FSA",
    "subject": "财务报表",
    "subjectEn": "Financial Statement Analysis",
    "num": 133,
    "question": "The following data is available on a company:\n($ millions)\nTotal assets 290\nTotal revenues 564\nTotal expenses 482\nResearch & development expenses 24\nUnder a common-size analysis, the value used for research & development expenses is\nclosest to: （协会模拟考试题改编）",
    "options": {
      "A": "8.3%",
      "B": "4.3%",
      "C": "5.0%.  Solutions 3. Financial Reporting and Analysis"
    },
    "answer": "B",
    "explanation": "The appropriate base for a common-size income statement is revenue. As such, the value used for\nresearch & development expenses is $24million÷$564 million x 100 = 4.3%."
  },
  {
    "id": "jc_CI_001",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 1,
    "question": "Which of the following are not shared similarities among the four major business\nstructure types?",
    "options": {
      "A": "Sole proprietorships and general partnerships lack legal identity",
      "B": "Corporate shareholders and general partners have limited liability",
      "C": "The taxation of sole proprietorships and limited partnerships is comparable."
    },
    "answer": "B",
    "explanation": "Both sole proprietorships and general partnerships have no legal identity, with the business\nconsidered an extension of the owner in a sole proprietorship and the partnership agreement\nsetting ownership in a general partnership. Both sole proprietorships and limited partnerships have\nsimilar tax structures, with all profits taxed as personal income. But in relation to liability, while\ngeneral partners have unlimited liability, shareholders of corporations are granted limited liability."
  },
  {
    "id": "jc_CI_002",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 2,
    "question": "The business structure that offers the greatest operational simplicity and flexibility is :",
    "options": {
      "A": "limited partnership",
      "B": "general partnership",
      "C": "sole proprietorship."
    },
    "answer": "C",
    "explanation": "The simplest business structure is the sole proprietorship, also called the sole trader. Key features\nof sole proprietorships include: Operational simplicity and flexibility."
  },
  {
    "id": "jc_CI_003",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 3,
    "question": "Which of the following is most likely a characteristic of sole proprietorships?",
    "options": {
      "A": "Existence of a legal identity",
      "B": "Operational simplicity and flexibility",
      "C": "Taxation of business profits as corporate income"
    },
    "answer": "B",
    "explanation": "Key features of sole proprietorships include the following: Operational simplicity and flexibility."
  },
  {
    "id": "jc_CI_004",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 4,
    "question": "In a limited partnership, the business is operated by:",
    "options": {
      "A": "the general partner only",
      "B": "the limited partners only",
      "C": "both the general partner and the limited partners"
    },
    "answer": "A",
    "explanation": "Key features of limited partnerships include: • GP operates the business, having unlimited\nliability, • LPs have limited liability but lack control over business operations."
  },
  {
    "id": "jc_CI_005",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 5,
    "question": "Double taxation of profits is most likely a concern for owners in:",
    "options": {
      "A": "corporations",
      "B": "limited partnerships",
      "C": "general partnerships."
    },
    "answer": "A",
    "explanation": "Tax disadvantage for owners in countries with double taxation is a key feature of corporations. In\nmost countries, corporations are taxed directly on their profits. In many countries, shareholders\npay an additional tax on distributions (dividends) that are passed on to them. Economists refer to\nthis as the double taxation of corporate profits.\nProfits of limited partnerships or general partnerships are taxed only at the personal level. A key\nfeature of limited partnerships is that all partners share in return, with profits taxed as personal\nincome."
  },
  {
    "id": "jc_CI_006",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 6,
    "question": "A public company can become a private company through a:",
    "options": {
      "A": "direct listing",
      "B": "leveraged buyout",
      "C": "special purpose acquisition company"
    },
    "answer": "B",
    "explanation": "Leveraged buyouts can result in a public company going private. Direct listings and special purpose\nacquisition companies are methods for a private company to go public."
  },
  {
    "id": "jc_CI_007",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 7,
    "question": "Which share is most likely to require investors to be accredited for purchase?",
    "options": {
      "A": "Public company shares only",
      "B": "Private company shares only",
      "C": "Both public company shares and private company shares"
    },
    "answer": "B",
    "explanation": "Because private company investors may be limited to qualified or so-called accredited investors or\nsophisticated investors, or those deemed to be able and willing by regulatory authorities to assume\nthe greater risk of a non-public offering."
  },
  {
    "id": "jc_CI_008",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 8,
    "question": "Which option best characterizes business growth that appeals to a growing number of\ncustomers and merchants, thus fueling further expansion of the company?",
    "options": {
      "A": "Crowdsourcing",
      "B": "A one-sided network",
      "C": "A multi-sided network"
    },
    "answer": "C",
    "explanation": "As multi-sided (two-sided) networks grow—more users join the service, which attracts more\nmerchants, which in turn attracts more users—these businesses can grow exponentially.\nCrowdsourcing is where users contribute directly to a product or service. These businesses\nfacilitate “user communities” that enable voluntary collaboration between users of a product with\na small amount of moderation and oversight by the company.\nA one-sided network is one where it is only one type of user that\nis valuable to other users."
  },
  {
    "id": "jc_CI_009",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 9,
    "question": "Private companies have:",
    "options": {
      "A": "less share price transparency compared to public companies",
      "B": "similar share price transparency as public companies",
      "C": "greater share price transparency compared to public companies"
    },
    "answer": "A",
    "explanation": "In contrast to public companies the shares of a private company are not listed (do not trade on an\nexchange), so no visible company valuation or share price transparency exists."
  },
  {
    "id": "jc_CI_010",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 10,
    "question": "Compared to public companies, share issuances of private companies are most likely:",
    "options": {
      "A": "raise larger amounts of capital",
      "B": "include a larger number of investors",
      "C": "include investors with longer holding periods"
    },
    "answer": "C",
    "explanation": "To raise more capital after listing, public companies may issue additional shares in the capital\nmarkets, typically raising very large amounts from many investors who may then actively trade\nshares among themselves in the secondary market. In contrast, private companies finance much\nsmaller amounts in the primary market (private debt or equity) with far fewer investors who have\nmuch longer holding periods."
  },
  {
    "id": "jc_CI_011",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 11,
    "question": "Which of the following are most likely to be a typical characteristics of public companies\nrather than private companies?",
    "options": {
      "A": "A government is a shareholder",
      "B": "Shares are listed on a stock exchange",
      "C": "Transfer of ownership between investors is more difficult 4.2.1.4. Debt Versus Equity"
    },
    "answer": "B",
    "explanation": "When it comes to corporations, 'public' and 'private' are typically defined by whether the\ncompany’s equity is listed on a stock exchange, although in some countries whether a company is\nconsidered public or not may depend on its number of shareholders, irrespective of whether it is\nlisted."
  },
  {
    "id": "jc_CI_012",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 12,
    "question": "For a company that is financially sound, increasing the company’s rate of growth is most\nlikely to benefit:",
    "options": {
      "A": "equity holders, but not debt holders",
      "B": "both debt holders and equity holders.",
      "C": "neither debt holders nor equity holders."
    },
    "answer": "A",
    "explanation": "Assuming a company is repaying interest and principal in full and on time, debt holders have no\nfurther claims. Equity holders benefit from company growth."
  },
  {
    "id": "jc_CI_013",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 13,
    "question": "Which of the following statements regarding a mature company's stakeholders is the\nmost accurate?",
    "options": {
      "A": "Equity represents a cheaper financing source for companies",
      "B": "Shareholders are residual claimants to the company after all other stakeholders have been paid",
      "C": "Dividend payments to company shareholders are generally treated as a tax-deductible expense for the company"
    },
    "answer": "B",
    "explanation": "Debtholders have a prior legal claim on the company’s cash flows and assets over the claims of\nequity owners. Equity holders [shareholders] are therefore residual claimants to the company after\nall other stakeholders have been paid, including creditors (interest/principal), suppliers (accounts\npayable), government (taxes), and employees (wages)."
  },
  {
    "id": "jc_CI_014",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 14,
    "question": "From the perspective of an investor, equity is most likely to have:",
    "options": {
      "A": "unlimited loss",
      "B": "unlimited upside potential",
      "C": "lower investment risk than that of debt"
    },
    "answer": "B",
    "explanation": "The maximum loss equity owners face is limited to the amount of their equity investment.\nHowever, an equity owner has the potential for significant upside gain, dependent on future share\nprice increases. If the corporation is successful, there is theoretically no limit to how much equity\nowners could make from their investment."
  },
  {
    "id": "jc_CI_015",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 15,
    "question": "If a company is financed through a combination of debt and equity, which of the\nfollowing must the company pay?",
    "options": {
      "A": "Interest only",
      "B": "Dividends only",
      "C": "Both interest and dividends"
    },
    "answer": "A",
    "explanation": "Debt must be repaid on a pre-specified date in the future with interest. Equity investors\n(shareholders) have a right to receive any distributions of profits, known as dividends. However,\nwhile shareholder have the right to receive dividends, the corporation is not required to pay\ndividends."
  },
  {
    "id": "jc_CI_016",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 16,
    "question": "From the perspective of a corporate issuer, one benefit of issuing debt as a source of\ncapital versus equity is that debt is most likely:",
    "options": {
      "A": "cheaper",
      "B": "less risky",
      "C": "more permanent"
    },
    "answer": "A",
    "explanation": "Debt represents a cheaper financing source for companies and a lower risk for investors. Because\nthe returns to lenders are capped and because the cost of debt is lower than the cost of equity,\ncorporations with predictable cash flows may prefer to borrow money rather than sell an\nownership stake to raise the capital they need to finance their investments. This is because issuing\nmore equity dilutes upside return for existing equity owners given that residual value must be\nshared across more owners.\nFrom the issuer’s perspective, bonds are riskier than stocks for the same reason bonds are safer\nthan stocks for investors. Bonds increase risk to the corporation by increasing leverage. If the\ncompany is struggling and cannot meet its promised obligations to bondholders, bondholders have\nthe legal standing to force certain actions upon the corporation, such as bankruptcy and liquidation.\nEquity holders represent a more permanent source of capital and have voting rights to elect the\nboard of directors, which oversees the management of the company. Debt has a stated, finite term\nwith generally no voting rights, while equity has no finite term and includes voting rights."
  },
  {
    "id": "jc_CI_017",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 17,
    "question": "Which of the following statements about Corporate Issuers is most accurate?",
    "options": {
      "A": "Upside return potential is unlimited for both equity holders and debtholders",
      "B": "Equity is riskier than debt from the perspective of both investors and issuers",
      "C": "Losses for both equity holders and debtholders are limited to their initial investment"
    },
    "answer": "C",
    "explanation": "Shareholder losses are limited to their initial investment. For both equity holders and debtholders,\ntheir initial investment represents their maximum possible loss.\nUpside return potential is capped for debtholders while it is unlimited for equity holders. If the\ncorporation is successful, there is theoretically no limit to how much equity owners could make\nfrom their investment. No matter how profitable the company becomes, however, bondholders\nwill never receive more than their interest and principal repayment.\nFrom issuers' perspective debt is riskier than equity while the opposite is true for the investors.\nFrom an investor’s perspective, stocks are riskier than bonds because shareholders are residual\nclaimants on the firm. From the issuer’s perspective, bonds are riskier than stocks for the same\nreason bonds are safer than stocks for investors. Bonds increase risk to the corporation by\nincreasing leverage. If the company is struggling and cannot meet its promised obligations to\nbondholders, bondholders have the legal standing to force certain actions upon the corporation,\nsuch as bankruptcy and liquidation."
  },
  {
    "id": "jc_CI_018",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 18,
    "question": "Which stakeholders would most likely realize the greatest benefit from a significant\nincrease in the market value of the company?",
    "options": {
      "A": "Creditors",
      "B": "Customers",
      "C": "Shareholders"
    },
    "answer": "C",
    "explanation": "Shareholders own shares of stock in the company, and their wealth is directly related to the\nmarket value of the company.\nCreditors are usually not entitled to any additional cash flows (beyond interest and debt\nrepayment) if the company’s value increases.\nWhile customers may have an interest in the company’s stability and long-term viability, they do\nnot benefit directly from an increase in a company’s value."
  },
  {
    "id": "jc_CI_019",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 19,
    "question": "Which of the following options is most aligned with sound corporate governance\npractices?",
    "options": {
      "A": "All stakeholders should have the right to participate in the governance of the firm",
      "B": "An audit committee that benefits from the direct guidance of management",
      "C": "Appropriate controls and procedures to effectively manage the firm should be in place"
    },
    "answer": "C",
    "explanation": "Effective corporate governance requires a system of appropriate controls and procedures to\nprotect financial markets and investors.\nOnly shareholders have the right (not all stakeholders) to participate in the governance of the\nfirm.\nThe audit and compensation committees are best structured with exclusively independent\ndirectors, and no management involvement."
  },
  {
    "id": "jc_CI_020",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 20,
    "question": "Regarding the implementation of ESG, which of the following is a social factor?",
    "options": {
      "A": "Board composition",
      "B": "Pollution prevention",
      "C": "Management of human capital"
    },
    "answer": "C",
    "explanation": "Social factors considered in ESG implementation generally pertain to the management of the\nhuman capital of a business, including human rights and welfare concerns in the workplace;\nproduct development; and, in some cases, community impact."
  },
  {
    "id": "jc_CI_021",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 21,
    "question": "Which of the following corporate stakeholder information is most likely to be true?",
    "options": {
      "A": "Risk appetites are similar among private lenders",
      "B": "Staggered boards provide continuous implementation of strategy and oversight",
      "C": "A company's CEO is responsible for implementing the company’s strategy under the oversight of the company's shareholders"
    },
    "answer": "B",
    "explanation": "A company's CEO is hired by the board and responsible for implementing the company’s strategy\nunder the oversight of the board of directors. Managers, led by the chief executive officer of the\ncompany, are responsible for determining and implementing the corporation’s strategy under the\noversight of the board of directors. In addition, a company’s board of directors is elected by\nshareholders to protect shareholders’ interests and provide strategic direction, taking into\nconsideration the company’s risk appetite, which it defines for the company. The board is also\nresponsible for hiring the CEO and monitoring the performance of the company and\nmanagement.\nPrivate debtholders have wide variation in risk appetites. With banks and private lenders, the\ngeneral perspective of debtholders applies: less financial leverage implies less risk and is\ntherefore preferred. Among private lenders, however, there is wide variation in their risk\nappetite, approach, behavior, and relationships with companies to whom they have provided\ncapital.\nThe positive aspect of a staggered board is that it provides continuous implementation of\nstrategy and oversight without constantly being reassessed by new board members, which\notherwise risks bringing short-termism into company strategy."
  },
  {
    "id": "jc_CI_022",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 22,
    "question": "In a corporation, which stakeholder group is the principal in a principal-agent\nrelationship?",
    "options": {
      "A": "Shareholders",
      "B": "Board of directors",
      "C": "Senior management"
    },
    "answer": "A",
    "explanation": "The relationship between shareholders and managers/directors is a classic example of a\nprincipal–agent relationship, whereby shareholders (the principal in this case) elect directors (an\nagent) who are expected to protect their interests by appointing senior managers (another agent)\nto run the company."
  },
  {
    "id": "jc_CI_023",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 23,
    "question": "A construction company has the opportunity to invest in a high-risk but high-reward\ncapital infrastructure project. Which of the following could be a reason why the company\ndecides not to pursue the project?",
    "options": {
      "A": "The compensation of managers is closely tied to the size of the company’s business",
      "B": "The directors receive excessive all-cash compensation",
      "C": "The managers have recently been awarded a generous amount of options to purchase shares"
    },
    "answer": "B",
    "explanation": "Where compensation, particularly if it is excessive, does not include an adequate amount of stock\ngrants or options, the risk tolerance of directors and managers may be low because directors and\nmanagers may be inclined to give up taking risks that create value for the company so as to not\njeopardize the compensation they have been receiving."
  },
  {
    "id": "jc_CI_024",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 24,
    "question": "Which of the following best describes dual-class share structures? example\n原版书",
    "options": {
      "A": "Dual-class share structures can be easily changed over time",
      "B": "Company insiders can maintain significant power over the organization",
      "C": "Conflicts of interest between management and stakeholder groups are less likely than with single-share structures."
    },
    "answer": "B",
    "explanation": "Under dual-class share systems, company founders or insiders may control board elections,\nstrategic decisions, and other significant voting matters.\nDual-share systems are virtually impossible to dismantle once adopted.\nConflicts of interest between management and stakeholders are more likely than with single-\nshare structures because of the potential control element under dual systems.\n2023BT.5.1.74"
  },
  {
    "id": "jc_CI_025",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 25,
    "question": "A controlling shareholder of XYZ Company owns 55% of XYZ’s shares, and the remaining\nshares are spread among a large group of shareholders. In this situation, conflicts of\ninterest are most likely to arise between:",
    "options": {
      "A": "shareholders and bondholders",
      "B": "the controlling shareholder and managers",
      "C": "the controlling shareholder and minority shareholders."
    },
    "answer": "C",
    "explanation": "In this ownership structure, the controlling shareholder’s power is likely more influential than\nthat of minority shareholders. Thus, the controlling shareholder may be able to exploit its\nposition to the detriment of the interests of the remaining shareholders.\nChoices A and B are incorrect because the ownership structure in and of itself is unlikely to create\nmaterial conflicts between shareholders and regulators or shareholders and managers."
  },
  {
    "id": "jc_CI_026",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 26,
    "question": "In a publicly listed company, a conflict of interest due to information asymmetry is most\nlikely to arise between shareholders and:",
    "options": {
      "A": "creditors",
      "B": "managers",
      "C": "customers"
    },
    "answer": "B",
    "explanation": "Compared with shareholders, managers typically have greater access to information about the\nbusiness and are more knowledgeable about its operations. Such 'information asymmetry' (that is,\nunequal access to information) makes it easier for managers to make strategic decisions that are\nnot necessarily in the best interest of shareholders and weakens the ability of shareholders to\nexercise control."
  },
  {
    "id": "jc_CI_027",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 27,
    "question": "The company stakeholder who is most likely to be exposed to the greatest information\nasymmetry in comparison with the management of the company is?",
    "options": {
      "A": "A bank lender",
      "B": "A public debtholder",
      "C": "A member of the board"
    },
    "answer": "B",
    "explanation": "Public debtholders do not have access to non-public information. Public debtholders (or\nbondholders) rely on public information and credit rating agency determinations to make their\ninvestment decisions. Unlike shareholders, debtholders do not hold voting power, and they\ntypically have limited influence over a company’s day-to-day operations.\nBanks and private lenders generally hold a company’s debt to maturity. They typically have direct\naccess to company management and non-public information about the company; in principle,\nthis reduces information asymmetries that exist between the company and these groups.\nA member of the board of directors has significant influence and access to non-public\ninformation. A company’s board of directors is elected by shareholders to protect shareholders’\ninterests and provide strategic direction, taking into consideration the company’s risk appetite,\nwhich it defines for the company. The board is also responsible for hiring the CEO and monitoring\nthe performance of the company and management.\n2023BT.5.1.7"
  },
  {
    "id": "jc_CI_028",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 28,
    "question": "Based on best practices in corporate governance procedures, it is most appropriate for a\ncompany’s compensation committee to: (2020 mock A afternoon)",
    "options": {
      "A": "link compensation with long-term objectives",
      "B": "include a retired executive from the firm",
      "C": "include a representative from the firm’s external auditor"
    },
    "answer": "A",
    "explanation": "Under appropriate corporate governance procedures, the compensation committee should link\ncompensation with long-term objectives.\nThe committee should be composed of independent board members only. Good corporate\ngovernance procedures would require that executive (internal) directors not rule on matters\nunderlying conflicts of interest or on matters requiring an unbiased judgment (such as audit,\nremuneration, or related-party transaction matters). Retired executives and external auditors are\nnot independent and should not be a part of the compensation committee."
  },
  {
    "id": "jc_CI_029",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 29,
    "question": "A credit rating agency assesses a company’s corporate governance structure as favorable\nto creditor rights. The most likely impact of this assessment on the company is a(n):",
    "options": {
      "A": "increase in its risk of default.（协会模拟考试题）",
      "B": "reduction in its financial performance",
      "C": "reduction in its cost of debt"
    },
    "answer": "C",
    "explanation": "Governance arrangements that help protect creditor rights can reduce a company’s cost of debt\nand default risk."
  },
  {
    "id": "jc_CI_030",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 30,
    "question": "The main incentive for activist shareholders is to advocate for.:",
    "options": {
      "A": "improved shareholder value",
      "B": "environmentally sustainable business practices",
      "C": "consideration of human rights in employee relations"
    },
    "answer": "A",
    "explanation": "The primary motivation of activist shareholders is to increase shareholder value. If they feel\nmanagement or the board has failed to act in the best interests of shareholders, they may\nattempt to force changes by gaining control of the board.\nEnvironmentally sustainable business practice is more likely to be a goal of ESG investors with an\ninvestment mandate focused on environmental factors.\nConsideration of human rights in employee relations is more likely to be a goal of ESG investors\nwith an investing mandate focused on social factors."
  },
  {
    "id": "jc_CI_031",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 31,
    "question": "An enhancement in corporate governance structure is most likely to yield:",
    "options": {
      "A": "lower cost of debt borrowing",
      "B": "less control by management",
      "C": "reduced operational efficiency"
    },
    "answer": "A",
    "explanation": "Default risks are also mitigated by properly functioning audit systems, transparent and better\nreporting of earnings, and controlling information asymmetries between the company and its\ncapital providers. Lower default risks are associated with better credit ratings for the company and\nlower costs of debt borrowing, given that creditors typically require a lower return when their\nfunds are better secured and their rights protected. Thus, an effective corporate governance\nstructure will result in lower cost of debt borrowing for the company."
  },
  {
    "id": "jc_CI_032",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 32,
    "question": "Which of the following board committees ensures that the company has a complete\nconflict of interest policy?",
    "options": {
      "A": "Risk committee",
      "B": "Governance committee",
      "C": "Remuneration committee"
    },
    "answer": "B",
    "explanation": "The main role of the board’s governance committee is to ensure that the company adopts good\ncorporate governance structures and practices. For this purpose, it oversees the development of\nthe governance policies at the company such as\n• the corporate governance code\n• the charter of the board and its committees\n• the code of ethics and\n• the conflict of interest policy, among others."
  },
  {
    "id": "jc_CI_033",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 33,
    "question": "Which of the following most likely represents conservative working capital management?",
    "options": {
      "A": "Decreasing inventory on hand to reduce insurance costs",
      "B": "Financing an increase in receivables by increasing long-term borrowing",
      "C": "Selling marketable securities and using the proceeds to acquire real estate."
    },
    "answer": "B",
    "explanation": "Financing an increase in a current asset with long-term borrowing is an example of conservative\nworking capital management. The other choices describe decreases in current assets and therefore\nmore likely represent aggressive working capital management."
  },
  {
    "id": "jc_CI_034",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 34,
    "question": "The following information is available for a company and the industry in which it competes: Company Industry\nAccounts receivable turnover 5.6 times 6.5 times\nInventory turnover 4.2 times 4.0 times\nNumber of days of payables 28 days 36 days\nOperating cycle ? 147 days\nCash conversion cycle 124 days ?\nRelative to the industry, the company’s operating cycle:\n（协会模考题）",
    "options": {
      "A": "is shorter, but its cash conversion cycle is longer",
      "B": "and cash conversion cycle are both longer",
      "C": "is longer, but its cash conversion cycle is shorter"
    },
    "answer": "B",
    "explanation": "Operating cycle = Number of days of inventory + Number of days of receivables.\nCash conversion cycle = Operating cycle − Number of days of payables.\nCompany Industry\nNumber of days receivables 365/5.6 = 65 days 365/6.5 = 56 days\nNumber of days inventory 365/4.2 = 87 days 365/4.0 = 91 days\nOperating cycle 65 + 87 = 152 days 147 days (given)\nLonger\nCash conversion cycle 124 days (given) 147 − 36 = 111\nLonger\nTherefore, both the operating and cash conversion cycles are longer for the company."
  },
  {
    "id": "jc_CI_035",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 35,
    "question": "Quixote Co. and Sisyphus Co., two similar-sized competitors, have had stable operating\ncycles of 180 days and cash conversion cycles of 140 days over the past several years.\nSisyphus' operating and cash conversion cycles remained at these levels in the most\nrecent year, but Quixote's cash conversion cycle contracted to 120 days while its\noperating cycle remained at 180 days. Relative to Sisyphus, Quixote has most likely begun:",
    "options": {
      "A": "taking more time to pay its suppliers",
      "B": "operating with less inventory on hand",
      "C": "offering easier credit terms to its customers"
    },
    "answer": "A",
    "explanation": "The cash conversion cycle is equal to the operating cycle minus the number of days of payables. If\nQuixote is extending the time it takes to pay its suppliers, its number of days of payables will\nincrease, and its cash conversion cycle will decrease. Its operating cycle (days of inventory plus days\nof receivables) is unaffected by the increase in days of payables. Changes in inventory or\nreceivables management would affect both the operating cycle and the cash conversion cycle."
  },
  {
    "id": "jc_CI_036",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 36,
    "question": "Keown Corp. is considering increasing the line of credit it offers to new customers\nbecause its sales manager believes this will lead to increased sales. What would be the\nexpected impact on Keown’s working capital if this change were made? example\n原版书",
    "options": {
      "A": "The company would reduce its inventory levels",
      "B": "The company would likely collect faster, reducing its receivables",
      "C": "The company would have an increased need for working capital."
    },
    "answer": "C",
    "explanation": "The company would likely need more working capital to support the expected increase in\nrequired inventory and accounts receivable resulting from an increase in sale.\n2023BT.5.1.78"
  },
  {
    "id": "jc_CI_037",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 37,
    "question": "Which is most likely considered a “pull” on liquidity? (2020 mock B afternoon)",
    "options": {
      "A": "Increased difficulty in collecting receivables",
      "B": "Obsolete inventory",
      "C": "Reduction in a line of credit."
    },
    "answer": "C",
    "explanation": "A “pull” on liquidity occurs when disbursements are made too quickly (e.g.,current liabilities are\npaid instead of being held or when credit availability is reduced or limited). A “drag” on liquidity\noccurs when receipts lag (i.e., non-cash current assets do not convert to cash quickly).\nConsequently, a reduction in a credit line is a “pull” on liquidity."
  },
  {
    "id": "jc_CI_038",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 38,
    "question": "Which action is most likely considered a secondary source of liquidity? (2020 mock A mo",
    "options": {
      "A": "Increasing the efficiency of cash flow management",
      "B": "Renegotiating current debt contracts to lower interest payments",
      "C": "Increasing the availability of bank lines of credit"
    },
    "answer": "B",
    "explanation": "Renegotiating debt contracts is a secondary source of liquidity because it may affect the company’s\noperating and/or financial positions.\nIncreasing cash flow management efficiency is a primary source of liquidity.\nIncreasing bank lines of credit is a primary source of liquidity."
  },
  {
    "id": "jc_CI_039",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 39,
    "question": "Keown Corp. is experiencing liquidity challenges. Several things might be contributing to\nthis. Three notable changes have been suggested as drags or pulls on liquidity:\n1. The increasing days in receivables is a drag on liquidity.\n2. Lower inventory turnover is a drag on liquidity.\n3. Increase in credit limits by lenders is a pull on liquidity.\nWhich of these does not contribute to the firm’s liquidity issue? example\n原版书",
    "options": {
      "A": "The change in days in receivables",
      "B": "The change in inventory turnover",
      "C": "The change in credit limits"
    },
    "answer": "C",
    "explanation": "The increase in credit limits is not a pull on liquidity but is in fact the opposite: it provides\nliquidity."
  },
  {
    "id": "jc_CI_040",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 40,
    "question": "The current ratio for the firm’s peer is 3.2. Based on the current ratio, the firm’s liquidity\ncompared with peer is best described as being:\nAs of 31 December 2022 $ thousands\nCash 200\nAccounts receivable 350\nInventory 1,250\nAccounts payable 300\nTaxes payable 200\nInstallment loan payable, due in three equal annual payments on 30 June.",
    "options": {
      "A": "higher",
      "B": "equivalent",
      "C": "lower"
    },
    "answer": "C",
    "explanation": "The higher the current ratio, the more liquid the company. Thus, with a current ratio of 2.6\n(1,800/700), the company is less liquid than peer, which has a current ratio of 3.2.\nCurrent ratio = Current assets/Current liabilities.\nCurrent Assets £ thousands Current Liabilities £ thousands\nCash 200 Accounts payable 300\nAccounts receivable 350 Taxes payable 200\nInventory 1,250 Loan payable, first installment 200\nTotal 1,800 Total 700"
  },
  {
    "id": "jc_CI_041",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 41,
    "question": "Which of the following options is most likely an example of secondary source of liquidity?",
    "options": {
      "A": "Bank line of credit",
      "B": "Inventory liquidation",
      "C": "Trade credit"
    },
    "answer": "B",
    "explanation": "Trade credit and a bank line of credit are considered primary sources of liquidity. Liquidating\ninventory is a secondary source of liquidity."
  },
  {
    "id": "jc_CI_042",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 42,
    "question": "Assuming all other factors remain constant, the debt capacity of a company is likely to\ndecrease when its:",
    "options": {
      "A": "current ratio increases",
      "B": "leverage ratio decreases",
      "C": "interest coverage ratio decreases."
    },
    "answer": "C",
    "explanation": "Interest coverage ratios are also commonly used to assess companies’ debt capacities. Generally,\nthese ratios provide an estimate of how many times a company can cover its interest expense (or\ninterest expense plus lease payments) with current earnings (usually measured as EBIT or\nEBITDA). In other words, interest coverage ratios provide an indication of a company’s financial\ncushion in meeting its debt service obligations. The larger the interest coverage ratio, the larger\nthe financial cushion and the greater the company’s ability to service its debt obligations.\nIt is a lower, not higher, current ratio that would indicate liquidity problems for a company, and\nhence a reduced debt capacity (i.e., ability to take additional debt). A starting point for\ndetermining a company’s debt capacity is its current ratio, equal to current assets divided by\ncurrent liabilities. The current ratio provides an indication of the ability of the firm to meet its\nshort-term debt obligations. The higher the ratio, the greater the ability of the company to repay\nits debt.\nA higher, not lower, leverage ratio would indicate a reduced debt capacity (i.e., ability for a\ncompany to take additional debt). Firms with higher proportions of debt in their capital\nstructures face a higher probability of default and have less ability to service additional debt than\nunderleveraged firms."
  },
  {
    "id": "jc_CI_043",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 43,
    "question": "A large corporation accepts a project which generates no revenue and has a negative net\npresent value. The project is most likely classified in which of the following categories?",
    "options": {
      "A": "Replacement project.",
      "B": "New product or service",
      "C": "Regulatory or environmental project"
    },
    "answer": "C",
    "explanation": "Regulatory, safety, and environmental projects are often mandated by governmental agencies.\nThey may generate no revenue and might not be undertaken by a company maximizing its own\nprivate interests. For example, a corporation may be required to install equipment to meet a\nregulatory standard, and the cost of satisfying the standard is born by the corporation. In this case,\nthe corporation selects the lowest cost alternative that meets the requirement, i.e., the alternative\nwith the least negative net present value."
  },
  {
    "id": "jc_CI_044",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 44,
    "question": "How expansion projects are likely to perform compared to going concern projects in\nterms of risk and capital:",
    "options": {
      "A": "greater uncertainty only.",
      "B": "greater amounts of capital only",
      "C": "both greater uncertainty and greater amounts of capital"
    },
    "answer": "C",
    "explanation": "Expansion projects typically involve greater uncertainty, time, and amounts of capital than going\nconcern projects."
  },
  {
    "id": "jc_CI_045",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 45,
    "question": "The government set new safety standards. A car company invested in a new technology\nto make its products meet new safety standards This project is best classified as a(n):",
    "options": {
      "A": "expansion project",
      "B": "compliance project",
      "C": "going concern project."
    },
    "answer": "B",
    "explanation": "Regulatory and compliance projects are required by third parties, such as government regulatory\nbodies, to meet safety and regulatory compliance standards. The investment in new technology\nto meet improved safety standards is therefore a compliance project."
  },
  {
    "id": "jc_CI_046",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 46,
    "question": "Which of the following statements describes the most appropriate treatment of cash\nflows in capital budgeting?(2111 mock)",
    "options": {
      "A": "Interest costs are included in the project’s cash flows to reflect financing costs",
      "B": "A project is evaluated using its incremental cash flows on an after-tax basis",
      "C": "Sunk costs and externalities should not be included in the cash flow estimates"
    },
    "answer": "B",
    "explanation": "All of the incremental cash flows arising from a project should be analyzed on an after-tax basis.\nOnly sunk costs should be ignored in a project’s cash flow estimation, but not any externalities.\nSunk costs cannot be recovered once they have been incurred. Externalities (both positive and\nnegative ones) are the effects of an investment decision on other things beside the investment\nitself; they should therefore be included in the cash flow estimation.\nFinancing costs like interest costs are excluded from calculations of operating cash flows. The\nfinancing costs are reflected in the required rate of return for an investment project. If financing\ncosts are included, we would be double-counting these costs."
  },
  {
    "id": "jc_CI_047",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 47,
    "question": "An analyst is estimating the NPV of a project to introduce a new spicier version of its\nwell-known barbeque sauce into its product line. A cost that should most likely be\nexcluded from his analysis is:",
    "options": {
      "A": "$200,000 to develop a recipe for the new sauce",
      "B": "a $150,000 decrease in sales of its current sauce as some current customers switch to the spicier sauce.",
      "C": "$100,000 for a marketing survey that was conducted to determine demand for a spicier sauce"
    },
    "answer": "C",
    "explanation": "The cost of the marketing survey should not be included because it is a sunk cost; it will be incurred\nwhether they decide to do the project or not. The decrease in sales of their current sauce if the\nspicier version is introduced (cannibalization) should be considered in the analysis. The cost of\nrecipe development should be included because it will only be incurred if they decide to go ahead\nwith the introduction of the new spicier sauce."
  },
  {
    "id": "jc_CI_048",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 48,
    "question": "The acceptance of which of the following capital budgeting projects is most likely to\nexpose a company to the highest level of uncertainty? (2020 mock A morning)",
    "options": {
      "A": "Replacement of worn out equipment",
      "B": "Expansion projects",
      "C": "Newly launched product or services"
    },
    "answer": "C",
    "explanation": "Investments related to new products or services expose the company to even more uncertainties\nthan expansion projects. These decisions are more complex and will involve more people in the\ndecision-making process.\nReplacement of worn out equipment is simply an improvement to the existing project with\nrecurring revenues.\nInvestments related to new products or services expose the company to even more uncertainties\nthan expansion projects. These decisions are more complex and will involve more people in the\ndecision-making process."
  },
  {
    "id": "jc_CI_049",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 49,
    "question": "A firm is considering a project that would require an initial investment of THB270 million\n(Thai baht). The project will help increase the firm’s after-tax net cash flows by THB30\nmillion per year in perpetuity, and it is found to have a negative NPV of THB20 million.\nThe IRR (%) of the project is closest to: (2020 mock B morning)",
    "options": {
      "A": "11.1%",
      "B": "10.3%",
      "C": "12.0%"
    },
    "answer": "A",
    "explanation": "The IRR is the discount rate that makes the NPV = 0. Because the cash flow stream is in perpetuity,\nit can be solved as follows:\n0 = –270 + (30/IRR)\nIRR = 11.1%"
  },
  {
    "id": "jc_CI_050",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 50,
    "question": "A company has a fixed $1,100 capital budget and has the opportunity to invest in the\nfour independent projects listed in the table: 18\n（ 年模考题） Project Investment outlay NPV\n1 $600 $100\n2 $500 $100\n3 $300 $50\n4 $200 $50\nThe combination of projects that provides the best choice is:",
    "options": {
      "A": "2, 3, and 4",
      "B": "1, 3, and 4",
      "C": "1 and 2"
    },
    "answer": "A",
    "explanation": "A is correct. The company should choose the combination of projects that maximizes net present\nvalue (NPV) subject to the budget constraint of $1,100.\nProject Investment required NPV decision\n1+2 1100 200\n1+3+4 1100 200\n2+3+4 1000 200 NPV=$200with the least investment"
  },
  {
    "id": "jc_CI_051",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 51,
    "question": "Two mutually exclusive projects have the following cash flows (€) and internal rates of\nreturn (IRR):\nProject IRR Year 0 Year 1 Year 2 Year 3 Year 4\nA 27.97% -4,900 690 1,698 1,270 7,290\nB 28.37% -4,900 690 1,698 2,102 6,350\nAssuming a discount rate of 8% annually for both projects, the firm should most likely\naccept:\n（模拟题改编）",
    "options": {
      "A": "both projects",
      "B": "Project A only",
      "C": "Project B only"
    },
    "answer": "B",
    "explanation": "The NPV of project A is €3,561.18:\n690 1,698 1,270 7,290\n3,561.18=-4,900+ + + +\n(1.08)1 (1.08)2 (1.08)3 (1.08)4\nThe NPV of Project B is €3,530.73:\n690 1,698 2,102 6,350\n3,530.73=-4,900+ + + +\n(1.08)1 (1.08)2 (1.08)3 (1.08)4\nProject A has a higher NPV and the projects are mutually exclusive, only Project A should be\naccepted."
  },
  {
    "id": "jc_CI_052",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 52,
    "question": "The Bearing Corp. invests only in positive-NPV projects. Which of the following\nstatements is true?( )\n原版书课后",
    "options": {
      "A": "Bearing’s return on invested capital (ROIC) is greater than its cost of capital (COC)",
      "B": "Bearing’s COC is greater than its ROIC",
      "C": "We can’t reach any conclusions about the relationship between the company’s ROIC and COC"
    },
    "answer": "A",
    "explanation": "Since all of Bearing’s projects have a positive NPV, they are all providing a return that is greater\nthan the opportunity cost of capital. Therefore, the ROIC must be greater than the COC"
  },
  {
    "id": "jc_CI_053",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 53,
    "question": "If the discount rate of 10%, the net present value (NPV) of the given investment is closest\nto:\nTime 0 1 2 3 4 5 6\nCash flow −1,500 300 600 1,000 200 500",
    "options": {
      "A": "605",
      "B": "578",
      "C": "636."
    },
    "answer": "C",
    "explanation": "The given cash flows are inserted into a financial calculator along with the 10% discount rate:\nCF = −1,500, CF = 300, CF = 600, CF = 1,000, CF = 200, CF = 500, CF = 300, I = 10.\n0 1 2 3 4 5 6\nComputing NPV the result is 636.32 ~ 636. Alternatively, the net present value of the project\nis found by discounting each cash flow by the time at which it arises, at the appropriate\ndiscount rate, as follows:\n1500 300 600 1000 200 500 300\n𝑁𝑁𝑁𝑁𝑁𝑁 = 0 + 1 + 2 + 3 + 4 + 5 + 6\n(1.10) (1.10) (1.10) (1.10) (1.10) (1.10) (1.10)\n= 636.32~636"
  },
  {
    "id": "jc_CI_054",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 54,
    "question": "Information on two mutually exclusive projects are as follows:\nNet Present Internal Rate of\nYear 0 1 2 3 4 Value (NPV, € Return\nthousands) (IRR, %)\nProject X −15,000 2,000 5,000 8,000 8,000 354.0 16.0\nProject Y −13,250 200 500 7,000 15,000 ? ?\nThe appropriate hurdle rate to use in evaluating projects is 15.0%. Of the following\nstatements, which one is most accurate? The company should accept:",
    "options": {
      "A": "Both projects",
      "B": "Project Y only",
      "C": "Project X only"
    },
    "answer": "B",
    "explanation": "The NPV (in € thousands) and IRR of Project Y are calculated as follows:\nProject X NPV = €354.0 (given) IRR = 16.0% (given)\nProject Y Using a financial calculator: CF = Using a financial calculator: CF =\n0 0\n−13,250, CF = 200, CF = 500, CF = −13,250, CF = 200, CF = 500, CF =\n1 2 3 1 2 3\n7,000, CF = 15,000, i = 15%, and 7,000, and CF = 15,000, and solving for\n4 4\nsolving for NPV, NPV = €480.9 IRR, IRR = 16.2%\nBecause these projects are mutually exclusive, only one can be undertaken: It should be\nProject Y, which has the highest NPV and thus increases shareholder wealth the most. Both\nprojects’ IRRs exceed the hurdle rate, and the IRR of Project Y exceeds that of Project X. The\ndecision, however, should be based on the superior NPV of Project Y."
  },
  {
    "id": "jc_CI_055",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 55,
    "question": "A project has the following annual cash flows:\nYear 0 Year 1 Year 2 Year 3 Year 4\n‒$4,662,005 $22,610,723 ‒$41,072,261 $33,116,550 ‒$10,000,000\nWhich of the following discount rates is most likely to yield the highest net present value ?",
    "options": {
      "A": "8%",
      "B": "15%",
      "C": "10%"
    },
    "answer": "B",
    "explanation": "The NPV at 15% is $99.93. The NPV at 10% is –$0.01. The NPV at 8% is –$307.59."
  },
  {
    "id": "jc_CI_056",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 56,
    "question": "A measure for assessing how efficiently capital is converted into after-tax operating\nprofits is the:",
    "options": {
      "A": "hurdle rate",
      "B": "cost of capital",
      "C": "return on invested capital."
    },
    "answer": "C",
    "explanation": "The hurdle rate is the rate that a project’s IRR must exceed for the project to be accepted by\nthe company. Cost of capital (COC), is the required return used in the NPV calculation, and the\ncompany’s associated cost of funds. ROIC reflects how effectively a company’s management is\nable to convert capital into after-tax operating profits."
  },
  {
    "id": "jc_CI_057",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 57,
    "question": "Given two mutually exclusive projects with normal cash flows, the point at which their\nnet present value profiles intersect the horizontal axis is most likely the projects’:",
    "options": {
      "A": "weighted average cost of capital.",
      "B": "crossover rate",
      "C": "internal rate of return"
    },
    "answer": "C",
    "explanation": "For a project with normal cash flows, the NPV profile intersects the horizontal axis at the point\nwhere the discount rate equals the IRR. The crossover rate is the discount rate at which the NPVs\nof the projects are equal. Although it is possible that the crossover rate is equal to each project’s\nIRR, it is not a likely event. It is also possible that the IRR is equal to the WACC, but that scenario is\nnot the most likely one.\nThe crossover rate is the discount rate at which the NPVs of the projects are equal. While it is\npossible that the crossover rate is equal to each project’s IRR, it is not a likely event.\nThe project’s net present value (NPV) occurs when the NPV profile intersects the vertical axis or\nwhen the discount rate = 0."
  },
  {
    "id": "jc_CI_058",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 58,
    "question": "Wilson Flannery is concerned that this project has multiple IRRs.\nYear 0 1 2 3\nCash flows —50 100 0 —50\nHow many discount rates produce a zero NPV for this project?\n（原版书课后题）",
    "options": {
      "A": "One, a discount rate of 0 percent",
      "B": "Two, discount rates of 0 percent and 32 percent",
      "C": "Two, discount rates of 0 percent and 62 percent"
    },
    "answer": "C",
    "explanation": "Discount rates of 0 percent and approximately 61.8 percent both give a zero NPV.\nRate 0% 20% 40% 60% 61.8% 80% 100%\nNPV 0.00 4.40 3.21 0.29 0.00 —3.02 —6.25"
  },
  {
    "id": "jc_CI_059",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 59,
    "question": "Two mutually exclusive projects have conventional cash flows, but one project has a\nlarger NPV while the other has a higher IRR. Which of the following is least likely\nresponsible for this conflict?\n（未知）",
    "options": {
      "A": "Reinvestment rate assumption.",
      "B": "Size of the projects' initial investments",
      "C": "Risk of the projects as reflected in the required rate of return"
    },
    "answer": "C",
    "explanation": "Conflicting decision rules based on the NPV and IRR methods are related to the reinvestment rate\nassumption, the timing of the cash flows, or the scale of the projects. Differing required rates of\nreturn are not related to conflicting NPV and IRR decisions."
  },
  {
    "id": "jc_CI_060",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 60,
    "question": "Erin Chou is reviewing a profitable investment project that has a conventional cash flow\npattern. If the cash flows for the project, initial outlay, and future after-tax cash flows all\ndouble, Chou would predict that the IRR would:\n（原版书课后题）",
    "options": {
      "A": "increase and the NPV would increase",
      "B": "stay the same and the NPV would increase",
      "C": "stay the same and the NPV would stay the same"
    },
    "answer": "B",
    "explanation": "The IRR would stay the same because both the initial outlay and the after-tax cash flows double,\nso that the return on each dollar invested remains the same. All of the cash flows and their present\nvalues double. The difference between total present value of the future cash flows and the initial\noutlay (the NPV) also doubles."
  },
  {
    "id": "jc_CI_061",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 61,
    "question": "If two projects are mutually exclusive, then the analyst should:",
    "options": {
      "A": "accept the project with the highest IRR",
      "B": "use the opportunity cost of funds as the discount rate",
      "C": "accept the projects for which the IRR is greater than the opportunity cost of funds."
    },
    "answer": "B",
    "explanation": "When the choice is between two mutually exclusive projects and the NPV and IRR rank the two\nprojects differently, the NPV criterion is strongly preferred. we referred to the rate used in\ndiscounting the cash flows as the “required rate of return.” The required rate of return is the\ndiscount rate that the issuer’s suppliers of capital require given the riskiness of the project. This\ndiscount rate is frequently called the “opportunity cost of funds” or the “cost of capital.” For a\ncapital investment with one investment outlay, made initially, the net present value (NPV) is the\npresent value of the future after-tax cash flows minus the investment outlay, where the discount\nrate equals the required rate of return."
  },
  {
    "id": "jc_CI_062",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 62,
    "question": "A company has 100 million shares outstanding. The share price of a company’s stock is\n£15 just prior to announcing a £100 million expansionary investment in a new plant, and\nthe company estimates that the present value of future after-tax cash flows will be £150\nmillion. Analysts, however, estimate that the new plant’s profitability will be lower than\nthe company’s expectations. The company’s stock price will most likely:",
    "options": {
      "A": "drop below £15 per share due to the cannibalization of revenue from the new plant",
      "B": "increase by less than £0.50 per share",
      "C": "increase by the new plant’s net present value per share."
    },
    "answer": "B",
    "explanation": "The value of a company is the value of its existing investments plus the net present values of all of\nits future investments. The NPV of this new plant is £150 million – £100 million = £50 million. The\nprice per share should increase by NPV per share or £50 million/100 million shares = £0.50 per\nshare. As the new plant’s profitability is less than expectations, the NPV per share (and hence the\nincrease in the stock price) should therefore be slightly below £0.50 per share.\nIt is only new plant’s profitability that is below the average not the overall. The company value\nshould not fall below £15 per share, all things being equal."
  },
  {
    "id": "jc_CI_063",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 63,
    "question": "Albert Duffy, a project manager at Crane Plastics, is considering taking on a new capital\nproject. When presenting the project, Duffy shows members of Crane's executive\nmanagement team that because the company has the ability to have employees work\novertime, the project makes sense. The project Duffy is taking on would be best\ndescribed as having:",
    "options": {
      "A": "a fundamental option",
      "B": "an expansion option",
      "C": "a flexibility option"
    },
    "answer": "C",
    "explanation": "The project described has a production-flexibility regarding the level of production. Other flexibility\noptions might be to produce a different product or to use different inputs at some future date.\nIncluding the value of real options can improve the NPV estimates for individual projects."
  },
  {
    "id": "jc_CI_064",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 64,
    "question": "A company is considering building a distribution center that will allow it to expand sales\ninto a new region comprising three provinces. John Parker, a firm analyst, has argued\nthat the current analysis fails to incorporate the amount they could get from selling the\ndistribution center at the end of year 2, rather than operating it to the end of the\nproject's assumed economic life. Parker is suggesting that:",
    "options": {
      "A": "the assumed investment horizon is too long",
      "B": "the analysis should include the value of a put option",
      "C": "the analysis should include the value of a call option"
    },
    "answer": "B",
    "explanation": "The option to abandon the project and receive the market value of the facility if actual cash flows\nare less than expected over the first two years can be viewed as a valuable put option that should\nbe included in the calculation of the project's NPV."
  },
  {
    "id": "jc_CI_065",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 65,
    "question": "AquaFarms has estimated the NPV of the expected cash flows from a new processing\nplant to be –EUR0.40 million. Auvergne is evaluating an incremental investment of\nEUR0.30 million that would give the company the flexibility to switch among coal, natural\ngas, and oil as energy sources. The original plant relied only on coal. The option to switch\nto cheaper sources of energy when they are available has an estimated value of EUR1.20\nmillion. What is the value of the new processing plant including this real option to use\nalternative energy sources? example\n原版书",
    "options": {
      "A": "EUR0.80 million",
      "B": "EUR0.50 million",
      "C": "EUR0.90 million"
    },
    "answer": "B",
    "explanation": "The NPV, including the real option, should be:\nProject NPV\n= NPV (based on DCF alone) – Cost of options + Value of options.\nProject NPV = –0.40 million – 0.30 million + 1.20 million\n= EUR0.50 million.\nWithout the flexibility offered by the real option, the plant is unprofitable. The real option to\nadapt to cheaper energy sources adds enough to the value of this investment to give it a positive\nNPV. The company should undertake the investment, which would add to its value."
  },
  {
    "id": "jc_CI_066",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 66,
    "question": "Making a decision based on which of the following options is considered capital\nallocation pitfall:",
    "options": {
      "A": "opportunity costs",
      "B": "after-tax cash flows",
      "C": "short-run accounting numbers"
    },
    "answer": "C",
    "explanation": "One common pitfall is basing investment decisions on EPS, net income, or ROE: Companies\nsometimes have incentives to boost earnings per share, net income, or return on equity. Many\ninvestments, even those with strong NPVs, do not increase these accounting numbers in the\nshort run and may even reduce them. Paying too much attention to short-run accounting\nnumbers can result in a company choosing investments that are not in the long-run economic\ninterests of its shareholders."
  },
  {
    "id": "jc_CI_067",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 67,
    "question": "After making a capital investment, a company abandoned the project due to poor\nfinancial results. This action alone best exemplifies the practice of:",
    "options": {
      "A": "sizing option",
      "B": "timing option",
      "C": "flexibility option."
    },
    "answer": "A",
    "explanation": "Sizing options encompass abandonment or expansion of capacity. If after investing the company\ncan abandon the investment if the financial results are disappointing, it has an abandonment\noption. At some future date, if the cash flow from abandoning an investment exceeds the\npresent value of the cash flows from continuing the investment, the company should exercise\nthe abandonment option. Conversely, if the company can make additional investments when\nfuture financial results are strong, the company has a growth option or an expansion option."
  },
  {
    "id": "jc_CI_068",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 68,
    "question": "An analyst gathered the following Information about the capital structure and before-tax\ncomponent costs for a company. The company’s marginal tax rate is 40%.\nCapital component Book Value (000) Market Value(000) Component cost\nDebt $100 $80 8%\nPreferred stock $20 $20 10% Common stock $100 $200 12%\nThe company’s weighted average cost of capital (WACC) is closest to: 1906\n（ 考题回顾）",
    "options": {
      "A": "8.55%",
      "B": "9.95%",
      "C": "10.00%"
    },
    "answer": "B",
    "explanation": "As the target capital weights are not given, you can use market value weights to compute the WACC.\nThe market value weights for debt, preferred stock and equity are 0.2667, 0.0667, and 0.6667\nrespectively."
  },
  {
    "id": "jc_CI_069",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 69,
    "question": "A firm with a marginal tax rate of 40% has a weighted average cost of capital of 7.11%.\nThe before-tax cost of debt is 6%, and the cost of equity is 9%. The weight of equity in\nthe firm’s capital structure is closest to:",
    "options": {
      "A": "79%",
      "B": "65%",
      "C": "37%"
    },
    "answer": "B",
    "explanation": "WACC = w r (1 – t) + w r , where w + w = 1\nd d e e d e\n7.11 = (1 – w ) × 6 × (1 – 0.4) + w ×9\ne e\nw = 65%\ne"
  },
  {
    "id": "jc_CI_070",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 70,
    "question": "Which of the following is the least appropriate method for an external analyst to\nestimate a company’s target capital structure for determining WACC? Using the:",
    "options": {
      "A": "averages of comparable companies’ capital structure.",
      "B": "company’s current capital structure, at book value weights",
      "C": "statements made by the company’s management regarding capital structure policy"
    },
    "answer": "B",
    "explanation": "An external analyst does not know a company’s actual target capital structure. Consequently, the\nanalyst should rely on market value (not book value) weights for the components of the company’s\ncurrent capital structure."
  },
  {
    "id": "jc_CI_071",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 71,
    "question": "When estimating the NPV for a project with a risk level higher than the company’s\naverage risk level, an analyst will most likely discount the project’s cash flows by a rate\nthat is:",
    "options": {
      "A": "determined by the firm’s target capital structure",
      "B": "below the WACC",
      "C": "above the WACC."
    },
    "answer": "C",
    "explanation": "If the systematic risk of the project is above average relative to the company’s current portfolio of\nprojects, an upward adjustment is made to the company’s MCC or WACC."
  },
  {
    "id": "jc_CI_072",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 72,
    "question": "A company is most likely to be financed only by equity during its:",
    "options": {
      "A": "start-up stage",
      "B": "growth stage",
      "C": "mature stage."
    },
    "answer": "A",
    "explanation": "During the start-up stage a firm is un1ikely to have positive earnings and cash flows or significant\nassets that can be pledged as debt collateral, so firms in this stage are typically financed by equity\nonly."
  },
  {
    "id": "jc_CI_073",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 73,
    "question": "A company's optimal capital structure:",
    "options": {
      "A": "maximizes firm value and minimizes the weighted average cost of capital",
      "B": "minimizes the interest rate on debt and maximizes expected earnings per share",
      "C": "maximizes expected earnings per share and maximizes the price per share of common stock"
    },
    "answer": "A",
    "explanation": "The optimal capital structure minimizes the firm's WACC and maximizes the firm's value (stock\nprice)."
  },
  {
    "id": "jc_CI_074",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 74,
    "question": "A growth retail business that is expected to generate positive operating cash flows in the\nnext 3–5 years would normally be financed with: example\n原版书",
    "options": {
      "A": "little or no debt",
      "B": "significant debt to minimize equity dilution",
      "C": "significant debt to minimize its weighted average cost of capital"
    },
    "answer": "A",
    "explanation": "While one can often find exceptions, the standard approach to financing a business in such a\nhighly competitive sector as retail, with negative and/or unpredictable cash flows, is to rely\nprimarily on equity. Using predominantly equity financing to meet capital needs allows\nmanagement to preserve operational and financial flexibility while minimizing the risk of financial\ndistress associated with debt."
  },
  {
    "id": "jc_CI_075",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 75,
    "question": "Green Company and Black Company are each achieving 15% annual revenue growth and\nhave recently started to generate positive cash flow. Green Company owns and acquires\nrenewable energy generation projects. Black Company is a cloud-based software company\nwith a dominant market position, serving auto dealers. Which company is more likely to\nhave greater debt in its capital structure, and why? example\n原版书",
    "options": {
      "A": "Black Company, because it serves a cyclical business",
      "B": "Black Company, because of the strength of its market position",
      "C": "Green Company, because its underlying assets can be financed with debt"
    },
    "answer": "C",
    "explanation": "Green Company has fixed assets, for which there is likely to be a ready and liquid market, and\nstable cash flows, which are supportive of debt financing. Black Company, a cloud-based software\ntechnology company, is a “capital-light” business, with few fixed assets. Its assets are likely to\nconsist of mostly human capital. Additionally, servicing a cyclical industry is also likely to lead to\nBlack Company having low debt."
  },
  {
    "id": "jc_CI_076",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 76,
    "question": "Which combination of factors is most likely to enhance a company's capacity to sustain\ndebt in its capital structure?",
    "options": {
      "A": "High revenue, low cash flow volatility, and a low level of fungible assets",
      "B": "High revenue, low operating leverage, and a high level of fungible assets",
      "C": "Low cash flow volatility, low operating leverage, and a low level of fungible assets"
    },
    "answer": "B",
    "explanation": "Because an increased ability to support debt is indicated by high revenue, low operating leverage,\nand greater fungible assets."
  },
  {
    "id": "jc_CI_077",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 77,
    "question": "At which stage in a company's lifecycle is it most likely to have a capital structure with\nmore debt than equity?",
    "options": {
      "A": "Start-up stage",
      "B": "Growth stage",
      "C": "Mature stage"
    },
    "answer": "C",
    "explanation": "At the mature stage, the company becomes able to support low-cost debt, often on an unsecured\nbasis. From the company’s perspective, debt financing is likely to be more attractive than higher-\ncost equity financing. Also, as companies mature, business risk typically declines, and their cash\nflows turn positive and become increasingly predictable, allowing for greater use of leverage on\nmore attractive (less costly) financing terms. Debt then becomes a larger component of their\ncapital structures.\nAt thE early stage, debt capital is typically not available or available only at a high cost. From the\nperspective of an early-stage issuer, debt may be an attractive way to reduce or avoid the dilution\nassociated with equity issuance. However, with cash flows that are negative and unpredictable, a\ntypical start-up would have difficulty making regular debt payments, or 'servicing the debt.' Even\nif debt is available, the cost, inflexibility, and risk associated with borrowing are often unattractive\nto a start-up. As a result, debt is a negligible component of the capital structures of most start-\nup companies.\nAs a company exits the growth stage and progresses through the growth stage, debt financing\nmight become more accessible, but the company might want to use debt conservatively and\ncontinue relying primarily on equity financing. Both the availability and the terms of debt\nfinancing improve for the company during this stage. Many growth companies use debt\nconservatively in order to preserve operational and financial flexibility and minimize the risk of\nfinancial distress. Equity remains the predominant source of capital."
  },
  {
    "id": "jc_CI_078",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 78,
    "question": "Which mature company is most likely to utilize the highest amount of leverage in its\ncapital structure?",
    "options": {
      "A": "Mining company",
      "B": "Software company",
      "C": "Shipping company"
    },
    "answer": "C",
    "explanation": "In real estate, utilities, shipping, airlines, and certain other highly capital-intensive businesses, the\nunderlying assets can be bought and sold fairly easily, tend to retain their value regardless of who\nowns them, and can therefore support substantial debt secured by those assets.\nA mining company will be more likely to raise equity funding than debt funding. In cyclical sectors,\nsuch as mining and minerals, and many industrials, revenues and cash flows vary widely through\nthe economic cycle, which limits debt capacity. As a result, businesses in cyclical sectors may have\nless debt in their capital structures than companies in other less cyclical industries.\nA software company is, being capital light, less likely to need to raise debt than a shipping company\nwhich will likely need to make substantial debt-funded capital investments. Some business models\nare inherently \"capital light,\" that is, they require little incremental investment in fixed assets or\nworking capital to enable revenue growth. As a result, they have no need to borrow or otherwise\nraise capital to grow, even though they could easily support debt. Software businesses often fit this\ndescription."
  },
  {
    "id": "jc_CI_079",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 79,
    "question": "If investors have homogeneous expectations, the market is efficient, and there are no\ntaxes, no transactions costs, and no bankruptcy costs, the Modigliani and Miller\nProposition I states that:",
    "options": {
      "A": "bankruptcy risk rises with more leverage",
      "B": "managers cannot change the value of the company by using more or less debt",
      "C": "managers cannot increase the value of the company by employing tax saving strategies."
    },
    "answer": "B",
    "explanation": "Proposition I, or the capital structure irrelevance theorem, states that the level of debt versus\nequity in the capital structure has no effect on company value in perfect markets."
  },
  {
    "id": "jc_CI_080",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 80,
    "question": "Which of the following statements regarding Modigliani and Miller's Proposition I is most\naccurate?",
    "options": {
      "A": "A firm's cost of equity financing increases as the proportion equity in a firm's capital structure",
      "B": "A firm's cost of debt financing increases a firm's financial leverage Increases",
      "C": "A firm's weighted average cost of capital is not affected by its choice of capital structure"
    },
    "answer": "C",
    "explanation": "MM's Proposition 1 (with no taxes) states that capital structure is irrelevant because the decrease\nin a firm's WACC from additional debt financing is just offset by the increase in WACC from a\ndecrease in equity financing. The cost of debt is held constant and the cost of equity financing\nincreases as the proportion of debt in the capital structure is increased."
  },
  {
    "id": "jc_CI_081",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 81,
    "question": "According to Modigliani and Miller’s Proposition II without taxes:",
    "options": {
      "A": "the capital structure decision has no effect on the cost of equity",
      "B": "investment and the capital structure decisions are interdependent",
      "C": "the cost of equity increases as the use of debt in the capital structure increases"
    },
    "answer": "C",
    "explanation": "The cost of equity rises with the use of debt in the capital structure, e.g., with increasing financial\nleverage."
  },
  {
    "id": "jc_CI_082",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 82,
    "question": "Suppose the weighted average cost of capital of the Gadget Company is 10 percent. If\nGadget has a capital structure of 50 percent debt and 50 percent equity, a before-tax\ncost of debt of 5 percent, and a marginal tax rate of 20 percent, then its cost of equity\ncapital is closest to:",
    "options": {
      "A": "12 percent",
      "B": "14 percent",
      "C": "16 percent"
    },
    "answer": "C",
    "explanation": "0.10 = (0.50)(0.05)(1 – 0.20) + (0.50)re\nre = 0.16 or 16 percent"
  },
  {
    "id": "jc_CI_083",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 83,
    "question": "The current weighted average cost of capital (WACC) for Van der Welde is 10 percent.\nThe company announced a debt offering that raises the WACC to 13 percent. The most\nlikely conclusion is that for Van der Welde:",
    "options": {
      "A": "the company’s prospects are improving",
      "B": "equity financing is cheaper than debt financing",
      "C": "the company’s debt/equity ratio has moved beyond the optimal range"
    },
    "answer": "C",
    "explanation": "If the company’s WACC increases as a result of taking on additional debt, the company has moved\nbeyond the optimal capital range. The costs of financial distress may outweigh any tax benefits to\nthe use of debt."
  },
  {
    "id": "jc_CI_084",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 84,
    "question": "Company A has 25% debt and 75% equity in its capital structure. Management decides\nto increase leverage, so it issues more debt and buys back company stock. As a result,\nthe new capital structure is 50% debt and 50% equity. Which of the following statements\nis true in perfect capital markets? example\n原版书",
    "options": {
      "A": "After refinancing, the company is worth more because leverage has increased",
      "B": "After refinancing, the company is worth less because there is a greater chance of bankruptcy",
      "C": "Neither is true."
    },
    "answer": "C",
    "explanation": "Neither answer is correct. In perfect capital markets, a change in capital structure has no impact\non the value of the company."
  },
  {
    "id": "jc_CI_085",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 85,
    "question": "Based on the Modigliani–Miller propositions, if a company's debt-to-equity ratio\nincreases, which of the following costs is most likely to experience the largest increase?",
    "options": {
      "A": "WACC",
      "B": "Cost of debt",
      "C": "Cost of equity"
    },
    "answer": "C",
    "explanation": "As the debt-to-equity ratio increases and the company uses more debt, its risk goes up and the\ncost of equity must increase. MM Proposition II holds that the increase in the cost of equity must\nexactly offset the greater use of lower cost debt."
  },
  {
    "id": "jc_CI_086",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 86,
    "question": "According to Modigliani and Miller's Proposition I with taxes, the value of a levered\ncompany exceeds the value of an unlevered company by an amount equal to:",
    "options": {
      "A": "value of the debt",
      "B": "after-tax interest paid",
      "C": "tax rate multiplied by the value of the debt."
    },
    "answer": "C",
    "explanation": "Modigliani and Miller show that in the presence of corporate taxes (but not personal taxes), the\nvalue of the levered company is greater than that of the all-equity company by an amount equal\nto the tax rate multiplied by the value of the debt, also termed the debt tax shield."
  },
  {
    "id": "jc_CI_087",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 87,
    "question": "According to the static trade-off theory:( )\n原版书课后题",
    "options": {
      "A": "debt should be used only as a last resort",
      "B": "companies have an optimal level of debt",
      "C": "the capital structure decision is irrelevant"
    },
    "answer": "B",
    "explanation": "The static trade-off theory indicates that there is a trade-off between the tax shield from interest\non debt and the costs of financial distress, leading to an optimal amount of debt in a company’s\ncapital structure."
  },
  {
    "id": "jc_CI_088",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 88,
    "question": "Which of the following is least likely an appropriate method for an analyst to estimate a\nfirm's target capital structure?(notes)",
    "options": {
      "A": "Use the firm's current proportions of debt and equity based on market values, with an adjustment for recent trends in its capital structure.",
      "B": "Use average capital structure weights for the firm's industry, based on book values of debt",
      "C": "Use the firm's current capital structure, based on market values of debt and equity"
    },
    "answer": "B",
    "explanation": "For an analyst, target capital structure should always be based on market values of debt and equity.\nThe other two choices are appropriate methods for estimating a firm's capital structure for analysis."
  },
  {
    "id": "jc_CI_089",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 89,
    "question": "To determine their target capital structures in practice, it is least likely that firms will:",
    "options": {
      "A": "use the book value of their debt to make financing decisions",
      "B": "match the maturities of their debt issues to specific firm investment",
      "C": "determine an optimal capital structure based on the expected costs of financial distress"
    },
    "answer": "C",
    "explanation": "While it is a useful theoretical concept, in practice determining an optimal capital structure based\non the cost savings of debt and the expected costs of financial distress is not feasible. Because debt\nrating companies often use book values of debt, firms use book values of debt when choosing\nfinancing sources. It is common for firms to match debt maturities to the economic lives of specific\ninvestments."
  },
  {
    "id": "jc_CI_090",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 90,
    "question": "The pecking order theory of financial structure decisions:",
    "options": {
      "A": "is based on information asymmetry",
      "B": "suggests that debt is the first choice for financing an investment of significant size",
      "C": "suggests that debt is the riskiest and least preferred source of financing"
    },
    "answer": "A",
    "explanation": "Pecking order theory is based on information asymmetry and the resulting signals that different\nfinancing choices send to investors. It suggests that retained earnings are the first choice for\nfinancing an investment and issuing new equity is the least preferred choice."
  },
  {
    "id": "jc_CI_091",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 91,
    "question": "Compared with managers who do not have significant compensation in the form of stock\noptions, managers who have such compensation will be expected to favor:",
    "options": {
      "A": "less financial leverage",
      "B": "greater firm risk",
      "C": "issuance of common stock."
    },
    "answer": "B",
    "explanation": "Given the asymmetric returns on stock options, we would expect managers with significant stock\noptions in their compensation to favor greater financial1everage and issuance of debt to increase\npotential stock price gains. Issuing common stock could decrease the market price of shares, which\nwould decrease the value of stock options."
  },
  {
    "id": "jc_CI_092",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 92,
    "question": "A business model is least likely to include details about a company’s",
    "options": {
      "A": "largest customers",
      "B": "workforce characteristics",
      "C": "revenue and expense estimates"
    },
    "answer": "C",
    "explanation": "Detailed forecasts of revenue in expenses would be in a financial plan, but typically not in a\nbusiness model. A firm’s largest customers and information about its workforce and its value are\nlikely elements of a business model."
  },
  {
    "id": "jc_CI_093",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 93,
    "question": "A pricing approach where a company charges different prices to different customers\nbased on purchase volume is best described as.:",
    "options": {
      "A": "tiered pricing",
      "B": "bundled pricing",
      "C": "dynamic pricing"
    },
    "answer": "A",
    "explanation": "Economists use the term 'price discrimination' when firms charge different prices to different\ncustomers. Tiered pricing charges different prices to different buyers, most commonly based on\nvolume purchased.\nBundling refers to combining multiple products or services so that customers are incentivized, or\nrequired, to buy them together as opposed to offering the same product at different prices\ndepending on the purchased volume. Bundling can be effective, particularly for products that are\ncomplementary, with high incremental margins and high marketing costs relative to the cost of the\nproduct itself. Examples include hotel rooms with free breakfast; furnished rental apartments;\ncable TV and internet services; pre-packaged sets of toys, tools, or kitchen utensils; and cloud-\nbased software combining an application, processing power, storage, and support services.\nDynamic pricing charges different prices at different times [i.e., pricing is based on time of\npurchase as opposed to volume purchased; prices are not simultaneously adjusted based on the\npurchased volume]. Specific examples include off-peak pricing (e.g., for hotel rooms, advertising,\nairline tickets, electricity, or matinee movie tickets), 'surge' pricing, and 'congestion' pricing (e.g.,\nfor ride sharing and toll roads)."
  },
  {
    "id": "jc_CI_094",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 94,
    "question": "A company that produces goods to be marketed by other firms can best be described as\na type of business model known as.:",
    "options": {
      "A": "value added reseller business model",
      "B": "licensing arrangement business model",
      "C": "contract manufacturer business model"
    },
    "answer": "C",
    "explanation": "Contract manufacturers produce goods to be marketed by others.\nValue added resellers not only distribute a product but also handle more complex aspects of\nproduct installation, customization or support.\nLicensing arrangements are business models in which a company will produce a product using\nsomeone else's brand name in return for a royalty."
  },
  {
    "id": "jc_CI_095",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 95,
    "question": "The business model of a knowledge aggregation company that permits its users to\ncontribute directly to online content is best described as a:",
    "options": {
      "A": "platform business model",
      "B": "marketplace business model",
      "C": "crowdsourcing business model."
    },
    "answer": "C",
    "explanation": "Crowdsourcing business models enable users to contribute directly to a product, service, or online\ncontent. Examples include: contests and competitions; online gaming; product development, such\nas open source software; knowledge aggregation, such as Wikipedia and Waze/Google Maps; fan\nor hobbyist clubs; and networks of tradespersons or professionals.\nA platform business is based on a network and can be distinguished from a traditional or 'linear'\nbusiness that adds value to something that is sold to customers in a linear supply chain. Platform\nbusiness models are not developed specifically to allow users to contribute directly to product,\nservice, or online content.\nMarketplace businesses create networks of buyers and sellers without taking ownership of the\ngoods during the process. Examples include: Alibaba, eBay, Mercado Libre, and Etsy. Marketplace\nbusiness models are not developed specifically to allow users to contribute directly to product,\nservice, or online content."
  },
  {
    "id": "jc_CI_096",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 96,
    "question": "Which pricing model is most commonly used when a company intentionally sacrifices\nprofit margins in order to expand market share?",
    "options": {
      "A": "Dynamic pricing",
      "B": "Freemium pricing",
      "C": "Penetration pricing"
    },
    "answer": "C",
    "explanation": "Penetration pricing is an example of discount pricing and is used when a firm willingly sacrifices\nmargins in order to build scale and market share.\nDynamic pricing charges different prices at different times. Specific examples include off-peak\npricing (e.g., for hotel rooms, advertising, airline tickets, electricity, or matinee movie tickets),\n'surge' pricing, and 'congestion' pricing (e.g., for ride sharing and toll roads).\nFreemium pricing allows customers a certain level of usage or functionality at no charge—for\nexample, with news content, a software application, or a game. This model is widely used in digital\ncontent and services, such as periodicals, video games, software/apps, and cloud storage, where\nthe provider stands to benefit from wide adoption (often via network effects)."
  },
  {
    "id": "jc_CI_097",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 97,
    "question": "The sequence of processes related to the creation of a product, both within and external\nto a company, is best described as a.:",
    "options": {
      "A": "value chain",
      "B": "supply chain",
      "C": "business model"
    },
    "answer": "B",
    "explanation": "A supply chain refers to the sequence of processes involved in the creation of a product, both\nwithin and external to a firm. A supply chain includes all the steps involved in producing and\ndelivering a physical product to the end customer, regardless of whether those steps are performed\nby a single firm.\nA firm’s value chain is the systems and processes within a firm that create value for its customers.\nNote that a firm’s value chain is different from a supply chain, which refers to the sequence of\nprocesses involved in the creation of a product, both within and external to a firm.\nThere is no precise definition, but a business model essentially describes how a business is\norganized to deliver value to its customers. A business model makes it clear what the business does,\nhow it operates, and how it generates revenue and profits, as well as how it differs in these respects\nfrom its competitors. A business model should have a value proposition and a value chain. So,\nbusiness model is a broader concept, which includes value chain but also other business\norganization elements."
  },
  {
    "id": "jc_CI_098",
    "source": "JC_CI",
    "subject": "公司发行人",
    "subjectEn": "Corporate Issuers",
    "num": 98,
    "question": "A company that produces and sells a product under someone else's brand name in\nexchange for a royalty most likely operates :",
    "options": {
      "A": "under a franchise model",
      "B": "as a contract manufacturer",
      "C": "under a licensing arrangement. Solutions 4. Corporate Issuers"
    },
    "answer": "C",
    "explanation": "A company will produce a product using someone else’s brand name in return for a royalty under\na licensing arrangement.\nA franchise model distributers or retailers have a tightly defined and often exclusive relationship\nwith the parent company.\nPrivate label or contract manufacturers produce goods to be marketed by others.\n2023BT.5.1.70"
  },
  {
    "id": "jc_ECO_001",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 1,
    "question": "Normal profit is best described as:",
    "options": {
      "A": "Accounting profit when economic profit is zero.",
      "B": "Total revenue minus all explicit costs",
      "C": "The sum of accounting profit plus economic profit."
    },
    "answer": "A",
    "explanation": "Normal profit is the level of accounting profit such that implicit opportunity costs are just covered;\nthus, it is equal to a level of accounting profit such that economic profit is zero."
  },
  {
    "id": "jc_ECO_002",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 2,
    "question": "The marginal revenue per unit sold for a firm doing business under conditions of perfect\ncompetition will most likely be: 1706 pm",
    "options": {
      "A": "Equal to average revenue",
      "B": "Less than average revenue",
      "C": "Greater than average revenue."
    },
    "answer": "A",
    "explanation": "Under perfect competition, a firm is a price taker at any quantity supplied to the market, and AR =\nMR = Price."
  },
  {
    "id": "jc_ECO_003",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 3,
    "question": "The marketing director for a Swiss specialty equipment manufacturer estimates the firm\ncan sell 200 units and earn total revenue of CHF 500,000. However, if 250 units are sold,\nrevenue will total CHF 600,000. The marginal revenue per unit associated with marketing\n250 units instead of 200 units is closest to:",
    "options": {
      "A": "CHF 2,000",
      "B": "CHF 2,400",
      "C": "CHF 2,500."
    },
    "answer": "A",
    "explanation": "Marginal revenue per unit is defined as the change in total revenue divided by the change in\nquantity sold. MR = ∆TR ÷ ∆Q. In this case, change in total revenue equals CHF 100,000, and change\nin total units sold equals 50. CHF 100,000 ÷ 50 = CHF2,000."
  },
  {
    "id": "jc_ECO_004",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 4,
    "question": "Regarding a company’s production function, both labor costs and capital costs are best\ndescribed as:",
    "options": {
      "A": "Fixed in the long run",
      "B": "Variable in the long run",
      "C": "Variable in the short run."
    },
    "answer": "B",
    "explanation": "In the short run, a company can vary the quantity of labor but the quantity of capital is fixed. In the\nlong run, a firm can vary both the quantity of labor and the quantity of capital."
  },
  {
    "id": "jc_ECO_005",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 5,
    "question": "Three firms operate under perfect competition, producing 900 units of the same product but using different production technologies. Each company's cost structure is indicated\nin the table: 1306\nCompany X Y Z\nTotal Variable Costs $2,700 $3,600 $4,500\nTotal Fixed Costs 2,700 1,800 900\nTotal Costs $5,400 $5,400 $5,400\nWhich of the following statements is most accurate? If the unit selling price is:",
    "options": {
      "A": "$6.00, all firms should exit the market in the long run",
      "B": "$4.50, all firms should continue to operate in the short run, but exit the market in the long",
      "C": "$3.00, Firm X should continue to operate in the short run, but Firms Y and Z should shut down"
    },
    "answer": "C",
    "explanation": "Revenue-Cost Relationship Short-Run Decision Long-Term Decision\nTR ≥ TC Stay in market Stay in market\nTR > TVC but TR<TFC+TVC Stay in market Exit market\nTR < TVC Shut down production to zero Exit market\nwhere TR = Total Revenue;\nand TC = Total Costs; TVC = Total Variable Costs; TFC = Total Fixed Costs\nHence, if the selling price is $3.00, total revenue for all firms will be $3.00/unit × 900 units =\n$2,700. Only firm X’s variable costs are covered and it should continue operating, while firms Y\nand Z should immediately shutdown production."
  },
  {
    "id": "jc_ECO_006",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 6,
    "question": "The following data apply to a firm operating in perfect competition.\nQuantity Total Revenue Total Cost\n21 $210 $138\n22 $220 $145\n23 $230 $154\n24 $240 $165\nThe firm's profit maximizing output (in units) is most likely:",
    "options": {
      "A": "21",
      "B": "in excess of 24",
      "C": "23"
    },
    "answer": "C",
    "explanation": "Under perfect competition, economic profits are maximized when marginal revenue equals\nmarginal cost—in this case, marginal cost crosses $10 per unit. Profits are maximized at 23 units of\nproduction because marginal cost is in excess of marginal revenue at 24 units."
  },
  {
    "id": "jc_ECO_007",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 7,
    "question": "A profit maximization is least likely to occur when:( R15-14)",
    "options": {
      "A": "Average total cost is minimized",
      "B": "Marginal revenue equals marginal cost",
      "C": "The difference between total revenue and total cost is maximized."
    },
    "answer": "A",
    "explanation": "The quantity at which average total cost is minimized does not necessarily correspond to a profit\nmaximum."
  },
  {
    "id": "jc_ECO_008",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 8,
    "question": "If a firm’s long-run average total cost increases by 6% when the output is increased by\n6%, the firm is experiencing: (Notes)",
    "options": {
      "A": "Economies of scale",
      "B": "Diseconomies of scale",
      "C": "Constant returns to scale"
    },
    "answer": "B",
    "explanation": "Increases its quantity produced without any change in per-unit cost occur at constant returns to\nscale. Increasing long-run average total cost as a result of increasing output demonstrates\ndiseconomies of scale."
  },
  {
    "id": "jc_ECO_009",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 9,
    "question": "A firm in a perfectly competitive environment has its total costs equal to total revenue\nand marginal costs greater than marginal revenue. Given this, which of the following\nstrategies is most appropriate? The firm should:",
    "options": {
      "A": "Shut down in the short run and exit in the long run",
      "B": "Increase its level of production to enter profit territory",
      "C": "Decrease its level of production to enter profit territory"
    },
    "answer": "C",
    "explanation": "A firm in a perfectly competitive environment with total costs equal to total revenue and marginal\ncosts greater than marginal revenue is operating at the upper breakeven point. Therefore, it should\ndecrease the level of production to enter profit territory."
  },
  {
    "id": "jc_ECO_010",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 10,
    "question": "A manufacturing company established local assembly lines and hired local staff to\nexpand into a new region. Two years later, the company's sales had grown as expected,\nbut its operating margin had decreased from 15% to 12%. The company:",
    "options": {
      "A": "has yet to reach its breakeven volume",
      "B": "is suffering from diseconomies of scale",
      "C": "has reached its minimum efficient scale."
    },
    "answer": "B",
    "explanation": "The company is most likely suffering from diseconomies of scale. It is having to duplicate all costs\nin each location, and by targeting different demographics, it has added additional costs for inputs\nand marketing. Therefore, the company’s fixed costs have increased faster than output, and the\neconomic result is diseconomies of scale.\nThe minimum point on the LRAC curve is referred to as the minimum efficient scale. Since profits\nare lower than before the expansion, the company is not yet operating at the least-cost point.\nBreakeven is the point where total revenues equal total costs and hence operating profit is zero.\nThe company’s operating margins are positive; therefore, it is operating above breakeven."
  },
  {
    "id": "jc_ECO_011",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 11,
    "question": "Which characteristic is a firm least likely to exhibit if it faces a downward sloping demand\ncurve for its product(s), many competitors, and zero economic profits in the long run?",
    "options": {
      "A": "No pricing power",
      "B": "Differentiated product",
      "C": "Low barriers to entry"
    },
    "answer": "A",
    "explanation": "The characteristics of monopolistic competition include a large number of competitors, low pricing\npower, and the production of differentiated products (through advertising and other non-price\nstrategies), but these still result in some pricing power. The ease of entry results in zero economic\nprofits in the long run."
  },
  {
    "id": "jc_ECO_012",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 12,
    "question": "The market structure in which a firm sells all of the product it produces at the market\nequilibrium price is best described as:",
    "options": {
      "A": "Oligopoly",
      "B": "Perfect competition",
      "C": "Monopolistic competition"
    },
    "answer": "B",
    "explanation": "In a perfectly competitive market, sellers have no pricing power and thus sell their product at the\nprice established by demand and supply in the market – the market equilibrium prices."
  },
  {
    "id": "jc_ECO_013",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 13,
    "question": "Is it possible that the demand schedule faced by firm A is horizontal while the demand\nschedule faced by the market as a whole is downward sloping?",
    "options": {
      "A": "No, because firm A can change its output based on demand changes",
      "B": "No, because a horizontal demand curve means that elasticity is infinite",
      "C": "Yes, because consumers can go to another firm if firm A charges a higher price, and firm A can sell all it produces at the market price."
    },
    "answer": "C",
    "explanation": "Firm A cannot charge a higher price and has no incentive to sell at a price below the market price."
  },
  {
    "id": "jc_ECO_014",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 14,
    "question": "Which of the following best describes the elasticity of demand in a perfectly competitive\nmarket?",
    "options": {
      "A": "The firm elasticity is zero and the market elasticity is infinite",
      "B": "The firm elasticity is infinite and the market elasticity is zero",
      "C": "The firm elasticity is infinite and the market elasticity is some finite number"
    },
    "answer": "C",
    "explanation": "Infinite elasticity reflects perfect elasticity of demand. This characterizes the elasticity of demand\nfor the products of a firm operating in a perfectly competitive market. If the firm increases prices,\ncustomers will go to another firm. However, the market demand is not perfectly elastic as it\ndepends on substitutability with other products. Market elasticity will be greater than zero but less\nthan infinite."
  },
  {
    "id": "jc_ECO_015",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 15,
    "question": "In long-run equilibrium, the supply curve of the perfectly competitive firm is best\nrepresented by the firm's long-run:",
    "options": {
      "A": "marginal cost schedule",
      "B": "average revenue schedule",
      "C": "marginal revenue schedule."
    },
    "answer": "A",
    "explanation": "The long-run marginal cost schedule is the perfectly competitive firm’s supply curve. The firm’s\ndemand curve is dictated by the aggregate market’s equilibrium price. The basic rule of profit\nmaximization is that MR = MC, as is the case in long-run equilibrium.\nThe horizontal line that represents the firm’s demand curve is the firm’s AR [average revenue]\nschedule.\nIn a perfectly competitive market structure the firm’s demand schedule is the same as the firm’s\nmarginal revenue and average revenue. Given its cost of operation, the only decision the perfectly\ncompetitive firm faces is how much to produce. The answer is the level of output that maximizes\nits return, and that level is where MR = MC. The demand curve is perfectly elastic. Of course, the\nfirm constantly tries to find ways to lower its cost in the long run."
  },
  {
    "id": "jc_ECO_016",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 16,
    "question": "Successful advertising and product differentiation are most likely to have a positive\nimpact on the economic profits of a producer under:",
    "options": {
      "A": "Monopolistic competition",
      "B": "Monopoly",
      "C": "Perfect competition"
    },
    "answer": "A",
    "explanation": "Advertising and product differentiation are most likely to have a positive impact on the economic\nprofits of producers under monopolistic competition. The monopoly aspect of this structure arises\nfrom the ability to differentiate its product."
  },
  {
    "id": "jc_ECO_017",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 17,
    "question": "Under monopolistic competition, a firm that introduces a new and differentiated product\nis least likely to:",
    "options": {
      "A": "Increase its price",
      "B": "Make an economic profit",
      "C": "Face a demand that is more elastic."
    },
    "answer": "C",
    "explanation": "A firm in a monopolistic competition that introduces a new and differentiated product is able to\nbetter differentiate its products, and thus demand would be less elastic as close substitutes would\nbe less readily available. Thus, the firm would be able to increase price and enjoy economic profit\nin the short run."
  },
  {
    "id": "jc_ECO_018",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 18,
    "question": "Aquarius, Inc. is the dominant company and the price leader in its market. One of the\nother companies in the market attempts to gain market share by undercutting the price\nset by Aquarius. The market share of Aquarius will most likely:",
    "options": {
      "A": "Increase",
      "B": "Decrease",
      "C": "Stay the same"
    },
    "answer": "A",
    "explanation": "As prices decrease, smaller companies will leave the market rather than sell below cost. The market\nshare of Aquarius, the price leader, will increase."
  },
  {
    "id": "jc_ECO_019",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 19,
    "question": "Under what market conditions does each oligopoly face an individual demand curve",
    "options": {
      "A": "colluding market conditions only",
      "B": "non-colluding market conditions only",
      "C": "both colluding and non-colluding market conditions"
    },
    "answer": "B",
    "explanation": "In an oligopoly market where collusion is present, the aggregate market demand curve is divided\nup by the individual production participants. Under non-colluding market conditions, each firm\nfaces an individual demand curve."
  },
  {
    "id": "jc_ECO_020",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 20,
    "question": "According to the Cournot assumption, in an oligopoly market, each firm determines its\nprofit-maximizing production level by assuming that other firms will:",
    "options": {
      "A": "decrease output.",
      "B": "not change output",
      "C": "increase output."
    },
    "answer": "B",
    "explanation": "In the Cournot assumption, each firm determines its profit-maximizing production level by\nassuming that the other firms' output will not change. This assumption simplifies pricing strategy\nbecause there is no need to guess what the other firm will do to retaliate."
  },
  {
    "id": "jc_ECO_021",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 21,
    "question": "A government entity that regulates an authorized monopoly will most likely base\nregulated prices on:",
    "options": {
      "A": "Marginal cost",
      "B": "Long-run average cost",
      "C": "First-degree price discrimination"
    },
    "answer": "B",
    "explanation": "This allows the investors to receive a normal return for the risk they are taking in the market."
  },
  {
    "id": "jc_ECO_022",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 22,
    "question": "Are monopolies always inefficient?",
    "options": {
      "A": "No, because if they charge more than average cost they are nationalized",
      "B": "Yes, because they charge all consumers more than perfectly competitive markets would",
      "C": "No, because economies of scale and regulation (or threat of entry) may give a better outcome"
    },
    "answer": "C",
    "explanation": "Economies of scale and regulation may make monopolies more efficient than perfect\ncompetition."
  },
  {
    "id": "jc_ECO_023",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 23,
    "question": "First-degree price discrimination is best described as pricing that allows producers to\nincrease their economic profit while consumer surplus:",
    "options": {
      "A": "Increases",
      "B": "Is eliminated",
      "C": "Decreases."
    },
    "answer": "B",
    "explanation": "In first-degree price discrimination, the entire consumer surplus is captured by the producer; the\nconsumer surplus falls to zero."
  },
  {
    "id": "jc_ECO_024",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 24,
    "question": "An analyst gathered the following market share data for an industry comprised of six\nfirms:\nCompany A B C D E F\nMarket Share (%) 30 20 20 15 10 5\nSo, the industry’s four-firm concentration ratio and Herfindahl-Hirschman index are\nclosest to:\nFour-firm concentration ratio HHI",
    "options": {
      "A": "95% 19.5%",
      "B": "85% 19.5%",
      "C": "85% 20.5%"
    },
    "answer": "C",
    "explanation": "The four-firm concentration ratio=30%+20%+20%+15%=85%\nThe Herfindahl-Hirschman index=30%2+20%2+20%2+15%2+10%2+5%2=20.5%"
  },
  {
    "id": "jc_ECO_025",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 25,
    "question": "Which of the following statements concerning the Herfindahl–Hirschman Index (HHI) is\nmost accurate? 1706 pm",
    "options": {
      "A": "The HHI is a useful measure of potential barriers to entry",
      "B": "The HHI is usually unaffected by mergers among the top market incumbents",
      "C": "An HHI of 0.05 would be analogous to having the market shared equally by 20 firms"
    },
    "answer": "C",
    "explanation": "If there are M firms in the industry with equal market shares, the HHI equals 1/M. With 20 firms\nhaving equal shares, the HHI = 1/20 = 0.05."
  },
  {
    "id": "jc_ECO_026",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 26,
    "question": "Which of the following measures indicate a monopoly market?",
    "options": {
      "A": "A concentration ratio of 100% only",
      "B": "A Herfindahl-Hirschman index of zero only",
      "C": "Both a concentration ratio of 100% and a Herfindahl-Hirschman index of zero"
    },
    "answer": "A",
    "explanation": "The concentration ratio is the sum of the market shares of the largest N firms. This number is\nalways between zero (perfect competition) and 100 percent (monopoly).\nO.C. Herfindahl and A.O. Hirschman suggested an index where the market shares of the\ntop N companies are first squared and then added. If one firm controls the whole market (a\nmonopoly), the Herfindahl–Hirschman index (HHI) equals 1."
  },
  {
    "id": "jc_ECO_027",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 27,
    "question": "Equality between aggregate expenditure and aggregate output implies that the private\nsaving must equal:",
    "options": {
      "A": "Investment + government’s fiscal deficit + Net exports",
      "B": "Investment – government’s fiscal deficit + Net exports",
      "C": "Investment – government’s fiscal deficit – Net exports"
    },
    "answer": "A",
    "explanation": "The fundamental relationship among saving, investment, the fiscal balance, and the trade balance\nis S = I + (G — T) + (X — M). This form of the relationship shows that private saving must fund\ninvestment expenditures, the government fiscal balance, and net exports."
  },
  {
    "id": "jc_ECO_028",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 28,
    "question": "Orders for technology and light equipment decline before construction orders in a\ncontraction because:",
    "options": {
      "A": "businesses are uncertain about cyclical directions",
      "B": "they are easier to cancel than large construction contracts",
      "C": "businesses value light equipment less than structures and heavy machinery."
    },
    "answer": "B",
    "explanation": "Because it usually takes much longer time to plan and complete large construction projects than\nfor equipment orders, construction projects may be less influenced by business cycles."
  },
  {
    "id": "jc_ECO_029",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 29,
    "question": "Which of the following is most likely to happen during the slowdown phase of the\neconomic cycle:",
    "options": {
      "A": "inflation decelerates",
      "B": "business halts new orders",
      "C": "business slows its rate of hiring."
    },
    "answer": "C",
    "explanation": "In the slowdown phase business continue hiring but at a slower rate. The unemployment rate\ncontinues to fall but at a decreasing rate.\nIn the slowdown phase inflation further accelerates [not decelerates].\nIn the slowdown phase companies continue to place new orders as they operate at or near\ncapacity."
  },
  {
    "id": "jc_ECO_030",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 30,
    "question": "A senior portfolio manager at Carnara Asset Management explains her analysis of\nbusiness cycles to a junior analyst. She makes two statements:\nStatement I Business cycles measure activity by GDP, whereas credit cycles combine a\nrange of financial variables, such as the amount of and pricing of credit.\nStatement II Credit cycles and business cycles are unrelated and serve different purposes.",
    "options": {
      "A": "Only Statement I is true",
      "B": "Only Statement II is true",
      "C": "Both statements are true."
    },
    "answer": "A",
    "explanation": "Only Statement I is true. Statement II is not true because researchers have found linkages between\nfinancial and business cycles that help explain the magnitude of business cycle expansions and\ncontractions depending on the state of the credit cycle."
  },
  {
    "id": "jc_ECO_031",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 31,
    "question": "The inventory/sales ratio is most likely to be rising:",
    "options": {
      "A": "as a contraction unfolds",
      "B": "partially into a recovery",
      "C": "near the top of an economic cycle."
    },
    "answer": "C",
    "explanation": "Near the top of a cycle, sales begin to slow before production is cut, leading to an increase in\ninventories relative to sales."
  },
  {
    "id": "jc_ECO_032",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 32,
    "question": "Inventories will often fall early in a recovery because:",
    "options": {
      "A": "businesses need profit",
      "B": "sales outstrip production",
      "C": "businesses ramp up production because of increased economic activity."
    },
    "answer": "B",
    "explanation": "The companies are slow to increase production in the early recovery phase because they first\nwant to confirm the recession is over. Increasing output also takes time after the downsizing\nduring the recession."
  },
  {
    "id": "jc_ECO_033",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 33,
    "question": "In the morning business news, a financial analyst, Kevin Durbin, learned that average hourly earnings had increased last month. The most appropriate action for Durbin is to:",
    "options": {
      "A": "call his clients to inform them of a good trading opportunity today",
      "B": "examine other leading indicators to see any confirmation of a possible turning point for the economy.",
      "C": "use the news in his research report as a confirmation for his belief that the economy has"
    },
    "answer": "B",
    "explanation": "Financial analysts need to synthesize the information from various indicators in order to gather a\nreliable reading of the economic trends."
  },
  {
    "id": "jc_ECO_034",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 34,
    "question": "A positive movement in a lagging indicator would least likely be used to:",
    "options": {
      "A": "confirm that an expansion is currently underway",
      "B": "identify a past condition of the economy",
      "C": "identify an expected future economic upturn"
    },
    "answer": "C",
    "explanation": "A positive movement in a lagging indicator would most likely be used to confirm that an existing\nexpansion is underway or has already occurred. Only a leading indicator would help identify or\npredict a future economic event.\nA positive move in a lagging indicator by itself is insufficient to indicate a positive expansion.\nHowever, confirmation would be required from positive changes in a coincident indicator to\nindicate expansion. And a positive move in a lagging indicator is most likely identifying an upturn\nin economic activity that occurred in the past."
  },
  {
    "id": "jc_ECO_035",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 35,
    "question": "A decrease in average weekly initial claims for unemployment is most likely indicative of:",
    "options": {
      "A": "an economic downturn beginning",
      "B": "an economic recovery beginning",
      "C": "the business cycle reaching its peak."
    },
    "answer": "B",
    "explanation": "Average weekly initial claims for unemployment insurance is a leading indicator of economic\nactivity and a decrease in it is an indication of rehiring at the start of a recovery."
  },
  {
    "id": "jc_ECO_036",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 36,
    "question": "Which of the following functions does money normally fulfill for a society? It:",
    "options": {
      "A": "acts as a medium of exchange only",
      "B": "provides economic agents with a means of storing wealth only",
      "C": "provides society with a unit of account, acts as a medium of exchange, and acts as a store of wealth."
    },
    "answer": "C",
    "explanation": "Money needs to be able to fulfill the functions of acting as a unit of account, a medium of exchange,\nand a means of storing wealth."
  },
  {
    "id": "jc_ECO_037",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 37,
    "question": "The tools used by central banks to implement monetary policy most likely include:",
    "options": {
      "A": "transfer payments",
      "B": "open market operations",
      "C": "raising or lowering income taxes."
    },
    "answer": "B",
    "explanation": "Central banks have three primary tools available to them: open market operations, setting the\nofficial policy rate, and reserve requirements. Transfer payments are a fiscal policy tool.\nRaising or lowering income taxes is a part of fiscal policy, not monetary policy."
  },
  {
    "id": "jc_ECO_038",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 38,
    "question": "An increase in the official policy rate will most likely lead to:",
    "options": {
      "A": "gradual increases in commercial banks’ base rates",
      "B": "reduced credit availability",
      "C": "contracting commercial bank liquidity"
    },
    "answer": "B",
    "explanation": "An increase in the policy rate will likely raise the potential penalty that banks will have to pay if\nthey run short of liquidity and thereby reduces their willingness to lend.\nCommercial banks normally increase their base rates immediately (not gradually) following the\nannouncement of an increased policy rate because they want to avoid the possibility of lending at\nrates lower than they might be charged by the central bank.\nAn increase in the policy rate will likely lead to a tightening of the money supply and a higher\npenalty for liquidity shortfalls. As a result, commercial banks will expand their liquidity to avoid\npotential shortfalls."
  },
  {
    "id": "jc_ECO_039",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 39,
    "question": "Which of the following is a limitation on the ability of central banks to stimulate growth\nin periods of deflation?",
    "options": {
      "A": "Ricardian equivalence",
      "B": "The interaction of monetary and fiscal policy",
      "C": "The fact that interest rates have a minimum value (0%)"
    },
    "answer": "C",
    "explanation": "Deflation poses a challenge to conventional monetary policy because once the central bank has\ncut nominal interest rates to zero to stimulate the economy, they cannot cut them further."
  },
  {
    "id": "jc_ECO_040",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 40,
    "question": "Which of the following statements best describes monetary policy? Monetary policy:",
    "options": {
      "A": "involves the setting of medium-term targets for broad money aggregates",
      "B": "involves the manipulation by a central bank of the government’s budget deficit",
      "C": "seeks to influence the macro economy by influencing the quantity of money and credit in the economy"
    },
    "answer": "C",
    "explanation": "Although the setting of targets for monetary aggregates is a possible tool of monetary policy,\nmonetary policy itself is concerned with influencing the overall, or macro, economy."
  },
  {
    "id": "jc_ECO_041",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 41,
    "question": "The current situation is as follows:\nReal trend rate=2%\nCurrent inflation rate=3%\nLong-run Expected inflation =2%\nIf the policy rate is 5%, which type of monetary policy is it?",
    "options": {
      "A": "Expansionary",
      "B": "Contractionary",
      "C": "Neutral"
    },
    "answer": "B",
    "explanation": "Neutral rate = real trend rate + long-run expected inflation (target inflation rate) = 2% + 2% = 4%\nThe central bank’s monetary policy is being contractionary when its policy rate is above 4%."
  },
  {
    "id": "jc_ECO_042",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 42,
    "question": "Which of the following does a central bank seek to influence directly via the setting of its\nofficial interest rate?",
    "options": {
      "A": "Inflation expectations",
      "B": "Import prices",
      "C": "Domestic inflation"
    },
    "answer": "A",
    "explanation": "By setting its official interest rate, a central bank could expect to have a direct influence on inflation\nexpectations—as well as on other market interest rates, asset prices, and the exchange rate (where\nthis is freely floating). If it can influence these factors, it might ultimately hope to influence import\nprices (via changes in the exchange rate) and also domestically generated inflation (via its impact\non domestic and/or external demand). The problem is that the workings of the transmission\nmechanism—from the official interest rate to inflation—are complex and can change over time."
  },
  {
    "id": "jc_ECO_043",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 43,
    "question": "The monetary policy tools used by central banks most likely include:",
    "options": {
      "A": "transfer payments.",
      "B": "open market operations",
      "C": "raising or lowering income taxes"
    },
    "answer": "B",
    "explanation": "Central banks have three primary tools available to them: open market operations, setting the\nofficial policy rate, and reserve requirements."
  },
  {
    "id": "jc_ECO_044",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 44,
    "question": "Given stable inflation, a fiscal policy that is contractionary and accompanied by an easy\nmonetary policy is most likely to:",
    "options": {
      "A": "increase the private sector share of GDP",
      "B": "have no impact on the private sector share of GDP",
      "C": "decrease the private sector share of GDP"
    },
    "answer": "A",
    "explanation": "If tight fiscal policy is accompanied by easy monetary policy and low interest rates, the private\nsector will be stimulated and will increase as a share of GDP.\nIf tight fiscal policy is accompanied by easy monetary policy and low interest rates, the private\nsector share of GDP typically will increase (not remain unchanged). An unchanged composition of\naggregate demand, with the GDP shares attributable to the private and public sectors remaining\nstable, typically occurs in the context of parallel policy actions. That occurs with mutually\nreinforcing macroeconomic policies, either tight fiscal/tight monetary or easy fiscal/easy monetary.\nIf tight fiscal policy is accompanied by easy monetary policy and low interest rates, the private\nsector share of GDP typically will increase (not decrease)."
  },
  {
    "id": "jc_ECO_045",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 45,
    "question": "In an attempt to influence the economy, a central bank engaged in open market\noperations by selling government bonds. This action suggests that the central bank is\nmost likely attempting to:",
    "options": {
      "A": "contract the economy by reducing bank reserves",
      "B": "expand the economy through a lower policy interest rate",
      "C": "contract the economy through a lower policy interest rate"
    },
    "answer": "A",
    "explanation": "Selling government bonds results in a reduction of bank reserves and reduces their ability to lend,\ncausing a decline in money growth through the multiplier mechanism and hence a contraction in\nthe economy."
  },
  {
    "id": "jc_ECO_046",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 46,
    "question": "The transmission of a central bank's policy rate action throughout the economy\nultimately impacts:",
    "options": {
      "A": "total demand",
      "B": "inflation",
      "C": "long-term interest rates"
    },
    "answer": "B",
    "explanation": "The monetary transmission mechanism is the process whereby a central bank’s interest rate gets\ntransmitted through the economy and ultimately affects the rate of increase of prices (inflation).\nAlthough policy rate actions do transmit through the economy through the channel of market rates\n(both short-term and long-term interest rates), this is just one of four channels and multiple\ninterconnected channel relationships that impacts total demand. Although policy rate actions do\ntransmit through the economy by affecting total demand, this influence on total demand is an\nintermediate effect that drives subsequent domestic inflationary pressure."
  },
  {
    "id": "jc_ECO_047",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 47,
    "question": "A developing country that maintains a fixed exchange rate target relative to the US dollar\nis experiencing a decrease in economic activity and its inflation rate falls below the US\nlevel. The most likely outcome of the developing country’s policy to maintain the fixed\nexchange rate target is that its:",
    "options": {
      "A": "foreign exchange reserves will decrease",
      "B": "short-term interest rates will fall",
      "C": "money supply will contract"
    },
    "answer": "B",
    "explanation": "With a decline in economic activity and domestic inflation, the currency of the developing country\nwould start to rise against the dollar. To protect the exchange rate target, the developing country’s\nmonetary authority will purchase foreign exchange reserves and sell its own currency. This will\nincrease the domestic money supply, decrease short-term interest rates, and increase foreign\nexchange reserves."
  },
  {
    "id": "jc_ECO_048",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 48,
    "question": "Which of the following scenarios might result in monetary policy becoming completely\nineffective?",
    "options": {
      "A": "A liquidity trap",
      "B": "The crowding out effect",
      "C": "A time lag to implement government spending"
    },
    "answer": "A",
    "explanation": "There may be occasions where the demand for money becomes infinitely elastic so that further\ninjections of money into the economy will not serve to further lower interest rates or affect real\nactivity. This is known as a liquidity trap. In this extreme circumstance, monetary policy can\nbecome completely ineffective.\nCrowding out is the reduction in private sector investment due to increased government borrowing\nand describes a difficulty in implementing fiscal, not monetary, policy.\nA time lag to implement government spending is the action lag and describes a difficulty in\nimplementing fiscal policy. An example of the action lag is the government's decision to raise\nspending on capital projects to increase employment and incomes, but they may take many\nmonths to implement."
  },
  {
    "id": "jc_ECO_049",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 49,
    "question": "An expansionary fiscal policy is most likely associated with: 1506 pm",
    "options": {
      "A": "an increase in capital gains tax rates",
      "B": "crowding out of private investments",
      "C": "an increase in government spending on social insurance and benefits"
    },
    "answer": "B",
    "explanation": "Expansionary policy increases government borrowing, which may divert private sector investment\nfrom taking place (resulting in an effect known as crowding out). A rise in capital gain tax rates is a\nform of contractionary fiscal policy. Rises in government spending on social insurance and benefits\nis a form of automatic stabilizer and not due to discretionary fiscal expansion."
  },
  {
    "id": "jc_ECO_050",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 50,
    "question": "Given stable inflation, a tight fiscal policy accompanied by easy monetary policy will most\nlikely: 1712 pm",
    "options": {
      "A": "increase the private sector share of GDP",
      "B": "have no impact on the private sector share of GDP",
      "C": "decrease the private sector share of GDP"
    },
    "answer": "A",
    "explanation": "If tight fiscal policy is accompanied by easy monetary policy and low interest rates, the private\nsector will be stimulated and will increase as a share of GDP."
  },
  {
    "id": "jc_ECO_051",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 51,
    "question": "The least likely goal of a government’s fiscal policy is to:",
    "options": {
      "A": "redistribute income and wealth",
      "B": "influence aggregate national output.",
      "C": "ensure the stability of the purchasing power of its currency"
    },
    "answer": "C",
    "explanation": "Ensuring stable purchasing power is a goal of monetary rather than fiscal policy. Fiscal policy\ninvolves the use of government spending and tax revenue to affect the overall level of aggregate\ndemand in an economy and hence the level of economic activity."
  },
  {
    "id": "jc_ECO_052",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 52,
    "question": "Which of the following statements is most accurate? example",
    "options": {
      "A": "Direct taxes are useful for discouraging alcohol consumption",
      "B": "Because indirect taxes cannot be changed quickly, they are of no use in fiscal policy",
      "C": "Government capital spending decisions are slow to plan, implement, and execute and hence"
    },
    "answer": "C",
    "explanation": "Capital spending is much slower to implement than changes in indirect taxes; and indirect taxes\naffect alcohol consumption more directly than direct taxes."
  },
  {
    "id": "jc_ECO_053",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 53,
    "question": "The crowding-out effect is most closely linked to:",
    "options": {
      "A": "falling real interest rates",
      "B": "decreasing government borrowing",
      "C": "increasing government borrowing"
    },
    "answer": "C",
    "explanation": "The tendency for government borrowing to decrease private sector investment is called the\ncrowding-out effect. The crowding-out effect raises real interest rates."
  },
  {
    "id": "jc_ECO_054",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 54,
    "question": "In a hypothetical economy, consumption accounts for 70% of pre-tax income, and the\naverage tax rate is 25% of total income. If planned government expenditures are\nexpected to increase by $1.25 billion, the increase in total income and spending, in\nbillions, is closest to:",
    "options": {
      "A": "$2.6",
      "B": "$4.2",
      "C": "$1.3"
    },
    "answer": "B",
    "explanation": "The fiscal multiplier is1/[1 – c(1 – T)]where\nc = marginal propensity to consume = consumption/disposable income\nT = the tax rate\nAssuming pre-tax income of $100\nDisposable income: $100 × (1 – 0.25) = $75\nMarginal propensity to consume: $70/$75 = 0.933\nThe fiscal multiplier: 1/[1 – 0.933(1 – 0.25)] = 3.33\nWith government expenditure of $1.25 billion, total incomes and spending will rise by $1.25\nbillion × 3.33 = $4.2 billion"
  },
  {
    "id": "jc_ECO_055",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 55,
    "question": "Which policy mix is most likely to lead to higher interest rates and lower tax revenues:",
    "options": {
      "A": "easy fiscal policy and tight monetary policy",
      "B": "tight fiscal policy and easy monetary policy",
      "C": "tight fiscal policy and tight monetary policy"
    },
    "answer": "A",
    "explanation": "Decreasing taxes reflects easy fiscal policy. If taxes are cut the expansionary fiscal policy will lead\nto a rise in aggregate output. Increasing interest rates reflects tight monetary policy. If this is\naccompanied by a reduction in money supply to offset the fiscal expansion, then interest rates\nwill rise."
  },
  {
    "id": "jc_ECO_056",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 56,
    "question": "In the case of conventional monetary policy, fighting inflation is most likely:",
    "options": {
      "A": "less difficult than combating deflation",
      "B": "equally difficult as combating deflation",
      "C": "more difficult than combating deflation."
    },
    "answer": "A",
    "explanation": "Deflation is more difficult for conventional monetary policy to deal with than inflation. This is\nbecause once the monetary authority has cut nominal interest rates to zero to stimulate the\neconomy, it cannot cut them any further."
  },
  {
    "id": "jc_ECO_057",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 57,
    "question": "Which of the following factor a cooperative country is most likely focused?",
    "options": {
      "A": "Standardization notes module quiz",
      "B": "Arbitrary Rule",
      "C": "Lack of Technology Exchange"
    },
    "answer": "A",
    "explanation": "Standardization is a framework of agreements to which all relevant parties in an industry or\norganization must adhere to ensure that all processes associated with the creation of a good or\nperformance of a service are performed within set guidelines.\n2023B"
  },
  {
    "id": "jc_ECO_058",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 58,
    "question": "Which of the following regarding globalization is least likely correct? example",
    "options": {
      "A": "Globalization is primarily carried out by governmental actors",
      "B": "Nationalism is marked by limited economic and financial cooperation",
      "C": "Organic private sector forces can drive the exchange of products or ideas even without government support or harmonized rules."
    },
    "answer": "A",
    "explanation": "Globalization is primarily carried out by non-governmental actors, such as corporations,\nindividuals, or organizations, and is the result of economic and financial cooperation."
  },
  {
    "id": "jc_ECO_059",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 59,
    "question": "Which of the following is most likely to be a benefit of globalization?",
    "options": {
      "A": "Increased profits",
      "B": "More equal income distribution",
      "C": "Stronger environmental, social, and governance standards"
    },
    "answer": "A",
    "explanation": "The opportunity to generate higher profits may motivate companies to globalize. The first way to\ngenerate profit is to increase sales. Companies may choose to engage in globalization in order to\naccess new customers for their goods and services. Another way to increase profits is to reduce\ncosts. Globalization allows companies to access lower tax-operating environments, reduce labor\ncosts, or seek other supply chain efficiency gains.\nGlobalization can contribute to income and wealth inequality, as well as differences in\nopportunity, within and between countries.\nCompanies operating in lower-cost countries often operate in the local standards of those\ncountries. If standards on environmental protection, social benefits, or corporate governance are\nlower in one country compared to another and companies ultimately reduce their standards of\nproduction in that context, then globalization can create a drain on human, administrative, and\nenvironmental resources."
  },
  {
    "id": "jc_ECO_060",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 60,
    "question": "A state actor that is generally cooperative with other countries and primarily nationalist\nin pursuing its objectives is most accurately said to exhibit: notes quiz",
    "options": {
      "A": "autarky",
      "B": "hegemony",
      "C": "bilateralism"
    },
    "answer": "C",
    "explanation": "Bilateralism is characterized by nationalism (as contrasted with globalization) and cooperation.\nBoth autarky and hegemony are characterized by non-cooperation."
  },
  {
    "id": "jc_ECO_061",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 61,
    "question": "A country that has one-to-one cooperation with many of its neighbors can be described\nas:",
    "options": {
      "A": "autarkic",
      "B": "bilateral",
      "C": "hegemonic."
    },
    "answer": "B",
    "explanation": "Bilateralism is the conduct of political, economic, financial, or cultural cooperation between two\ncountries. Countries engaging in bilateralism may have relations with many different countries,\nbut they are one-at-a-time agreements without multiple partners."
  },
  {
    "id": "jc_ECO_062",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 62,
    "question": "Which of the following tools of geopolitics is best described as a non-cooperative\neconomic tool?",
    "options": {
      "A": "Voluntary export restraints",
      "B": "Regional free trade agreements",
      "C": "Restrictions on conversion of currencies."
    },
    "answer": "A",
    "explanation": "Voluntary export restraints (exporting less of a good than the global market demands) are an\nexample of a non-cooperative economic tool. Restrictions on the exchange of currencies are a\nfinancial tool. Free trade agreements are a cooperative economic tool."
  },
  {
    "id": "jc_ECO_063",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 63,
    "question": "When investing for a long time horizon, a portfolio manager should most likely devote\nresources to analyzing:",
    "options": {
      "A": "event risks",
      "B": "thematic risks",
      "C": "exogenous risks"
    },
    "answer": "B",
    "explanation": "Thematic risks are those that have effects over the long term. Event risks and exogenous risks are\nmore likely to have high-velocity impacts on investment values but are less of a focus for investors\nwith longer time horizons."
  },
  {
    "id": "jc_ECO_064",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 64,
    "question": "Investors investing in countries with higher geopolitical risks are most likely to demand:",
    "options": {
      "A": "lower compensation and face higher portfolio volatility",
      "B": "higher compensation and face lower portfolio volatility",
      "C": "higher compensation and face higher portfolio volatility."
    },
    "answer": "C",
    "explanation": "For countries, regions, or sectors perceived to be at more consistent risk of geopolitical disruption,\ninvestors may require higher compensation, effectively increasing the discount rate investors use\nwhen valuing those securities. Portfolio investment flows face greater volatility due to geopolitical\nfactors, and investors will factor in a higher risk premium."
  },
  {
    "id": "jc_ECO_065",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 65,
    "question": "The diagram to the right shows the domestic demand and supply curves for a country\nwhich imports a commodity, where PW is its world price and PT is its domestic price after\nthe imposition of a tariff.\nThe reduction in the net national welfare of this country as a result of the tariff is best described by the area(s):",
    "options": {
      "A": "E",
      "B": "F+H",
      "C": "G"
    },
    "answer": "B",
    "explanation": "The loss in consumer surplus because of higher prices is represented by area E+F+G+H. This\nexceeds the gains from producer surplus (E) and government revenues on imports (G). Hence the\nnet welfare effect to the country is a deadweight loss of [E+F+G+H] – [E] – [G] = F+H."
  },
  {
    "id": "jc_ECO_066",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 66,
    "question": "Which type of trade restriction would most likely increase domestic government revenue?",
    "options": {
      "A": "Tariff",
      "B": "Import quota",
      "C": "Export subsidy"
    },
    "answer": "A",
    "explanation": "The imposition of a tariff will most likely increase domestic government revenue. A tariff is a tax\non imports collected by the importing country’s government."
  },
  {
    "id": "jc_ECO_067",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 67,
    "question": "A small country has a competitive advantage in the production of pencils. The\ngovernment implements an export subsidy for pencils to stimulate economic growth.\nThe most likely outcome of this policy is:",
    "options": {
      "A": "Although domestic producers will receive a net benefit, the policy will give rise to inefficiencies that cause a deadweight loss to the national welfare.",
      "B": "As new domestic producers enter the pencils market, supply will increase and domestic prices",
      "C": "The increase in the domestic producer surplus will exceed the sum of the subsidy and the decrease in the domestic consumer surplus."
    },
    "answer": "A",
    "explanation": "Export subsidies interfere with the functioning of the free market and result in a deadweight loss\nto society. The deadweight loss arises on the producer side because the higher subsidized price\ncauses inefficient producers to remain in the market. On the consumer side, the higher price causes\nthose that would have purchased at the lower price to be shut out of the market.\nProducers shift output from the domestic to the export market to capture the subsidy. Furthermore,\nas a small country, the domestic market is a price taker and thus consumers pay the international\nprice plus the subsidy causing the domestic price to rise.\nAs prices rise and producers increase production beyond the efficient level, efficiencies diminish.\nNational welfare must decline, as the increase in producer surplus is less than the combined cost\nto consumer and government."
  },
  {
    "id": "jc_ECO_068",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 68,
    "question": "The implementation of an export subsidy for a normal good produced in a small country\nwill most likely lead to an increase in the:",
    "options": {
      "A": "domestic consumption of the good",
      "B": "price of the good in the domestic market",
      "C": "national welfare of the country providing the subsidy."
    },
    "answer": "B",
    "explanation": "In the case of an export subsidy, the exporter has the incentive to shift sales from the domestic to\nthe export market because it receives the international price plus the per-unit subsidy for each unit\nof the good exported. This scenario raises the price in the domestic market by the amount of the\nsubsidy in the small country case (price before subsidy plus subsidy).\nAs the domestic price in the small country is higher, the consumption of the good will decline\n(rather than increase).\nAn export subsidy is a payment by the government to a firm for each unit of a good that is exported.\nIts goal is to stimulate exports. But it interferes with the functioning of the free market and may\ndistort trade away from comparative advantage. Hence, it reduces welfare. ... The net welfare\neffect is negative in both the large and small country cases. Thus, export subsidies decrease rather\nthan increase national welfare."
  },
  {
    "id": "jc_ECO_069",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 69,
    "question": "When a price taker imposes a tariff on imports, which of the following occurs?",
    "options": {
      "A": "national welfare increases",
      "B": "consumers gain consumer surplus",
      "C": "local producers gain producer surplus."
    },
    "answer": "C",
    "explanation": "The economic impact of a tariff on imports in small country is one that is a price taker in the world\nmarket for a product and cannot influence the world market price. The welfare effect can be\nsummarized as follows: Consumers suffer a loss of consumer surplus, local producers gain producer\nsurplus and the net welfare effect results in a deadweight loss to the country's welfare."
  },
  {
    "id": "jc_ECO_070",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 70,
    "question": "If one country proposes a change to a common market structure within a customs union\nof four countries, what additional level of economic integration between the countries\nis most likely to arise? They would most likely experience:",
    "options": {
      "A": "begin to allow free movement of the factors of production",
      "B": "establish common economic institutions and coordination of economic policies",
      "C": "establish common trade barriers against non-members."
    },
    "answer": "A",
    "explanation": "A common market structure incorporates all aspects of the customs union and extends it by\nallowing free movement of factors of production among members."
  },
  {
    "id": "jc_ECO_071",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 71,
    "question": "Which of the following best describes a function of the World Bank for Reconstruction\nand Development?",
    "options": {
      "A": "Lending foreign currencies on a temporary basis to address balance of payment issues",
      "B": "Regulating cross-border trade relationships on a global scale",
      "C": "Providing low interest rate loans to developing countries"
    },
    "answer": "C",
    "explanation": "Closely affiliated with The World Bank Group, the International Bank for Reconstruction and\nDevelopment (IBRD) provides low or no-interest loans and grants to developing countries that have\nunfavorable credit or no access to international credit markets.\nLending foreign currencies on a temporary basis is a function of the IMF.\nRegulating cross-border trade relationships on a global scale is incorrect because this is a function\nof the World Trade Organization."
  },
  {
    "id": "jc_ECO_072",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 72,
    "question": "Which organization is most likely to assist a country experiencing an economically\ndetrimental current account deficit?",
    "options": {
      "A": "The World Bank",
      "B": "The World Trade Organization",
      "C": "The International Monetary Fund"
    },
    "answer": "C",
    "explanation": "The World Bank’s main objective is to help developing countries fight poverty and enhance\nenvironmentally sound economic growth by providing investment funds. It does not intervene in\nbalance-of-payments issues.\nThe World Trade Organization regulates cross-border trade on a global scale. It does not intervene\nin balance-of-payments issues.\nThe International Monetary Fund has the ability to lend foreign currencies to a country with an\nextreme current account deficit."
  },
  {
    "id": "jc_ECO_073",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 73,
    "question": "An Australian firm purchased a patent for USD20,000 and machinery for USD21,500 from\na U.S. firm when the exchange rates were as follows:\nRatio Exchange Rate\nUSD/EUR 1.29\nAUD/EUR 1.24\nThe impact of these transactions on the capital account of Australia (in AUD) is closest\nto:",
    "options": {
      "A": "19,225",
      "B": "20,667",
      "C": "20,806"
    },
    "answer": "A",
    "explanation": "The purchase of machinery is an import and affects the current account, not the capital account,\nso it is ignored. The purchase of a non-produced, non-financial asset (such as a patent) affects the\ncapital account. The impact on the capital account in AUD is: USD20,000 × (1/1.29) × 1.24 =\n19,225AUD."
  },
  {
    "id": "jc_ECO_074",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 74,
    "question": "A New Zealand traveler returned from Singapore with SGD7, 200 (Singapore dollars). A\nforeign exchange dealer provided the traveler with the following quotes:\nRatio Spot Rates\nUSD/SGD 1.2580\nNZD/USD 0.7668\nUSD: US dollar\nNZD: New Zealand dollar\nThe amount of New Zealand dollars (NZD) that the traveler would receive for his\nSingapore dollars is closest to:",
    "options": {
      "A": "NZD6,945",
      "B": "NZD6,954",
      "C": "NZD6,965"
    },
    "answer": "A",
    "explanation": "The NZD/SGD cross-rate is NZD/USD × USD/SGD = 0.7668 × 1.2580 = 0.9646.\nThe traveler will receive: NZD0.9664 per SGD; NZD0.9646 × SGD7,200 = NZD6,945."
  },
  {
    "id": "jc_ECO_075",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 75,
    "question": "Assume that the nominal spot exchange rate (USD/EUR) increases by 7.3%, the Euro zone\nprice level decreases by 3.8%, and the US price level increases by 2.3%.The change in the\nreal exchange rate (%) is closest to:",
    "options": {
      "A": "0.9%",
      "B": "–6.0%",
      "C": "14.1%"
    },
    "answer": "A",
    "explanation": "Real exchange rate = Nominal spot exchange rate × (CPI of the foreign country/CPI of the domestic\ncountry).\nChange in the real exchange rate = [(1 + Change in exchange rate) × (1 + Change in price level in\nforeign country)]/ (1 + Change in price level in domestic country) – 1 = [(1+ 7.3%) × (1 – 3.8%)]/ (1+\n2.3%) – 1= 0.9%."
  },
  {
    "id": "jc_ECO_076",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 76,
    "question": "Spot Rate Expected Spot Rate in One Year USD/EUR 1.3001 1.3456\nUSD/GBP 1.5805 1.5489\nBased on the table, the appreciation of which of the following currencies is most likely\nto occur?",
    "options": {
      "A": "The British pound against the US dollar by 2.00%",
      "B": "The US dollar against the euro by 3.38%",
      "C": "The euro against the US dollar by 3.50%"
    },
    "answer": "C",
    "explanation": "In the exchange rate quotation, USD/EUR, the US dollar is the price currency and the euro is the\nbase currency. The USD/EUR is expected to increase from 1.3001 to 1.3456. This represents a 3.5%\nappreciation of the euro against the dollar, i.e., a percentage change of (1.3456/1.3001) − 1 =\n+3.50%.\nThe USD/GBP is expected to decrease from 1.5805 to 1.5489. This represents a percentage change\nof (1.5489/1.5805) − 1 = −2.00%. The British pound is expected to depreciate, not appreciate,\nagainst the US dollar by 2% because the USD/GBP exchange rate is expressed with the US dollar as\nthe price currency.\nThe appreciation of the euro against the US dollar can also be expressed as a depreciation of the\nUS dollar against the euro. Inverting the exchange rate quote from USD/EUR to EUR/USD, so the\neuro is now the price currency, leads to (1.3001/1.3456) − 1 = −3.38%. The US dollar is expected to\ndepreciate, not appreciate, against the euro by 3.38%."
  },
  {
    "id": "jc_ECO_077",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 77,
    "question": "Based on the FX quotations in the table, the most accurate statement is?\nSpot Rate One-Year Forward Rate\nUSD/EUR 1.2952 1.3001",
    "options": {
      "A": "The forward rate is trading at a discount to the spot rate by 0.0049 points",
      "B": "The euro is trading at a forward premium of 49 points",
      "C": "The US dollar is trading at a forward premium of 49 points."
    },
    "answer": "B",
    "explanation": "Forward premium = Forward rate – Spot rate = 1.3001 – 1.2952 = 0.0049. To convert to points,\nscale four decimal places—that is, multiply by 10,000 = 10,000 × 0.0049 = 49 points. Because the\nforward rate exceeds the spot rate for the base currency (euro), the euro is trading at a forward\npremium of 49 points.\nWhen the forward rate (1.3001) is higher than the spot rate (1.2952), the base currency (EUR) is\nsaid to be trading at a forward premium, not a discount, to the price currency (USD)."
  },
  {
    "id": "jc_ECO_078",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 78,
    "question": "The following information is available:\nSpot exchange rate: 2.0979 NZD/GBP\nLibor interest rates for the British pound: 1.6025%\nLibor interest rates for the New Zealand dollar: 3.2875%\nAll Libor interest rates are quoted on a 360-day year basis\nThe 180-day forward points (scaled up by four decimal places) in NZD/GBP is closest to:",
    "options": {
      "A": "39",
      "B": "348",
      "C": "176"
    },
    "answer": "C",
    "explanation": "Covered interest arbitrage will ensure identical terminal values by investing the same initial\namounts at the respective country’s domestic interest rates:\nGBP investment: ₤1× (1+0.016025×180/360) = £1.008013\nNZD investment: NZ$2.0979× (1+0.032875×180/360) = NZ$2.13238\nThe forward rate is determined by equating these two terminal amounts:\nNZD/GBP forward rate= NZ$2.13238/£1.008013= 2.115429\nForward points = (Forward−Spot) ×10,000\n= (2.1155−2.0979) ×10,000\n= 175.3=176(rounded)"
  },
  {
    "id": "jc_ECO_079",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 79,
    "question": "A European foreign exchange dealer gives the following exchange rate information to a\nEuropean client: USD/EUR spot rate = 1.1640; three-month forward points = 12.8. The\nbest interpretation of the exchange rate information is that:",
    "options": {
      "A": "the US dollar is trading at a premium to its forward rate",
      "B": "the three-month US real interest rate is expected to rise",
      "C": "three-month Eurozone interest rates are lower than those in the United States."
    },
    "answer": "C",
    "explanation": "A positive forward premium indicates that the interest rates in the base currency region (Eurozone)\nare lower than the interest rates in the price currency region (United States).\nThe euro, which is the base currency, is trading at a premium to its forward rate. The positive\nforward points indicate that the euro forward rate is above the spot rate. The US dollar, which is\nthe price currency, is trading at a discount to its forward rate.\nThe forward rate does not predict the direction of real interest rates."
  },
  {
    "id": "jc_ECO_080",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 80,
    "question": "In the classification of currency regimes, a currency board system (CBS) most likely differs\nfrom a fixed-rate parity system in that:",
    "options": {
      "A": "a CBS has a discretionary target level of foreign exchange reserves",
      "B": "a CBS can peg to a basket of currencies but a fixed-rate system cannot",
      "C": "the monetary authority within a CBS does not act as a traditional lender of last resort"
    },
    "answer": "C",
    "explanation": "In a CBS, the monetary authority has an obligation to maintain 100% foreign currency reserves\nagainst the monetary base. It thus cannot lend to troubled financial institutions. As long as the\ncountry under a fixed-parity regime maintains its exchange peg, the central bank can serve as a\nlender of last resort."
  },
  {
    "id": "jc_ECO_081",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 81,
    "question": "A fixed exchange rate regime in which the monetary authority is legally required to hold\nforeign exchange reserves backing 100% of its domestic currency issuance is best\ndescribed as:",
    "options": {
      "A": "a monetary union",
      "B": "a currency board",
      "C": "conventional fixed peg arrangement"
    },
    "answer": "B",
    "explanation": "With the currency board, the monetary authority is legally required to exchange domestic currency\nfor a specified foreign currency at a fixed exchange rate. It cannot issue domestic currency without\nreceiving foreign currency in exchange, and it must hold that foreign currency as a 100% reserve\nagainst the domestic currency issued. Thus, the country’s monetary base (bank reserve plus notes\nand coins in circulation) is fully backed by foreign exchange reserves."
  },
  {
    "id": "jc_ECO_082",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 82,
    "question": "Which of the following is most likely a characteristic of a country that adopts the\ndollarization exchange rate regime? The country:",
    "options": {
      "A": "is able to monetize its domestic debt",
      "B": "has the currency credibility of the US dollar",
      "C": "has a term structure similar to that of the United States"
    },
    "answer": "B",
    "explanation": "When a country adopts the US currency as its currency, hence the name dollarization, the\ndollarized country inherits the currency credibility of the US dollar.\nAdopting the US currency will impose fiscal discipline, preventing the government from\nmonetizing its debt.\nThe interest rates in a country that adopts the US currency as its currency are generally not the\nsame as in the United States."
  },
  {
    "id": "jc_ECO_083",
    "source": "JC_ECO",
    "subject": "经济学",
    "subjectEn": "Economics",
    "num": 83,
    "question": "An ideal international currency regime would most likely feature",
    "options": {
      "A": "currencies that are fully convertible",
      "B": "floating exchange rates between currencies",
      "C": "a common monetary policy across different countries.  Solutions 2. Economics"
    },
    "answer": "A",
    "explanation": "Ihe ideal currency regime would have three properties. One of those properties is, all currencies\nwould be fully convertible (i.e., currencies could be freely exchanged for any purpose and in any\namount). This condition ensures unrestricted flow of capital."
  },
  {
    "id": "jc_ALT_001",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 1,
    "question": "The potential benefits of allocating a portion of a portfolio to alternative investments\ninclude:",
    "options": {
      "A": "ease of manager selection",
      "B": "improvement in the portfolio’s risk–return relationship",
      "C": "accessible and reliable measures of risk and return"
    },
    "answer": "B",
    "explanation": "B is correct. Adding alternative investments to a portfolio may provide diversification benefits\nbecause of these investments’ less than perfect correlation with other assets in the portfolio. As a\nresult, allocating a portion of one’s funds to alternatives could potentially result in an improved\nrisk–return relationship. Challenges to allocating a portion of a portfolio to alternative investments\ninclude obtaining reliable measures of risk and return as well as selecting portfolio managers for\nthe alternative investments."
  },
  {
    "id": "jc_ALT_002",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 2,
    "question": "Which of the following statements is most accurate? Alternative investments:",
    "options": {
      "A": "have relatively high correlation of returns with those of traditional investments",
      "B": "tend to be more efficiently priced than traditional investments",
      "C": "fall outside of the definition of long-only positions in stocks or bonds"
    },
    "answer": "C",
    "explanation": "Investing in alternative assets can require handling illiquidity, transacting on private markets,\noperating sophisticated investment strategies, or risk–return profiles that are very different from\nthose of traditional long-only investments.\nAlternative investments often have relatively low correlation of returns with those of traditional\ninvestments.\nAlternative assets, by their very nature, tend to be less efficiently priced than traditional\nmarketable securities, providing an opportunity to exploit market inefficiencies through active\nmanagement."
  },
  {
    "id": "jc_ALT_003",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 3,
    "question": "Compared to traditional investments, alternative investments least likely demonstrate\nwhich of the following characteristics?",
    "options": {
      "A": "Narrow manager specialization",
      "B": "Underlying investments that are illiquid",
      "C": "A high degree of regulation"
    },
    "answer": "C",
    "explanation": "C is correct. Alternative investments are less regulated and transparent than traditional\ninvestments such as equity and debt securities. A is incorrect because narrow manager\nspecialization is a characteristic of alternative investments. B is incorrect because a characteristic\nof alternative investments is that the underlying investments are illiquid."
  },
  {
    "id": "jc_ALT_004",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 4,
    "question": "Compared with long-only investments in stocks and bonds, alternative investments are\nmost likely characterized by less:",
    "options": {
      "A": "flexibility to use derivatives",
      "B": "manager specialization",
      "C": "transparency"
    },
    "answer": "C",
    "explanation": "C is correct. Alternative investments are typically expected to have a lower level of regulation and\nless transparency than traditional long-only investments. B is incorrect because alternative\ninvestments are often characterized by narrow manager specialization, as compared with\ntraditional long-only investments. A is incorrect because alternative investments typically give the\nmanager more flexibility to use derivatives and leverage, invest in illiquid assets, and take short\npositions, as compared with traditional investments."
  },
  {
    "id": "jc_ALT_005",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 5,
    "question": "Identify the most appropriate advantage of direct investing for an investor:",
    "options": {
      "A": "Potential diversification benefits",
      "B": "Highest level of control over how asset is managed",
      "C": "Access to alternative investment without possessing a high degree of investment expertise"
    },
    "answer": "B",
    "explanation": "Direct investing has following advantages:\nAvoids paying ongoing management fees to an external manager.\nGreatest amount of flexibility for the investor.\nHighest level of control over how the asset is managed."
  },
  {
    "id": "jc_ALT_006",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 6,
    "question": "Which of the following least likely describes an advantage of fund investing?",
    "options": {
      "A": "Access to alternative investments without possessing a high degree of investment expertise",
      "B": "Lower level of investor involvement as the fund managers provide investment services and expertise.",
      "C": "Highest level of control over how the asset is managed"
    },
    "answer": "C",
    "explanation": "Advantages Disadvantages\nFund ■ Lower level of investor ■ Costly management and performance\ninvesting involvement as the fund managers fees\nprovide investment services and ■ Investor must conduct thorough due\nexpertise diligence when selecting the right fund\n■ Access to alternative because of the wide dispersion of fund\ninvestments without possessing a manager returns\nhigh degree of investment ■ Investors less able to exit the investment as\nexpertise funds typically have lock-ups and other\n■ Lower minimum capital restrictions\nrequirements\nCo-investing ■ Investors can learn from the ■ Reduced control over the investment\nfund’s process to become better at selection process compared\ndirect investing with direct investing\n■ Reduced management fees ■ May be subject to adverse selection\n■ Allows more active bias\nmanagement of the portfolio ■ Requires more active involvement\ncompared with fund investing compared with fund investing,\nand allows for a deeper which can be challenging\nrelationship with the manager\nDirect ■ Avoids paying ongoing ■ Requires higher internal investment\ninvesting management fees to an external costs\nmanager ■ Less access to a fund’s ready\n■ Greatest amount of flexibility diversification benefits or the fund\nfor the investor manager’s sourcing network\n■ Highest level of control over ■ Requires more complex due diligence\nhow the asset is managed because of the absence of a\nfund manager\n■ Higher minimum capital\nrequirements"
  },
  {
    "id": "jc_ALT_007",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 7,
    "question": "In co-investing, the investor invests in alternative assets indirectly through a fund but\nalso has the:",
    "options": {
      "A": "right to invest directly in the same assets alongside the fund",
      "B": "obligation to invest directly in the same assets alongside the fund",
      "C": "right to invest in the general partner’s fund management company"
    },
    "answer": "A",
    "explanation": "Co-investing, the investor invests in assets indirectly through the fund but also possesses rights\n(known as co-investment rights) to invest directly in the same assets. Through co-investing, an\ninvestor is able to make an investment alongside a fund when the fund identifies deals; the\ninvestor is not limited to participating in the deal solely by investing in the fund.\nCo-investing, the investor invests in assets indirectly through the fund but also possesses rights\n(known as co-investment rights) to invest directly in the same assets. However, there is no\nobligation to invest.\nCo-investing, the investor invests in assets indirectly through the fund but also possesses rights\n(known as co-investment rights) to invest directly in the same assets, not in the general partner's\nfund management company."
  },
  {
    "id": "jc_ALT_008",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 8,
    "question": "An investor, who wants to gain exposure to alternative investments and has the inhouse\nexpertise to perform due diligence on individual deals, is least likely to engage in:",
    "options": {
      "A": "co-investing",
      "B": "fund investing",
      "C": "direct investing."
    },
    "answer": "B",
    "explanation": "The investor may choose direct investing and co-investing that require greater due diligence of\nindividual deals and investor’s inhouse expertise.\nWith fund investing, due diligence on the fund’s portfolio investments is a responsibility of the\nfund manager rather than the fund investors."
  },
  {
    "id": "jc_ALT_009",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 9,
    "question": "A manager is compensated with a management fee based on committed capital plus an\nincentive fee based on fund performance. This scenario best describes the fee structure\nof a:",
    "options": {
      "A": "hedge fund",
      "B": "private equity fund",
      "C": "exchange traded funds"
    },
    "answer": "B",
    "explanation": "A private equity manager is compensated through a management fee based on committed capital\nplus an incentive fee.\nThe management fee of a hedge fund is based on assets under management.\nThe fee structure for exchange traded funds usually includes only a management fee, not an\nincentive fee."
  },
  {
    "id": "jc_ALT_010",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 10,
    "question": "High-water marks are typically used when calculating the incentive fee on hedge funds.\nThey are most likely used by clients to:",
    "options": {
      "A": "avoid prime brokerage fees",
      "B": "avoid paying twice for the same performance",
      "C": "claw back the management fees"
    },
    "answer": "B",
    "explanation": "B is correct. High-water marks help clients avoid paying twice for the same performance. When a\nhedge fund’s value drops, the manager will not receive an incentive fee until the value of the fund\nreturns to its previous level.\nA is incorrect because high-water marks are not linked to prime brokerage fees.\nC is incorrect because management fees are paid irrespective of returns."
  },
  {
    "id": "jc_ALT_011",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 11,
    "question": "An alternative investment fund’s hurdle rate is a:",
    "options": {
      "A": "rate unrelated to a catch-up clause",
      "B": "tool to protect clients from paying twice for the same performance",
      "C": "minimum rate of return the GP must exceed in order to earn a performance fee."
    },
    "answer": "C",
    "explanation": "An alternative investment fund’s hurdle rate is a minimum rate of return the GP must exceed in\norder to earn a performance fee.\nA is incorrect because if a catch-up clause is included in the partnership agreement, the catch-up\nclause permits distributions in relation to the hurdle rate.\nB is incorrect because it is a high-water mark (not a hurdle rate) that protects clients from paying\ntwice for the same performance."
  },
  {
    "id": "jc_ALT_012",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 12,
    "question": "In valuing underlying hedge fund positions, the most conservative approach is most\nlikely one that uses: (Mock 2018)",
    "options": {
      "A": "the average of the bid and ask prices",
      "B": "bid prices for longs and ask prices for shorts",
      "C": "the most recent market prices"
    },
    "answer": "B",
    "explanation": "A conservative and theoretically accurate approach is to use bid prices for longs and ask prices for\nshorts because these are the prices at which the positions could be closed.\nA is incorrect because although using the average quote [(bid + ask)/2] is a common approach, a\nmore conservative and theoretically accurate approach is to use bid prices for longs and ask prices\nfor shorts as these are the prices at which the positions could be closed.\nC is incorrect because when market prices or quotes are used for valuation, funds may differ in\nwhich price or quote they use (for example, bid price, ask price, average quote, and median\nquote)."
  },
  {
    "id": "jc_ALT_013",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 13,
    "question": "A hedge fund that implements trades based on a top-down analysis of expected\nmovements in economic variables most likely uses a(n):（2021 MOCK B）",
    "options": {
      "A": "macro strategy",
      "B": "relative value strategy",
      "C": "event-driven strategy"
    },
    "answer": "A",
    "explanation": "A is correct. Macro strategies emphasize a top-down approach, and trades are made based on\nexpected movements of economic variables.\nB is incorrect. Relative value strategies focus on pricing discrepancies between related securities.\nC is incorrect. Event-driven strategies focus on short-term events that are expected to affect\nindividual companies. The approach is thus “bottom up.”"
  },
  {
    "id": "jc_ALT_014",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 14,
    "question": "A measure that restricts new investors in a hedge fund from redeeming their capital for a\nset amount of time in order to implement the fund's investment strategy is known as a:",
    "options": {
      "A": "lockup period",
      "B": "notice period",
      "C": "gate"
    },
    "answer": "A",
    "explanation": "Lockup periods are time periods when investors cannot withdraw their capital—provide the hedge\nfund manager the required time to implement and potentially realize a strategy’s expected results.\nLockup periods apply to new investors in a hedge fund with the goal of allowing the hedge fund\nmanager time to implement the fund's investment strategy.\nNotice periods provide an opportunity for the hedge fund manager to liquidate a position in an\norderly fashion without magnifying the losses. A notice period applies to all investors wanting to\nwithdraw some or all of their capital from a hedge fund with the goal of providing the manager\nwith advance warning of the withdrawal.\nIn addition, funds sometimes impose a gate, which limits or restricts redemptions for a period of\ntime. A gate is imposed by the hedge fund manager independent of any lockup period that may\napply. A gate therefore applies to all investors for a finite period of time while a lockup period\napplies to new investors only."
  },
  {
    "id": "jc_ALT_015",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 15,
    "question": "Which of the following least likely describes an advantage of investing in hedge funds\nthrough a fund of funds? A fund of funds may provide investors with:",
    "options": {
      "A": "access to due diligence expertise.",
      "B": "lower fees because of economies of scale",
      "C": "access to managers who can negotiate better redemption terms"
    },
    "answer": "B",
    "explanation": "B is correct. The fees on funds of funds are usually higher. The fund of funds manager charges a\nfee, and there is a fee charged by each hedge fund. A is incorrect because this is an advantage of\ninvesting through funds of funds. C is incorrect because this is an advantage of investing through\nfunds of funds."
  },
  {
    "id": "jc_ALT_016",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 16,
    "question": "Which type of strategy is considered the Equity Hedge Strategies:",
    "options": {
      "A": "Sector specific",
      "B": "Distressed/restructuring",
      "C": "Volatility"
    },
    "answer": "A",
    "explanation": "A is correct. Equity Hedge Strategies include Market neutral, Fundamental L/S growth,\nFundamental value, Short-biased, Sector specific."
  },
  {
    "id": "jc_ALT_017",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 17,
    "question": "A hedge fund strategy that seeks to influence a company's policies through the purchase\nof equity is best described as a(n):",
    "options": {
      "A": "market-neutral strategy",
      "B": "merger arbitrage strategy",
      "C": "activist strategy."
    },
    "answer": "C",
    "explanation": "Event-driven strategies, which include \"activist\", seek to profit from defined catalyst events,\ntypically those that involve changes in corporate structure, such as an acquisition or restructuring.\nIn activist strategies, hedge fund managers secure sufficient equity holdings to allow them to\ninfluence a company’s policies or direction. The hedge fund manager thus tries to create his or her\nown catalyst, influencing the investment’s ultimate destiny by creating a desired corporate\noutcome.\nEquity hedge strategies, which include market neutral, are focused on public equity markets and\ntake long and short positions in equity and equity derivative securities. Market neutral strategies\nuse quantitative (technical) and fundamental analysis to identify under- and overvalued equity\nsecurities. The hedge fund takes long positions in securities it has identified as undervalued and\nshort positions in securities it has identified as overvalued. The hedge fund tries to maintain a net\nposition that is neutral with respect to market risk and other risk factors (size, industry, momentum,\nvalue, etc.). Ideally, the portfolio has an overall beta of approximately zero.\nMerger arbitrage strategies involve going long (buying) the stock of the company being acquired\nat a discount to its announced takeover price and going short (selling) the stock of the acquiring\ncompany when the merger or acquisition is announced. The manager may expect to profit once the\ninitial deal spread narrows to the closing value of the transaction after it is fully consummated.\nThe spread exists because there is always some uncertainty over whether the deal will actually\nclose in the face of legal and regulatory hurdles."
  },
  {
    "id": "jc_ALT_018",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 18,
    "question": "Hedge funds are similar to private equity funds in that both: （原版书课后题）",
    "options": {
      "A": "are typically structured as partnerships",
      "B": "assess management fees based on assets under management",
      "C": "do not earn an incentive fee until the initial investment is repaid"
    },
    "answer": "A",
    "explanation": "Private equity funds and hedge funds are typically structured as partnerships where investors are\nlimited partners (LP) and the fund is the general partner (GP). The management fee for private\nequity funds is based on committed capital whereas for hedge funds the management fees are\nbased on assets under management. For most private equity funds, the general partner does not\nearn an incentive fee until the limited partners have received their initial investment back."
  },
  {
    "id": "jc_ALT_019",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 19,
    "question": "A collateralized loan obligation specialist is most likely to:",
    "options": {
      "A": "sell its debt at a single interest rate",
      "B": "cater to niche borrowers in specific situations",
      "C": "rely on diverse risk profiles to complete deals"
    },
    "answer": "C",
    "explanation": "A CLO manager will extend several loans to corporations (usually to firms involved in LBOs,\ncorporate acquisitions, or other similar types of transactions), pool these loans, and then divide\nthat pool into various tranches of debt and equity that range in seniority and security. The CLO\nmanager will then sell each tranche to different investors according to their risk profiles; the most\nsenior portion of the CLO will be the least risky, and the most junior portion of the CLO (i.e.,\nequity) will be the riskiest.\nA is incorrect because with the different CLO tranches having distinct risks varying with their\nseniority and security, they will be priced over a range of interest rates. In contrast, unitranche\ndebt combines different tranches of secured and unsecured debt into a single loan with a single,\nblended interest rate.\nB is incorrect because debt extended to niche borrowers in specific situations is more commonly\noffered through specialty loans. For example, in litigation finance, a specialist funding company\nprovides debt to a client to finance the borrower’s legal fees and expenses in exchange for a\nportion of any case winnings."
  },
  {
    "id": "jc_ALT_020",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 20,
    "question": "Capital provided for companies beginning operation but before commercial\nmanufacturing and sales have occurred best describes which stage in venture capital\ninvesting?",
    "options": {
      "A": "Seed-stage",
      "B": "Early-stage",
      "C": "Later-stage"
    },
    "answer": "B",
    "explanation": "Early-stage financing is capital provided for companies moving into operation and before\ncommercial manufacturing and sales have occurred."
  },
  {
    "id": "jc_ALT_021",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 21,
    "question": "The majority of private equity activity involves:（MOCK 2020 B）",
    "options": {
      "A": "derivative positions",
      "B": "leveraged buyouts",
      "C": "investing in mortgaged-backed securities"
    },
    "answer": "B",
    "explanation": "B is correct. The majority of private equity fund activity involves leveraged buyouts of established\nprofitable and cash generative companies.\nA is incorrect because, although a private equity fund may use derivatives, this use is not a\ndefining characteristic of private equity investing. Derivative strategies are most likely used in\nhedge fund and commodity investment strategies.\nC is incorrect because private equity funds generally invest in non-publicly traded companies or\npublic companies with the intent to take them private, not mortgage-backed securities which are a\nform of publicly traded real estate debt."
  },
  {
    "id": "jc_ALT_022",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 22,
    "question": "Which of the following statements about private equity performance evaluation is most\naccurate?",
    "options": {
      "A": "Managers have no discretion on the timing of the distribution of proceeds",
      "B": "Private equity fund management fees are based on capital called",
      "C": "Cash flows are frequently described in terms of the J-curve effect"
    },
    "answer": "C",
    "explanation": "Private equity investments generally involve an initial capital commitment, but actual capital\nflows often lag that commitment because capital “calls” are staggered over substantive periods of\ntime. Private equity returns are frequently described in terms of the J-curve effect.\nIn an independent, fixed-life private equity fund, the decisions to raise money, take money in the\nform of capital calls, and distribute proceeds are all at the discretion of the private equity manager.\nTiming of cash flows is an important part of the investment decision process. The private equity\nmanager should thus be rewarded or penalized for the results of those timing decisions, and the\ncalculation of an IRR is key for doing so.\nPrivate equity funds typically impose management fees on committed capital, which consists of\nthe total amount that LPs have promised to fund future investments, not the capital called."
  },
  {
    "id": "jc_ALT_023",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 23,
    "question": "With regard to venture capital, which of the following statements is most likely true\nregarding venture capital?",
    "options": {
      "A": "Investments typically are in later stage and more established companies",
      "B": "Investors tend to have short time horizons",
      "C": "Investors require a higher return than investors in publicly traded equity"
    },
    "answer": "C",
    "explanation": "C is correct. The historical standard deviations of annual return for venture capital are higher than\nthat of common stocks. Investors should therefore require a higher return in exchange for\naccepting this higher risk, along with the illiquidity of venture capital investing. A is incorrect\nbecause the venture capital strategy typically invests in start-up or early stage companies, not later\nstage companies. B is incorrect because venture capital investments require long time horizons."
  },
  {
    "id": "jc_ALT_024",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 24,
    "question": "Which of the following is most likely a private equity strategy?（2015 Mock PM）",
    "options": {
      "A": "Merger arbitrage",
      "B": "Quantitative directional",
      "C": "Venture capital"
    },
    "answer": "C",
    "explanation": "Venture capital is a private equity strategy in which private equity companies invest and get\nactively involved in the management of portfolio companies."
  },
  {
    "id": "jc_ALT_025",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 25,
    "question": "In a secondary sale, a private capital firm sells one of its portfolio companies to:",
    "options": {
      "A": "the public",
      "B": "a competitor in its industry",
      "C": "another private capital fund."
    },
    "answer": "C",
    "explanation": "In a secondary sale, a private capital firm sells one of its portfolio companies to another private\ncapital fund or group of private investors. Selling a portfolio company to a competitor in its\nindustry is known as a trade sale. Selling a portfolio company to the public requires an initial\npublic offering."
  },
  {
    "id": "jc_ALT_026",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 26,
    "question": "Which of the following is NOT an advantage of a SPAC exit:",
    "options": {
      "A": "Fixed valuation with lower volatility of share pricing",
      "B": "Flexibility of transaction structure to best suit the company’s context",
      "C": "Fast and simple execution."
    },
    "answer": "C",
    "explanation": "Advantages of a SPAC exit include:\n1. extended time for public disclosure on company prospects to build investor interest\n2. fixed valuation with lower volatility of share pricing\n3. flexibility of transaction structure to best suit the company’s context\n4. association with potentially high-profile and seasoned sponsors and their extensive investor\nnetwork."
  },
  {
    "id": "jc_ALT_027",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 27,
    "question": "The most likely impact of adding commodities to a portfolio of equities and bonds is to:",
    "options": {
      "A": "increase risk. （2017 Mock AM）",
      "B": "reduce exposure to inflation",
      "C": "provide higher current income"
    },
    "answer": "B",
    "explanation": "Over the long term, commodity prices are closely related to inflation and thus including\ncommodities in a portfolio of equities and bonds will reduce its exposure to inflation."
  },
  {
    "id": "jc_ALT_028",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 28,
    "question": "A significant challenge to investing in timber is most likely its:",
    "options": {
      "A": "high correlation with other asset classes",
      "B": "dependence on an international competitive context",
      "C": "return volatility compounded by financial market exposure"
    },
    "answer": "B",
    "explanation": "A primary risk of timber is the international competitive landscape. Timber is a globally sold and\nconsumed commodity subject to world trade interruptions. So the international context can be\nconsidered one of its major risk factors. A is incorrect because timberland offers an income stream\nbased on the sale of trees, wood, and other timber products that has not been highly correlated\nwith other asset classes. C is incorrect because investors are interested in timber because of its\nglobal nature (everyone requires shelter), the current income generated from the sale of the crop,\ninflation protection from holding the land, and its safe haven characteristics (it offers some\ninsulation from financial market volatility)."
  },
  {
    "id": "jc_ALT_029",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 29,
    "question": "With regard to commodities, it is most likely true that:（2020 mock C）",
    "options": {
      "A": "exposure is most commonly achieved via commodity derivatives.",
      "B": "their returns are based on an income stream such as interest or dividends",
      "C": "they are physical products so most investors prefer to trade the actual commodity"
    },
    "answer": "A",
    "explanation": "A is correct. Commodity exposure is most commonly accessed via commodity derivatives.\nB is incorrect because commodities returns are based on changes in price rather than income\nstreams.\nC is incorrect because holding commodities (i.e., the physical products) incurs costs for\ntransportation and storage. Thus, most commodity investors do not trade actual physical\ncommodities, but rather trade commodity derivatives."
  },
  {
    "id": "jc_ALT_030",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 30,
    "question": "The return on a commodity index is likely to be different from returns on the underlying\ncommodities because:（2013 Mock AM）",
    "options": {
      "A": "assets are not marked to market",
      "B": "data are subject to survivorship bias",
      "C": "indices are constructed using futures contracts"
    },
    "answer": "C",
    "explanation": "Since commodity indices are constructed using commodity futures and not the underlying\ncommodities there can be differences between commodity index returns and the returns of the\nunderlying commodities."
  },
  {
    "id": "jc_ALT_031",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 31,
    "question": "Which of the following wheat prices is most likely indicating the wheat price are\nreferred to as being in contango? （2018 Mock）",
    "options": {
      "A": "$70 of spot price, $75 of September, and $80 of December",
      "B": "$75 of spot price, $75 of September, and $70 of December",
      "C": "$75 of spot price, $70 of September, and $75 of December"
    },
    "answer": "A",
    "explanation": "If a price curve for a commodity is in contango, the curve is most likely be upward slopping and\nthe forward price for this commodity will be higher than the current price. In this case, only $80 is\nhigher than the spot price of wheat."
  },
  {
    "id": "jc_ALT_032",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 32,
    "question": "Commodity index values are based on:",
    "options": {
      "A": "futures contract prices",
      "B": "the market price of the specific commodity",
      "C": "the average market price of a basket of similar commodities"
    },
    "answer": "A",
    "explanation": "Commodity indexes consist of futures contracts on one or more commodities."
  },
  {
    "id": "jc_ALT_033",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 33,
    "question": "If a commodity’s storage cost is equal to its convenience yield, its futures prices will be\ngreater than its spot price if the risk-free rate is:",
    "options": {
      "A": "negative",
      "B": "zero",
      "C": "positive."
    },
    "answer": "C",
    "explanation": "The futures price can be formalized in the following form: , where c is the\n(𝑟𝑟+𝑐𝑐−𝑖𝑖)𝑇𝑇\nstorage cost, i is the convenience yield, r is the risk-free rate,\n𝐹𝐹\nT0\n(\nis\n𝑇𝑇 )\nth\n=\ne t\n𝑆𝑆\nim0𝑒𝑒 e to the expiration of the\nforward contract. Thus, if Storage costs = Convenience yield, then . If r > 0, then\n𝑟𝑟𝑇𝑇\nFutures price > Spot price. 𝐹𝐹0(𝑇𝑇)=𝑆𝑆0𝑒𝑒"
  },
  {
    "id": "jc_ALT_034",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 34,
    "question": "Direct commercial real estate ownership least likely requires investing in:",
    "options": {
      "A": "large amounts",
      "B": "illiquid assets",
      "C": "a short time horizon"
    },
    "answer": "C",
    "explanation": "Commercial real estate ownership requires long time horizons and purchasing illiquid assets that\nrequire large investment amounts."
  },
  {
    "id": "jc_ALT_035",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 35,
    "question": "A real estate investor looking for equity exposure in the public market is most likely to\ninvest in:",
    "options": {
      "A": "real estate limited partnerships",
      "B": "shares of real estate investment trusts",
      "C": "collateralized mortgage obligations"
    },
    "answer": "B",
    "explanation": "B is correct. Shares in real estate investment trusts are publicly traded and represent an equity\ninvestment in real estate. A is incorrect. Real estate limited partnerships are an example of a\nprivate real estate investment. C is incorrect. A collateralized mortgage obligation is an example\nof debt-based exposure to real estate."
  },
  {
    "id": "jc_ALT_036",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 36,
    "question": "When considering the attributes of private real estate markets, which is most likely to\napply?",
    "options": {
      "A": "It is straightforward for individual investors to diversify through direct ownership of multiple properties.",
      "B": "Costs associated with transactions are typically substantial",
      "C": "Private market indexes are investable"
    },
    "answer": "B",
    "explanation": "For private real estate markets, transaction costs are high.\nIt may be difficult for small investors to establish a diversified portfolio of wholly owned\nproperties.\nPrivate market indexes are not investable, and property typically requires professional operational\nmanagement."
  },
  {
    "id": "jc_ALT_037",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 37,
    "question": "Compared with other investment asset classes, an investment in real estate is least likely\nto be characterized by:（2017 Mock PM）",
    "options": {
      "A": "basic indivisibility",
      "B": "homogeneity",
      "C": "fixed location"
    },
    "answer": "B",
    "explanation": "Because no two properties are identical, homogeneity is not a feature of an investment in real\nestate."
  },
  {
    "id": "jc_ALT_038",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 38,
    "question": "Which of the following statement regarding Mortgage-backed securities(MBS) is\nWRONG:",
    "options": {
      "A": "If mortgage defaults and losses are high, all tranches bear the cost of the shortfall on pro rata",
      "B": "When rates rise, property owner prepayments can also slow, lengthening the duration of most",
      "C": "An MBS issuer forms a special purpose vehicle (SPV) to buy mortgages from lenders and other mortgage owners and use them to create a diversified mortgage pool."
    },
    "answer": "A",
    "explanation": "If mortgage defaults and losses are high, the lowest-ranked tranches bear the cost of the shortfall.\nThe most junior tranche is referred to as the first-loss tranche."
  },
  {
    "id": "jc_ALT_039",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 39,
    "question": "Greenfield investments in infrastructure are most accurately described as investments ín\nassets:",
    "options": {
      "A": "that are operating profitably",
      "B": "that have not yet been constructed",
      "C": "related to environmental technology"
    },
    "answer": "B",
    "explanation": "Greenfield investments refer to infrastructure assets that are yet to be constructed."
  },
  {
    "id": "jc_ALT_040",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 40,
    "question": "Which of the following infrastructure investments would most likely be easiest to value?",
    "options": {
      "A": "private equity fund holding brownfield investments",
      "B": "master limited partnership holding greenfield investments",
      "C": "master limited partnership holding brownfield investments"
    },
    "answer": "C",
    "explanation": "A master limited partnership (MLP) is publicly traded, whereas a private equity fund is not.\nTherefore the MLP will have market pricing information to help with valuation. A brownfield\ninvestment is an existing asset that likely has operational and financial history to aid in valuation;\nwhereas a greenfield investment is in new construction."
  },
  {
    "id": "jc_ALT_041",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 41,
    "question": "When investing in greenfield infrastructure projects, participants generally:",
    "options": {
      "A": "invest alongside with strategic investors or developers in the investment process",
      "B": "face less development risk compared to those investing in brownfield projects",
      "C": "depend on the historical financial and operational records of the assets."
    },
    "answer": "A",
    "explanation": "Greenfield investors typically invest alongside strategic investors or developers who specialize in\ndeveloping the underlying assets.\nInvesting in infrastructure assets that are to be constructed is generally referred to as greenfield\ninvestment. Thus, greenfield investors face higher development and construction risks compared\nto brownfield investors, and may expect capital appreciation to reflect the construction and\ncommissioning risk.\nFor brownfield, not greenfield, investors that, typically, some of the assets’ financial and operating\nhistory is available."
  },
  {
    "id": "jc_ALT_042",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 42,
    "question": "Which of the following is true regarding private equity performance calculations?",
    "options": {
      "A": "The money multiple calculation relies on the amount and timing of cash flows",
      "B": "The IRR calculation involves the assumption of two rates",
      "C": "Because private equity funds have low volatility, accounting conventions allow them to use a lagged mark-to-market process."
    },
    "answer": "B",
    "explanation": "B is correct. The determination of an IRR involves certain assumptions about a financing rate to\nuse for outgoing cash flows (typically a weighted average cost of capital) and a reinvestment rate\nassumption to make on incoming cash flows (which must be assumed and may or may not actually\nbe earned).\nA is incorrect because the money multiple calculation completely ignores the timing of cash flows.\nC is incorrect because it is somewhat of a reversal of cause and effect: Private equity (PE) funds\ncan appear to have low volatility because of the lag in their mark-to-market process. It’s not that\nPE investments don’t actually rise and fall behind the scenes with economic influences, but\naccounting conventions may simply leave longer-lived investments marked at their initial cost for\nsome time or with only modest adjustments to such carrying value until known impairments or\nrealization events begin to transpire. Also, because PE funds are not easily marked to market, their\nreturns can appear somewhat smoothed, making them appear more resilient and less correlated\nwith other assets than they really are. The slowness to re-mark them can unfortunately be confused\nby investors as an overall lack of volatility."
  },
  {
    "id": "jc_ALT_043",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 43,
    "question": "A credit hedge fund has a very short redemption notice period— one week. The fund\nhas a small number of holdings that represent a significant portion of the outstanding\nissue of each holding. The fund’s lockup period has expired. Unfortunately, in one\nparticular month, because of the downgrades of two large holdings, the hedge fund has a\ndrawdown (decline in NAV) of more than 10%. The declines in value of the two\nholdings result in margin calls from their prime broker, and the drawdown results in\nrequests to redeem 50% of total partnership interests. The combined requests are most\nlikely to:",
    "options": {
      "A": "force the hedge fund to liquidate or unwind 50% of its positions in an orderly fashion",
      "B": "have little effect on the prices received when liquidating the positions because the hedge fund",
      "C": "result in a forced liquidation, which is likely to further drive down prices and result in ongoing pressures on the hedge fund as it tries to convince nervous investors to remain in the fund."
    },
    "answer": "C",
    "explanation": "C is correct. One week may not be enough time to unwind such a large portion of the fund’s\npositions in an orderly fashion that does not also further drive down prices. A downgrade is not\nlikely to have a temporary effect, so even if other non-losing positions are liquidated to meet the\nredemption requests, it is unlikely that the two large holdings will return to previous or higher\nvalues in short order. Also, the hedge fund may have a week to satisfy the requests for\nredemptions, but the margin call must be met immediately. Overall, sudden redemptions at the\nfund level can have a cascading negative impact on a fund."
  },
  {
    "id": "jc_ALT_044",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 44,
    "question": "A shortcut methodology involving measuring the total value of all distributions and\nresidual asset values relative to an initial total investment often cited by private equity\nand real estate managers is the:",
    "options": {
      "A": "leverage ratio",
      "B": "capital loss ratio",
      "C": "multiple of invested capital."
    },
    "answer": "C",
    "explanation": "Private equity and real estate managers often cite a multiple of invested capital ratio, where one\nsimply measures the total value of all distributions and residual asset values (assets that may still\nbe awaiting their ultimate sale) relative to the initial total investment."
  },
  {
    "id": "jc_ALT_045",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 45,
    "question": "A hedge fund with $100 million of initial capital charges a management fee of 2% and\nan incentive fee of 20%. The management fee is based on assets under management at\nyear-end, and the incentive fee is calculated independently from the management fee.\nAssuming the fund earns a 20% return at year-end, total fees earned by the hedge fund\nduring the year are closest to:（2018 Mock）",
    "options": {
      "A": "$6.4 million",
      "B": "$5.92million",
      "C": "$5.63 million"
    },
    "answer": "A",
    "explanation": "Total fees earned by the hedge fund are closest to $6.4 million:\nYear-end value = $100 million ×1.2= $120million\nManagement fee = Year-end value × Management fee %\n= $120 million ×2% = $2.4 million\nIncentive fee = (Year-end value – Beginning value) × Incentive fee %\n= ($120million – $100million) ×20% = $4million\nTotal fees = Management fee + Incentive fee\n= $2.4 million+ $4 million = $6.4 million"
  },
  {
    "id": "jc_ALT_046",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 46,
    "question": "For an investor in a private equity fund , the least advantageous of the following limited\npartnership terms is:",
    "options": {
      "A": "a clawback provision",
      "B": "a European-style waterfall provision",
      "C": "an American-style waterfall provision"
    },
    "answer": "C",
    "explanation": "An American-style waterfall structure has a deal-by-deal calculation of incentive fees to the\ngeneral partner. In this case, a successful deal where incentive fees are paid, followed by the sale\nof a holding that has losses in the same year, can result in incentive fees greater than those\ncalculated with a European-style (whole-of-fund) waterfall. A clawback provision benefits the\nlimited partner investors by allowing them to recover incentive fees paid earlier if the fund\nrealizes losses later. A clawback provision coupled with a American-style waterfall will result in\nthe same overall incentive fees as a European-style waterfall if the transactions occur in\nsubsequent years."
  },
  {
    "id": "jc_ALT_047",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 47,
    "question": "An investor in a private equity fund is concerned that the general partner can receive\nincentive fees in excess of the agreed-on incentive fees by making distributions over\ntime based on profits earned rather than making distributions only at exit from\ninvestments of the fund. Which of the following is most likey to protect the investor\nfrom the general partner receiving excess fees?",
    "options": {
      "A": "A high hurdle rate",
      "B": "A clawback provision",
      "C": "A lower capital commitment"
    },
    "answer": "B",
    "explanation": "B is correct. A clawback provision requires the general partner in a private equity fund to return\nany funds distributed (to the general partner) as incentive fees until the limited partners have\nreceived back their initial investments and the contracted portion of the total profits. A high hurdle\nrate will result in distributions occurring only after the fund achieves a specified return. A high\nhurdle rate decreases the likelihood of, but does not prevent, excess distributions. Management\nfees, not incentive fees, are based on committed capital."
  },
  {
    "id": "jc_ALT_048",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 48,
    "question": "A private equity fund has a “2 and 20\" fee structure with the incentive fee independent\nof management fees. The fund will sell a holding for a profit of 9%. The hurdle rate is\nspecified as 8%. The provision that would result in an incentive fee of 1 % is:",
    "options": {
      "A": "a hard hurdle rate",
      "B": "a soft hurdle rate",
      "C": "a catch-up provision"
    },
    "answer": "C",
    "explanation": "With a catch-up provision, the limited partners get the first 8% of gross return and the general\npartner gets all returns above that to a maximum of 2%, and gains above that are shared 80% to\nthe limited partners and 20% to the general partner.\nWith a soft hurdle rate of 8%, the incentive fee would be 20% of 9%, or 1.8%.\nWith a hard hurdle rate of 8%, the incentive fee would be 20% of (9%-8%), or 0.2%."
  },
  {
    "id": "jc_ALT_049",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 49,
    "question": "A GF hedge fund begins the year with $235million and earns a30% return for the year.\nThe fund charges a 2% management fee on end-of-year fund value and a 20% incentive fee on the return, net of the management fees, that is in excess of a 8% fixed hurdle rate.\nThe fund's investors' return for the year, net of fees, is closest to:（2014 Mock AM）",
    "options": {
      "A": "21.92%",
      "B": "23.52%",
      "C": "23%"
    },
    "answer": "B",
    "explanation": "The $235 million grows by 30% to $305.5 million [= $235 million × (1 +0.3)]. The management\nfee is $6.11 million (= $305.5million × 0.02), leaving $299.39million, net of the management fee,\nor an increase of $64.39million over the beginning value of $235 million.\nThe8% hurdle rate requires an increase of $18.8 million (= $235 million ×0.08), so the fund has\nearned $45.59 million (= $64.39million – $18.8million) over the hurdle rate, net of the\nmanagement fee.\nThe incentive fee is 20% of this, or $9.118 million (= $45.59 million × 0.2), leaving an increase in\nfund assets, net of management and incentive fees, of $55.272 million (=$64.39million – $9.118\nmillion) . The investor's return, net of fees, is $55.272/$235 million =23.52%."
  },
  {
    "id": "jc_ALT_050",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 50,
    "question": "A hedge fund has the following fee structure:\n Annual management fee based on year-end AUM 2%\n Incentive fee 20%\n Hurdle rate before incentive fee collection starts 4%\n Current high-water mark $610 million\n The fund has a value of $583.1 million at the beginning of the year. After one year,\nit has a value of $642 million before fees. The net return to an investor for this year\nis closest to:",
    "options": {
      "A": "6.72%",
      "B": "6.80%",
      "C": "7.64%"
    },
    "answer": "C",
    "explanation": "C is correct. The management fee for the year is\n$642 × 0.02 = $12.84 million.\nBecause the ending value exceeds the high-water mark, the hedge fund can collect an incentive fee.\nThe incentive fee is\n{$642 – [$610 × (1 + 0.04)]} × 0.20 = $1.52 million.\nThe net return to the investor for the year is\n[($642–$12.84–$1.52)/$583.1]–1≈0.07638≈7.64%."
  },
  {
    "id": "jc_ALT_051",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 51,
    "question": "A hedge fund has a “2 and 20” compensation structure with incentive fee independent of\nmanagement fees. Management fees are calculated on an annual basis on AUM at the\nbeginning of the year. The GP has earned an 20% IRR on an investment, the hurdle rate\nis 8%, and the partnership agreement includes a catch-up clause. What is total return for\nLP:",
    "options": {
      "A": "14%",
      "B": "13.68%",
      "C": "16%"
    },
    "answer": "A",
    "explanation": "With catch-up clause, after first 8% distributed to investors. GP will catch up to receive\n(8%/80%)*20%=2%---because 2% out of 10% amounts to 20% of the profits accounted for so far,\nas the catch-up clause stipulates—and the remaining 10% would be split 80/20 between the LPs\nand the GP. Total incentive fee=2%+2%=4%. Total return of LP=20%-2%(MF)-4%(IF)=14%."
  },
  {
    "id": "jc_ALT_052",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 52,
    "question": "As an alternative investor, Evian makes a total investment of $50 million in a\nfund-of-funds that has a “1 and 10” fee structure, with management and incentive fees\ncalculated independently based on year-end values.\n$30 million of the investment was allocated to the fund A and $10 million was allocated\nto the fund B.\nOne year later, the value of the fund A investment is $45 million and the value of the\nfund B investment is $28 million, both net of fund fees. Calculate the investor’s return\nfor the year net of fees.",
    "options": {
      "A": "39.94%",
      "B": "40.086%",
      "C": "46.00%"
    },
    "answer": "A",
    "explanation": "At year-end, the gross value of the investor’s investment is $45 + $28 = $73 million, which is the\nnet return of Funds of fund after distributed the management fee and incentive fee to Fund A and\nB.\nThe fund-of-funds management fee is 1% of $73 million, which is $0.73 million.\nThe investor’s gain for the year before fund-of-funds fees is $73 – $50 = $23 million.\nThe fund-of-funds manager’s incentive fee is 10% of $23 million, which is $2.3 million.\nThe year-end value of the investor’s fund-of-funds investment is $73 – $0.73 – $2.3 = $69.97\nmillion.\nThe investor’s one-year return after fees is 69.97/50-1=39.94%\nIf the fund-of-funds manager’s incentive fee is calculated net of management fee, the answer\nshould be B. 10% of ($23-0.73 million) is 2.227 million. The investor’s one-year return after fees\nis ($73 – $0.73 – $2.227)/50-1=40.086%\nNote that the same investments made directly with the fund A and fund B would have returned\n73/50-1=46.00% (Answer C). $73 million is the gross value of the investor’s investment managed\nby FOFs."
  },
  {
    "id": "jc_ALT_053",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 53,
    "question": "Assuming the investment outcomes are realized in the same year, a PE fund invests\n$100 million in a venture company that is sold for $130 million and invests $100\nmillion in an LBO that goes poorly and is liquidated for $80 million.\nIf the carried interest incentive fee for the GP is 20% and there is no clawback provision,\nthe investor’s return after incentive fees is:",
    "options": {
      "A": "2% under an American-style (deal-by-deal) waterfall structure",
      "B": "2% under a European-style (whole-of-fund) waterfall structure",
      "C": "4% because the investor could “claw back” $4 million of the $6 million paid as an incentive"
    },
    "answer": "A",
    "explanation": "Under an American-style (deal-by-deal) waterfall structure, an incentive fee of 20% × ($130 –\n$100) = $6 million would be paid on the venture investment. Because there is a loss on the LBO\ninvestment, no incentive fee is paid. Investor’s return on investment: (130+80-6)/200-1=2%\nUnder a European-style (whole-of-fund) waterfall structure, the gain for the period is 130 + 80 –\n200 = $10 million and the incentive fee is 20% × 10 = $2 million. Investor’s return on investment:\n(130+80-2)/200-1=4%\nThere is no clawback provision.\nIf it is, after the LBO investment is sold, the incentive fee of $6 million paid on the venture\ninvestment is more than 20% of the return ($10 mil x 20%=$2 mil) on the total investment ($200\nmil). It is 60% ($6 mil/$10 mil) of the total (net) gain of $10 million. The investor could “claw\nback” $4 million of the $6 million paid as an incentive fee on the venture investment so that the\ntotal incentive fee is reduced to 20% of the $10 million gain.\nIf there is a clawback provision, PE fund earns a same incentive fee ($ 2 mil) no matter an\nAmerican-style (deal-by-deal) waterfall structure or a European-style (whole-of-fund) waterfall\nstructure apply."
  },
  {
    "id": "jc_ALT_054",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 54,
    "question": "A HF has a return of 20% before fees in its first year. The fund has a management fee of\n2% on end-of-year fund value and a 20% incentive fee, with an 8% hard hurdle rate on\ngains net of the management fee. The return after fees for an investor in this fund is\nclosest to:",
    "options": {
      "A": "13.60%",
      "B": "15.20%",
      "C": "15.68%."
    },
    "answer": "C",
    "explanation": "It is easiest to see if there is an assumed initial value ($ 100 mil investment).\nYear-end gross value = 100 x 20% =$ 120 mil\nManagement fee = 2% × 120 = $ 2.4 mil\nGains net of management fee = 20 – 2.4 = $ 17.6 mil\nHurdle gains = 8% × 100 = $ 8 mil\nIncentive fee = 20% × (20 – 2.4 – 8) = $ 1.92 mil\nTotal fees = 2.4 + 1.92 = $ 4.32 mil\nEnding value after fees = 120 – 4.32 = $ 115.68 mil\nReturn after fees = 115.68/100 – 1 = 15.68%"
  },
  {
    "id": "jc_ALT_055",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 55,
    "question": "Unlike traditional financial assets, digital assets:",
    "options": {
      "A": "can be invested in through indirect investment vehicles such as ETFs",
      "B": "do not have an inherent value based on underlying assets or on potential cash flows",
      "C": "are generally recorded in private ledgers maintained by central intermediaries"
    },
    "answer": "B",
    "explanation": "Unlike financial assets, most digital assets do not have an inherent value based on underlying\nassets or on the potential cash flow.\nThe main similarity (not difference) between these asset types is the emergence of indirect\ninvestment vehicles such as exchange-traded funds (ETFs) and hedge funds that invest both in\ntraditional financial assets and in digital assets.\nOne key difference between digital assets and traditional financial instruments is that traditional\n(not digital) assets are generally recorded in private ledgers maintained by central intermediaries."
  },
  {
    "id": "jc_ALT_056",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 56,
    "question": "When assessing centralized versus decentralized cryptocurrency exchanges, which\nstatement is more accurate?",
    "options": {
      "A": "Decentralized exchanges tend to be less regulated and are less vulnerable to hacker attacks",
      "B": "Decentralized exchanges are usually less regulated and more vulnerable to hacker attacks",
      "C": "Decentralized exchanges are more likely to be regulated and less vulnerable to hacker"
    },
    "answer": "A",
    "explanation": "Decentralized exchanges are difficult to regulate because no single individual, organization, or\ngroup controls the system. This means that those trading on decentralized exchanges are generally\nfree to transact without any regulatory scrutiny. However, some centralized exchanges are\nregulated, and depending on jurisdiction, these exchanges may be regulated as financial exchanges\nor other types of financial intermediaries. Hence, decentralized exchanges are less likely to be\nregulated.\nMoreover, decentralized exchanges lack a centralized control mechanism and operate on a\ndistributed platform without central coordination or control. This comes with the benefit that\nshould one of the computers on the network be attacked, the exchange remains operational since\nthere are numerous other computers that continue to operate on the network. That is why attacking\ndecentralized exchanges is substantially more difficult, rendering such attacks almost certain to\nfail. However, for a centralized exchange, trading is hosted on private servers, exposing the\ncentralized exchanges and their clients to security vulnerabilities. Should the exchange's servers\nbecome compromised, the entire system may become paralyzed, halting trade, and leaking vital\nuser information. Hence, decentralized exchanges are less susceptible to attacks from hackers."
  },
  {
    "id": "jc_ALT_057",
    "source": "JC_ALT",
    "subject": "另类投资",
    "subjectEn": "Alternative Investments",
    "num": 57,
    "question": "In evaluating the primary factors influencing the value of bitcoin, which is most likely\nto be a significant determinant?",
    "options": {
      "A": "The potential for generating cash flows",
      "B": "Consistently high correlation with conventional asset classes",
      "C": "The expansion of its acceptance in the market  Solutions 8. Alternative Investments"
    },
    "answer": "C",
    "explanation": "In practice, prices (or returns) of cryptocurrencies are driven more by market adoption, network\neffects, technological advancement, regulatory development, and general market risk appetite.\nBitcoin and other cryptocurrency values are based solely on asset appreciation, with no underlying\ncash flows.\nSince its launch in 2009, bitcoin’s performance has been characterized by high return, high\nvolatility, and low correlations with traditional asset classes. The fact that the correlation of\ncryptocurrencies with traditional assets is on the rise does not imply that the correlation of bitcoin\nand other cryptocurrencies has reached a high level yet, nor would a high level necessarily be a\ndesirable feature."
  },
  {
    "id": "jc_EQ_001",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 1,
    "question": "Which of the following is most likely one of the main functions of the financial system?",
    "options": {
      "A": "Determining an equilibrium interest rate",
      "B": "Ensuring that markets are informationally efficient",
      "C": "Ensuring that all investment projects receive sufficient funding."
    },
    "answer": "A",
    "explanation": "One of the main functions of the financial system is to determine the equilibrium interest rate,\nwhich is the only interest rate that would exist if all securities were equally risky, had equal terms,\nand were equally liquid.\nInformational market efficiency is not a key function of the financial system, rather that of\nregulatory framework\nThe financial system provides sufficient funding only to the most productive projects. An\nimportant function of the financial system is to direct resources away from wealth-diminishing\nprojects."
  },
  {
    "id": "jc_EQ_002",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 2,
    "question": "In an efficiently operating financial system, what do shifts in asset pricing mainly reveal\nabout?",
    "options": {
      "A": "liquidity",
      "B": "Transactional expenses",
      "C": "fundamental asset values."
    },
    "answer": "C",
    "explanation": "In a well-functioning financial system, changes in asset prices should predominantly mirror\nvariations in the fundamental value of those assets. This means that the price movements should\nbe driven by factors such as company earnings, industry trends, and broader economic conditions.\nExecution costs and the demand for liquidity may also influence asset prices but they should not\nbe the primary drivers of price changes in a healthy financial system."
  },
  {
    "id": "jc_EQ_003",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 3,
    "question": "What type of financial intermediary specializes in facilitating seasoned securities\nofferings for their clients?",
    "options": {
      "A": "Retail banks",
      "B": "Investment firms",
      "C": "multi-lateral trading facilities."
    },
    "answer": "B",
    "explanation": "Investment firms, also known as investment banks, specialize in assisting clients with seasoned\nsecurities offerings. These types of financial intermediaries have expertise in underwriting and\ndistributing new securities issues, as well as providing advice on mergers, acquisitions, and other\ncorporate finance transactions. Commercial banks (retail banks) and multi-lateral trading facilities\ndo not typically provide this service."
  },
  {
    "id": "jc_EQ_004",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 4,
    "question": "A hedge fund holds its excess cash in 90-day commercial paper and negotiable\ncertificates of deposit. The cash management policy of the hedge fund is best described\nas using:（原",
    "options": {
      "A": "capital market instruments",
      "B": "money market instruments",
      "C": "intermediate-term debt instruments."
    },
    "answer": "B",
    "explanation": "The 90-day commercial paper and negotiable certificates of deposit are money market\ninstruments."
  },
  {
    "id": "jc_EQ_005",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 5,
    "question": "A friend has asked you to explain the differences between open-end and closed-end\nfunds. Which of the following will you most likely include in your explanation?(mock)",
    "options": {
      "A": "Closed-end funds are unavailable to new investors",
      "B": "When investors sell the shares of an open-end fund, they can receive a discount or a premium",
      "C": "When selling shares, investors in an open-end fund sell the shares back to the fund whereas"
    },
    "answer": "C",
    "explanation": "When investors want to sell their shares, investors of an open-end fund sell the shares back to the\nfund whereas investors of a closed-end fund sell the shares to others in the secondary market.\nClosed-end funds are available to new investors, but they must purchase shares in the fund in the\nsecondary market. The shares of a closed-end fund trade at a premium or discount to net asset\nvalue."
  },
  {
    "id": "jc_EQ_006",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 6,
    "question": "An investor primarily invests in stocks of publicly traded companies. The investor wants\nto increase the diversification of his portfolio. A friend has recommended investing in\nreal estate properties. The purchase of real estate would best be characterized as a\ntransaction in the:（原版书课后题）",
    "options": {
      "A": "derivative investment market",
      "B": "traditional investment market",
      "C": "alternative investment market."
    },
    "answer": "C",
    "explanation": "The purchase of real estate properties is a transaction in the alternative investment market."
  },
  {
    "id": "jc_EQ_007",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 7,
    "question": "An oil and gas exploration and production company announces that it is offering 30\nmillion shares to the public at $45.50 each. This transaction is most likely a sale in the:",
    "options": {
      "A": "futures market",
      "B": "primary market",
      "C": "secondary market."
    },
    "answer": "B",
    "explanation": "This transaction is a sale in the primary market. It is a sale of shares from the issuer to the investor\nand funds flow to the issuer of the security from the purchaser."
  },
  {
    "id": "jc_EQ_008",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 8,
    "question": "A German listed company has given existing shareholders the chance to buy new shares\nin order to raise new capital. The existing shareholders could purchase two new shares\nat a subscription price of €5.28 per share for every 10 shares held. This is an example of\na(n):",
    "options": {
      "A": "rights offering",
      "B": "initial public offering",
      "C": "private placement."
    },
    "answer": "A",
    "explanation": "This is an example of right offering. Right offering refers to the right of existing shareholders to\npurchase new shares at a specific price. The amount of purchase depends on the number of shares\nheld."
  },
  {
    "id": "jc_EQ_009",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 9,
    "question": "Which of the following is most likely a primary market transaction?",
    "options": {
      "A": "A private placement of shares",
      "B": "A market order sale of bonds",
      "C": "The exercise of an exchange-traded call option"
    },
    "answer": "A",
    "explanation": "Private placements qualify as primary market transactions because they are sales of securities by\nissuers directly to a small group of qualified investors.\nMarket order sales take place in secondary markets.\nThe exercise of an exchange-traded call option is a secondary market transaction involving the\npurchase by option owner of previously issued security."
  },
  {
    "id": "jc_EQ_010",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 10,
    "question": "A security market in which all the bids and asks for a stock are gathered to arrive at a\nsingle price that satisfies most of the orders is best described as a:（改编题）",
    "options": {
      "A": "call market",
      "B": "dealer market",
      "C": "primary market."
    },
    "answer": "A",
    "explanation": "In call Markets, different from the continuous markets, the stock is only traded at specific times,\nall trades bids, and asks are declared and then one negotiated price is set that clears the market for\nthe stock.\nDealer market is often defined as Quote-Driven Markets or OTC markets, trader transact with\ndealers who post bid and ask prices.\nPrimary markets refer to the sale of newly issued securities."
  },
  {
    "id": "jc_EQ_011",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 11,
    "question": "A Japanese exporter will sell U.S. dollars for Japanese Yen in the quote-driven currency\nmarkets. Which of the following statements best describes her currency exchange\ntransactions?（2015 Mock AM）",
    "options": {
      "A": "Her counterparties are dealers",
      "B": "This currency exchange transaction takes place in organized exchanges",
      "C": "She will pay commissions for exchange services."
    },
    "answer": "A",
    "explanation": "In the quote-driven currency markets, dealers are counterparties to currency exchange\ntransactions."
  },
  {
    "id": "jc_EQ_012",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 12,
    "question": "A trader seeking to sell a very large block of stock for her client will most likely execute\nthe trade in a(n):（2016 Mock AM）",
    "options": {
      "A": "order-driven market.",
      "B": "quote-driven market",
      "C": "brokered market."
    },
    "answer": "C",
    "explanation": "Instruments that are infrequently traded and expensive to carry as inventory (e.g., very large\nblocks of stock, real estate properties, fine art masterpieces, and liquor licenses) are executed in\nbrokered markets. Organizing order-driven markets for such instruments is not sensible because\ntoo few traders would submit orders to them."
  },
  {
    "id": "jc_EQ_013",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 13,
    "question": "For order precedence hierarchy in Order Matching Rules, what is the first and secondary\nprecedence rules, respectively?",
    "options": {
      "A": "Price, Order quantities",
      "B": "Time, Price",
      "C": "Price, Time."
    },
    "answer": "C",
    "explanation": "The first rule is price priority: The highest priced buy orders and the lowest priced sell orders go\nfirst. They are the most aggressively priced orders. Secondary precedence rules determine how to\nrank orders at the same price. Most trading systems use time precedence to rank orders at the same\nprice."
  },
  {
    "id": "jc_EQ_014",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 14,
    "question": "Which of the following statements is most accurate concerning a short position of 200\nshares of a stock at $65 per share? （改编题）",
    "options": {
      "A": "Maximum loss of $13,000",
      "B": "Maximum gain of $13,000",
      "C": "Unlimited maximum gain."
    },
    "answer": "B",
    "explanation": "The potential gains on a short position are limited, the potential losses are unlimited. The lowest\nmarket price per share an investor can repurchase the stock to return to the security’s lender is $0,\nso the maximum gain is ($65– $0) ×200= $13,000."
  },
  {
    "id": "jc_EQ_015",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 15,
    "question": "Which of the following is the least accurate statement about the short sale of stocks?",
    "options": {
      "A": "The short seller must pay all dividends or interest to the lender of shares. （改编题）",
      "B": "Short sales involve time limits for returning the shares borrowed to the lender",
      "C": "A short sale can be made only on an uptick or a zero-uptick trade if the previous trade was an uptick, meaning the trade must occur at a price higher than the previous trade price or at the same price as the previous trade if that previous price was higher than the price preceding it."
    },
    "answer": "B",
    "explanation": "Short sales have no time limits. However, if the lender of shares decides to sell them, the broker\nmust find another investor willing to lend the shares."
  },
  {
    "id": "jc_EQ_016",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 16,
    "question": "Tom buys stock on margin and holds the position for exactly one year, during which\ntime the stock pays a dividend. For simplicity, assume that the interest on the loan and\nthe dividend are both paid at the end of the year.\nPurchase price $20/share\nSale price $15/share\nShares purchased 1,000\nLeverage ratio 2.5\nCall money rate 5%\nDividend $0.10/share\nCommission $0.01/share\nWhat is the total return on this investment?",
    "options": {
      "A": "-68.88%",
      "B": "-68.91%",
      "C": "-70.13%."
    },
    "answer": "B",
    "explanation": "To find the return on this investment, first determine the initial equity and then determine the\nequity remaining after the sale. The total purchase price is $20,000. The leverage ratio of 2.5\nindicates that the buyer’s equity financed 40 percent = (1 ÷ 2.5) of the purchase price. Thus, the\nequity investment is $8,000 = 40% of $20,000. The $12,000 remainder is borrowed. The actual\ninvestment is slightly higher because the buyer must pay a commission of $10 = $0.01/share ×\n1,000 shares to buy the stock. The total initial investment is $8,010. At the end of the year, the\nstock price has declined by $5/share. The buyer lost $5,000 = $5/share × 1,000 shares as a result\nof the price change. In addition, the buyer has to pay interest at 5 percent on the $12,000 loan, or\n$600. The buyer also receives a dividend of $0.10/share, or $100. The trader’s equity remaining.\nInitial investment $8,010\nPurchase commission –10\nTrading gains/losses –5,000\nMargin interest paid –600\nDividends received 100\nSales commission paid –10\nRemaining equity $2,490\nso that the return on the initial investment of $8,010 is (2,490 – 8,010)/8,010 = –68.91%."
  },
  {
    "id": "jc_EQ_017",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 17,
    "question": "If an investor purchases stock with a 25% margin and later sees its value increase by\n10%, approximately what percentage of return on equity do they receive?",
    "options": {
      "A": "12.5%",
      "B": "40%",
      "C": "250%"
    },
    "answer": "B",
    "explanation": "A is Incorrect because it calculates return on equity as unleveraged return × (1 + margin) = 10% ×\n(1 + 25%) = 12.5%.\nB is Correct because the return on equity to a margin position is calculated by multiplying the\nunleveraged return by the financial leverage ratio. The financial leverage ratio is equal to 1/margin.\nIn this case, financial leverage is 1/0.25 = 4, so the return on equity = 10% × 4 = 40%, which is\nclosest to 40%.\nC is Incorrect because it calculates return on equity as margin / return = 25%/10% = 250%. In\nother words, it incorrectly swaps the numerator and denominator in the correct solution (10%/25%\nbecomes 25%/10%)."
  },
  {
    "id": "jc_EQ_018",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 18,
    "question": "An investor purchases stocks on margin with the following information:\nStock purchase price per share: $100\nInitial equity per share: $50\nMaintenance margin requirement: 20%\nThe price below which the investor would receive a margin call would be:",
    "options": {
      "A": "$20",
      "B": "$63",
      "C": "$80"
    },
    "answer": "B",
    "explanation": "A is Incorrect because at a share price of $20 and a margin loan of $50, equity will be negative.\n$20 is 20% of the current price of $100 per share.\nB is Correct because the original equity of $50 indicates a margin loan of $50 ($100 ‒ $50). At a\nstock price of $62.5, equity will equal $62.5 less the $50 margin loan, or $12.5, which is 20% of\nthe equity per share. $12.5 ⁄ $62.5 = 20%. To reach this answer through calculation, determine\nwhere the equity per share equals the 20% margin requirement:\nEquity ⁄ Share = (P ‒ L) ⁄ P = maintenance margin;\nWhere P = Share price and L = Loan amount;\n0.20 = (P ‒ $50) ⁄ P; P ≈ $62.5.\nC is Incorrect because (1 – maintenance margin) × price = (1 – 0.2) × $100 = $80.00."
  },
  {
    "id": "jc_EQ_019",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 19,
    "question": "Consider an order-driven market that allows hidden orders. The following four sell\norders of the stock A are currently in the market's limit order book. Which of the order\ntakes precedence over the others, based on the commonly used order precedence\nhierarchy?\nTime of Arrival Special Instruction\nOrder Limit Price (€)\n(HH:MM:SS) (If Any)\nI 13:52:01 45.45\nII 13:52:08 45.20 Hidden order\nIII 13:53:04 45.20\nIV 13:53:49 45.20",
    "options": {
      "A": "Order I (time of arrival of 13:52:01)",
      "B": "Order II (time of arrival of 13:52:08)",
      "C": "Order III (time of arrival of 13:53:04)."
    },
    "answer": "C",
    "explanation": "Order III (time of arrival of 13:53:04) has precedence. In the order priority hierarchy, the first rule\nis price priority. Based on this rule, sell orders II, III and IV take precedence over order I. Because\norder II is a hidden order, III and IV take precedence. Finally, based on the time priority of the\nsame price and the same display state, order III takes precedence over order IV."
  },
  {
    "id": "jc_EQ_020",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 20,
    "question": "Consider the following limit orders for a particular stock. The bid and ask sizes are\nnumber of shares in hundreds.（原版书课后题改编）\nBid Size Limit Price ($) Offer Size\n6 66.40 16 66.50\n8 66.59\n67.50 14\n68.90 12\n68.91 14\nA new buy limit order is placed for 300 shares at $66.65. This limit order is said to:",
    "options": {
      "A": "take the market",
      "B": "make the market",
      "C": "make a new market."
    },
    "answer": "C",
    "explanation": "The new buy order is at $66.65, which is better than the current best bid of $66.59. Therefore, the\nbuy order is making a new market. Had the new order been at $66.59, it would be said to make the\nmarket. Because the new buy limit order is at a price less than the best offer of $67.50, it will not\nimmediately execute and is not taking the market."
  },
  {
    "id": "jc_EQ_021",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 21,
    "question": "A trader gathers the following limit order information about a stock:\nBid Size (number of shares) Share Price ($) Offer Size (number of shares)\n450 49.50 ---\n330 49.65 ---\n--- 49.80 200\n--- 49.95 220\n--- 50.10 260\nIf the trader submits a fill or kill buy order for 500 shares at a limit price of $50.00, the\ntrader's average price per share for this trade will be closest to:",
    "options": {
      "A": "$49.50",
      "B": "$49.88",
      "C": "$49.92."
    },
    "answer": "B",
    "explanation": "A is Incorrect because this would mistake a bid and an offer by incorrectly concluding that a\nsize/order of 20 corresponds to $49.50.\nB is Correct because a limit order conveys almost the same instruction: Obtain the best price\nimmediately available, but in no event accept a price higher than a specified limit price [$50.00]\nwhen buying. Furthermore, immediate or cancel orders (IOC) are good only upon receipt by the\nbroker or exchange. If they cannot be filled in part or in whole, they cancel immediately. In some\nmarkets these orders are also known as fill or kill orders. That is, 15 units of the stock would trade\nor execute immediately at: 200 units at $49.80 and 220 units at $49.95. The average trade price\nper unit = ((200 × $49.80) + (220 × $49.95)) / 420 ≈ $49.88."
  },
  {
    "id": "jc_EQ_022",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 22,
    "question": "Which of the following orders are validity instructions?（考题回顾题）",
    "options": {
      "A": "Kill or fill orders",
      "B": "Iceberg orders",
      "C": "All or nothing orders."
    },
    "answer": "A",
    "explanation": "Kill or fill orders also known as immediate or cancel orders are good only upon receipt by the\nbroker or exchange. If they cannot be filled in part or in whole, they cancel immediately. They\nare one of the validity instructions."
  },
  {
    "id": "jc_EQ_023",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 23,
    "question": "A stop-buy order is most likely placed when a trader:（2014 Mock PM）",
    "options": {
      "A": "wants to limit the loss on a long position",
      "B": "thinks that the stock is overvalued",
      "C": "wants to limit the loss on a short position."
    },
    "answer": "C",
    "explanation": "A trader who has entered into a short sale will incur losses if the stock price begins to increase. A\nstop-buy order helps limit the loss on a short position because it becomes valid for execution when\nthe stock price rises above the specified stop price."
  },
  {
    "id": "jc_EQ_024",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 24,
    "question": "A trader who has bought a stock at $30 is concerned about a downside movement in the\nstock and would like to place an order that guarantees selling it at $25. Which of the\nfollowing will most likely help the trader achieve her objective?（改编题）",
    "options": {
      "A": "“GTC, stop 25, market sell” order",
      "B": "Buy “put option” with a strike price of 25",
      "C": "“GTC, stop 25, limit 25 sell” order."
    },
    "answer": "B",
    "explanation": "Option contracts can be viewed as limit orders for which execution is guaranteed at the strike price.\nTherefore, a “put buy” order at a strike price of 25 will guarantee selling the stock at 25."
  },
  {
    "id": "jc_EQ_025",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 25,
    "question": "An order parameter specifying when it can be fulfilled is most likely a:",
    "options": {
      "A": "execution instruction.",
      "B": "validity instruction",
      "C": "clearing instruction. 5.10. Security Market Index"
    },
    "answer": "B",
    "explanation": "A is Incorrect because execution instructions indicate how to fill the order, not when the order\nmay be filled.\nB is Correct because validity instructions indicate when the order may be filled.\nC is Incorrect because clearing instructions indicate how to arrange the final settlement of the\ntrade, not when the order may be filled."
  },
  {
    "id": "jc_EQ_026",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 26,
    "question": "Which of the following statements is most likely correct?（改编题）",
    "options": {
      "A": "Equal weighted indices require the most frequent rebalancing among the three indices",
      "B": "The rebalancing frequency of a price-weighted index is more than that of a market",
      "C": "Reconstitution instead of rebalancing will lead to turnover within an index."
    },
    "answer": "A",
    "explanation": "After an equal weighted index is constructed and the prices of constituent securities change, the\nindex is no longer equally weighted. Therefore, maintaining equal weights requires frequent\nadjustments (rebalancing) to the index."
  },
  {
    "id": "jc_EQ_027",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 27,
    "question": "Reconstitution of a security market index reduces:（考题回顾题）",
    "options": {
      "A": "portfolio turnover",
      "B": "the need for rebalancing",
      "C": "the likelihood that the index includes securities that are not representative of the target"
    },
    "answer": "C",
    "explanation": "Reconstitution is the process by which index providers review the constituent securities, re-apply\nthe initial criteria for inclusion in the index, and select which securities to retain, remove, or add.\nConstituent securities that no longer meet the criteria are replaced with securities that do. Thus,\nreconstitution reduces the likelihood that the index includes securities that are not representative\nof the target market."
  },
  {
    "id": "jc_EQ_028",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 28,
    "question": "The MSCI World Index is best described as: Notes",
    "options": {
      "A": "Broad market index",
      "B": "Sector index",
      "C": "Multi-market index."
    },
    "answer": "C",
    "explanation": "Multi-market index is typically constructed from the indexes of markets in several countries and is\nused to measure the equity returns of a geographic region. MSCI World Index represents the entire\nworld."
  },
  {
    "id": "jc_EQ_029",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 29,
    "question": "Hari Raju, CEO of Securities Tracking Associates (STA), is thinking of devising a new\nindex for the Indian stock market. However, he does not like an index that requires\nadjustment for stock splits. Given this preference, Raju would be least likely to develop\nwhich of the following types of Indexes?",
    "options": {
      "A": "Equal-weighted Index",
      "B": "Price-weighted Index",
      "C": "Value-weighted Index."
    },
    "answer": "B",
    "explanation": "A price-weighted index, such as the Dow Jones Industrial Average, is computed by summing up\nthe prices of individual stocks and dividing by a divisor that is adjusted for stock splits such that\nthe index value is the same before and after the split."
  },
  {
    "id": "jc_EQ_030",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 30,
    "question": "A price-weighted index series is composed of the following three stocks:\nPrice before Split Price after Split\nStock End of Day 1 End of Day 2\nA $5 $7\nB $10 $8\nC $30 $15\nIf stock C completes a two-for-one split at the end of Day 1, the value of the index after\nthe split (at the end of Day 2) is closest to: (mock 2018改编)",
    "options": {
      "A": "15",
      "B": "10",
      "C": "12."
    },
    "answer": "A",
    "explanation": "The value of the price-weighted index is determined by dividing the sum of the security\nvalues by the divisor, which is typically set at inception to equal the initial number of\nsecurities in the index. In the case of a stock split, the index provider must adjust the value of\nthe divisor by dividing the sum of the constituent prices after the split by the value of the\nindex before the split. This adjustment results in a new divisor that keeps the index value at\nthe same level as before the split. The new divisor will then be used to calculate the index\nvalue after the split.\n5+10+30\nIndex before the split = = 15\n3\n5+10+15\nNew divisor,X: 15 = ,𝑋 = 2\n𝑖𝑖\n7+8+15\nIndex after the split = = 15\n2"
  },
  {
    "id": "jc_EQ_031",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 31,
    "question": "Compared with its market-value-weighted counterpart, a fundamental-weighted index is\nleast likely to have a: (2018 Mock)",
    "options": {
      "A": "momentum effect",
      "B": "contrarian effect",
      "C": "value tilt."
    },
    "answer": "A",
    "explanation": "The momentum effect is a characteristic of a market-capitalization-weighted index, not a\nfundamental index.\nThe fundamental indexes generally have a contrarian effect in that the portfolio weights will shift\naway from securities that have increased in relative value whenever the portfolio is rebalanced.\nFundamental weighting leads to a value tilt because the ratios of book value, earnings, dividends,\netc., to market value of the firms in a fundamental index tend to be larger than those of the firms in\nits market-capitalization-weighted counterpart."
  },
  {
    "id": "jc_EQ_032",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 32,
    "question": "Use the information in the following table:\nAs of January 1 As of December 31\nNumber of shares Number of shares\nShare Price Share Price\noutstanding(thousands) outstanding(thousands)\nStock A $22 1,500 $28 1,500\nStock B $40 10,000 $50 10,000\nStock C $34 3,000 $30 3,000\nIf the base value is 100, the index value of December 31 on an equal-weighted index of these\nstocks is closest to:（考题回顾自编）",
    "options": {
      "A": "114",
      "B": "118",
      "C": "110"
    },
    "answer": "A",
    "explanation": "(28/22-1)+(50/40-1)+(30/34-1)\n=13.5%\n3\nIndex value = 100*1.135=113.5"
  },
  {
    "id": "jc_EQ_033",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 33,
    "question": "An analyst collects the following information for a price-weighted index comprised of\nstocks A, B and C:（原版书课后题改编）\nBeginning of End of Period Total Dividends\nStocks\nPeriod Price (€) Price (€) (€)\nA 50.00 54.00 2.00\nB 70.00 50.00 3.00\nC 30.00 32.00 2.00\nThe price return of the index is:",
    "options": {
      "A": "-4.6%.",
      "B": "-9.3%",
      "C": "-13.9%."
    },
    "answer": "B",
    "explanation": "The price return of the price-weighted index is the percentage change in price of the index:\n(136-150)/150 = -9.3%.\nEnd of Period Price\nSecurity Beginning of Period Price (f)\n(f)\nA 50.00 54.00\nB 70.00 50.00\nC 30.00 32.00\nTOTAL 150.00 136.00"
  },
  {
    "id": "jc_EQ_034",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 34,
    "question": "An analyst collects the following information for a market-capitalization-weighted index\ncomprised of securities X, Y, and Z.（原版书课后题改编）\nBeginning of End of Period Dividends Shares\nSecurity\nPeriod Price (￥) Price (￥) Per Share (￥) Outstanding\nX 1,500 1,700 50 3,000\nY 2,500 1,500 55 5,000\nZ 1,000 1,200 50 7,500\nThe total return of the index is closest to:",
    "options": {
      "A": "-5.35%",
      "B": "-8.57%",
      "C": "-11.84%"
    },
    "answer": "B",
    "explanation": "The total return of the market-capitalization-weighted index is calculated below:\nBeginning of End of Dividend\nSecurity\nPeriod Value (V) Period Value (V) Value (V)\nX 4,500,000 5,100,000 150,000\nY 12,500,000 7,500,000 275,000\nZ 7,500,000 9,000,000 375,000\nTotal 24,500,000 21,600,000 800,000\nSo return= (End Value + Dividend – Begin Value)/ Begin Value= -8.57%"
  },
  {
    "id": "jc_EQ_035",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 35,
    "question": "One month after inception, the price return version and total return version of a single\nindex (consisting of identical securities and weights) will be equal if:（原版书课后题）",
    "options": {
      "A": "market prices have not changed",
      "B": "capital gains are offset by capital losses",
      "C": "the securities do not pay dividends or interest."
    },
    "answer": "C",
    "explanation": "The difference between a price return index and a total return index consisting of identical\nsecurities and weights is the income generated over time by the underlying securities. If the\nsecurities in the index do not generate income, both indices will be identical in value."
  },
  {
    "id": "jc_EQ_036",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 36,
    "question": "Which type of indices undergo regular rebalancing by the index provider?",
    "options": {
      "A": "Market capitalization-weighted indices",
      "B": "Price-weighted indexes",
      "C": "Equal-weighted indexes"
    },
    "answer": "C",
    "explanation": "C is Correct because rebalancing is necessary because the weights of the constituent securities\nchange as their market prices change. The weights of the securities in the equal-weighted index at\nthe end of the period are no longer equal. Therefore equal-weighted indexes are regularly\nrebalanced."
  },
  {
    "id": "jc_EQ_037",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 37,
    "question": "Which of the following statements is least accurate with respect to fixed-income\nindices?",
    "options": {
      "A": "The indices are susceptible to turnover of the underlying securities",
      "B": "Compared with equity indices, it is easier and less expensive to replicate fixed-income",
      "C": "Many of the underlying securities in the index tend to be illiquid."
    },
    "answer": "B",
    "explanation": "Compared with equity indices, the large number of fixed-income securities—combined with the\nlack of liquidity of some securities—has made it more costly and difficult for investors to replicate\nfixed-income indices and duplicate their performance."
  },
  {
    "id": "jc_EQ_038",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 38,
    "question": "Which of the following statements regarding sector indexes is most accurate? Sector\nindexes:（原版书课后题）",
    "options": {
      "A": "A track different economic sectors and cannot be aggregated to represent the equivalent of a broad market index.",
      "B": "provide a means to determine whether an active investment manager is more successful at stock selection or sector allocation.",
      "C": "apply a universally agreed upon sector classification system to identify the constituent"
    },
    "answer": "B",
    "explanation": "Sector indexes provide a means to determine whether a portfolio manager is more successful at\nstock selection or sector allocation."
  },
  {
    "id": "jc_EQ_039",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 39,
    "question": "Which of the following indexes of alternative investment is most likely to be calculated\nfrom derivative prices?",
    "options": {
      "A": "Real estate index",
      "B": "Commodity index",
      "C": "Hedge fund index."
    },
    "answer": "B",
    "explanation": "Commodity indexes are typically calculated from price of commodity futures contracts."
  },
  {
    "id": "jc_EQ_040",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 40,
    "question": "Which of the following statements regarding alternative investment indexes is most accurate?",
    "options": {
      "A": "A commodity index return should be consistent with the return based on changes in the prices",
      "B": "Real estate indexes represent both the market for real estate securities and the market for real",
      "C": "Hedge fund index accurately reflects actual hedge fund performance."
    },
    "answer": "B",
    "explanation": "The performance of commodity indexes can also be quite different from their underlying\ncommodities because the indexes consist of futures contracts on the commodities rather than the\nactual commodities.\nThe voluntary performance reporting for Hedge fund index is the potential for survivorship bias\nand, therefore, inaccurate performance representation."
  },
  {
    "id": "jc_EQ_041",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 41,
    "question": "If the number of financial analysts who follow or analyze a company increases\nsubstantially, then the market for this company’s shares will most likely become:",
    "options": {
      "A": "more attractive for active investors.",
      "B": "overvalued",
      "C": "more efficient."
    },
    "answer": "C",
    "explanation": "The number of financial analysts who follow or analyze a security or asset should be positively\nrelated to market efficiency. Therefore, if more analysts cover a company, the market for this\ncompany’s shares will most likely become more efficient.\nIn a more efficient market, less profitable trading opportunities exist and as a consequence, it\nbecomes less attractive for active investors.\nIn a more efficient market, prices should converge toward fair value."
  },
  {
    "id": "jc_EQ_042",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 42,
    "question": "If markets are efficient, the information from the annual reports is reflected in the stock\nprices; therefore, the gradual changes must be from the release of additional new\ninformation. After the public announcement of the merger of two firms, an investor\nmakes abnormal returns by going long on the target firm and short on the acquiring firm.\nThis most likely violates which form of market efficiency?",
    "options": {
      "A": "Semi-strong-form only",
      "B": "Semi-strong-form and strong-form",
      "C": "Weak-form and semi-strong-form"
    },
    "answer": "B",
    "explanation": "In a semi-strong-form efficient market, prices adjust quickly and accurately to new information. In\nthis case, prices would quickly adjust to the merger announcement, and if the market is a\nsemi-strong-form efficient market, investors acting after the merger announcement would not be\nable to earn abnormal returns. Therefore, the market is not semi-strong-form efficient. A market\nthat is not semi-strong-form efficient is also not strong-form efficient. Thus, violating the\nsemi-strong-form efficiency also implies violating the strong-form efficiency. However, the\nmarket could still be weak-form efficient because past prices are not being used to make abnormal\nprofits. Thus, we cannot say that the weak-form market efficiency has been violated."
  },
  {
    "id": "jc_EQ_043",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 43,
    "question": "Which of the following statements about the forms of market efficiency is least accurate?\nIf the form of market efficiency is:（2017 Mock PM）",
    "options": {
      "A": "semi-strong, then security prices fully reflect all past market data",
      "B": "weak, then investment strategies based on fundamental analysis could achieve abnormal",
      "C": "strong, then prices reflect only private information."
    },
    "answer": "A",
    "explanation": "Restricting short selling will reduce arbitrage trading, which promotes market efficiency.\nPermitting foreign investor trading increases market participation, which makes markets more\nefficient. Penalizing insider trading encourages greater market participation, which increases\nmarket efficiency."
  },
  {
    "id": "jc_EQ_044",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 44,
    "question": "The following table shows information on three different investment strategies with\nsame systematic risk:\nAnnualized Data\nStrategy Type of Strategy Fees and Expenses(%) Net Return(%)\nA Passive 0.6 15.4\nB Uses technical analysis 2 14\nC Uses fundamental analysis 1.5\nThe net return that causes Strategy 3 to be most consistent with the strong form of\nmarket efficiency is:",
    "options": {
      "A": "14.5%",
      "B": "16%",
      "C": "17%."
    },
    "answer": "A",
    "explanation": "The strategy based on fundamental analysis must achieve a net return higher than the net return of\nthe passive strategy for a violation of the strong form of market efficiency to occur on a\nrisk-adjusted basis. This threshold Gross return = Net return + Fees and expenses = 15.4% + 0.6%\n= 16%. Anything in excess of 16% would violate the strong form of market efficiency for the\nfundamental analysis strategy.\nThe net return is 16% - 1.5% = 14.5%."
  },
  {
    "id": "jc_EQ_045",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 45,
    "question": "If securities markets are semi-strong-form efficient, the most appropriate role of a\nportfolio manager is to:（2016 Mock AM）",
    "options": {
      "A": "invest by analyzing publicly available information to consistently generate abnormal returns",
      "B": "manage portfolios with appropriate diversification and asset allocation, taking into consideration the risk preferences and tax situation of the investor.",
      "C": "exploit appropriate trading rules and serial correlations for achieving excess returns."
    },
    "answer": "B",
    "explanation": "If markets are semi-strong-form efficient (which also encompasses weak-form efficiency), the role\nof a portfolio manager is not necessarily to beat the market, but rather to establish and manage a\nportfolio consistent with the portfolio’s objectives, with appropriate diversification and asset\nallocation, while taking into consideration the risk preferences and tax situation of the investor."
  },
  {
    "id": "jc_EQ_046",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 46,
    "question": "Which of the following statements is most accurate in an efficient market?",
    "options": {
      "A": "Securities market prices respond over time to changes in economic information",
      "B": "Securities market prices fully reflect their fundamental values",
      "C": "Active strategies will lead to excess risk adjusted portfolio returns."
    },
    "answer": "B",
    "explanation": "In an efficient market, market participants will process available information and those with\nopposite views will trade among each other until securities market prices fully reflect their\nfundamental values. An efficient market is thus a market in which asset prices reflect all past and\npresent information."
  },
  {
    "id": "jc_EQ_047",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 47,
    "question": "An observation that stocks with above average price-to-earnings ratios have consistently\nunderperformed those with below average price-to-earnings ratios least likely\ncontradicts which form of market efficiency?（2015 Mock AM）",
    "options": {
      "A": "Weak form",
      "B": "Semi-strong form",
      "C": "Strong form"
    },
    "answer": "A",
    "explanation": "The observation that stocks with high above average price-to-earnings ratios have consistently\nunderperformed those with below average price-to-earnings ratios is a cross-sectional anomaly. It\nis a contradiction to the semi-strong form of market efficiency and strong form market efficiency\nbecause all the information used to categorize stocks by their price-to-earnings ratios is publicly\navailable. It is not a contradiction to weak form market efficiency."
  },
  {
    "id": "jc_EQ_048",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 48,
    "question": "Suppose that the future cash flows of an asset are accurately estimated. The asset trades\nin a market that you believe is efficient based on most evidence, but your estimate of the\nasset’s intrinsic value exceeds the asset’s market value by a moderate amount. The most\nlikely conclusion is that you have:",
    "options": {
      "A": "overestimated the asset’s risk",
      "B": "underestimated the asset’s risk",
      "C": "identified a market inefficiency."
    },
    "answer": "B",
    "explanation": "If risk is underestimated, the discount rate being applied to find the present value of the expected\ncash flows (estimated intrinsic value) will be too low and the intrinsic value estimate will be too\nhigh."
  },
  {
    "id": "jc_EQ_049",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 49,
    "question": "If the market for the bond is efficient, the bond’s market price is most likely to fully\nreflect the bond’s value after default:",
    "options": {
      "A": "in the period leading up to the announcement",
      "B": "in the first trade prices after the market opens on the announcement day",
      "C": "when the issuer actually misses the payment on the interest payment date."
    },
    "answer": "B",
    "explanation": "The announcement removed any uncertainty about default. In the period leading up to the\nannouncement, the bond’s market price incorporated a probability of default, but the price would\nnot have fully reflected the bond’s value after default. The possibility that a bank loan might\npermit the company to avoid default was not eliminated until the announcement."
  },
  {
    "id": "jc_EQ_050",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 50,
    "question": "Which factor would contribute the most to improving market efficiency?",
    "options": {
      "A": "Imposing restrictions on short selling practices",
      "B": "Reducing transaction fees and associated costs",
      "C": "Limiting participation of international investors"
    },
    "answer": "B",
    "explanation": "Market efficiency refers to how accurately prices reflect all available information about assets in\nthe market. Improving market efficiency can lead to more accurate asset pricing, lower volatility,\nand improved risk allocation.\nOne way to improve market efficiency is to reduce transaction costs, such as brokerage\ncommissions, exchange fees, and taxes. Lower transaction costs make it easier and cheaper for\ninvestors to buy and sell assets, resulting in increased market participation, higher liquidity, and\nultimately more efficient price discovery.\nIn contrast, imposing limits on short selling and restricting participation of international investors\ncould actually decrease market efficiency by reducing market depth, limiting liquidity, and\npreventing the incorporation of diverse perspectives into asset pricing.\nTherefore, the factor that would most likely increase market efficiency is option B, reducing\ntransaction costs."
  },
  {
    "id": "jc_EQ_051",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 51,
    "question": "Which of the following market anomalies is due to investors’ tax purposes that sell\nlosing positions in December to realize losses.（考题回顾自编）",
    "options": {
      "A": "January effect",
      "B": "Momentum",
      "C": "Value effect"
    },
    "answer": "A",
    "explanation": "A number of reasons have been suggested for “January effect” anomaly, including tax-loss selling.\nResearchers have speculated that, in order to reduce their tax liabilities, investors sell their “loser”\nsecurities in December for the purpose of creating capital losses, which can then be used to offset\nany capital gains."
  },
  {
    "id": "jc_EQ_052",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 52,
    "question": "If a researcher conducting empirical tests of a trading strategy using time series of\nreturns finds statistically significant abnormal returns, then the researcher has most\nlikely found:",
    "options": {
      "A": "a market anomaly",
      "B": "evidence of market inefficiency",
      "C": "a strategy to produce future abnormal returns."
    },
    "answer": "A",
    "explanation": "Finding significant abnormal returns does not necessarily indicate that markets are inefficient or\nthat abnormal returns can be realized by applying the strategy to future time periods. Abnormal\nreturns are considered market anomalies because they may be the result of the model used to\nestimate the expected returns or may be the result of underestimating transaction costs or other\nexpenses associated with implementing the strategy, rather than because of market inefficiency."
  },
  {
    "id": "jc_EQ_053",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 53,
    "question": "Researchers have found that value stocks have consistently outperformed growth stocks.\nAn investor wishing to exploit the value effect should purchase the stock of companies\nwith above-average: （原版书课后题）",
    "options": {
      "A": "dividend yields",
      "B": "market-to-book ratios",
      "C": "price-to-earnings ratios."
    },
    "answer": "A",
    "explanation": "Higher than average dividend yield is a characteristic of a value stock, along with low\nprice-to-earnings and low market-to-book ratios. Growth stocks are characterized by low dividend\nyields and high price-to-earnings and high market-to-book ratios."
  },
  {
    "id": "jc_EQ_054",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 54,
    "question": "Which of the following best describes the majority of the evidence regarding anomalies\nin stock returns?",
    "options": {
      "A": "Weak-form market efficiency holds, but semi-strong form efficiency does not hold.",
      "B": "Neither weak-form nor semi-strong form market efficiency holds",
      "C": "Reported anomalies are not violations of market efficiency but are the result of research"
    },
    "answer": "C",
    "explanation": "The majority of evidence is that anomalies are not violations of market efficiency but are due to\nthe research methodologies used. Portfolio management based on anomalies will likely be\nunprofitable after transactions costs are considered."
  },
  {
    "id": "jc_EQ_055",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 55,
    "question": "Time series anomalies refer to market phenomena that exhibit a pattern over time.\nWhich of the following describes such an anomaly?",
    "options": {
      "A": "Initial Public Offerings",
      "B": "January Effect",
      "C": "Size effect"
    },
    "answer": "B",
    "explanation": "The January Effect refers to the phenomenon where stock prices tend to increase during the month\nof January, following a period of lower returns in December. It is considered a time-series\nanomaly because it shows a consistent pattern over time, occurring year after year."
  },
  {
    "id": "jc_EQ_056",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 56,
    "question": "The behavioral bias in which investors tend to avoid realizing losses but rather seek to\nrealize gains is best described as:",
    "options": {
      "A": "mental accounting",
      "B": "the gambler’s fallacy",
      "C": "the disposition effect."
    },
    "answer": "C",
    "explanation": "Behavioral biases in which investors tend to avoid realizing losses but rather seek to realize gains\nis the disposition effect.\nThe disposition effect is a behavioral bias in which investors tend to avoid realizing losses but\nrather seek to realize gains.\nThe gambler’s fallacy is a behavioral bias in which recent outcomes affect investors’ estimates of\nfuture probabilities."
  },
  {
    "id": "jc_EQ_057",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 57,
    "question": "In behavioral finance, which of the following statements best describes the bias of\nconservatism? Investors:",
    "options": {
      "A": "tend to be slow to react to new information and continue to maintain their prior views or forecasts.",
      "B": "focus on issues in isolation and respond to the issues based on how the issues are posed",
      "C": "assess new information and probabilities of outcomes based on similarity to the current state."
    },
    "answer": "A",
    "explanation": "Conservatism is a behavioral bias in which investors tend to be slow to react to new information\nand continue to maintain their prior views or forecasts.\nIf investors focus on issues in isolation and respond to the issues based on how the issues are\nposed, then they show a behavioral bias called narrow framing.\nIf investors assess new information and probabilities of outcomes based on similarity to the\ncurrent state or to a familiar classification, then they show a behavioral bias called\nrepresentativeness."
  },
  {
    "id": "jc_EQ_058",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 58,
    "question": "In relation to behavioral finance, which of the following biases is considered the least\ninfluential in explaining pricing anomalies?",
    "options": {
      "A": "Representativeness",
      "B": "Risk aversion",
      "C": "Anchoring"
    },
    "answer": "B",
    "explanation": "because behavioral finance allows for the possibility that the dislike for risk is not symmetrical, in\ncontrast to the more general models where researchers assume that investors do not like risk (risk\naversion), whether the risk is that returns are higher than expected or lower than expected."
  },
  {
    "id": "jc_EQ_059",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 59,
    "question": "Which of the following is not a characteristic of common equity?（原版书课后题）",
    "options": {
      "A": "It represents an ownership interest in the company",
      "B": "Shareholders participate in the decision-making process",
      "C": "The company is obligated to make periodic dividend payments."
    },
    "answer": "C",
    "explanation": "The company is not obligated to make dividend payments. It is at the discretion of the company\nwhether or not it chooses to pay dividends."
  },
  {
    "id": "jc_EQ_060",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 60,
    "question": "Which of the following is incorrect about the risk of an equity security? The risk of an\nequity security is:（原版书课后题）",
    "options": {
      "A": "based on the uncertainty of its cash flows",
      "B": "based on the uncertainty of its future price",
      "C": "measured using the standard deviation of its dividends."
    },
    "answer": "C",
    "explanation": "Some equity securities do not pay dividends, and therefore the standard deviation of dividends\ncannot be used to measure the risk of all equity securities."
  },
  {
    "id": "jc_EQ_061",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 61,
    "question": "Compared with public equity markets, which of the following statements is most\naccurate about private equity markets? Operating in the private market:",
    "options": {
      "A": "offers stronger incentives to improve corporate governance. （2017 Mock PM）",
      "B": "allows management to better adopt a long-term focus",
      "C": "allows more opportunities to raise capital."
    },
    "answer": "B",
    "explanation": "The management of a public firm is under pressures to meet shorter-term demands, such as\nmeeting quarterly sales and earnings projections from analysts. Private owners are thus better able\nto focus on longer-term value creation opportunities."
  },
  {
    "id": "jc_EQ_062",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 62,
    "question": "Which of the following statements is most accurate?（2016 Mock PM）",
    "options": {
      "A": "Investors owning a small number of common shares would prefer statutory voting to cumulative voting.",
      "B": "Convertible preference shares are more volatile and riskier than the underlying common",
      "C": "Putable common shares provide benefits to both the issuing company and investors."
    },
    "answer": "C",
    "explanation": "The put option feature facilitates raising capital because the shares are more appealing to investors.\nAs such, it provides a benefit to the issuing company. It also helps investors limit their potential\nlosses because they can sell the shares back to the issuing company if the market price falls below\nthe pre-specified put price. Therefore, putable common shares are beneficial to both the issuing\ncompany and the investors."
  },
  {
    "id": "jc_EQ_063",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 63,
    "question": "Which of the following stock has the lowest risk and the most stable cash flow?",
    "options": {
      "A": "Putable preferred stock",
      "B": "Putable cumulative preferred stock",
      "C": "Putable Common stock."
    },
    "answer": "B",
    "explanation": "Putable cumulative preferred stock has the lowest risk and the most stable cash flow. Cumulative\npreferred shares retain the right to receive any missed dividends before any common stock\ndividends can be paid."
  },
  {
    "id": "jc_EQ_064",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 64,
    "question": "Which of the following best describes the book value of equity?",
    "options": {
      "A": "Management should attempt to increase book value of equity",
      "B": "Book value of equity decreases when retained earnings increase",
      "C": "Book value of equity reflects investors’ perceptions of the firm’s future."
    },
    "answer": "A",
    "explanation": "The primary goal of firm management is to increase the book value of equity. It increases when\nretained earnings are positive. The market value of equity reflects the collective expectations of\ninvestors about the firm’s future performance."
  },
  {
    "id": "jc_EQ_065",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 65,
    "question": "Convertible preference shares often provide holders with the opportunity to exchange\nthem for common shares. Which of the following statements best describe the benefits\nthey offer to investors?",
    "options": {
      "A": "They carry higher risk compared to regular preferred shares",
      "B": "They are generally offered by small start-up companies seeking funding",
      "C": "Investors enjoy potential capital appreciation as the common shares increase in value."
    },
    "answer": "C",
    "explanation": "Convertible preference shares give the holder the right to convert them into a fixed number of\ncommon shares at a predetermined conversion ratio. If the company's common shares appreciate\nin value, convertible preference shareholders can exercise their conversion rights and potentially\nprofit from the increased value of the converted shares.\nWhile convertible preference shares may carry higher risk than non-convertible preferred shares,\nthey may still be less risky than common shares. Also, while smaller companies may issue\nconvertible preference shares, larger and more established firms can use them as a way to raise\ncapital without diluting their ownership too much."
  },
  {
    "id": "jc_EQ_066",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 66,
    "question": "When investing in unsponsored depository receipts, the voting rights to the shares in the\ntrust belong to:（原版书课后题）",
    "options": {
      "A": "the depository bank",
      "B": "the investors in the depository receipts",
      "C": "the issuer of the shares held in the trust."
    },
    "answer": "A",
    "explanation": "In an unsponsored DR, the depository bank owns the voting rights to the shares. The bank\npurchases the shares, places them into a trust, and then sells shares in the trust-not the underlying\nshares-in other markets."
  },
  {
    "id": "jc_EQ_067",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 67,
    "question": "Which of the following statements concerning global depository receipts (GDRs) is most accurate?",
    "options": {
      "A": "GDR is issued publicly in the United States",
      "B": "The majority of GDRs are denominated in US dollars",
      "C": "GDRs is subject to the foreign ownership and capital flow restrictions."
    },
    "answer": "B",
    "explanation": "A global depository receipt (GDR) is issued outside of the company’s home country and outside\nof the United States. The depository bank that issues GDRs is generally located (or has branches)\nin the countries on whose exchanges the shares are traded. A key advantage of GDRs is that they\nare not subject to the foreign ownership and capital flow restrictions that may be imposed by the\nissuing company’s home country because they are sold outside of that country. The majority of\nGDRs are denominated in US dollars, although the number of GDRs denominated in pound\nsterling and euros is increasing."
  },
  {
    "id": "jc_EQ_068",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 68,
    "question": "For a US investor, which of the following statements concerning investing in depository\nreceipts (DRs) is least accurate?（2015 Mock PM）",
    "options": {
      "A": "Investors in unsponsored DRs would have the same voting rights as the direct owners of common shares.",
      "B": "Investing in DRs could provide arbitrage opportunities and entail currency risk",
      "C": "Sponsored DRs are subject to greater reporting requirements than unsponsored DRs."
    },
    "answer": "A",
    "explanation": "Investors of unsponsored DRs would not have the same voting rights as the direct owners of\ncommon shares because the depository bank retains the voting rights."
  },
  {
    "id": "jc_EQ_069",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 69,
    "question": "What term refers to tradable common shares issued by foreign companies in multiple\nstock exchanges across different countries in local currencies?",
    "options": {
      "A": "A basket of listed depository receipts",
      "B": "American depositary receipts",
      "C": "Global depositary receipts"
    },
    "answer": "C",
    "explanation": "GDRs are negotiable certificates issued by international banks representing ownership of shares in\na foreign company, denominated in either one or more currencies. They allow investors to buy\nshares in a foreign company without having to deal with foreign exchange risks. When a company\nlists its shares on multiple stock exchanges in different countries, the common shares become\nglobal depositary receipts or GDRs, making them tradable across various currency markets."
  },
  {
    "id": "jc_EQ_070",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 70,
    "question": "A change in which of the following best describes a macroeconomic influence on\nindustry growth? (Mock 2018)",
    "options": {
      "A": "The cost of debt",
      "B": "Personal spending habits",
      "C": "Population size."
    },
    "answer": "A",
    "explanation": "External factors affecting an industry’s growth include macroeconomic, technological,\ndemographic, governmental, and social influences. A change in interest rates, or the cost of debt, is\nan example of a macroeconomic influence on industry growth, profitability, and risk.\nChanges in population size is an example of a demographic influence on industry growth,\nprofitability, and risk.\nChanges in personal spending habits is an example of a social influence on industry growth,\nprofitability, and risk."
  },
  {
    "id": "jc_EQ_071",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 71,
    "question": "Which of the following is not a limitation of the cyclical/non-cyclical descriptive\napproach to classifying companies?（原版书课后题）",
    "options": {
      "A": "A cyclical company may have a growth component in it",
      "B": "Business-cycle sensitivity is a discrete phenomenon rather than a continuous spectrum",
      "C": "A global company can experience economic expansion in one part of the world while experiencing economic contraction in another part of the world."
    },
    "answer": "B",
    "explanation": "Business-cycle sensitivity falls on a continuum and is not a discrete “either–or” phenomenon."
  },
  {
    "id": "jc_EQ_072",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 72,
    "question": "If an industry is observed to have high pricing power, it is most likely that the industry:",
    "options": {
      "A": "has high barriers to entry",
      "B": "is fragmented",
      "C": "is overcapacity."
    },
    "answer": "A",
    "explanation": "An industry that has high barriers to entry generally requires substantial physical capital and/or\nfinancial investment, indicating fewer suppliers and a less competitive industry.\nAn industry that is fragmented does not necessarily have high pricing power.\nAn industry that is overcapacity has low pricing power."
  },
  {
    "id": "jc_EQ_073",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 73,
    "question": "Companies pursuing cost leadership will most likely:（2016 Mock PM）",
    "options": {
      "A": "invest in productivity-improving capital equipment",
      "B": "establish strong market research teams to match customer needs with product development",
      "C": "engage in defensive pricing when the competitive environment is one of high rivalry."
    },
    "answer": "A",
    "explanation": "Companies pursuing cost leadership must be able to invest in productivity-improving capital\nequipment in order to be low-cost producers and maintain efficient operating systems."
  },
  {
    "id": "jc_EQ_074",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 74,
    "question": "An equity analyst follows two industries with the following characteristics:Mock 201\nIndustry 1:\nA few companies with proprietary technologies, products with unique features, high switching costs, and minimal regulatory influences.\nIndustry 2:\nA few companies producing relatively similar products, sales varying with disposable income and\nemployment levels, high capital costs and investment in physical plants, rapid shifts in market\nshares of competing firms, and minimal regulatory influences.\nBased on the above information, the analyst will most appropriately conclude that, compared with\nthe firms in Industry 2, those in Industry 1 would potentially have:",
    "options": {
      "A": "over-capacity problems",
      "B": "high bargaining power of customers",
      "C": "larger economic profits."
    },
    "answer": "C",
    "explanation": "The economic profit (the spread between the return on invested capital and the cost of capital)\ntends to be larger in industries with differentiated products, greater pricing power, and high\nswitching costs to customers. Industry 1 has these features. In contrast, firms in Industry 2 have\nlittle pricing power (undifferentiated products and rapid shifts in market shares, indicating intense\nrivalry), which is indicative of potentially smaller economic profits.\nThe characteristics of Industry 1 do not indicate a potential for over-capacity problems. If\nanything, Industry 2 is prone to such a problem because of high capital costs and investment in\nphysical capital, cyclical demand for products, and rapid shifts in market shares.\nIndustry 1 is less prone to the bargaining power of customers because of differentiated products\nand high switching costs for customers."
  },
  {
    "id": "jc_EQ_075",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 75,
    "question": "Which of the following best describes a industry-level force in a comprehensive market\nanalysis?",
    "options": {
      "A": "Economic trend",
      "B": "Fiscal and monetary policies",
      "C": "The availability of lower priced alternative brands"
    },
    "answer": "C",
    "explanation": "C is Correct because industry-level forces driving industry competition include: threat of new\nentrants, substitution threats, customer and supplier bargaining forces, the competitive forces in\nthe industry (rivalry), life-cycle issues, and business-cycle considerations."
  },
  {
    "id": "jc_EQ_076",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 76,
    "question": "Which of the following is true about commercial industry classification systems?",
    "options": {
      "A": "They are updated more frequently than government classification systems",
      "B": "They are updated as frequently as government classification systems",
      "C": "They are updated less frequently than government classification systems."
    },
    "answer": "A",
    "explanation": "Commercial industry classification systems are typically updated more frequently than\ngovernment classification systems because they need to be more responsive to changes in the\nbusiness environment and the needs of businesses. Government classification systems, on the\nother hand, are typically updated less frequently because they are subject to more bureaucratic and\npolitical considerations."
  },
  {
    "id": "jc_EQ_077",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 77,
    "question": "What is the basis for classification in the Global Industry Classification Standard\n(GICS)?",
    "options": {
      "A": "Products and/or services provided by companies",
      "B": "Statistical similarities among companies",
      "C": "Business cycle sensitivity."
    },
    "answer": "A",
    "explanation": "The Global Industry Classification Standard (GICS) is a widely used industry classification\nsystem developed by MSCI and S&P Dow Jones Indices. It classifies companies into sectors,\nindustries, and sub-industries based on their primary business activities, products and services,\nrather than statistical similarities or business cycle sensitivities. The GICS aims to provide a\nconsistent and reliable framework for analyzing and comparing companies across different\nindustries."
  },
  {
    "id": "jc_EQ_078",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 78,
    "question": "Which of the following factors is most likely to influence the bargaining power of\nbuyers within an industry according to Porter's five forces framework?",
    "options": {
      "A": "The number of customers for the industry's products",
      "B": "The availability of lower priced alternative brands",
      "C": "The concentration of the industry."
    },
    "answer": "A",
    "explanation": "A is Correct because the smaller the number of buyers, the more likely buyer power will increase.\nBargaining Power of Customers. Affected by: size and concentration of customers, costs of\nswitching to other suppliers, customers’ ability to produce the product or service themselves. Are\ncustomers able to force price reductions or better payment terms? This can affect the intensity of\ncompetition by exerting influence on suppliers regarding prices (and possibly other factors such as\nproduct quality). For example, auto parts companies generally sell to a small number of auto\nmanufacturers, which allows those customers, the auto manufacturers, to be tough negotiators\nwhen it comes to setting prices."
  },
  {
    "id": "jc_EQ_079",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 79,
    "question": "What are some external factor that might impact an industry's expansion potential?",
    "options": {
      "A": "Organizational costs",
      "B": "Operational efficiency improvements",
      "C": "Technological influences"
    },
    "answer": "C",
    "explanation": "External factors refer to influences originating outside the organization or industry. Cost structures\nand economies of scale are internal business considerations, while technological advancements\nrepresent external forces that can significantly shape the direction and pace of an industry's\ndevelopment. For instance, new technologies can disrupt existing markets, create opportunities for\ninnovation, and change consumer behavior, all of which have implications for an industry's\ngrowth trajectory"
  },
  {
    "id": "jc_EQ_080",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 80,
    "question": "What type of forecast objects is most likely to be considered as a top-down driver for a\ninsurance company's revenue?",
    "options": {
      "A": "Net profit margin",
      "B": "Expansion into new markets",
      "C": "Increase in customer base"
    },
    "answer": "B",
    "explanation": "A top-down approach in forecasting involves starting with an overall view of the economy or\nindustry and then narrowing down to specific details. In this context, expanding into new markets\ncan be seen as a top-down driver because it takes into account broader economic trends and\ngrowth opportunities. On the other hand, net profit margin and increase in customer base are more\nbottom-up drivers that focus on specific aspects of the insurance company's operations."
  },
  {
    "id": "jc_EQ_081",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 81,
    "question": "Which financial statement forecasting approach is best suited for companies in\nwell-established industries with many publicly traded peers?",
    "options": {
      "A": "Historical results",
      "B": "Analyst's discretionary forecasts",
      "C": "Historical base rates and convergence"
    },
    "answer": "C",
    "explanation": "Historical base rates and convergence approach may be appropriate for:\n1) Companies in well-established industries with many publicly traded peers, such as banks,\nairlines, restaurants, automakers, and retailers;\n2) smaller companies that are “maturing into” a financial profile similar to that of larger peers with\nscale."
  },
  {
    "id": "jc_EQ_082",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 82,
    "question": "What is the most accurate statement regarding forecasting Selling, General and\nAdministrative costs?",
    "options": {
      "A": "Corporate-wide expenditures tend to be constant costs",
      "B": "Marketing and delivery charges can be estimated as a portion of total revenue",
      "C": "Overall SG&A costs exhibit a stronger connection with revenues compared to cost of goods"
    },
    "answer": "B",
    "explanation": "In many cases, selling and distribution expenses, which are part of SG&A costs, can be modeled\nas a percentage of sales because they tend to vary directly with sales volume. This means that as\nsales increase, so do these expenses. However, this may not always be true for all types of\ncompanies or industries, so it is important to consider each company's specific circumstances\nwhen making such predictions. General corporate costs, on the other hand, can include both fixed\nand variable components, while overall SG&A expenses generally show an indirect relationship\nwith revenues compared to cost of goods sold"
  },
  {
    "id": "jc_EQ_083",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 83,
    "question": "GF company’s $100 par value perpetual preferred stock has a dividend rate of 7.5% and\na required rate of return of 12%. The company’s earnings are expected to grow at a\nconstant rate of 4% per year. If the market price per share for the preferred stock is $80,\nthe preferred stock is most appropriately described as being:",
    "options": {
      "A": "overvalued by $11.36 and sold",
      "B": "undervalued by $15.13 and bought",
      "C": "overvalued by $17.5 and sold."
    },
    "answer": "C",
    "explanation": "Value of perpetual preferred stock = Dividend/Required rate of return\n= 7.5/12% = $62.50\nThe stock is overvalued by $80.00 –62.50= $17.5 thus should be sold."
  },
  {
    "id": "jc_EQ_084",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 84,
    "question": "An investor evaluating a company's common stock for investment has gathered the\nfollowing data.（原版书改编题）\nCurrent year's earnings per share $2.50\nDividend payout ratio 60%\nDividend growth rate expected during Year 1 and 2 25%\nDividend growth rate expected after Year 2 5%\nInvestors' requited rate of return 12%\nThe value per share of this common stock is closest to:",
    "options": {
      "A": "$28.57",
      "B": "$31.57",
      "C": "$38.70."
    },
    "answer": "B",
    "explanation": "Current year's dividend per share =$2.50×0.6=$1.50\nV=1.50(1.25)/1.12+1.50 (1.25)2/1.122+1.50 (1.25)2(1.05)/ (0.12-0.05)}/1.122 = $1.67+$1.87+\n28.03 =$31.57"
  },
  {
    "id": "jc_EQ_085",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 85,
    "question": "The following information is available about a company:\nNext year’s sales revenue $200million\nNext year’s net profit margin 20%\nDividend payout ratio 45%\nDividend growth rate expected during Years 2 and 3 18%\nDividend growth rate expected after Year 3 5%\nInvestors' required rate of return 15%\nNumber of outstanding shares 18million\nThe current value per share of the company’s common stock according to the two-stage\ndividend discount model is closest to:）",
    "options": {
      "A": "$22.46",
      "B": "$22.14",
      "C": "$12.28."
    },
    "answer": "C",
    "explanation": "Net profit margin = Net income/Sales\nNet income = Net profit margin × Sales;\nDividends per share (D ) = (Net income× Payout ratio)/Number of outstanding shares;\nn\nTherefore, D = ($200million ×0.2×0.45)/18 million = $1.00\n1\nD = $1.00 (1 +0.18) = $1.18\n2\nD = $1.00 (1 +0.18)2 = $1.39\n3\nD = $1.00 (1 + 0.18)2 (1 + 0.05) = $1.46\n4\nV = $1.46 / (0.15-0.05) = 14.6\n3\nV = $1 / (1 + 0.15) +$ 1.18 / (1 +0.15) 2 + $1.39/ (1 +0.15) 3 + $14.6/ (1 +0.15) 3 = $12.28\n0"
  },
  {
    "id": "jc_EQ_086",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 86,
    "question": "Which of the following is the most appropriate reason for using a\nfree-cash-flow-to-equity (FCFE) model to value equity of a company? (2018 Mock)",
    "options": {
      "A": "FCFE models provide more accurate valuations than the dividend discount model",
      "B": "A firm’s borrowing activities could influence dividend decisions, but they would not affect",
      "C": "FCFE is a measure of the firm’s dividend paying capacity."
    },
    "answer": "C",
    "explanation": "FCFE is a measure of the firm’s dividend-paying capacity.\nThe statement that FCFE models provide more accurate valuations than the dividend discount\nmodels is not necessarily true. The appropriateness and the effectiveness of a model depend on the\nfirm characteristics and the analyst’s ability in making predictions.\nA firm’s borrowing activities do impact FCFE, as in the expression:\nFCFE = CFO – FCInv + Net borrowing."
  },
  {
    "id": "jc_EQ_087",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 87,
    "question": "Two investors with different holding periods but the same expectations and required rate\nof return for a company are estimating the intrinsic value of a common share of the\ncompany. The investor with the shorter holding period will most likely estimate a:",
    "options": {
      "A": "lower intrinsic value",
      "B": "higher intrinsic value",
      "C": "similar intrinsic value."
    },
    "answer": "C",
    "explanation": "The intrinsic value of a security is independent of the investor’s holding period."
  },
  {
    "id": "jc_EQ_088",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 88,
    "question": "Which of the following firms would most likely be appropriated valued using the\nconstant growth DDM?",
    "options": {
      "A": "An auto manufacturer",
      "B": "A producer of bread and snack foods",
      "C": "A biotechnology firm in existence for two years."
    },
    "answer": "B",
    "explanation": "The constant growth DDM assumes that the dividend growth rate is constant. The most likely\nchoice is the bread and snack producer. Auto manufacturers are most likely to be cyclical than to\nexperience constant growth. A biotechnology firm in existence for two years is unlikely to pay a\ndividend, and if it does, dividend growth is unlikely to be constant."
  },
  {
    "id": "jc_EQ_089",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 89,
    "question": "An investor who wants to estimate the enterprise value multiple (EV/EBITDA) of a\ncompany has gathered the following data:\nMarket value (MV) of debt $10 million\nMarket capitalization $45 million\nCash and short-term investments $2.5 million\nEBITDA $15 million Firm’s marginal tax rate 40%\nThe company’s EV/EBITDA multiple is closest to",
    "options": {
      "A": "3.5",
      "B": "5.8",
      "C": "2.5."
    },
    "answer": "A",
    "explanation": "Enterprise Value (EV) = Market capitalization + MV of debt + MV of preferred stock – Cash and\nshort-term investments.\nEV = 45 + 10 – 2.5 = 52.5\nEV/EBITDA = 52.5/15 = 3.5"
  },
  {
    "id": "jc_EQ_090",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 90,
    "question": "An investor has gathered the following data for a company's common stock:\nCurrent dividend per share (D0): $2.00\nDividend payout ratio: 50%\nReturn on Equity (ROE): 10%\nRequired rate of return: 8%\nUsing the Gordon Growth Model, calculate the intrinsic value per share of the stock.",
    "options": {
      "A": "$42",
      "B": "$66",
      "C": "$70"
    },
    "answer": "C",
    "explanation": "The Gordon Growth Model formula is P = D1 / (R-g), where P is the intrinsic value per share, D1\nis next year's expected dividend per share, k is the required rate of return, and g is the constant\ngrowth rate of dividends. We can estimate the constant growth rate of dividends as ROE x\n(1-Dividend Payout Ratio), which gives us g=10% x (1-50%)=5%. Substituting the values into the\nformula, we get P=$2.00*(1+5%)/(0.08-0.05)=$70"
  },
  {
    "id": "jc_EQ_091",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 91,
    "question": "An investor gathers the following data. To estimate the stock's justified forward P/E, the\ninvestor prefers to use:\n the earnings growth rate rather than the dividends growth rate and\n the average of the payout ratios over the relevant period, in this case 2006-2009,\nrather the most recent payout ratio.\nYear EPS DPS ROE\n2009 $3.20 $1.92 12%\n2008 $3.60 $1.80 17%\n2007 $2.44 $1.71 13%\n2006 $2.50 $1.60 15%\nThe yield on 10-year T-notes is 3 percent and the current equity risk premium is 6.5\npercent. If beta is 1.3, then the stock's justified forward P/E is closest to:（考题回顾题）",
    "options": {
      "A": "12",
      "B": "16",
      "C": "21."
    },
    "answer": "C",
    "explanation": "Earnings growth rate over the period 2006-2009=2.50 × (1 + g)3=3.2; g=8.6%\nAverage payout ratio= (0.60+0.50+0.70+0.64)/4=0.61\nRequired rate of return on share i= Current expected risk-free rate of return+ Beta × [Market\n(equity) risk premium] =3%+1.3*(6.5%) =11.45%\nP/E =payout rate/(r-g) =0.61/ (0.1145-0.086) = 21.4\n1"
  },
  {
    "id": "jc_EQ_092",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 92,
    "question": "An analyst has determined that the appropriate EV/EBITDA for Rainbow Company is\n10.2. The analyst has also collected the following forecasted information for Rainbow\nCompany:\nEBITDA = $22,000,000 Market value of debt = $56,000,000\nCash = $1,500,000\nThe value of equity for Rainbow Company is closest to:",
    "options": {
      "A": "$169 million",
      "B": "$224 million",
      "C": "$281 million."
    },
    "answer": "A",
    "explanation": "EV = 10.2 × 22,000,000 = $224,400,000\nEquity value = EV - Debt + Cash = 224,400,000 - 56,000,000+ 1,500,000 = $169,900,000"
  },
  {
    "id": "jc_EQ_093",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 93,
    "question": "Which of the following multiples is most useful when comparing companies with\nsignificant differences in capital structure?（2013 Mock PM）",
    "options": {
      "A": "EV/EBITDA",
      "B": "Price-to-book ratio",
      "C": "Price-to-cash flow ratio"
    },
    "answer": "A",
    "explanation": "The EV/EBITDA approach is most useful when comparing companies with significant differences\nin capital structure. EBITDA is computed prior to payment to any of the company’s financial\nstakeholders and is not impacted by the amount of debt leverage."
  },
  {
    "id": "jc_EQ_094",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 94,
    "question": "An analyst collects the following information about a company's equity security:\n Trailing price-to-earnings multiple: 15x\n Last year's EPS: $5.00\n Forecasted EPS growth rate: 15%\nIf the analyst estimates that the security is undervalued by $10, the estimated intrinsic\nvalue is closest to:",
    "options": {
      "A": "$85",
      "B": "$92",
      "C": "$72."
    },
    "answer": "A",
    "explanation": "The current market value, or price, of a security is calculated as follows:\nP = P/E × E=15 × $5 = $75\nThe security is undervalued by $10. Therefore, the estimated intrinsic value is $75 + $10 = $85."
  },
  {
    "id": "jc_EQ_095",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 95,
    "question": "A firm reports negative earnings for the year just ended. The price multiple of the firm’s\nstock that is least likely to be meaningful is: (Mock 2018)",
    "options": {
      "A": "trailing price to earnings",
      "B": "price to cash flow",
      "C": "leading price to earnings."
    },
    "answer": "A",
    "explanation": "Negative earnings in the last year result in a negative ratio of trailing price to earnings and are not\nmeaningful. Practitioners may use the ratio of (1) current price to cash flow or (2) leading price to\nearnings by replacing last year’s loss with forecasted earnings.\nAlternative to negative trailing price-to-earnings ratio, practitioners may use price-to-cash-flow\nratio because it is possible cash flow would be positive in spite of a small loss.\nAlternative to negative trailing price-to-earnings ratio, practitioners may use leading\nprice-to-earnings ratio by replacing last year’s loss with forecasted earnings which may be\npositive."
  },
  {
    "id": "jc_EQ_096",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 96,
    "question": "Enterprise value is defined as the market value of equity plus: (Mock 2018)",
    "options": {
      "A": "The face value of debt minus cash and short-term investments",
      "B": "The market value of debt minus cash and short-term investments",
      "C": "Cash and short-term investments minus the market value of debt."
    },
    "answer": "B",
    "explanation": "Enterprise value is most frequently determined as market capitalization plus market value of\npreferred stock plus market value of debt minus cash and investments (cash equivalents and\nshort-term investments)."
  },
  {
    "id": "jc_EQ_097",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 97,
    "question": "An analyst has collected the following data about a firm: 2024BT.6.1.22\nEarnings retention ratio: 60%\nCost of equity: 10%\nReturn on equity: 15%\nWhat is the justified forward P/E ratio for the company's stock?",
    "options": {
      "A": "10.0",
      "B": "8.0",
      "C": "40.0 5.22. Asset-Based Model"
    },
    "answer": "C",
    "explanation": "To calculate the justified forward P/E ratio, we first need to find the earnings growth rate (g) using\nthe retained earnings approach:\ng = b * ROE\nwhere b is the earnings retention ratio, and ROE is the return on equity.\ng = 0.60 * 0.15 = 0.09 or 9%\nNext, we use the Gordon Growth Model to find the fair value P/E ratio:\nP/E = D / (r - g)\nwhere D is the dividend per share, r is the required rate of return on equity, and g is the earnings\ngrowth rate.\nDividend payout ratio = 1 - Earnings retention ratio = 1 - 0.60 = 0.40 or 40%\nNow we can express the dividend per share as a percentage of earnings per share (EPS):\nD/EPS = Dividend payout ratio = 0.40\nSince the cost of equity is given as the required rate of return on equity, we can plug in the values:\nP/E = 0.40 / (0.10 - 0.09) = 40"
  },
  {
    "id": "jc_EQ_098",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 98,
    "question": "An asset-based valuation model is most applicable for a company with significant:",
    "options": {
      "A": "intangible assets",
      "B": "property, plant, and equipment",
      "C": "proportions of current assets and current liabilities and few intangible assets."
    },
    "answer": "C",
    "explanation": "Asset-based valuations work well for companies that do not have a high proportion of intangible\nor “off the books” assets and that do have a high proportion of current assets and current\nliabilities.\nWhen a company has significant intangibles, the analyst should prefer a forward-looking cash\nflow valuation to an asset-based valuation model.\nCompanies with assets that do not have easily determinable market (fair) values—such as those\nwith significant property, plant, and equipment—are very difficult to analyze using asset-based\nvaluation methods."
  },
  {
    "id": "jc_EQ_099",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 99,
    "question": "Which of the following statements concerning different valuation approaches is most\naccurate? (2014 Mock AM )",
    "options": {
      "A": "The justified forward price-to-earnings ratio (P/E) approach offers the advantage of incorporating fundamentals and presenting intrinsic value estimations.",
      "B": "One advantage of the three-stage dividend discount model (DDM) model is that it is equally",
      "C": "It is advantageous to use asset-based valuation approaches rather than forward-looking cash"
    },
    "answer": "A",
    "explanation": "The justified forward P/E approach offers the advantage of incorporating fundamentals and\npresenting intrinsic value estimations."
  },
  {
    "id": "jc_EQ_100",
    "source": "JC_EQ",
    "subject": "权益投资",
    "subjectEn": "Equity Investments",
    "num": 100,
    "question": "Which of the following firms would most appropriately be valued using an asset-based\nmodel?",
    "options": {
      "A": "An energy exploration firm in financial distress that owns drilling rights for offshore areas",
      "B": "A paper firm located in a country that is experiencing high inflation",
      "C": "A software firm that invests heavily in research and development and frequently introduces"
    },
    "answer": "A",
    "explanation": "The energy exploration firm would be most appropriately valued using an asset-based model. Its\nnear-term cash flows are likely negative, so a forward-looking model is of limited use.\nFurthermore, it has valuable assets in the form of drilling rights that likely have a readily\ndetermined market value. The paper firm would likely not be appropriately valued using an\nasset-based model because high inflation makes the values of a firm’s assets more difficult to\nestimate. An asset-based model would not be appropriate to value the software firm because the\nfirm’s value largely consists of internally developed intangible assets."
  },
  {
    "id": "jc_PM_001",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 1,
    "question": "Which of following type of investors have the highest risk tolerance?",
    "options": {
      "A": "Companies only with DB plans",
      "B": "Banks",
      "C": "Insurance companies"
    },
    "answer": "A",
    "explanation": "DB plan have high risk tolerance than banks and insurance companies."
  },
  {
    "id": "jc_PM_002",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 2,
    "question": "With respect to the formation of portfolios, which of the following statements is most\naccurate?（原版书课后题）",
    "options": {
      "A": "Portfolios affect risk less than returns",
      "B": "Portfolios affect risk more than returns",
      "C": "Portfolios affect risk and returns equally."
    },
    "answer": "B",
    "explanation": "As illustrated in the reading, portfolios reduce risk more than they increase returns."
  },
  {
    "id": "jc_PM_003",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 3,
    "question": "Which of the following institutions will on average have the greatest need for liquidity?",
    "options": {
      "A": "Banks. （2020原版书）",
      "B": "Investment companies",
      "C": "Non-life insurance companies."
    },
    "answer": "A",
    "explanation": "The excess reserves invested by banks need to be relatively liquid.\nAlthough investment companies and non-life insurance companies have high liquidity needs, the\nliquidity need for banks is on average the greatest."
  },
  {
    "id": "jc_PM_004",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 4,
    "question": "A defined benefit plan with a large number of retirees is likely to have a high need for",
    "options": {
      "A": "income. (2020原版书)",
      "B": "liquidity",
      "C": "insurance."
    },
    "answer": "A",
    "explanation": "Income is necessary to meet the cash flow obligation to retirees.\nAlthough defined benefit plans have a need for income, the need for liquidity typically is quite\nlow. A retiree may need life insurance; however, a defined benefit plan does not need insurance."
  },
  {
    "id": "jc_PM_005",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 5,
    "question": "With respect to mutual funds, which of the following statements is least accurate?",
    "options": {
      "A": "If it is an open-end fund, it will accept new investment money and issue additional shares at a price equal to the net asset value per share.",
      "B": "If it is a closed-end fund, no new investment money is accepted into the fund. New investors must buy shares from existing investors.",
      "C": "Unlike closed-end funds in which new shares are created and sold at the current net asset value per share, open-end funds can sell for a premium or discount to net asset value depending on the demand for the shares."
    },
    "answer": "C",
    "explanation": "Unlike open-end funds in which new shares are created and sold at the current net asset value\nper share, closed-end funds can sell for a premium or discount to net asset value depending on\nthe demand for the shares."
  },
  {
    "id": "jc_PM_006",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 6,
    "question": "Which of the following financial products is least likely to have a capital gain\ndistribution?",
    "options": {
      "A": "Exchange traded funds",
      "B": "Open-end mutual funds",
      "C": "Closed-end mutual funds."
    },
    "answer": "A",
    "explanation": "Exchange traded funds do not have capital gain distributions. If an investor sells shares of an\nETF (or open-end mutual fund or closed-end mutual fund), the investor may have a capital\ngain or loss on the shares sold; however, the gain (or loss) from the sale is not a distribution."
  },
  {
    "id": "jc_PM_007",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 7,
    "question": "What is the most accurate statement regarding differences among investor types?",
    "options": {
      "A": "Banks prioritize the liquidity of their investments above all else",
      "B": "Endowments typically have shorter investment horizons due to immediate spending",
      "C": "Insurance companies' general and surplus accounts generally have similar levels of risk"
    },
    "answer": "A",
    "explanation": "Banks prioritize the liquidity of their investments above all else.\nBanks require highly liquid assets because they must maintain cash reserves for daily\ntransactions and withdrawals from customers. This means they often prefer securities that\ncan easily be converted into cash without significantly affecting prices, such as Treasury bills\nand high-quality corporate bonds. Thus, liquidity is indeed paramount for banks.\nAs for Option B, endowments usually focus on long-term growth rather than short-term\nspending needs, so they often invest in equities, real estate, and alternative assets with\nlonger time horizons. Their investment horizon can span decades, allowing them to ride out\nmarket fluctuations and pursue potentially higher returns.\nFinally, Option C is not entirely accurate. Insurance companies manage two separate\nportfolios: a general account, where funds are held for claims payments and operational\nexpenses; and a surplus account, whose objective is growth and earning profits for\nshareholders. These accounts have different purposes and therefore might differ in terms of\nrisk tolerance, with the general account tending to take less risk than the surplus account.\nHowever, it varies across insurance companies, and some may have similar levels of risk\ntolerance between these accounts."
  },
  {
    "id": "jc_PM_008",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 8,
    "question": "Which aspect of pension plans is true?",
    "options": {
      "A": "Defined benefit plans tend to have a lower risk tolerance compared to defined contribution",
      "B": "Defined contribution plans usually have a lower risk tolerance compared to defined benefit",
      "C": "The employer sponsoring a defined benefit plan sets out how much money will be paid to the employee upon retirement. The employer defines the obligation owed to each participant, which usually takes into account various factors such as salary history and length of employment."
    },
    "answer": "C",
    "explanation": "In a defined benefit plan, the employer promises to pay out a predetermined benefit upon\nthe employee's retirement, regardless of investment performance or any external factors\n(e.g., stock market fluctuations). Therefore, the sponsor (i.e., employer) defines the\nobligation owed to each participant, which usually takes into account various factors such as\nsalary history and length of employment.\nRegarding the other options:\nA. Although defined benefit plans tend to have lower volatility since they are guaranteed by\nthe employer, they are not necessarily immune to market fluctuations or economic\ndownturns, especially if the sponsoring company experiences financial difficulties or\nbankruptcy.\nB. On the contrary, defined contribution plans place more responsibility on the employee,\ngiving them greater control over their investments but also exposing them to potential\nmarket risks. The risk tolerance of these plans can vary widely depending on the investment\nchoices made by the employee.\nSo, option C provides the most accurate description of one characteristic of defined benefit\nplans."
  },
  {
    "id": "jc_PM_009",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 9,
    "question": "With respect to the portfolio management process, the asset allocation is determined\nin the:",
    "options": {
      "A": "planning step",
      "B": "feedback step",
      "C": "execution step."
    },
    "answer": "C",
    "explanation": "The client’s objectives and constraints are established in the investment policy statement and are\nused to determine the client’s target asset allocation, which occurs in the execution step of the\nportfolio management process."
  },
  {
    "id": "jc_PM_010",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 10,
    "question": "What does the feedback step of portfolio management entail?",
    "options": {
      "A": "Portfolio monitoring",
      "B": "Security analysis",
      "C": "Understanding the client’s needs."
    },
    "answer": "A",
    "explanation": "A is Correct because the feedback step assists the portfolio monitoring and rebalancing,\nperformance measurement and reporting.\nB is Incorrect because it is part of the execution step, not the feedback step. The portfolio\nexecution step consists of asset allocation, security analysis and portfolio construction.\nC is Incorrect because it is part of the planning step, not the feedback step. The first step [the\nplanning step] in the investment process is to understand the client’s needs (objectives and\nconstraints) and develop an investment policy statement (IPS)."
  },
  {
    "id": "jc_PM_011",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 11,
    "question": "If the correlation between assets in a portfolio increases during a market turmoil, given\nother conditions unchanged, the portfolio risk is most likely to:",
    "options": {
      "A": "Increase",
      "B": "Unchange",
      "C": "Decrease."
    },
    "answer": "A",
    "explanation": "Higher correlations will weaken diversification effects if other components of the portfolio\nstandard deviation do not change (i.e., the weights and variance of the individual assets). This\nmeans that the risk of the whole portfolio will increase."
  },
  {
    "id": "jc_PM_012",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 12,
    "question": "A portfolio includes two assets. The portfolio’s standard deviation equals to the\nweighted average mean of the two assets’ standard deviation. The correlation of these\ntwo assets is closest to:",
    "options": {
      "A": "-1",
      "B": "0",
      "C": "1."
    },
    "answer": "C",
    "explanation": "σ = w2σ2+w2σ2+2wwσσρ\np 1 1 2 2 1 2 1 2 1,2\nWhen the correlation = 1,\nσ = w2σ2+w2σ2+2wwσσ = (wσ+wσ)2 =wσ+wσ\np 1 1 2 2 1 2 1 2 1 1 2 2 1 1 2 2"
  },
  {
    "id": "jc_PM_013",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 13,
    "question": "A portfolio manager creates a portfolio and the correlation coefficient between two\nsecurities equals to zero. Comparing the weighted average of two securities’ standard\ndeviation, the portfolio’s standard deviation is:",
    "options": {
      "A": "lower",
      "B": "higher",
      "C": "no difference."
    },
    "answer": "A",
    "explanation": "Method one:\nWhen the portfolio’s standard deviation equals to the weighted average mean of the two assets’\nstandard deviation, the correlation of these two assets is closest to one:\nρ =1\n1,2\nσ =w σ +w σ\np 1 1 2 2\nσ ²=(w σ +w σ )2 =w 2σ 2+w 2σ 2+2w w σ σ ρ =w 2σ 2+w 2σ 2+2w w σ σ\np 1 1 2 2 1 1 2 2 1 2 1 2 1,2 1 1 2 2 1 2 1 2\nWhen portfolio’s correlation coefficient between two securities equals to zero:\nρ' =0\n1,2\nσ’ ²=w 2σ 2+w 2σ 2+2w w σ σ ρ’ =w 2σ 2+w 2σ 2\np 1 1 2 2 1 2 1 2 1,2 1 1 2 2\nThen, we have:\nσ ²=w 2σ 2+w 2σ 2+2w w σ σ >σ' ²=w 2σ 2+w 2σ 2\np 1 1 2 2 1 2 1 2 p 1 1 2 2\nσ >σ'\np p\nMethod two:\nσ ²=(w σ +w σ )2 =w 2σ 2+w 2σ 2+2w w σ σ ρ\np 1 1 2 2 1 1 2 2 1 2 1 2 1,2\nρ ↓(from 1 to 0) → σ ↓\n1,2 p"
  },
  {
    "id": "jc_PM_014",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 14,
    "question": "A correlation matrix of the returns for securities A, B, and C is reported below:\nSecurity A B C\nA 1\nB 0.7 1\nC 0 –0.3 1\nAssuming that the expected return and the standard deviation of each security are the\nsame, a portfolio consisting of an equal allocation of which two securities will be most\neffective for portfolio diversification?",
    "options": {
      "A": "Securities A and B",
      "B": "Securities A and C",
      "C": "Securities B and C."
    },
    "answer": "C",
    "explanation": "The negative correlation of –0.3 between investment securities B and C is the lowest and thus is\nthe most effective for portfolio diversification."
  },
  {
    "id": "jc_PM_015",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 15,
    "question": "What correlation coefficient between assets contributes most effectively to risk\nreduction when constructing a long-only portfolio?",
    "options": {
      "A": "1",
      "B": "0",
      "C": "-1."
    },
    "answer": "C",
    "explanation": "C is Correct because –1 is the smallest of the three correlations, the greater the reduction in\nportfolio risk. The correlation coefficient between two assets determines the effect on portfolio\nrisk when the two assets are combined. You will find that portfolio risk is unaffected when the\ntwo assets are perfectly correlated (ρ = +1). In other words, the portfolio's standard deviation is\n12\nsimply a weighted average of the standard deviations of the two assets and as such a portfolio's\nrisk is unchanged with the addition of assets with the same risk parameters. Portfolio risk falls,\nhowever, when the two assets are not perfectly correlated (ρ < +1). Sufficiently low values of\n12\nthe correlation coefficient can make the portfolio riskless under certain conditions. For an\nextreme case in which ρ = –1 (that is, the two asset returns move in opposite directions), the\n12\nportfolio can be made risk free. Analytically, the standard deviation risk of a two asset portfolio is\ngiven by the square root of the portfolio's variance: σ = (w 2σ 2 + w 2σ 2 + 2w w ρ σ σ )1/2,\nP 1 1 2 2 1 2 12 1 2\nwhich is a strictly increasing function of ρ . Hence, –1, the smallest of the three correlations, has\n12\nthe lowest risk."
  },
  {
    "id": "jc_PM_016",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 16,
    "question": "Two assets have the following characteristics:\nVariance of returns for Asset 1 0.03\nVariance of returns for Asset 2 0.07\nCorrelation of returns between Asset 1 and Asset 2 -0.6\nThe variance of returns for an equally weighted portfolio of the two assets is closest to:",
    "options": {
      "A": "0.011",
      "B": "0.018",
      "C": "0.050."
    },
    "answer": "A",
    "explanation": "A is Correct because for a two asset portfolio, the expression for portfolio variance simplifies to\nthe following using correlation:\nσ2 = w 2σ 2 + w 2σ 2 + 2w w ρ σ σ , where w is the weight of asset i in the portfolio, σ2 is\np 1 1 2 2 1 2 12 1 2 i i\nthe variance of asset i, and ρ is the correlation between the returns of assets i and j. Here,\nij\nσ2 = (0.5)2(0.03) + (0.5)2(0.07) + 2(0.5)(0.5)(-0.6)(0.03)0.5(0.07)0.5 = 0.0075 + 0.0175 - 0.0137477\np\n= 0.01125 ≈ 0.011."
  },
  {
    "id": "jc_PM_017",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 17,
    "question": "Which of the following is not an assumption of the Markowitz model? Investors:",
    "options": {
      "A": "have homogeneous expectations",
      "B": "maximize one-period expected utility",
      "C": "base decisions solely on expected return and risk."
    },
    "answer": "A",
    "explanation": "Homogeneous expectation is not an assumption of the Markowitz model, it is an assumption of\nthe Capital Asset Pricing Model (CAPM)."
  },
  {
    "id": "jc_PM_018",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 18,
    "question": "With respect to the utility theory, which of the following statements is most accurate?",
    "options": {
      "A": "The risk aversion coefficient, A, is less than zero for a risk-averse investor",
      "B": "The risk-averse investor’s indifference curve exhibits a negative slope, implying that they are willing to accept lower expected returns in exchange for lower risk.",
      "C": "The risk-averse investor has an indifference curve with a positive slope. As volatility"
    },
    "answer": "C",
    "explanation": "The risk aversion coefficient, A, is greater than zero for a risk-averse investor.\nThe risk-loving investor’s indifference curve exhibits a negative slope, implying that they are\nhappy to substitute risk for return."
  },
  {
    "id": "jc_PM_019",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 19,
    "question": "Risk-averse investors who invest in risk-free assets will have a numerical utility that is:",
    "options": {
      "A": "same as risk-seeking investors",
      "B": "higher than risk-averse investors",
      "C": "higher than risk-neutral investors."
    },
    "answer": "A",
    "explanation": "A risk-free asset has a variance of zero and result in same numerical utility for all types of\n1\ninvestors. According to the utility functionU =E(r)− Aσ2, where A is the measure of risk aversion,\n2\nthe sign of A is irrelevant if the variance is zero (like that of a risk-free asset)."
  },
  {
    "id": "jc_PM_020",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 20,
    "question": "As one moves to the right along an investor's efficient frontier, a set increase in risk is\nmost likely to lead to:",
    "options": {
      "A": "sequentially larger increases in expected return",
      "B": "consistent increases in expected return",
      "C": "sequentially smaller increases in expected return."
    },
    "answer": "C",
    "explanation": "The increase in return with every unit increase in risk keeps decreasing as one moves from left to\nright because the slope of the efficient frontier continues to decrease. Thus, investors obtain\ndecreasing increases in returns as they assume more risk."
  },
  {
    "id": "jc_PM_021",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 21,
    "question": "When considering a portfolio that is optimal for one investor, a second investor with a higher risk aversion would most likely:",
    "options": {
      "A": "expect a higher variance for the portfolio",
      "B": "derive a lower utility from the portfolio",
      "C": "have a lower return expectation for the portfolio."
    },
    "answer": "B",
    "explanation": "Utility has two terms: the expected return and a negative term based on the portfolio risk\nweighted by risk aversion. For an identical portfolio, the investor with a higher risk aversion (A)\nwould calculate a lower utility (U)."
  },
  {
    "id": "jc_PM_022",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 22,
    "question": "An investor who is indifferent to risk aims to optimize:",
    "options": {
      "A": "Return and risk simultaneously",
      "B": "Only the expected return",
      "C": "Expected return per unit of risk taken."
    },
    "answer": "B",
    "explanation": "For a risk-neutral investor, maximizing returns is the primary objective, regardless of risk involved,\nrepresented by Option B.\nOption A contradicts neutrality by prioritizing both risk and return simultaneously.\nOption C is irrelevant since it concerns a specific risk level, whereas a risk-neutral investor cares\nonly about maximizing returns overall. Thus, choosing B aligns with indifference towards\nrisk-taking behavior."
  },
  {
    "id": "jc_PM_023",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 23,
    "question": "What is the best description of the Markowitz efficient frontier?",
    "options": {
      "A": "A curve that contains all portfolios of risky assets that rational, risk-averse investors will choose, representing portfolios with the lowest risk for a given level of expected return.",
      "B": "A curve that connects the minimum-variance portfolios for all possible returns",
      "C": "A curve that lies above and to the left of the minimum-variance frontier."
    },
    "answer": "A",
    "explanation": "The answer is A. The Markowitz efficient frontier represents the set of optimal portfolios with the\nhighest return for each level of risk, or equivalently, the lowest risk for each level of expected\nreturn. It includes all portfolios of risky assets chosen by rational, risk-averse investors because it\nprovides the best trade-off between risk and return for their individual risk tolerance levels.\nTherefore, option A provides the most accurate description of the Markowitz efficient frontier.\nOption C is incorrect because while the efficient frontier does lie above the minimum-variance\nfrontier (which represents portfolios with the lowest possible variance), not all points on the\nefficient frontier lie to its left.\nOption B describes the minimum-variance frontier rather than the efficient frontier. The efficient\nfrontier consists of portfolios that maximize expected return for a given level of risk, whereas the\nminimum-variance frontier represents portfolios that minimize risk for a given level of expected\nreturn."
  },
  {
    "id": "jc_PM_024",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 24,
    "question": "With respect to capital market theory, which of the following assumptions allows for\nthe existence of the market portfolio? All investors:",
    "options": {
      "A": "are price takers",
      "B": "have homogeneous expectations",
      "C": "plan for the same, single holding period."
    },
    "answer": "B",
    "explanation": "The homogeneous expectations assumption means that all investors analyze securities in the\nsame way and are rational. That is, they use the same probability distributions, use the same\ninputs for future cash flows, and arrive at the same valuations. Because their valuation of all\nassets is identical, they will generate the same optimal risky portfolio, which is the market\nportfolio."
  },
  {
    "id": "jc_PM_025",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 25,
    "question": "Two individual investors with different levels of risk aversion will have optimal\nportfolios that are:",
    "options": {
      "A": "below the capital allocation line",
      "B": "on the capital allocation line",
      "C": "above the capital allocation line."
    },
    "answer": "B",
    "explanation": "The CAL represents the set of all feasible investments. Each investor's indifference curve\ndetermines the optimal combination of the risk–free asset and the portfolio of all risky assets,\nwhich must lie on the CAL."
  },
  {
    "id": "jc_PM_026",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 26,
    "question": "Which of the following statements is least accurate? An investor may construct a\nportfolio located on the capital market line (CML) by:",
    "options": {
      "A": "investing a portion of his capital in the risk-free asset and the balance in a fully diversified",
      "B": "investing a portion of his capital in the risk-free asset and the balance in a fully diversified",
      "C": "borrowing capital at the risk-free rate and investing all his capital plus all borrowed capital in the optimal risky portfolio."
    },
    "answer": "A",
    "explanation": "Portfolios located on the CML may be constructed by: 1) investing a portion of an investor’s\ncapital in the risk-free asset and the balance in the market portfolio which consists of all risky\nassets, or 2) borrowing capital at the risk-free rate and investing all of an investor’s capital plus all\nborrowed capital in the market portfolio."
  },
  {
    "id": "jc_PM_027",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 27,
    "question": "If investors borrow at a rate that exceeds the risk-free lending rate, the resulting\nborrowing portfolios will:",
    "options": {
      "A": "plot on a flatter line",
      "B": "plot on a steeper line",
      "C": "no longer plot on a straight line."
    },
    "answer": "A",
    "explanation": "If investors borrow at a rate that exceeds the lending rate, the resulting borrowing portfolios will\nnot be as profitable as the case where borrowing and lending is carried out at the same risk-free\nrate. The result is that borrowing portfolios will plot on a line with a flatter slope compared to\nborrowing portfolios constructed from borrowing at the risk-free lending rate."
  },
  {
    "id": "jc_PM_028",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 28,
    "question": "A portfolio with equal parts invested in a risk-free asset and a risky portfolio will most\nlikely lie on:",
    "options": {
      "A": "the efficient frontier",
      "B": "the security market line",
      "C": "a capital allocation line."
    },
    "answer": "C",
    "explanation": "A capital allocation line shows possible combinations of a risky portfolio and the risk-free asset."
  },
  {
    "id": "jc_PM_029",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 29,
    "question": "Relative to an investor with a steeper indifference curve, the optimal portfolio for an\ninvestor with a flatter indifference curve will most likely have:",
    "options": {
      "A": "a lower level of risk and return",
      "B": "a higher level of risk and return",
      "C": "the same level of risk and return."
    },
    "answer": "B",
    "explanation": "A less risk-averse investor’s highest utility, given the low slope of his indifference curve, is likely to\ntouch the capital allocation line at a point which would represent a portfolio with higher risk and\nmore expected return."
  },
  {
    "id": "jc_PM_030",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 30,
    "question": "What characteristic do portfolios on the Capital Market Line (CML) have in common?",
    "options": {
      "A": "Full diversification",
      "B": "Zero systematic risk",
      "C": "Nonsystematic risk equal to beta"
    },
    "answer": "A",
    "explanation": "The answer is A. The Capital Market Line (CML) plots expected return against risk for all portfolios\nthat consist solely of the risk-free asset (such as Treasury bills) and the market portfolio. The\nslope of the CML reflects the Sharpe ratio, representing the excess return earned per unit of\nsystematic risk (beta). Portfolios lying on the CML have no unique risk characteristics beyond beta,\ni.e., they have zero unsystematic risk. These are perfectly diversified portfolios."
  },
  {
    "id": "jc_PM_031",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 31,
    "question": "If investors share identical beliefs about the future returns of assets, what is depicted\nby plotting total risk versus expected return for portfolios consisting of the risk-free\nasset and optimal risky portfolio？",
    "options": {
      "A": "Security Market Line",
      "B": "Capital Allocation Line",
      "C": "Capital Market Line"
    },
    "answer": "C",
    "explanation": "The answer is C. If all investors share homogeneous expectations regarding future returns and\nvolatilities, then the CML depicts total risk versus expected return for portfolios consisting of the\nrisk-free asset and optimal risky portfolio. The CML connects combinations of the risk-free\nsecurity and the market portfolio with higher expected returns than the risk-free security,\nshowing the efficient portfolios for individual risk preferences given identical beliefs about future\nreturns."
  },
  {
    "id": "jc_PM_032",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 32,
    "question": "According to Capital Market Theory, what aspect determines the optimal risky\nportfolio?",
    "options": {
      "A": "Risk-free rate",
      "B": "Investor's risk profile",
      "C": "Position on the efficient frontier"
    },
    "answer": "A",
    "explanation": "The correct answer is A. for a given Markowitz efficient frontier, a different risk-free rate will\nresult in a different tangent to the frontier, hence a different optimal risky portfolio. CAL(P) is the\noptimal capital allocation line and Portfolio P is the optimal risky portfolio. Thus, with the\naddition of the risk-free asset, we are able to narrow our selection of risky portfolios to a single\noptimal risky portfolio, P, which is at the tangent of CAL(P) and the efficient frontier of risky\nassets.\nWhile an investor's risk profile affects their choice of asset allocation and position on the efficient\nfrontier, the optimal risky portfolio itself remains unchanged. All investors face the same market\nportfolio since market prices incorporate all publicly available information efficiently, and\nindividual views do not affect it (hence option B is inaccurate).\nOption C is incorrect. The optimal risk portfolio is the intersection of the optimal capital\nallocation line and the efficient frontier. The optimal risk portfolio is located on the efficient\nfrontier, but the position on the efficient frontier is not necessarily the optimal risk portfolio."
  },
  {
    "id": "jc_PM_033",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 33,
    "question": "With respect to the capital asset pricing model, which of the following values of beta\nfor an asset is most likely to have an expected return for the asset that is less than the\nrisk-free rate?",
    "options": {
      "A": "-0.5",
      "B": "0.0",
      "C": "0.5"
    },
    "answer": "A",
    "explanation": "If an asset’s beta is negative, the required return will be less than the risk-free rate in the CAPM.\nWhen combined with a positive market return, the asset reduces the risk of the overall portfolio,\nwhich makes the asset very valuable. Insurance is an example of a negative beta asset."
  },
  {
    "id": "jc_PM_034",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 34,
    "question": "Factors such as changes in industrial production contribute to:",
    "options": {
      "A": "systematic risk",
      "B": "Nonsystematic risk",
      "C": "both systematic and unsystematic risk."
    },
    "answer": "B",
    "explanation": "Nonsystematic risk is the risk that pertains to a single company or industry.\nSystematic (market-related) risk is caused by macroeconomic variables such as interest rate\nvolatility."
  },
  {
    "id": "jc_PM_035",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 35,
    "question": "An analyst uses a multifactor model to estimate the expected returns of various\nsecurities. The model analyzes historical and cross-sectional return data to identify\nfactors that explain the variance or covariance in the securities’ observed returns. This\nmodel is most likely a:",
    "options": {
      "A": "statistical factor model",
      "B": "macroeconomic factor model",
      "C": "fundamental factor model."
    },
    "answer": "A",
    "explanation": "Statistical factor models use historical and cross-sectional return data to iden- tify factors that\nexplain the variance or covariance in the observed returns of securities.\nMacroeconomic factor models use economic factors that are correlated with security returns,\nsuch as economic growth, the interest rate, the inflation rate, productivity, etc.\nFundamental factor models use the relationships between security returns and firms’ underlying\nfundamentals, such as earnings, earnings growth, cash flow generation, investment in research,\netc."
  },
  {
    "id": "jc_PM_036",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 36,
    "question": "An analyst gathers the following information:\nExpected Annual Expected Standard Correlation between\nSecurity\nReturn (%) Deviation (%) Security and the Market\nSecurity 1 12 26 0.7\nSecurity 2 12 21 0.8 Security 3 15 21 0.9\nMarket 11 16 1.0\nWhich security has the least amount of market risk?",
    "options": {
      "A": "Security 1",
      "B": "Security 2",
      "C": "Security 3"
    },
    "answer": "B",
    "explanation": "𝜎𝜎𝑖𝑖\nβ Se 𝑖𝑖 c = ur 𝜌𝜌 it 𝑖𝑖 y ,𝑚𝑚 2 𝜎𝜎h𝑚𝑚as the lowest beta value: 1.05= ρ 2,m ×σ 2 = 0.8×21%\nσ 16%\nm\nCompared to security 1 and 3 with beta values of 1.1375 and 1.3125, respectively."
  },
  {
    "id": "jc_PM_037",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 37,
    "question": "With respect to the capital market theory, investors are most likely compensate for::",
    "options": {
      "A": "unexpected negative political events",
      "B": "recent development of a new drug of a pharmaceutical company",
      "C": "CEO’s retirement of a public company."
    },
    "answer": "A",
    "explanation": "One important conclusion of capital market theory is that equilibrium security returns depend on\na stock’s or a portfolio’s systematic risk, not its total risk as measured by standard deviation.\nChanges that occur within a country's policies is a type of systematic risks which will ultimately\nlead to higher expected returns.\nA new drug and CEO’s retirement are types of non-systematic risks."
  },
  {
    "id": "jc_PM_038",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 38,
    "question": "An analyst gathered the following information about the stock of UG and the market.\nExpected Return of UG’s stock E(R ) 15%\nUG\nExpected Return of market R 10%\nM\nStandard deviation of market return σ 12%\nM\nCovariance between UG’s stock and market Cov (UG,M) 0.03\nIf the risk-free rate is 4%, is UG’s stock overvalued?",
    "options": {
      "A": "Yes",
      "B": "No, it is fairly valued",
      "C": "No, it is undervalued."
    },
    "answer": "A",
    "explanation": "First: Calculate the beta of UG’s stock\nCov(UG,M) 0.03\nβ= = ≈2.08\nσ2 0.122\nM\nThen: Calculate the required rate of return of UG’s stock\n= 4%+2.08×(10%-4%) = 16.48%\nE(R)=R +β(R −R )\nf m f\nThe expected return of UG is 15%, which is less than the required return of 16.48%, so the UG’s\nstock is overvalued."
  },
  {
    "id": "jc_PM_039",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 39,
    "question": "Following its decision to divest its non-core assets, analysts expect HCL Corp's standard\ndeviation of returns to rise to 25% and its correlation with the market portfolio to\nremain unchanged at 0.8. The risk-free rate and the market risk premium are expected\nto remain unchanged at 4% and 8%, respectively. However, the market portfolio's\nstandard deviation of returns is expected to decrease to 15%. The firm's expected\nreturn after the restructure is closest to:",
    "options": {
      "A": "12.00%",
      "B": "14.64%",
      "C": "9.32%."
    },
    "answer": "B",
    "explanation": "We first compute the firm’s beta: . The expected return is\n𝜌𝜌𝑖𝑖𝑚𝑚𝜎𝜎𝑖𝑖𝜎𝜎𝑚𝑚 0.8∗0.25\n2\ncomputed using: 𝛽𝛽 = 𝜎𝜎𝑚𝑚 = 0.15 =1.33 .\nE(𝑅𝑅𝑖𝑖)=𝑅𝑅𝑓𝑓 +𝛽𝛽[𝐸𝐸�𝑅𝑅𝑚𝑚−𝑅𝑅𝑓𝑓�]=0.04+1.33×0.08=14.64%"
  },
  {
    "id": "jc_PM_040",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 40,
    "question": "Stock X and Stock Y have the same level of total risk. Stock X has twice the systematic risk of Stock Y and half its non-systematic risk. Stock X's expected return will most likely\nbe:",
    "options": {
      "A": "lower than the expected return of Stock Y",
      "B": "the same as the expected return of Stock Y",
      "C": "higher than the expected return of Stock Y."
    },
    "answer": "C",
    "explanation": "Because Stock X has a higher systematic risk level compared with Stock Y, its expected return will\nbe higher than that of Stock Y."
  },
  {
    "id": "jc_PM_041",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 41,
    "question": "An investor with $20,000 decides to borrow an additional $10,000 at the risk-free rate\nand invest all the available funds in the market portfolio. This investor's portfolio beta is\nclosest to:",
    "options": {
      "A": "0.5",
      "B": "1.5",
      "C": "1.0."
    },
    "answer": "B",
    "explanation": "The weight in the market portfolio is 30,000/20,000 = 1.5 and the weight in the risk-free asset is –\n10,000/20,000 = –0.5. Because the beta of the risk-free asset is 0 and the market portfolio's beta\nis 1, the portfolio's beta is: β = 0 (–0.5) + 1 (1.5) = 1.5.\np\n× ×"
  },
  {
    "id": "jc_PM_042",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 42,
    "question": "With respect to return-generating models, the intercept term and slope of the market\nmodel is the asset’s estimated:",
    "options": {
      "A": "Beta and alpha respectively",
      "B": "Alpha and beta respectively",
      "C": "Variance and correlation respectively."
    },
    "answer": "B",
    "explanation": "In the market model, R = α + βR + e, the intercept, α, and slope coefficient, β, are estimated\ni i i m i i i\nusing historical security and market returns."
  },
  {
    "id": "jc_PM_043",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 43,
    "question": "If an investor hold a portfolio with a long investment horizon, the main return is\nmeasured by:",
    "options": {
      "A": "beta",
      "B": "alpha",
      "C": "security selection."
    },
    "answer": "A",
    "explanation": "A financial market compensates systematic risks which is measured by beta."
  },
  {
    "id": "jc_PM_044",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 44,
    "question": "What kind of measure of risk does the Security Market Line (SML) plot against expected\nreturns of a portfolio？",
    "options": {
      "A": "Unsystematic risk",
      "B": "Systematic risk",
      "C": "Total risk"
    },
    "answer": "B",
    "explanation": "The answer is B. The Security Market Line (SML) plots expected returns against systematic risk,\nmeasured by beta. Beta measures the sensitivity of a security's returns to changes in the overall\nstock market returns. By connecting the risk-free asset and the tangency portfolio, the SML\nillustrates the equilibrium relationship between the expected return and the systematic risk of a\nportfolio, where additional risk leads to additional return in a well-diversified market portfolio."
  },
  {
    "id": "jc_PM_045",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 45,
    "question": "For which graphical representation do we plot excess return of a security on the y-axis\nand the excess return of the market on the x-axis?",
    "options": {
      "A": "Security Market Line",
      "B": "Capital Allocation Line",
      "C": "Security Characteristic Line"
    },
    "answer": "C",
    "explanation": "The answer is C. because similar to the SML (security market line), we can draw a security\ncharacteristic line (SCL) for a security. The SCL is a plot of the excess return of the security on the\nexcess return of the market. The security characteristic line can also be estimated by regressing\nthe excess security return, Ri – Rf, on the excess market return, Rm – Rf."
  },
  {
    "id": "jc_PM_046",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 46,
    "question": "Which of the following performance measures is most appropriate for an investor who\nis not fully diversified?",
    "options": {
      "A": "M-squared alpha",
      "B": "Treynor ratio",
      "C": "Jensen's alpha."
    },
    "answer": "A",
    "explanation": "M-squared alpha adjusts for risk using standard deviation (i.e., total risk)."
  },
  {
    "id": "jc_PM_047",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 47,
    "question": "A portfolio manager gathered the following information about a fund.\nFund’s rate of return 15%\nMarket rate of return 8%\nRisk-free rate 3%\nBeta of the fund 1.5\nThe Jensen’s alpha for the fund is closest to:",
    "options": {
      "A": "4.5%",
      "B": "7.1%",
      "C": "10.3%"
    },
    "answer": "A",
    "explanation": "Using the Jensen’s alpha formula,\nJensen’s α=Rp-[Rf+Beta(Rm-Rf)]=15%-[3%+1.5×(8%-3%)]=4.5%"
  },
  {
    "id": "jc_PM_048",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 48,
    "question": "With respect to portfolio performance appraisal measures, which of the following\nstatements is most accurate about Jensen’s Alpha?",
    "options": {
      "A": "The difference between the actual portfolio return and the calculated risk-adjusted return is known as Jensen's Alpha, which is a measure of the portfolio manager's ability to generate excess returns above what is predicted by the CAPM.",
      "B": "Jensen’s Alpha is a commonly used measure of performance, which is defined as the difference between the actual return of a portfolio and its expected return as calculated by the Capital Asset Pricing Model (CAPM).",
      "C": "Jensen’s Alpha is defined as the portfolio’s risk premium divided by its total risk."
    },
    "answer": "A",
    "explanation": "The difference between the actual portfolio return and the calculated risk-adjusted return is a\nmeasure of the portfolio’s performance relative to the market portfolio and is called Jensen’s\nalpha."
  },
  {
    "id": "jc_PM_049",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 49,
    "question": "Which performance metric is calculated as the slope of the Capital Allocation Line\n(CAL)?",
    "options": {
      "A": "Treynor ratio",
      "B": "Jensen's alpha",
      "C": "Sharpe ratio"
    },
    "answer": "C",
    "explanation": "The answer is C. The Sharpe ratio measures the return generated by adding additional units of\nrisk in excess of the risk-free rate. It is the slope of the Capital Allocation Line (CAL) connecting\nthe risk-free asset and the optimal risky portfolio."
  },
  {
    "id": "jc_PM_050",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 50,
    "question": "Given the following data for a portfolio and the market:\nPortfolio's Sharpe Ratio 0.9\nPortfolio's Volatility 15%\nMarket Volatility 8% Correlation coefficient between portfolio returns and market returns 0.85\nApproximately what is the portfolio’s Treynor ratio？",
    "options": {
      "A": "0.060",
      "B": "0.085",
      "C": "0.114"
    },
    "answer": "B",
    "explanation": "The answer is B. The Treynor ratio measures excess returns per unit of systematic risk (market\nbeta), calculated as excess return divided by beta.\nBeta (β ) = Correlation Coefficient * (Portfolio Volatility / Market Volatility) = 0.85 * (15% / 8%) =\np\n1.5938\nExcess Return (R - R ) = Sharpe Ratio * Portfolio Volatility = 0.9 * 15% = 13.5%\np f\nTreynor Ratio = Excess Returns / Beta = 13.5% / 1.5938 ≈ 8.47%"
  },
  {
    "id": "jc_PM_051",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 51,
    "question": "Which of the following is least likely to be placed in the appendices to an investment\npolicy statement (IPS)?",
    "options": {
      "A": "Rebalancing policy",
      "B": "Strategic asset allocation",
      "C": "Statement of duties and responsibilities."
    },
    "answer": "C",
    "explanation": "Strategic Asset Allocation (also known as the policy portfolio) and Rebalancing Policy are often\nincluded as appendices to the IPS. The Statement of Duties and Responsibilities, however, is an\nintegral part of the IPS and is unlikely to be placed in an appendix."
  },
  {
    "id": "jc_PM_052",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 52,
    "question": "In a strategic asset allocation, assets within a specific asset class are least likely to have:",
    "options": {
      "A": "low paired correlations",
      "B": "low correlations with other asset classes",
      "C": "similar risk and return expectations."
    },
    "answer": "A",
    "explanation": "In a strategic asset allocation, assets within a specific asset class have high paired correlations\nand low correlations with other asset classes."
  },
  {
    "id": "jc_PM_053",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 53,
    "question": "What is developed by integrating a client's investment objectives and limitations with\nlong-term market expectations?",
    "options": {
      "A": "Investment policy statement",
      "B": "Strategic asset allocation",
      "C": "Risk budget"
    },
    "answer": "B",
    "explanation": "The answer is B. Strategic asset allocation is a long-term plan that defines the percentage of a\nportfolio allocated to different asset classes based on an investor's investment objectives, time\nhorizon, risk tolerance, and capital market assumptions. By incorporating a client's investment\nobjectives and constraints along with long-term capital market expectations, an appropriate mix\nof stocks, bonds, cash, and other assets can be determined to meet their investment goals.\nAn investment policy statement (option A) outlines an investor's overall investment strategy and\nguidelines, including the purpose of the portfolio, risk tolerance, return objectives, and asset\nallocation targets. However, it does not necessarily incorporate long-term capital market\nexpectations in the same manner as strategic asset allocation.\nRisk budgets (option C) refer to the total amount of risk that a portfolio should take on within its\nrisk constraints. It is a subset of the broader asset allocation decision-making process and is\ninfluenced by strategic asset allocation.\nTherefore, combining a client's investment objectives and constraints with long-term capital\nmarket expectations results in developing a strategic asset allocation."
  },
  {
    "id": "jc_PM_054",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 54,
    "question": "In which section of an investment policy statement would you expect to find guidance\non evaluating investment results?",
    "options": {
      "A": "Statement of Duties and Responsibilities",
      "B": "Evaluation and Review",
      "C": "Appendices"
    },
    "answer": "B",
    "explanation": "The answer is B. The Evaluation and Review section of an IPS generally includes provisions for\nregularly reviewing investment results and determining whether actual performance meets or\nexceeds expectations.\nA is Incorrect because the Statement of Duties and Responsibilities details the duties and\nresponsibilities of the client, the custodian of the client’s assets, and the investment managers.\nC is Incorrect because the Appendices includes strategic asset allocation and rebalancing policy.\nMany investors specify a strategic asset allocation (SAA), also known as the policy portfolio, which\nis the baseline allocation of portfolio assets to asset classes in view of the investor’s investment\nobjectives and the investor’s policy with respect to rebalancing asset class weights. This SAA may\ninclude a statement of policy concerning hedging risks such as currency risk and interest rate risk."
  },
  {
    "id": "jc_PM_055",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 55,
    "question": "An individual investor’s ability to take risk is higher than average level. His willingness\nto take risk is lower than average level. How about his risk tolerance, comparing with\nthe average level?",
    "options": {
      "A": "Higher than average level",
      "B": "Lower than average level",
      "C": "Same with the average level."
    },
    "answer": "B",
    "explanation": "When assigning an overall risk tolerance, the prudent approach is to use the lower of ability to\ntake risk and willingness to take risk."
  },
  {
    "id": "jc_PM_056",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 56,
    "question": "Risk assessment questionnaires for investment management clients are most useful in\nmeasuring:",
    "options": {
      "A": "value at risk",
      "B": "ability to take risk",
      "C": "willingness to take risk."
    },
    "answer": "C",
    "explanation": "Risk attitude is a subjective factor and measuring risk attitude is difficult. Oftentimes, investment\nmanagers use psychometric questionnaires, such as those developed by Grable and Joo (2004),\nto assess a client’s willingness to take risk."
  },
  {
    "id": "jc_PM_057",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 57,
    "question": "Which of the following impact(s) one's ability to take risk?",
    "options": {
      "A": "investment time horizon",
      "B": "financial situation",
      "C": "both A and B."
    },
    "answer": "C",
    "explanation": "A long-investment time horizon and a good financial situation lead a higher risk tolerance which\nalso contributes to a greater willingness to take risk.\nIn addition, personality type is most likely to affect an individual's willingness to take risk."
  },
  {
    "id": "jc_PM_058",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 58,
    "question": "Frank Johnson is investing for retirement and has a 20-year horizon. He has an average\nrisk tolerance. Which investment is likely to be the least suitable for a major allocation\nin Johnson’s portfolio?",
    "options": {
      "A": "Listed equities",
      "B": "Private equity",
      "C": "US Treasury bills."
    },
    "answer": "C",
    "explanation": "With a 20-year horizon and average risk tolerance, Johnson can accept the additional risk of listed\nequities and private equity compared with US Treasury bills."
  },
  {
    "id": "jc_PM_059",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 59,
    "question": "Which of the following constraints would most likely appear in the unique needs and\npreferences section of a trusts Investment policy statement? The portfolio is:",
    "options": {
      "A": "subject to the prudent-man standard",
      "B": "subject to income taxes of 35%",
      "C": "prohibited from investing in tobacco companies."
    },
    "answer": "C",
    "explanation": "Unique needs and preferences include the prohibition of certain investments. The investment\nconstraints of liquidity, tax concerns, and legal and regulatory factors adequately address the\nportfolio’s other constraints."
  },
  {
    "id": "jc_PM_060",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 60,
    "question": "Regarding an investment policy statement, which of the following statements regarding\nreturn objectives is most accurate?",
    "options": {
      "A": "Return objectives can only be defined as desired rates of return",
      "B": "Return objectives should be determined without considering risk objectives",
      "C": "When setting a relative return objective, the selected benchmark should reflect realistic"
    },
    "answer": "C",
    "explanation": "The answer is C. Return objectives refer to the targeted level of performance for an investment\nportfolio. They serve as a guide for asset allocation and investment selection decisions. With\nregards to an investment policy statement, when setting a relative return objective, the selected\nbenchmark should reflect realistic market expectations. It should be a relevant and\nrepresentative index or peer group against which the investment manager can measure\nperformance. Furthermore, the benchmark should ideally be investable, meaning it is possible to\nreplicate the benchmark portfolio by purchasing securities available in the market. Therefore,\nstatement C is the most accurate statement regarding return objectives.\nStatement A is not entirely accurate. Return objectives can take various forms, such as a required\nrate of return, a target return range, or a desired return relative to a benchmark or peer group.\nStatement B is not accurate either. Return objectives should be set in conjunction with risk\nobjectives, reflecting the trade-offs between risk and reward. A return objective without\nconsideration of risk objectives might result in excessive exposure to certain types of risk,\nultimately affecting the probability of achieving the desired return."
  },
  {
    "id": "jc_PM_061",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 61,
    "question": "Which of the following statements regarding shareholder engagement is the least\naccurate regarding environmental, social, and governance (ESG) considerations?",
    "options": {
      "A": "Engagement efforts are not time-consuming based on a required good cooperation between the company and shareholders, and the issues are usually resolved without formal procedures.",
      "B": "Clients and investment managers must be clear with each other about the exercise of voting",
      "C": "Alternatively, the client may instruct some proxy agent to vote on its behalf and according to the client's instructions without discretion."
    },
    "answer": "A",
    "explanation": "A is not correct. Shareholder engagement requires good cooperation between investor (client)\nand investment manager. Engagement efforts are time-consuming, and the interest in such\nefforts is often that of the clients rather than that of the investment managers.\nB and C are correct. Clients and investment managers must be clear with each other about the\nexercise of voting rights, filing of shareholder proposals, or entering into conversations with\ncompany management. It may be that the engagement and voting is delegated by the client to\nthe investment manager and implemented according to the manager’s stewardship policy.\nAlternatively, the client may instruct some proxy agent to vote on its behalf and according to its\nown stewardship policies, or the client may instruct voting and maintain dialogue with its\ninvestee companies through either individual engagements or collaborative engagements."
  },
  {
    "id": "jc_PM_062",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 62,
    "question": "Which of the following would most likely be classified as an emotional bias? (Notes,\n2022)",
    "options": {
      "A": "The investor has difficulty interpreting complex new information.",
      "B": "The investor only partially adjusts forecasts when he receives new information",
      "C": "The investor has a tendency to value the same assets higher if he owns them than if he does"
    },
    "answer": "C",
    "explanation": "This describes the endowment bias, where individuals place a higher value on assets they own\nthan if they did not own those same assets. The other two answer choices describe cognitive\nerrors that are due to the inability to analyze the information."
  },
  {
    "id": "jc_PM_063",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 63,
    "question": "Abby Lane has investments scattered across many different accounts from bank savings\nto before-and after-tax retirement accounts to taxable nonretirement accounts. She\nhas multiple investing goals ranging from important short-term goals to longer-term\"\nwish list” goals. She looks at her financial assets and views each holding as designed to\nmeet specific goals. Lane has been very successful in her investment decisions for\nseveral decades and believes she can continue to achieve reasonable results. Lane most\nlikely exhibits: (Notes, 2022)",
    "options": {
      "A": "framing bias",
      "B": "mental accounting",
      "C": "overconfidence bias."
    },
    "answer": "B",
    "explanation": "Viewing each asset in light of meeting a specific goal is mental accounting. There was no\nindication of framing (the way data is provided overly affects the decision process). An investor\nwith decades-long success who expects to produce reasonable results is acting rationally and is\nnot necessarily overconfident."
  },
  {
    "id": "jc_PM_064",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 64,
    "question": "Twenty years ago, Jane set up her initial asset allocation in her defined contribution\nplan by placing an equal amount in each asset class and never changed it. Over time,\nshe increased her contribution by 1% per year until she reached the maximum amount\nallowed by law. Due to her steadfastness and good fortune, coupled with matching\nfunds from her employer, she now finds herself in her early 40s with a million-dollar\nretirement account. Which of the following biases does Jane most likely exhibit? (Notes,\n2022)",
    "options": {
      "A": "Representativeness",
      "B": "Status quo bias",
      "C": "Availability bias."
    },
    "answer": "B",
    "explanation": "Jane is exhibiting status quo bias, where investors leave their asset allocation alone and don't\nchange it according to changing market conditions or changes in their own circumstances. Her\nactions do not suggest representativeness (placing something in a category and assuming it will\nhave the characteristics associated with that category) or availability (putting undue emphasis on\ninformation readily available or easily recalled)."
  },
  {
    "id": "jc_PM_065",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 65,
    "question": "The halo effect suggests that investors tend to overvalue stocks: (Notes, 2022)",
    "options": {
      "A": "from their own country or region",
      "B": "with which the investors are most familiar",
      "C": "that have experienced rapid growth and price appreciation."
    },
    "answer": "C",
    "explanation": "The halo effect suggests investors will view a stock that has experienced rapid growth and price\nappreciation as a good stock to own, which may result in these stocks being overvalued. Home\nbias is the tendency for investors to favor stocks from their own country or region because they\nare more familiar with those stocks."
  },
  {
    "id": "jc_PM_066",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 66,
    "question": "Which of the following would most likely be classified as a regret-aversion bias? The investor:",
    "options": {
      "A": "values the same assets he owns higher than the ones he does not own",
      "B": "holds onto investment positions too long",
      "C": "underreacts to new information maintaining prior beliefs."
    },
    "answer": "B",
    "explanation": "Regret-aversion bias is an emotional bias in which people try to avoid making decisions that will\nresult in action out of fear that the decision will turn out poorly. Regret aversion can cause FMPs\nto hold onto positions too long.\nOption A relates to the endowment bias.\nOption C is displayed in FMPs with conservatism bias."
  },
  {
    "id": "jc_PM_067",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 67,
    "question": "An effective way to overcome endowment bias is:",
    "options": {
      "A": "quantifying the risk-reducing return-enhancing advantages of diversification",
      "B": "reviewing past performance and risk of unfamiliar securities and contemplating the reasoning underlying the recommendation.",
      "C": "ensuring a proper investment plan and maintaining a personal budget."
    },
    "answer": "B",
    "explanation": "An effective way to overcome a desire for familiarity in FMPs with endowment bias is to review\nthe historical performance and risk of the unfamiliar securities and contemplate the reasoning\nunderlying the recommendation.\nOption A is overcoming the status quo bias.\nOption C is overcoming the self-control bias."
  },
  {
    "id": "jc_PM_068",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 68,
    "question": "A consequence of the availability bias is:",
    "options": {
      "A": "Choose an investment, based on advertising rather than on a thorough analysis of the investment's fundamentals, risks, and suitability.",
      "B": "Focus on short-term price fluctuations, which may result in excessive trading",
      "C": "To become more risk-averse when presented with a gain frame of reference and more"
    },
    "answer": "A",
    "explanation": "FMPs’ investment choices may be influenced by how easily information is recalled.\nAs a result of availability bias, FMPs may choose an investment, investment adviser, or mutual\nfund based on advertising rather than on a thorough analysis of the options. For instance, when\nasked to name potential mutual fund companies to invest with, many people will name only the\nfunds that do extensive advertising. The choice of mutual fund should be based on a variety of\nfactors that make it a good fit given the investor’s objectives and risk/return profile."
  },
  {
    "id": "jc_PM_069",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 69,
    "question": "What is the most likely outcome of overconfidence bias among investors?",
    "options": {
      "A": "Holding excessively concentrated portfolios with limited diversification",
      "B": "Continue to hold classes of assets with which they are familiar",
      "C": "Maintaining underperforming investments longer than necessary, hoping for a recovery."
    },
    "answer": "A",
    "explanation": "The answer is A. because overconfidence bias is a bias in which people demonstrate unwarranted\nfaith in their own abilities. As a result of overconfidence bias, FMPs [financial market participants]\nmay hold poorly diversified portfolios, which may result in significant downside risk.\nB is Incorrect because this is a potential consequence of endowment bias, not overconfidence\nbias. Endowment bias is an emotional bias in which people value an asset more when they own it\nthan when they do not. Endowment bias may lead FMPs [financial market participants] to\ncontinue to hold classes of assets with which they are familiar. FMPs may believe they\nunderstand the characteristics of the investments they already own and may be reluctant to\npurchase assets with which they have less experience. Familiarity adds to owners’ perceived\nvalue of a security.\nC is Incorrect because this is a potential consequence of loss-aversion bias, not overconfidence.\nAs a result of loss-aversion bias, FMPs [financial market participants] may hold investments in a\nloss position longer than justified by fundamental analysis, in the hope that they will return to\nbreakeven."
  },
  {
    "id": "jc_PM_070",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 70,
    "question": "Which of the following emotional biases is characterized by sacrificing long-term\nbenefits for immediate gratification?",
    "options": {
      "A": "Loss-aversion bias",
      "B": "Endowment bias",
      "C": "Self-control bias"
    },
    "answer": "C",
    "explanation": "The answer is C. Self-control bias refers to the tendency for individuals to prioritize short-term\npleasure over long-term benefits, often resulting in poor financial decisions. For example,\nchoosing instant gratification such as spending money now instead of saving for retirement or\npaying off debt later can hinder one's ability to achieve long-term financial goals. This behavior is\ndriven by a preference for immediate rewards despite awareness of potential future\nconsequences."
  },
  {
    "id": "jc_PM_071",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 71,
    "question": "Risk management in the case of individuals is best described as concerned with:",
    "options": {
      "A": "hedging risk exposures",
      "B": "maximizing utility while bearing a tolerable level of risk",
      "C": "maximizing utility while avoiding exposure to undesirable risks."
    },
    "answer": "B",
    "explanation": "For individuals, risk management concerns maximizing utility while taking risk consistent with\nindividual’s level of risk tolerance."
  },
  {
    "id": "jc_PM_072",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 72,
    "question": "An example of risk transfer combined with self-insurance is most likely: (mock 125)",
    "options": {
      "A": "a bond portfolio hedged with an interest rate option",
      "B": "an insurance policy with a deductible",
      "C": "a bank that establishes a loan loss reserve fund."
    },
    "answer": "B",
    "explanation": "Risk transfer is accomplished through an insurance policy. A deductible in an insurance policy\nmeans the insured is bearing some of the risk of loss and thereby (partially) self-insuring. Hedging\nwith derivatives accomplishes risk shifting, not risk transfer. A bank loan loss reserve is a form of\nself-insurance combined with diversification, but it does not include risk transfer."
  },
  {
    "id": "jc_PM_073",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 73,
    "question": "A major benefit of employing a risk budgeting process is that it most likely: (mock 125)",
    "options": {
      "A": "allows the organization to determine its enterprise risk tolerance",
      "B": "forces risk tradeoffs across the organization",
      "C": "eliminates the need for hedging within the organization."
    },
    "answer": "B",
    "explanation": "Adding a risk budgeting process causes the organization to consider how its total risk tolerance\nwill be allocated across its subsidiaries.\nEither the total current risks the subsidiaries are engaging in will exceed the risk tolerance and\nsubsidiaries will have to compete for risk by demonstrating highest returns per unit of risk or the\ntotal current risks will be less than the risk tolerance and a search will be underway for the\nsubsidiaries that can best utilize the remaining risk budget.\nThe risk tolerance is determined and then sets the risk budget, rather than being determined by\nit. Hedging can be a part of risk budgeting if hedging produces the superior risk adjusted returns."
  },
  {
    "id": "jc_PM_074",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 74,
    "question": "An example of a non-financial risk is:",
    "options": {
      "A": "market risk",
      "B": "liquidity risk",
      "C": "settlement risk."
    },
    "answer": "C",
    "explanation": "Settlement risk is related to default risk, but deals with the timing of payments rather than the\nrisk of default."
  },
  {
    "id": "jc_PM_075",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 75,
    "question": "Which of the following statements about risk assessment is incorrect?",
    "options": {
      "A": "Normally, the VaR loss exceeds conditional VaR",
      "B": "The VaR measure indicates the probability of a loss of at least a certain level in a time",
      "C": "Both the Sortino ratio and the value-at-risk can measure downside risks."
    },
    "answer": "A",
    "explanation": "Conditional VaR (CVaR) is the weighted average of all loss outcomes in the statistical distribution\nthat exceeds the VaR loss. CVaR can represent extreme losses in much more severe events and\nthus has higher value than VaR."
  },
  {
    "id": "jc_PM_076",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 76,
    "question": "An analyst who wants to assess the downside risk of an alternative investment is least\nlikely to use the investment’s:",
    "options": {
      "A": "Sortino ratio",
      "B": "value at risk (VaR)",
      "C": "Sharpe ratio."
    },
    "answer": "C",
    "explanation": "Downside risk measures focus on the left side of the return distribution curve, where losses occur.\nThe Sharpe ratio assumes that returns are normally distributed. Many alternative investments do\nnot exhibit close-to-normal distributions of returns, which is a crucial assumption for the validity\nof a Sharpe ratio as a comprehensive risk measure. Assuming normal probability distributions\nwhen calculating these measures will lead to an underestimation of downside risk for a\nnegatively skewed distribution.\nBoth the Sortino ratio and the VaR measure are measures of downside risk."
  },
  {
    "id": "jc_PM_077",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 77,
    "question": "An investment policy statement's risk objective states that over a 10-month period,\nwith a probability of 96%, the client's portfolio must not lose more than 4% of its value.\nThis statement is most likely a(n):",
    "options": {
      "A": "relative risk objective",
      "B": "total risk objective",
      "C": "absolute risk objective."
    },
    "answer": "C",
    "explanation": "The statement is an absolute risk objective because it expresses a maximum loss in value with an\nassociated probability of loss."
  },
  {
    "id": "jc_PM_078",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 78,
    "question": "Risk budgeting:",
    "options": {
      "A": "is to establish the organization’s risk appetite",
      "B": "aligns risk management activities with the goals of the overall enterprise and allocates",
      "C": "identifies the extent to which the entity is willing to experience losses or opportunity costs"
    },
    "answer": "B",
    "explanation": "Establishing the organization’s risk appetite is not risk budgeting.\nRisk tolerance defines the qualitative assessment and evaluation of potential sources of risk in an\norganization."
  },
  {
    "id": "jc_PM_079",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 79,
    "question": "Risk budgeting most likely:",
    "options": {
      "A": "limits the cost of hedging a portfolio",
      "B": "can be defined by a measure such as beta or scenario loss",
      "C": "focuses on the appetite for risk and what exposures are acceptable."
    },
    "answer": "B",
    "explanation": "B is correct. Risk budgeting quantifies and allocates the tolerable risk according to specific metrics.\nA risk budget can be multidimensional or a simple, one-dimensional risk measure, such as\nstandard deviation, beta, value at risk, or scenario loss, among others.\nA is incorrect. Limiting the amount invested for hedging purposes is not a result of a\nmarket-benchmarked choice of risk intensity.\nC is incorrect. Risk tolerance focuses on the appetite for risk."
  },
  {
    "id": "jc_PM_080",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 80,
    "question": "The German firm IHK AG has entered into a three-month forward currency contract to\npurchase USD35 million versus euros from US firm GED Corp. to hedge a future\npayment obligation. The US dollar appreciates 5% in the coming three months. IHK\nshould most likely focus on:",
    "options": {
      "A": "market risk",
      "B": "liquidity risk",
      "C": "counterparty risk."
    },
    "answer": "C",
    "explanation": "C is correct. IHK’s potential risk is settlement risk, which is a type of counterparty risk. Settlement\nrisk deals with the settling of payments that occur just before a default. If IHK wires the euros to\nGED and GED then declares bankruptcy, IHK will not be able to get the money back.\nA is incorrect. IHK would not face market risk since the forward contract would have become\nmore valuable during the three months.\nB is incorrect. Liquidity risk is the risk of a significant downward valuation adjustment when\nselling a financial asset and is not applicable for a contract for which the price was fixed when the\ncontract was initiated."
  },
  {
    "id": "jc_PM_081",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 81,
    "question": "Which of the following pairs of risks are most closely related?",
    "options": {
      "A": "Model risk and tail risk",
      "B": "Liquidity risk and operational risk",
      "C": "Credit risk and solvency risk"
    },
    "answer": "A",
    "explanation": "A is correct. Model risk is the risk of using the wrong model to analyze an investment or the risk\nof using the right model for the analysis but using it incorrectly. Tail risk, although it involves\nunlikely but substantial losses, typically results from using inappropriate modeling assumptions\nsuch as assuming that returns are normally distributed. Credit risk involves the risk of a borrower\nnot repaying you, whereas solvency risk is the risk of you running out of the money needed to\npay your obligations. Liquidity risk is the risk that the future transaction price for an investment\nwill be different than expected, whereas operational risk includes a wide range of potential\nproblems occurring within an organization’s personnel and systems.\nB is incorrect because liquidity risk is the risk that the future transaction price for an investment\nwill be different than expected, whereas operational risk includes a wide range of potential\nproblems occurring within an organization’s personnel and systems.\nC is incorrect because credit risk involves the risk of a borrower not repaying you, whereas\nsolvency risk is the risk of you running out of the money needed to pay your obligations."
  },
  {
    "id": "jc_PM_082",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 82,
    "question": "Among other things, an organization’s risk tolerance should most likely reflect its:",
    "options": {
      "A": "perception of market stability",
      "B": "size",
      "C": "competitive position."
    },
    "answer": "C",
    "explanation": "C is correct. An organization with a strong competitive position can recover from losses more\neasily than one with a weaker competitive position. Therefore an organization’s risk tolerance\nshould reflect its competitive position. An organization’s size does not define the risk sources it\nfaces or the relative losses it can absorb, so it should not be reflected in its risk tolerance. Neither\nthe risk sources affecting an organization nor the size of the losses an organization can absorb are\na function of its perception of market stability.\nA is incorrect because neither the risk sources affecting an organization nor the size of the losses\nan organization can absorb are a function of perceived market stability.\nB is incorrect because an organization’s size does not define the risk sources it faces or the\nrelative losses it can absorb, so it should not be reflected in its risk tolerance."
  },
  {
    "id": "jc_PM_083",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 83,
    "question": "What is the best way to describe the process of risk management?",
    "options": {
      "A": "A set of decisions that minimizes the risk taken",
      "B": "A set of decisions that bears a tolerable level of risk",
      "C": "A set of decisions that predicts the potential risk correctly."
    },
    "answer": "B",
    "explanation": "The answer is B. Risk management is the process of identifying, assessing, prioritizing, and\ncontrolling risks in order to achieve an organization's objectives while minimizing losses. In other\nwords, risk management aims to bear a tolerable level of risk in pursuit of maximizing a\ncompany's value. Option B accurately captures this objective.\nOption A is incorrect because risk management does not aim to eliminate risk completely, but\nrather to manage it within acceptable limits. Eliminating all risk would be unrealistic and may\neven lead to missed opportunities.\nOption C is also incorrect because while predicting potential risks is an important aspect of risk\nmanagement, it is not the ultimate goal. Even if an organization can predict risks accurately, it still\nneeds to make decisions about how to handle those risks in order to achieve its goals while\nbearing a tolerable level of risk."
  },
  {
    "id": "jc_PM_084",
    "source": "JC_PM",
    "subject": "组合管理",
    "subjectEn": "Portfolio Management",
    "num": 84,
    "question": "Which of the following statements is least aligned with effective risk governance\npractices?",
    "options": {
      "A": "Developing a comprehensive understanding of the enterprise's overall risk profile",
      "B": "Clearly articulating the enterprise's risk appetite and thresholds",
      "C": "Implementing a bottom-up approach to guide risk management efforts throughout the organization."
    },
    "answer": "C",
    "explanation": "The answer is C. Effective risk governance requires taking an enterprise-wide view of risks, which\nmeans developing a comprehensive understanding of the enterprise's overall risk profile. This\nincludes identifying and evaluating both internal and external factors that could potentially\nimpact the achievement of the enterprise's strategic objectives. Hence, statement A aligns with\neffective risk governance practices.\nAdditionally, effective risk governance involves defining the enterprise's risk appetite and\nthresholds, i.e., the amount and type of risk the enterprise is willing to accept in pursuit of its\nobjectives. This helps ensure that risk-taking activities remain within acceptable bounds and\nsupports informed decision-making across the organization. Statement B aligns with effective risk\ngovernance practices.\nStatement C, however, suggests implementing a bottom-up process to direct risk management\nactivities, where decisions regarding risk management are made at lower levels of the\norganization and then communicated upwards. While input from lower levels should certainly be\nconsidered, a purely bottom-up approach may result in fragmented and inconsistent risk\nmanagement practices across different parts of the organization. Effective risk governance\ntypically relies on a top-down approach, where senior management sets the tone for risk\nmanagement and establishes clear policies and procedures to guide risk management efforts\nthroughout the organization. Therefore, statement C is least aligned with effective risk\ngovernance practices."
  },
  {
    "id": "jc_FI_002",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 2,
    "question": "Proceeds for repaying securitized bonds most likely come from the: Mock",
    "options": {
      "A": "claims-paying ability of the operating entity",
      "B": "cash flows of the project the bond is financing",
      "C": "cash flows of the underlying financial assets"
    },
    "answer": "C",
    "explanation": "Securitized bonds typically rely on the cash flows generated by one or more underlying financial\nassets as the primary source of the contractual payments to bondholders rather than on the claims-\npaying ability of the operating entity."
  },
  {
    "id": "jc_FI_003",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 3,
    "question": "Which of the following content is included in negative bond covenants. The issuer is:",
    "options": {
      "A": "required to pay taxes as they come due",
      "B": "prohibited from investing in risky projects",
      "C": "required to maintain its current lines of business"
    },
    "answer": "B",
    "explanation": "Prohibiting the issuer from investing in risky projects restricts the issuer's potential business\ndecisions. This restriction is referred to as negative bond covenants."
  },
  {
    "id": "jc_FI_004",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 4,
    "question": "An analyst reviews a corporate bond indenture that contains these two covenants:\n1 The borrower will pay interest semiannually and principal at maturity.\n2 The borrower will not incur additional debt if its debt-to-capital ratio is more than\n50%.\nWhat types of covenants are these? (Mock 2019)",
    "options": {
      "A": "Covenant 1 is affirmative, and Covenant 2 is negative",
      "B": "Both are affirmative covenants",
      "C": "Covenant 1 is negative, and Covenant 2 is affirmative."
    },
    "answer": "A",
    "explanation": "Paying interest and principal is one of the most common affirmative covenants. Negative\ncovenants set forth certain limitations and restrictions on the borrower’s activities. The more\ncommon restrictive covenants are those that impose limitations on the borrower’s ability to incur\nadditional debt, such as specifying a debt-to-capital ratio, unless certain tests are satisfied."
  },
  {
    "id": "jc_FI_005",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 5,
    "question": "The type of residential mortgage least likely to contain a “balloon” payment is a(n):",
    "options": {
      "A": "interest-only mortgage. Mock 2018",
      "B": "fully amortizing mortgage",
      "C": "partially amortizing mortgage"
    },
    "answer": "B",
    "explanation": "A fully amortizing mortgage is least likely to contain a balloon payment because the sum of all the\nscheduled principal repayments during the mortgage’s life is such that when the last mortgage\npayment is made the loan is paid in full."
  },
  {
    "id": "jc_FI_006",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 6,
    "question": "Relative to a fully amortized bond, the coupon payments of an otherwise similar partially\namortized bond are:",
    "options": {
      "A": "lower or equal",
      "B": "equal",
      "C": "higher or equal"
    },
    "answer": "C",
    "explanation": "Except at maturity, the principal repayments are lower for a partially amortized bond than for an\notherwise similar fully amortized bond. Consequently, the principal amounts outstanding and,\ntherefore, the amounts of interest payments are higher for a partially amortized bond than for a\nfully amortized bond, all else equal. The only exception is the first interest payment, which is the\nsame for both repayment structures. This is because no principal repayment has been made by\nthe time the first coupon is paid."
  },
  {
    "id": "jc_FI_007",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 7,
    "question": "Which of the following terms in a bond issue most likely helps to reduce credit risk?",
    "options": {
      "A": "Sinking fund arrangement 2016 mock",
      "B": "Floating rate note",
      "C": "Term maturity structure"
    },
    "answer": "A",
    "explanation": "A sinking fund arrangement is a way to reduce credit risk by making the issuer set aside funds over\ntime to retire the bond issue."
  },
  {
    "id": "jc_FI_008",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 8,
    "question": "An investor is least likely exposed to reinvestment risk from owning a(n): (Mock 2018)",
    "options": {
      "A": "amortizing security",
      "B": "zero-coupon bond",
      "C": "callable bond"
    },
    "answer": "B",
    "explanation": "There are no interim cash flows for a zero-coupon bond until the maturity."
  },
  {
    "id": "jc_FI_009",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 9,
    "question": "A 10-year, capital-indexed bond linked to the Consumer Price Index (CPI) is issued with a\ncoupon rate of 8% and a par value of 1,000. The bond pays interest semi-annually. During\nthe first six months after the bond's issuance, the annualized CPI increases by 6%. On the\nfirst coupon payment date, the bond's:",
    "options": {
      "A": "coupon rate increases to 11%",
      "B": "coupon payment is equal to 41.2",
      "C": "principal amount increases to 1,100"
    },
    "answer": "B",
    "explanation": "Capital-indexed bonds pay a fixed coupon rate that is applied to a principal amount that increases\nin line with increases in the index during the bond's life. If the consumer price index increases by\n6%, the coupon rate remains unchanged at 8%, but the principal amount increases by 6%/2=3%\nand the coupon payment is based on the inflation-adjusted principal amount. On the first coupon\npayment date, the inflation-adjusted principal amount is 1,000 × (1 + 0.03) = 1,030 and the semi-\nannual coupon payment is equal to (0.08 × 1,030) / 2 = 41.20."
  },
  {
    "id": "jc_FI_010",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 10,
    "question": "A company issues a 10-year bond on 1 January 2014. Its contract requires that the\ncoupon rate increase by specified margins at specified dates as shown in the following\ntable: Coupon Payment Date Range Coupon Rate\n1 Jan 2014–31 Dec 2015 4.00%\n1 Jan 2016–31 Dec 2017 5.00%\n1 Jan 2018–31 Dec 2019 7.50%\n1 Jan 2020–31 Dec 2023 9.00%\nThe security is most likely a (n): 2019 AM Mock",
    "options": {
      "A": "step-up note",
      "B": "deferred coupon bond",
      "C": "floating rate bond."
    },
    "answer": "A",
    "explanation": "A step-up coupon bond has contractually mandated changes in its coupon rate over time."
  },
  {
    "id": "jc_FI_011",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 11,
    "question": "Relative to an otherwise similar option-free bond, which of the following statement is\ncorrect?",
    "options": {
      "A": "callable bond will trade at a higher price",
      "B": "putable bond will trade at a higher price",
      "C": "convertible bond will trade at a lower price"
    },
    "answer": "B",
    "explanation": "A put feature is beneficial to the bondholders. Thus, the price of a putable bond will typically be\nhigher than the price of an otherwise similar non-putable bond."
  },
  {
    "id": "jc_FI_012",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 12,
    "question": "Compared with an otherwise identical option-free bond, when interest rates fall, the\nprice of a callable bond will: 2014 Mock PM",
    "options": {
      "A": "Rise more",
      "B": "Rise less",
      "C": "Fall less."
    },
    "answer": "B",
    "explanation": "When interest rates fall, the price of the embedded call option increases. The price of a callable\nbond equals the price of an option-free bond minus the price of the embedded call option. So, the\nprice of the callable bond will not increase as much as an option-free bond because the price of\nthe call option increases. As interest rates fall, the bond is more likely to be called, limiting the\nupside potential of price."
  },
  {
    "id": "jc_FI_013",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 13,
    "question": "If a bank wants the ability to retire debt prior to maturity in order to take advantage of\nlower borrowing rates, it most likely issues a: 2015 Mock AM",
    "options": {
      "A": "callable bond",
      "B": "putable bond",
      "C": "convertible bond"
    },
    "answer": "A",
    "explanation": "Callable bonds give issuers the ability to retire debt prior to maturity. The most compelling reason\nfor them to do so is to take advantage of lower borrowing rates."
  },
  {
    "id": "jc_FI_014",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 14,
    "question": "On 15 December 2013, Alpha Corp. issued a 10-year callable bond paying an annual\ncoupon of 8%. The bond is callable in whole or in part at any time after 15 December\n2018. This type of callable bond is most likely referred to as: (Mock 2018)",
    "options": {
      "A": "American style",
      "B": "European style",
      "C": "Bermuda style"
    },
    "answer": "A",
    "explanation": "An American-style callable bond is a bond in which the issuer has the right to call the bonds at any\ntime starting on the first call date."
  },
  {
    "id": "jc_FI_015",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 15,
    "question": "The number of common shares a convertible bond can be converted into is the:",
    "options": {
      "A": "conversion price",
      "B": "conversion value",
      "C": "conversion ratio"
    },
    "answer": "C",
    "explanation": "Because the conversion ratio is the number of common shares that each bond can be converted\ninto."
  },
  {
    "id": "jc_FI_016",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 16,
    "question": "A South Korean electronics company issued bonds denominated in US dollars in the\nUnited States and registered with the SEC. These bonds are most likely known as a",
    "options": {
      "A": "Foreign bond",
      "B": "Eurobond",
      "C": "Global bond"
    },
    "answer": "A",
    "explanation": "Bonds issued by entities that are incorporated in another country are called foreign bonds.\nTherefore, the bonds issued by a South Korean company in the United States are known as foreign\nbonds."
  },
  {
    "id": "jc_FI_017",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 17,
    "question": "Bonds issued in the Eurobond market are least likely:",
    "options": {
      "A": "denominated only in euros",
      "B": "in the form of registered bonds",
      "C": "issued outside the jurisdiction of the country in whose currency the bond is denominated."
    },
    "answer": "A",
    "explanation": "Because bonds issued and traded on the Eurobond market are called Eurobonds, and they are\nnamed after the currency in which they are denominated. For example, Eurodollar and Euroyen\nbonds are denominated in US dollars and Japanese yens, respectively. Bonds that are denominated\nin euros are called euro-denominated Eurobonds.\nEurobonds, domestic, and foreign bonds are now registered bonds for which ownership is recorded\nby either name or serial number. Eurobonds are issued outside the jurisdiction of any single country,\nare usually unsecured, and may be denominated in any currency, including the issuer’s domestic\ncurrency."
  },
  {
    "id": "jc_FI_018",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 18,
    "question": "Ted Nguyen is an investor domiciled in a country with an original issue discount tax\nprovision. He purchases a zero-coupon bond at a deep discount to par value with the\nintention of holding the bond until maturity. At maturity, he will most likely face:",
    "options": {
      "A": "neither a capital loss nor gain. 2016 mock AM",
      "B": "a capital loss",
      "C": "a capital gain."
    },
    "answer": "A",
    "explanation": "An original issue discount tax provision allows the investor to increase the cost basis of the bond,\nso when the bond matures, the investor faces no capital gain or loss."
  },
  {
    "id": "jc_FI_019",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 19,
    "question": "The primary market for bonds is a market:",
    "options": {
      "A": "in which bonds are issued for the first time to raise capital",
      "B": "that has a specific location where the trading of bonds takes place",
      "C": "in which existing bonds are traded among individuals and institutions"
    },
    "answer": "A",
    "explanation": "Primary bond markets are markets in which bonds are issued for the first time to raise capital."
  },
  {
    "id": "jc_FI_020",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 20,
    "question": "In major developed bond markets, newly issued sovereign bonds are most often sold to\nthe public via a(n): (2020 )",
    "options": {
      "A": "auction",
      "B": "private placement",
      "C": "best efforts offering."
    },
    "answer": "A",
    "explanation": "In major developed bond markets, newly issued sovereign bonds are sold to the public via an\nauction."
  },
  {
    "id": "jc_FI_021",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 21,
    "question": "Which of the following statements regarding the US commercial paper is most accurate?",
    "options": {
      "A": "requires the issuer to pledge collateral",
      "B": "requires the issuer to have a backup line of credit",
      "C": "has a maturity ranging from a few days up to two years. 6.9. Repurchase Agreements"
    },
    "answer": "B",
    "explanation": "Because credit rating agencies often require that commercial paper issuers secure a backup line of\ncredit from banks."
  },
  {
    "id": "jc_FI_022",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 22,
    "question": "The higher the level of repo margin:",
    "options": {
      "A": "The higher the quality of the collateral.",
      "B": "The higher the credit quality of the counterparty",
      "C": "The longer the length of the repurchase agreement"
    },
    "answer": "C",
    "explanation": "The longer the length of the repurchase agreement, the higher the repo margin (haircut)."
  },
  {
    "id": "jc_FI_023",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 23,
    "question": "A repurchase agreement is most comparable to a(n):",
    "options": {
      "A": "Interbank deposit",
      "B": "Collateralized loan",
      "C": "Negotiable certificate of deposit."
    },
    "answer": "B",
    "explanation": "A repurchase agreement (repo) can be viewed as a collateralized loan where the security sold and\nsubsequently repurchased represents the collateral posted."
  },
  {
    "id": "jc_FI_024",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 24,
    "question": "Compared with sovereign bonds, the yield of non-sovereign bonds with similar\ncharacteristics most likely is:",
    "options": {
      "A": "Lower",
      "B": "The same",
      "C": "Higher"
    },
    "answer": "C",
    "explanation": "Non-sovereign bonds usually trade at a higher yield and lower price than sovereign bonds with\nsimilar characteristics. The higher yield is because of the higher credit risk associated with non-\nsovereign issuers relative to sovereign issuers, although default rates of local governments are\nhistorically low and their credit quality is usually high. The higher yield may also be a consequence\nof non-sovereign bonds being less liquid than sovereign bonds with similar characteristics."
  },
  {
    "id": "jc_FI_025",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 25,
    "question": "The bond issued by a multilateral agency such as the International Monetary Fund (IMF)\ncan be regarded as a:",
    "options": {
      "A": "Sovereign bond",
      "B": "Supranational bond",
      "C": "Quasi-government bond"
    },
    "answer": "B",
    "explanation": "The IMF is a multilateral agency that issues supranational bonds."
  },
  {
    "id": "jc_FI_026",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 26,
    "question": "Agency bonds are issued by:",
    "options": {
      "A": "local governments",
      "B": "national governments",
      "C": "quasi-government entities"
    },
    "answer": "C",
    "explanation": "Agency bonds are issued by quasi-government entities. These entities are agencies and\norganizations usually established by national governments to perform various functions for them."
  },
  {
    "id": "jc_FI_027",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 27,
    "question": "Which of the following are most likely a kind of supranational bonds? Bonds issued by\nthe: (Mock 2018)",
    "options": {
      "A": "Federal Farm Agency of the United States",
      "B": "Government of Malaysia",
      "C": "European Investment Bank."
    },
    "answer": "C",
    "explanation": "Supranational bonds are bonds issued by such supranational agencies as the European Investment\nBank and the International Monetary Fund."
  },
  {
    "id": "jc_FI_028",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 28,
    "question": "An investor who owns a bond with a 9% coupon rate that pays interest semiannually and\nmatures in three years is considering its sale. If the required rate of return on the bond\nis 11%, the price of the bond per 100 of par value is closest to: (2020 )",
    "options": {
      "A": "95.00",
      "B": "95.11",
      "C": "105.15"
    },
    "answer": "A",
    "explanation": "The bond price is closest to 95.00. The bond has six semiannual periods. Half of the annual\ncoupon is paid in each period with the required rate of return also being halved. The price is\ndetermined in the following manner:\nN=6, I/Y=5.5, PMT=4.5, FV=100\nCPT (PV)=95"
  },
  {
    "id": "jc_FI_029",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 29,
    "question": "Given two otherwise identical bonds, when interest rates rise, the price of Bond A\ndeclines more than the price of Bond B. Compared with Bond B, Bond A most likely:",
    "options": {
      "A": "has a shorter maturity. (2019 mock A PM)",
      "B": "is callable",
      "C": "has a lower coupon"
    },
    "answer": "C",
    "explanation": "The lower the coupon rate, the more sensitive the bond’s price is to changes in interest rates."
  },
  {
    "id": "jc_FI_030",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 30,
    "question": "A bond with 20 years remaining until maturity is currently trading for 111 per 100 of par\nvalue. The bond offers a 5% coupon rate with interest paid semiannually. The bond’s\nannual yield-to-maturity is closest to: (2020 )",
    "options": {
      "A": "2.09%",
      "B": "4.18%",
      "C": "4.50%"
    },
    "answer": "B",
    "explanation": "The formula for calculating this bond’s yield-to-maturity is:\nN=40, PV=-111, PMT=2.5, FV=100\nCPT (I/Y)=2.09(%)\n2.09*2=4.18(%)"
  },
  {
    "id": "jc_FI_031",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 31,
    "question": "How much will the value of a three-year $100 par value coupon bond with annual\npayments, a coupon rate of 10%, and a discount rate of 6% most likely change if market\ninterest rates immediately increase by 2%",
    "options": {
      "A": "-5.04",
      "B": "-5.54",
      "C": "-5.85."
    },
    "answer": "B",
    "explanation": "The value of the bond is\n10 10 110\n+ + =9.43+8.90+92.36=110.69\n1.06 1.062 1.063\nif market interest rates increase, the discount rate will increase, and the value will be\n10 10 110\n+ + =9.26+8.57+87.32=105.15\n1.08 1.082 1.083\na change of 105.15-110.69=-5.54."
  },
  {
    "id": "jc_FI_032",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 32,
    "question": "The price often quoted by the bond dealers is most likely:",
    "options": {
      "A": "flat price",
      "B": "full price",
      "C": "full price plus accrued interest"
    },
    "answer": "A",
    "explanation": "Bond dealers usually quote the flat price. When a trade takes place, the accrued interest is added\nto the flat price to obtain the full price paid by the buyer and received by the seller on the\nsettlement date. The reason for using the flat price for quotation is to avoid misleading investors\nabout the market price trend for the bond. If the full price were to be quoted by dealers,\ninvestors would see the price rise day after day even if the yield-to-maturity did not change. That\nis because the amount of accrued interest increases each day. Then after the coupon payment is\nmade the quoted price would drop dramatically. Using the flat price for quotation avoids that\nmisrepresentation."
  },
  {
    "id": "jc_FI_033",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 33,
    "question": "Bond A, described in the exhibit below, is sold for settlement on 21 June 2015. The full\nprice that bond A will settle at on 21 June 2015 is closest to:\n• Annual coupon:8%\n• Coupon payment frequency: semiannual\n• Interest payment date:5 April and 5 October\n• Maturity date: 5 October 2017\n• Day count convention:30/360\n• Annual yield-to-maturity:6%",
    "options": {
      "A": "104.58",
      "B": "105.26",
      "C": "105.89."
    },
    "answer": "C",
    "explanation": "4 4 4 4 104\nPV= + + + + =104.58\n(1+0.03)1 (1+0.03)2 (1+0.03)3 (1+0.03)4 (1+0.03)5\nPVfull = 104.58×1.0376/180 =105.89"
  },
  {
    "id": "jc_FI_034",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 34,
    "question": "A credit analyst is least likely to use matrix pricing to estimate the required yield and\nprice of a(n): (2208 )",
    "options": {
      "A": "newly underwritten bond",
      "B": "inactively traded investment grade bond",
      "C": "actively traded speculative grade bond."
    },
    "answer": "C",
    "explanation": "Matrix pricing is most suited to pricing inactively traded bonds and newly underwritten bonds. A\ncredit analyst is least likely to use matrix pricing to price an actively traded bond."
  },
  {
    "id": "jc_FI_035",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 35,
    "question": "An analyst needs to assign a value to an illiquid three-year, 5.0% annual coupon payment\ncorporate bond. The analyst identifies two corporate bonds that have similar credit\nquality: One is a two-year, 6.0% annual coupon payment bond priced at 106.500 per 100\nof par value, and the other is a four-year, 5.0% annual coupon payment bond priced at\n106.250 per 100 of par value. Using matrix pricing, the estimated price of the illiquid\nbond per 100 of par value is closest to:",
    "options": {
      "A": "105.763",
      "B": "106.375",
      "C": "106.775."
    },
    "answer": "A",
    "explanation": "The first step is to determine the yields-to-maturity on the observed bonds. The required yield on\nthe two-year, 6.0% bond priced at 106.500 is 2.622%. The required yield on the four-year, 5.0%\nbond priced at 106.250 is 3.306%.\nApplying the method of linear interpolation, the YTM of a bond with three-year maturity and\nsame credit ranking is (2.622%+3.306%)/2=2.964%, then calculate the price, which is 105.763.\nSome fixed-rate bonds are not actively traded. Therefore, there is no market price available to\ncalculate the rate of return required by investors. The same problem occurs for bonds that are\nnot yet issued. In these situations, it is common to estimate the market discount rate and price\nbased on the quoted or flat prices of more frequently traded comparable bonds. These\ncomparable bonds have similar times-to-maturity, coupon rates, and credit quality. This\nestimation process is called matrix pricing."
  },
  {
    "id": "jc_FI_036",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 36,
    "question": "Assume a bond with a 10% coupon rate, and paid annually and 3 years to maturity. When\na discount rate of 8%, the value of the bond today is $105.15. One day later, the discount\nrate increases to 12%. Assuming the discount rate remains at 12% over the remaining\nlife of the bond, the price of the bond between today and maturity will:",
    "options": {
      "A": "Decreases then remains unchanged 2016 Mock PM",
      "B": "Increases then decreases",
      "C": "Decreases then increases"
    },
    "answer": "C",
    "explanation": "If the discount rate increases to 12% from 8%, the price of a bond decreases. At a discount rate of\n12%, the bond sells at a discount to face value. As a discount bond approaches maturity, it will\nincrease in price over time until it reaches par at maturity."
  },
  {
    "id": "jc_FI_037",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 37,
    "question": "Consider a $100 par value bond with a 7 percent coupon paid annually and 5 years to\nmaturity. At a discount rate of 6.0 percent, the value of the bond is $104.21. One year\nlater, the appropriate discount rate has risen to 6.5 percent and the bond's value is\n$101.71. What part of this change in value is most likely attributable to the passage of\ntime?",
    "options": {
      "A": "$0.37",
      "B": "$0.74",
      "C": "$1.76"
    },
    "answer": "B",
    "explanation": "With 4 years remaining to maturity and a discount rate that is unchanged at 6.0 percent, the\nvalue of the bond would be $103.47 or N=4, I/Y=6, PMT=7, FV=100, CPT(PV)=103.47, the part of\nthis change in value attributing to the passage of time is 104.21-103.47=0.74."
  },
  {
    "id": "jc_FI_038",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 38,
    "question": "The current yield for a 6% coupon, 8-year bond, with a maturity par value of $100 and\ncurrently priced at $92.50 is closest to: (2019 mock AM )",
    "options": {
      "A": "6.00%",
      "B": "6.49%",
      "C": "7.25%"
    },
    "answer": "B",
    "explanation": "Current yield is calculated as ($6/$92.50) = 6.49%."
  },
  {
    "id": "jc_FI_039",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 39,
    "question": "A bond with 6 years remaining until maturity is currently trading for 99 per 100 of par\nvalue. The par value of the bond is 1000, The bond offers a 4% coupon rate with interest\npaid semiannually. The bond is first callable in 3 years at 101 per 100 of par value, the\nbond’s annual yield-to-call is closest to: (2012 )",
    "options": {
      "A": "2.34%",
      "B": "4.36%",
      "C": "4.68%."
    },
    "answer": "C",
    "explanation": "The yield-to-call is 4.68%, the formula for calculating this bond’s yield-to -call is:\nN=6, PV=-990, PMT=20, FV=1010\nCPT (I/Y)=2.338（%）\nYTC=I/Y*2=4.68（%）"
  },
  {
    "id": "jc_FI_040",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 40,
    "question": "A 3-year, U.K. Government Benchmark Bond is issued with a coupon rate of 2% and a\nprice of 100.25. A 3-year, U.K. Government Corporate Bond is issued with a coupon rate\nof 5% and a price of 100.65. Both bonds pay interest annually. The current three-year\nEUR interest rate swap benchmark is 2.12%. The G-spread in basis points(bps) on the U.K.\ncorporate bond is closest to:",
    "options": {
      "A": "285 bps",
      "B": "264 bps",
      "C": "300 bps"
    },
    "answer": "A",
    "explanation": "Solution 1 Yield-to-maturity on the U.K. corporate bond:\n5 5 105\n100.65= + + ,r=0.04762 or 476bps\n(1+r)1 (1+r)2 (1+r)3\nYield-to-maturity on the U.K. government benchmark: 1 0 0 .2 5 =\n(1\n2\n+ r ) 1\n+\n(1 +\n2\nr ) 2\n+\n(1\n1 0\n+\n2\nr ) 3\n, r = 0 .0 1 9 1 3 o r 1 9 1 b p s\nThe G-spread is 476-191=285 bps\nSolution 2 FV=100, PV=-100.25, N=3, PMT=2%×100=2, CPT, I/Y=1.91, r =191bps\ntreasury\nFV=100, PV=-100.65, N=3, PMT=5%×100=5, CPT, I/Y=4.76, r =476bps\nbond\nThe G-spread is r - r =285 bps\nbond treasury"
  },
  {
    "id": "jc_FI_041",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 41,
    "question": "The yield spread of a specific bond relative to the standard swap rate in that currency of\nthe same tenor is most likely:",
    "options": {
      "A": "I-spread",
      "B": "Z-spread",
      "C": "G-spread."
    },
    "answer": "A",
    "explanation": "The I-spread, or interpolated spread, is the yield spread of a specific bond over the standard swap\nrate in that currency of the same tenor. The yield spread in basis points over an actual or\ninterpolated government bond is known as the G-spread. The Z-spread (zero-volatility spread) is\nthe constant spread that is added to each spot rate so that the present value of the cash flows\nmatches the price of the bond."
  },
  {
    "id": "jc_FI_042",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 42,
    "question": "A 180-day commercial paper issue is quoted at a discount rate of 6.50% for a 360-day\nyear. The bond equivalent yield for this instrument is closest to:",
    "options": {
      "A": "6.50%",
      "B": "6.72%",
      "C": "6.81%"
    },
    "answer": "C",
    "explanation": "180\nPV=100×(1− ×0.0650)=96.75\n360\n365 100−96.75\nBEY= × =6.81%\n180 96.75"
  },
  {
    "id": "jc_FI_043",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 43,
    "question": "An analyst evaluates the following information relating to floating rate notes (FRNs)\nissued at par value that have 6-month Libor as a reference rate:\nFloating Rate Note Quoted Margin Discount Margin\nX 0.60% 0.45%\nY 0.70% 0.70%\nZ 0.80% 0.85%\nBased only on the information provided, the FRN that will be priced at a discount on the\nnext reset date is:",
    "options": {
      "A": "FRN X",
      "B": "FRN Y",
      "C": "FRN Z"
    },
    "answer": "C",
    "explanation": "FRN Z will be priced at a discount on the next reset date because the quoted margin of 0.80% is\nless than the discount or required margin of 0.85%. The discount amount is the present value of\nthe extra or \"excess\" interest payments of 0.05% (0.85% - 0.80%). FRN Y will be priced at par\nvalue on the next reset date since there is no difference between the quoted and discount\nmargins. FRN X will be priced at a premium since the quoted margin is greater than the required\nmargin."
  },
  {
    "id": "jc_FI_044",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 44,
    "question": "A floating-rate note pays six-month market reference rate plus 50 basis points. The\ninterest payments are made in June and December. If the six-month market reference\nrate was 1.80% in June and 2.20% in December of the same year, the coupon rate paid\nin December of that year was closest to:",
    "options": {
      "A": "2.30%",
      "B": "2.50%",
      "C": "2.80%."
    },
    "answer": "A",
    "explanation": "Because the applicable interest rate in December is the six-month market reference rate in June\nplus the 50 basis point margin = 1.80% + 0.50% = 2.30%."
  },
  {
    "id": "jc_FI_045",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 45,
    "question": "A yield curve constructed from a sequence of yields-to-maturity on zero-coupon bonds\nis the:",
    "options": {
      "A": "Par curve",
      "B": "Spot curve",
      "C": "Forward curve"
    },
    "answer": "B",
    "explanation": "The spot curve, also known as the strip or zero curve, is the yield curve constructed from a\nsequence of yields-to-maturities on zero-coupon bonds. The par curve is a sequence of yields-to-\nmaturity such that each bond is priced at par value. The forward curve is constructed using a\nseries of forward rates, each having the same time frame."
  },
  {
    "id": "jc_FI_046",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 46,
    "question": "To obtain the spot yield curve, a bond analyst would most likely use the most:",
    "options": {
      "A": "Recently issued and actively traded government bonds. 2017 Mock AM",
      "B": "Seasoned and actively traded government bonds",
      "C": "Recently issued and actively traded corporate bonds"
    },
    "answer": "A",
    "explanation": "To obtain the spot yield curve a bond analyst would prefer to use the most recently issued and\nactively traded government bonds. Such bonds will have similar liquidity as well as fewer tax\neffects because they will be priced closer to par value."
  },
  {
    "id": "jc_FI_047",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 47,
    "question": "A 3-year bond offers a 10% coupon rate with interest paid annually. Assuming the\nfollowing sequence of spot rates, the price of the bond is closest to:\nTime (year) Spot Rates\n1 8%\n2 9%\n3 10%",
    "options": {
      "A": "98.56",
      "B": "100.32.",
      "C": "102.53"
    },
    "answer": "B",
    "explanation": "The bond price is closest to 100.32.\nPV=(10 / 1.08) + (10 / (1.09)2) + (110 / (1.10)3) = 100.32"
  },
  {
    "id": "jc_FI_048",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 48,
    "question": "A three-year spot rate of 8% is most likely the:",
    "options": {
      "A": "yield to maturity on a coupon-paying bond maturing at the end of Year 3",
      "B": "coupon rate in Year 3 on a coupon-paying bond maturing at the end of Year 6",
      "C": "yield to maturity on a zero-coupon bond maturing at the end of Year 3"
    },
    "answer": "C",
    "explanation": "A spot rate is defined as the yield to maturity on a zero-coupon bond maturing at the date of that\ncash flow."
  },
  {
    "id": "jc_FI_049",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 49,
    "question": "Which of the following statements is most likely correct regarding the spot and forward\ncurves. The spot curve: 2016 Mock AM",
    "options": {
      "A": "Cannot be calculated from the forward curve, but the forward curve can be calculated from the spot curve.",
      "B": "Can be calculated from the forward curve, and the forward curve can be calculated from the spot curve.",
      "C": "Can be calculated from the forward curve, but the forward curve cannot be calculated from the spot curve."
    },
    "answer": "B",
    "explanation": "The forward and spot curves are interconnected to each other. The spot curve can be calculated\nfrom the forward curve, and the forward curve can be calculated from the spot curve. Either\ncurve can be used to value fixed-rate bonds."
  },
  {
    "id": "jc_FI_050",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 50,
    "question": "Using the following US Treasury forward rates, the value of a 2.5-year $100 par value\nTreasury bond with a 6% coupon rate is closest to: (Mock 2018 )\nPeriod Years Forward\nRate\n1 0.5 1.50%\n2 1 2.50%\n3 1.5 3.30%\n4 2 3.90%\n5 2.5 4.30%",
    "options": {
      "A": "$104.19",
      "B": "$107.03",
      "C": "$109.87"
    },
    "answer": "B",
    "explanation": "The value of the bond is\n3 3\n+\n(1+0.015/2) (1+0.015/2)∗(1+0.025/2)\n3\n+\n0.025\n(1+0.015/2)∗(1+ )∗(1+0.033/2)\n2\n3\n+\n0.025 0.033\n(1+0.015/2)∗(1+ )∗(1+ )∗(1+0.039/2)\n2 2\n3+100\n+\n0.025 0.033 0.039\n(1+0.015/2)∗(1+ )∗(1+ )∗(1+ )∗(1+0.043/2)\n2 2 2\n= $107.03"
  },
  {
    "id": "jc_FI_051",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 51,
    "question": "Assume the following annual forward rates were calculated from the yield curve:\nTime Period Forward Rate\n0y1y 0.50%\n1y1y 0.70%\n2y1y 1.00% 3y1y 1.50%\n4y1y 2.20%\nThe four-year spot rate is closest to: (2012 )",
    "options": {
      "A": "0.924%",
      "B": "1.348%",
      "C": "1.178%."
    },
    "answer": "A",
    "explanation": "The four-year spot rate can be computed as:\nZ =[(1.005)×(1.007)×(1.01)×(1.015)]1/4-1=0.924%\n4"
  },
  {
    "id": "jc_FI_052",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 52,
    "question": "An investor purchases a nine-year, 8% annual coupon payment bond at a price equal to\npar value. After the bond is purchased and before the first coupon is received, interest\nrates increase to 10%. The investor sells the bond after five years. Assume that interest\nrates remain unchanged at 10% over the five-year holding period. Assuming that all\ncoupons are reinvested over the holding period, the investor's five-year horizon yield is\nclosest to:",
    "options": {
      "A": "5.66%",
      "B": "6.11%",
      "C": "7.34%"
    },
    "answer": "C",
    "explanation": "8 8 8 108\nPV= + + + =93.66\n1.11 1.12 1.13 1.14\nCoupon & coupon reinvestment=8×1.14+8×1.13+8×1.12+8×1.11+8=48.84\n93.66+48.84\n100= ,𝑟 =0.0734\n(1+𝑟)5"
  },
  {
    "id": "jc_FI_053",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 53,
    "question": "Three option-free, semiannual-pay bonds have identical yields to maturity and the\nfollowing characteristics: Bond Coupon Rate Maturity\n1 4.5% 10 years\n2 5.5% 7 years\n3 5.5% 10 years\nThe bond with the greatest reinvestment risk is:",
    "options": {
      "A": "Bond 1",
      "B": "Bond 2",
      "C": "Bond 3"
    },
    "answer": "C",
    "explanation": "Bond 3 has the highest coupon and the longest maturity. The bond with the highest coupon and\nthe longest maturity will have the greatest reinvestment risk. Bond 3 has a higher coupon than\nBond 1 and a longer maturity than Bond 2. \"Coupon reinvestment risk increases with a higher\ncoupon rate and a longer reinvestment time period.\""
  },
  {
    "id": "jc_FI_054",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 54,
    "question": "When a bond investor’s coupon reinvestment risk dominates market price risk, the\ninvestor’s investment horizon must be: (2020 mock C AM)",
    "options": {
      "A": "less than the Macaulay duration of the bond",
      "B": "equal to the Macaulay duration of the bond",
      "C": "greater than the Macaulay duration of the bond"
    },
    "answer": "C",
    "explanation": "When the investment horizon is greater than the Macaulay duration of the bond, coupon\nreinvestment risk dominates market price risk and the investor is at risk of lower interest rates."
  },
  {
    "id": "jc_FI_055",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 55,
    "question": "A long-term bond investor with an investment horizon of 8 years invests in option-free,\nfixed-rate bonds with a Macaulay duration of 10.5. The investor most likely currently has\na: 2016 Mock PM",
    "options": {
      "A": "positive duration gap and is currently exposed to the risk of lower interest rates",
      "B": "positive duration gap and is currently exposed to the risk of higher interest rates",
      "C": "negative duration gap and is currently exposed to the risk of higher interest rates"
    },
    "answer": "B",
    "explanation": "The duration gap is the bond’s Macaulay duration minus the investment horizon, which is positive\nin this case. A positive duration gap implies that the investor is currently exposed to the risk of\nhigher interest rates."
  },
  {
    "id": "jc_FI_056",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 56,
    "question": "An investor holds a bond with the following characteristics:\nYield to maturity 8%\nModified duration 6.7\nIf the duration gap is zero, the investment horizon is closest to:",
    "options": {
      "A": "6.2 years",
      "B": "7.2 years",
      "C": "8.1 years."
    },
    "answer": "B",
    "explanation": "Because we use the fact that ModDur = MacDur / (1 + r) to calculate the Macaulay duration of\nthe bond: MacDur = 6.7 × (1 + 8%) = 7.24. Because the duration gap is equal to the bond's\nMacaulay duration minus the investment horizon the investment horizon is closest to 7.2 years."
  },
  {
    "id": "jc_FI_057",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 57,
    "question": "An investor buys a 6% annual payment bond with three years to maturity. The bond has\na yield-to-maturity of 8% and is currently priced at 948.45806 per 1000 of par. The bond's\nMacaulay duration is closest to:",
    "options": {
      "A": "2.66",
      "B": "2.83",
      "C": "3.00."
    },
    "answer": "B",
    "explanation": "period Cash flow Present value weight Period × weight\n1 60 55.55556 0.058575 0.058575\n2 60 51.44033 0.054236 0.108471\n3 1060 841.46218 0.887190 2.661570\n948.45806 1.000000 2.828617"
  },
  {
    "id": "jc_FI_058",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 58,
    "question": "Which of the following statements is least accurate regarding the factors that affect the\ninterest rate risk characteristics of an option-free bond? 2017 Mock PM",
    "options": {
      "A": "The longer the bond's maturity, the greater the bond's price sensitivity to changes in interest",
      "B": "The lower the coupon rate, the greater the bond's price sensitivity to changes in interest rates",
      "C": "The higher the yield, the greater the bond's price sensitivity to changes in interest rates"
    },
    "answer": "C",
    "explanation": "Option-free bonds have positive convexity. The higher the yield to maturity, the lower the\nduration (and thus the lower the interest rate risk)."
  },
  {
    "id": "jc_FI_059",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 59,
    "question": "The option-free bonds issued by ALS Corp. are currently priced at 105.85. Based on a\nportfolio manager's valuation model, a 1bp increase in interest rates will result in the\nbond price falling to 105.75 whereas a 1bp decrease in interest rates will result in the\nbond price rising to 105.90. The price value of a basis point (PVBP) for the bonds is closest\nto: (Mock 2018 )",
    "options": {
      "A": "0.025",
      "B": "0.050",
      "C": "0.075"
    },
    "answer": "C",
    "explanation": "The bond's PVBP is computed using\nPVBP=\n(PV− )−( PV+)\n.\n2\n105.90 −105.75\n=0.075\n2"
  },
  {
    "id": "jc_FI_060",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 60,
    "question": "Consider two bonds that are identical except for their coupon rates. The bond that will\nhave the highest interest rate risk most likely has the: (2020 mock B AM)",
    "options": {
      "A": "lowest coupon rate",
      "B": "coupon rate closest to its market yield",
      "C": "highest coupon rate"
    },
    "answer": "A",
    "explanation": "A lower coupon rate means that more of the bond’s value comes from repayment of face value,\nwhich occurs at the end of the bond’s life."
  },
  {
    "id": "jc_FI_061",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 61,
    "question": "An analyst gathers the following information on a bond:\nPrice 85.4734\nPayment frequency Annual\nTime to maturity 5 years\nCoupon 4%\nMacaulay duration 4.5947\nModified duration is closest to:",
    "options": {
      "A": "4.2702",
      "B": "4.4180",
      "C": "4.7785."
    },
    "answer": "A",
    "explanation": "Modified duration is Macaulay duration divided by 1 plus yield per period. Macaulay duration is\nprovided in the table, so YTM is calculated as follows:\n4.5947\nN = 5. PV = 85.4734. PMT = –4. FV = –100. CPT I/Y = 7.6%. ModDur= =4.2702\n1.076"
  },
  {
    "id": "jc_FI_062",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 62,
    "question": "The option-free bonds of Argus Corporation have a duration of eight years. When\ninterest rates rise by 100 bps, the bond’s price declines by 7.9%. When interest rates fall\nby 100 bps, however, the price rises by 8.2%. The asymmetrical price change is most\nlikely caused by the: 2019 mock C AM",
    "options": {
      "A": "coupon effect",
      "B": "maturity effect",
      "C": "convexity effect"
    },
    "answer": "C",
    "explanation": "A fall in interest rates will result in a higher percentage rise in the bond’s price compared with the\npercentage fall in the bond’s price when interest rates rise by the same amount."
  },
  {
    "id": "jc_FI_063",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 63,
    "question": "A bond has a modified duration of 10 and convexity of 75 that is currently trading for 85\nper 100 of par value. If the bond’s yield to maturity decreases by 50 bps, the expected\npercentage price change is closest to:",
    "options": {
      "A": "4.90%",
      "B": "5.09%",
      "C": "5.20%."
    },
    "answer": "B",
    "explanation": "The expected percentage price change for a bond can be is estimated as follows:\n%ΔPFull ≈ (–AnnModDur × ΔYield) + [0.5 × AnnConvexity × (ΔYield)2]\n%ΔPFull ≈ (–10 × –0.005) + [0.5 × 75× (–0.005)2] = 5.09%"
  },
  {
    "id": "jc_FI_064",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 64,
    "question": "A bond is currently trading for 100.94 per 100 of par value. If the bond’s yield-to-maturity\n(YTM) rises by 20 basis points, the bond’s full price is expected to fall to 100.67. If the\nbond’s YTM decreases by 20 basis points, the bond’s full price is expected to increase to\n101.28. The bond’ s approximate convexity is closest to: ( )",
    "options": {
      "A": "0.34",
      "B": "35.00",
      "C": "173.37"
    },
    "answer": "C",
    "explanation": "approximate convexity=\n[101.28+100.67−(2∗100.94)]⁄(0.0022∗100.94)=173.37"
  },
  {
    "id": "jc_FI_065",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 65,
    "question": "The annualized convexity of a three-year, 3.2% (semiannual) coupon bond priced at par\nat issuance on 1 August 2025 and maturing on 1 August 2028 is closest to:\nThree-Year, 3.2% Semiannual Bond at Issuance\nFixed coupon 3.2%\nPeriods per year 2\nPrice (per 100 Par Value) 100\nYield-to-Maturity (%) 3.2%",
    "options": {
      "A": "7.2831",
      "B": "9.6506",
      "C": "38.6022."
    },
    "answer": "B",
    "explanation": "Col. 1 Col. 2 Col. 3 Col. 4 Col. 5 Col. 6 = Col. 2 × (Col. 2 +\n1)×Col. 5 × (1 + YTM/2)^(-2)\nPeriod Time to Cash Present Weight Convexity of Cash Flows\nReceipt Flow Value\n1 1.0 1.6 1.5748 0.0157 0.0304\n2 2.0 1.6 1.5500 0.0155 0.0901\n3 3.0 1.6 1.5256 0.0153 0.1779\n4 4.0 1.6 1.5016 0.0150 0.2906\n5 5.0 1.6 1.4779 0.0148 0.4301\n6 6.0 101.6 92.3701 0.9237 37.5831\n100.0000 1.0000 38.6022\nAnnualized Convexity 9.6506"
  },
  {
    "id": "jc_FI_066",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 66,
    "question": "Using the information below, and prices are per 100 of par value. The bond portfolio’s\nmoney duration is closest to: (2208 )\nMarket Modified\nbond Full price\nvalue duration\nA 95.00 180,000 7.5\nB 85.00 100,000 5.5\nC 90.00 120,000",
    "options": {
      "A": "686.40",
      "B": "707.50",
      "C": "735.60"
    },
    "answer": "B",
    "explanation": "Money Duration of Bond A = 7.5 × 95.00 = 712.50\nMoney Duration of Bond B = 5.5 × 85.00 = 467.50\nMoney Duration of Bond C = 10 × 90.00 = 900\nThe total market value of the bond portfolio is 180,000 + 100,000 + 120,000 = 400,000.\nThe portfolio duration is 712.50 × (180,000/400,000) + 467.50 × (100,000/400,000) + 900 ×\n(120,000/400,000) = 707.50."
  },
  {
    "id": "jc_FI_067",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 67,
    "question": "One limitation as to why using the average duration of the bonds in a portfolio does not\nproperly reflect that portfolio’s yield curve risk is that the approach assumes:",
    "options": {
      "A": "a parallel shift in the yield curve. (2020 mock C PM)",
      "B": "all the bonds have the same discount rate",
      "C": "a non-parallel shift in the yield curve."
    },
    "answer": "A",
    "explanation": "A limitation to using the average duration approach in calculating portfolio duration is that it\nassumes all interest rates across the yield curve change by the same amount and, therefore, each\nbond’s price changes by the same percentage."
  },
  {
    "id": "jc_FI_068",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 68,
    "question": "Which of the following is a curve duration measure?",
    "options": {
      "A": "Macaulay duration",
      "B": "Money duration",
      "C": "Effective duration"
    },
    "answer": "C",
    "explanation": "Because effective duration is a curve duration statistic in that it measures interest rate risk in terms\nof a parallel shift in the benchmark yield curve."
  },
  {
    "id": "jc_FI_069",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 69,
    "question": "In a rising interest rate environment, the effective duration of a putable bond relative to\nan otherwise identical non-putable bond, will most likely be: 2017 Mock PM",
    "options": {
      "A": "higher",
      "B": "lower",
      "C": "the same"
    },
    "answer": "B",
    "explanation": "When interest rates are rising, the put option becomes more valuable to the investor. The ability\nto sell the bond at par value limits the price depreciation as rates rise. So, the presence of an\nembedded put option reduces the sensitivity of the bond price to changes in interest rates,\nresulting in a lower effective duration."
  },
  {
    "id": "jc_FI_070",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 70,
    "question": "A fixed-income security's current price is $103.25. The manager estimates that the price\nwill rise to $106.75 if interest rates decrease 0.35% or fall to $102.10 if interest rates\nincrease 0.35%. The security's effective duration is closest to: 2014 Mock PM",
    "options": {
      "A": "6.22.",
      "B": "6.43",
      "C": "6.51"
    },
    "answer": "B",
    "explanation": "The effective duration is defined as:\n(𝑃𝑉 )−(𝑃𝑉+)\n−\n2∗(∆𝐶𝑢𝑟𝑣𝑒)∗(𝑃𝑉 )\n0\nEffective duration = (106.75 – 102.10)/(2 × 0.0035 × 103.25)= 6.43"
  },
  {
    "id": "jc_FI_071",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 71,
    "question": "Assuming no change in the credit risk of a bond, the presence of an embedded put option:",
    "options": {
      "A": "reduces the effective duration of the bond",
      "B": "increases the effective duration of the bond",
      "C": "does not change the effective duration of the bond"
    },
    "answer": "A",
    "explanation": "The presence of an embedded put option reduces the effective duration of the bond, especially\nwhen rates are rising. If interest rates are low compared with the coupon rate, the value of the\nput option is low and the impact of the change in the benchmark yield on the bond's price is very\nsimilar to the impact on the price of a non-putable bond. But when benchmark interest rates rise,\nthe put option becomes more valuable to the investor. The ability to sell the bond at par value\nlimits the price depreciation as rates rise. The presence of an embedded put option reduces the\nsensitivity of the bond price to changes in the benchmark yield, assuming no change in credit\nrisk."
  },
  {
    "id": "jc_FI_072",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 72,
    "question": "Which of the following most likely exhibits negative convexity? (Mock 2016)",
    "options": {
      "A": "An option-free bond",
      "B": "A callable bond",
      "C": "A putable bond."
    },
    "answer": "B",
    "explanation": "A callable bond exhibits negative convexity at low yield levels and positive convexity at high yield\nlevels."
  },
  {
    "id": "jc_FI_073",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 73,
    "question": "Empirical duration is likely the best measure of the impact of yield changes on portfolio\nvalue, especially under stressed market conditions, for a portfolio consisting of:",
    "options": {
      "A": "100% sovereign bonds of several AAA rated euro area issuers",
      "B": "100% covered bonds of several AAA rated euro area corporate issuers",
      "C": "25% AAA rated sovereign bonds, 25% AAA rated corporate bonds, and 50% high-yield (i.e.,"
    },
    "answer": "C",
    "explanation": "Empirical duration is the best measure—better than analytical duration—of the impact of yield\nchanges on portfolio value, especially under stressed market conditions, for a portfolio consisting\nof a variety of different bonds from different issuers, such as the portfolio described in Answer C.\nIn this portfolio, credit spread changes on the high-yield bonds may partly or fully offset yield\nchanges on the AAA rated sovereign bonds and spread changes on the AAA rated corporate\nbonds; this interaction is best captured using empirical duration. The portfolios described in\nAnswers A and B consist of the same types of bonds from similar issuers—sovereign bonds from\nsimilar-rated sovereign issuers (A) and covered bonds from similar-rated corporate issuers (B)—so\nempirical and analytical durations should be roughly similar in each of these portfolios."
  },
  {
    "id": "jc_FI_074",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 74,
    "question": "With respect to a bond with an embedded option, for parallel shifts in the benchmark\nyield curve, effective duration most likely indicates the same interest rate sensitivity as:",
    "options": {
      "A": "modified duration",
      "B": "key rate durations",
      "C": "money duration."
    },
    "answer": "B",
    "explanation": "Because for parallel shifts in the benchmark yield curve, key rate durations will indicate the same\ninterest rate sensitivity as effective duration."
  },
  {
    "id": "jc_FI_075",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 75,
    "question": "For corporate bonds, the components of credit risk most likely include:",
    "options": {
      "A": "default risk and liquidity risk",
      "B": "default risk and loss severity",
      "C": "loss severity and liquidity risk"
    },
    "answer": "B",
    "explanation": "Credit risk is the risk of loss resulting from the borrower (issuer of debt) failing to make full and\ntimely payments of interest and/or principal. Credit risk has two components. The first is known as\ndefault risk, or default probability. The second component is loss severity (also known as 'loss given\ndefault')."
  },
  {
    "id": "jc_FI_076",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 76,
    "question": "All else being equal, expected loss for a bond:",
    "options": {
      "A": "is independent of the recovery rate",
      "B": "increases as the recovery rate decreases",
      "C": "changes proportionally to the recovery rate."
    },
    "answer": "B",
    "explanation": "Because Expected loss = Default probability × Loss given default×(Expected Exposure-Collateral),\nwhere Loss given default is often expressed as (1 – Recovery rate), where the recovery rate is the\npercentage of the principal amount recovered in the event of default. Thus expected loss can also\nbe written as Expected loss = Default probability × (1 – Recovery rate)×(Expected Exposure-\nCollateral), which means that the lower the recovery rate, the higher the expected loss."
  },
  {
    "id": "jc_FI_077",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 77,
    "question": "An analyst is concerned that a bond might be downgraded one category by Fitch Ratings\nand become non-investment grade. The current rating of this bond is most likely:",
    "options": {
      "A": "A–",
      "B": "BBB–",
      "C": "BB. 6.28. Factors Impacting Yield Spreads"
    },
    "answer": "B",
    "explanation": "Because BBB– is the lowest rating for investment grade bonds. A one-category downgrade (from\nBBB– to BB+) would make the bond non-investment grade."
  },
  {
    "id": "jc_FI_078",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 78,
    "question": "For a bond with a modified duration of 6 and a convexity of 0.50, which of the following\nchanges in credit spread would result in a price decrease closest to 7.4%?",
    "options": {
      "A": "-1.3%",
      "B": "1.3%",
      "C": "2.1%"
    },
    "answer": "B",
    "explanation": "%ΔPVFull = −(AnnModDur × ΔSpread) + ½AnnConvexity × (ΔSpread)2\n− (6 × 0.013) + ½(50) × (0.013)2 = –0.074 or –7.4%.\nThe spread change is inversely related to the price effect, with a spread increase leading to a fall in\nbond price. Note that since duration was 6, we had to rescale the convexity from 0.50 to 50."
  },
  {
    "id": "jc_FI_079",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 79,
    "question": "The creditworthiness of sovereign and other government borrowers is based upon\nqualitative and quantitative factors. Which of the following is not a qualitative factor?",
    "options": {
      "A": "Monetary Effectiveness",
      "B": "Fiscal Flexibility",
      "C": "Economic Growth and Stability"
    },
    "answer": "C",
    "explanation": "The qualitative factor is economic flexibility, not economic growth and stability."
  },
  {
    "id": "jc_FI_080",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 80,
    "question": "Gulf Metro, a special purpose vehicle of the Government of India, issued retail bonds for\nthe purpose of financing mass rapid transport infrastructure in Bombay. Interest and\nprincipal payments are supported by the cash flows of the mass rapid transport system\nand a credit guarantee of the Government of India. This bond is an example of:",
    "options": {
      "A": "an agency bond",
      "B": "a general obligation (GO) bond",
      "C": "a revenue bond."
    },
    "answer": "C",
    "explanation": "The funding is for the development of a specific mass rapid project for Bombay, and the\nrepayment is supported by the revenue of the mass rapid transport line. While the bonds also\nhave a sovereign guarantee to provide credit enhancement, the primary source of repayment is\nmass transit revenue."
  },
  {
    "id": "jc_FI_081",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 81,
    "question": "Which of the following is a characteristic of higher corporate creditworthiness?",
    "options": {
      "A": "higher liquidity",
      "B": "Higher leverage",
      "C": "Lower coverage."
    },
    "answer": "A",
    "explanation": "All else held equal, a company with higher liquidity has a greater ability to meet its short-term\nobligations, including debt interest and principal."
  },
  {
    "id": "jc_FI_082",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 82,
    "question": "In the event of default, debentures' claims will most likely rank:",
    "options": {
      "A": "above that of secured debt holders",
      "B": "below that of secured debt holders.",
      "C": "the same as that of secured debt holders"
    },
    "answer": "B",
    "explanation": "Secured debt holders have a direct claim on certain assets and their associated cash flows\nwhereas unsecured debt holders only have a general claim on the issuer's assets and cash flow."
  },
  {
    "id": "jc_FI_083",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 83,
    "question": "The Zera Company has borrowed capital by issuing a number of different securities.\nWhich of the following most likely ranks the highest with respect to priority of payments?\n2019 Mock A AM",
    "options": {
      "A": "Subordinated loan",
      "B": "Third lien debt",
      "C": "Senior unsecured bond"
    },
    "answer": "B",
    "explanation": "Third lien debt is secured debt. It has a secured interest in the pledged assets and ranks higher\nthan all other unsecured debts."
  },
  {
    "id": "jc_FI_084",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 84,
    "question": "Which of the following three companies will most likely have notching issues, when they\nissue corporate bonds?",
    "options": {
      "A": "Company A with AAA rating",
      "B": "Company B with AA rating",
      "C": "Company C with BBB rating"
    },
    "answer": "C",
    "explanation": "Notching is less common for highly rated issuers than for lower-rated issuers. For lower-rated\nissuers, higher default risk leads to significant differences between recovery rates of debt with\ndifferent seniority rankings, leading to more notching."
  },
  {
    "id": "jc_FI_085",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 85,
    "question": "A BBB rated corporation wishes to issue debt to finance its operations at the lowest cost\npossible. If it decides to sell a pool of receivables into a special purpose vehicle (SPV), its\nprimary motivation is most likely to: (2020 mock C AM)",
    "options": {
      "A": "receive a guaranty from the SPV to improve the corporation’s credit rating",
      "B": "allow the corporation to retain a first lien on the assets of the SPV",
      "C": "segregate the assets into a bankruptcy-remote entity for bondholders."
    },
    "answer": "C",
    "explanation": "A key motivation for a corporation to establish a SPV is to separate it as a legal entity. In the case\nof bankruptcy for the corporation, the SPV is unaffected because it is not a subsidiary of the\ncorporation. Given this arrangement, the SPV can achieve a rating as high as AAA and borrow at\nlower rates than the corporation."
  },
  {
    "id": "jc_FI_086",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 86,
    "question": "In the event of default, bondholders in covered bonds most likely have recourse against:",
    "options": {
      "A": "the issuing financial institution only",
      "B": "the underlying asset pool only",
      "C": "both the issuing financial institution and the underlying asset pool"
    },
    "answer": "C",
    "explanation": "Because a covered bond is a debt obligation backed by a segregated pool of assets called a “cover\npool” In the event of default, bondholders have recourse against both the financial institution and\nthe underlying asset pool."
  },
  {
    "id": "jc_FI_087",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 87,
    "question": "Which statement about covered bonds is least accurate? ( )",
    "options": {
      "A": "Covered bonds provide investors with dual recourse, to the cover pool and also to the issuer",
      "B": "Covered bonds usually carry higher credit risks and offer higher yields than otherwise similar ABS.",
      "C": "Covered bonds have a dynamic cover pool, meaning sponsors must replace any prepaid or non-performing assets."
    },
    "answer": "B",
    "explanation": "Covered bonds usually carry lower credit risks and offer lower yields than otherwise similar ABS.\nThe reason is, among other factors, covered bonds provide investors with dual recourse, to the\ncover pool and also to the issuer. Moreover, covered bonds have a dynamic cover pool, meaning\nsponsors must replace any prepaid or non-performing assets."
  },
  {
    "id": "jc_FI_088",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 88,
    "question": "Which of the following internal credit enhancement involves creating different bond\nclasses to share any losses caused by defaults in the collateral pool?",
    "options": {
      "A": "Overcollateralization",
      "B": "Cash reserve fund",
      "C": "Subordination."
    },
    "answer": "C",
    "explanation": "Subordination or credit tranching in the securitization transaction involves creating more than\none bond class or tranche, and the bond classes differ in how they share any losses resulting from\ndefaults in the collateral pool."
  },
  {
    "id": "jc_FI_089",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 89,
    "question": "Which of the following is least likely a feature of a credit card receivable ABS?",
    "options": {
      "A": "An early amortization provision",
      "B": "Amortizing collateral",
      "C": "A lockout period"
    },
    "answer": "B",
    "explanation": "A credit card receivable ABS is an example of an ABS with a non-amortizing collateral. A credit\ncard receivable ABS may require early amortization of the principal if certain events occur. Such\nan early amortization provision would safeguard the credit quality of the issue. And a credit card\nreceivable ABS would typically have a lockout period during which the cash flow that is paid out\nto security holders is based only on finance charges collected and fees."
  },
  {
    "id": "jc_FI_090",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 90,
    "question": "Which of the following about solar ABS is incorrect?",
    "options": {
      "A": "a pre-funding period is used by solar ABS post-transaction",
      "B": "solar loans combine multiple liens to lower default risk",
      "C": "collateral remains on the balance sheet."
    },
    "answer": "C",
    "explanation": "The collateral of solar ABS removed from balance sheet. A pre-funding period is used by solar\nABS post transaction to acquire additional qualifying assets that meet certain eligibility criteria.\nSolar loans combine multiple liens to lower default risk."
  },
  {
    "id": "jc_FI_091",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 91,
    "question": "From the perspective of a CDO manager, an arbitrage collateralized debt obligation most\nlikely differs from a traditional asset-backed security because it involves the: (Mock 2018)",
    "options": {
      "A": "pooling of debt obligations",
      "B": "active management of the collateral",
      "C": "creation of a special purpose entity"
    },
    "answer": "B",
    "explanation": "Unlike a traditional asset-backed security, an arbitrage collateralized debt obligation involves\nactive management because the CDO manager buys and sells debt obligations with the objective\nof paying off different classes of bondholders as well as generating a high return for the\nsubordinated/equity tranche and the manager."
  },
  {
    "id": "jc_FI_092",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 92,
    "question": "Which of the following statements about collateralized loan obligations (CLOs) is\naccurate?",
    "options": {
      "A": "Purchases of a CLO’s collateral are funded by issuing equity",
      "B": "Recourse against both the collateral pool, and the original issuers",
      "C": "Investors in senior or mezzanine bond classes typically earn a higher yield than comparable corporate bonds."
    },
    "answer": "C",
    "explanation": "Investors in senior or mezzanine bond classes earn a potentially higher yield than comparable\ncorporate bonds offer. CLO collateral purchases rely on funds obtained from the issuance of debt.\nRecourse is limited to the collateral pool, with minimal recourse to the original issuers."
  },
  {
    "id": "jc_FI_093",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 93,
    "question": "Relative to a non-recourse mortgage loan, in a recourse mortgage loan the:",
    "options": {
      "A": "lender can change the interest rate charged. (2020 mock C PM)",
      "B": "borrower does not have a strategic default option",
      "C": "borrower is not liable for any shortfall between the property sale proceeds and the loan"
    },
    "answer": "B",
    "explanation": "There are recourse and non-recourse mortgage loans. In a non-recourse loan, the lender does\nnot have a claim against the borrower and thus can look only to the property to recover the\noutstanding mortgage balance. In a recourse loan, the lender can seek to recover any shortfall\nfrom the sale of the property to cover the mortgage loan. The borrower, therefore, has a strategic\ndefault option only in non-recourse loans; for example, if the mortgage is greater than the\nproperty value, he may select to default without further personal obligation."
  },
  {
    "id": "jc_FI_094",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 94,
    "question": "In a mortgage pass-through security the pass-through rate:",
    "options": {
      "A": "Is adjusted as market rates rise or fall",
      "B": "Is equal to the mortgage rate on the underlying pool of mortgages",
      "C": "Adjusts the rate on the underlying pool of mortgages by a servicing fee"
    },
    "answer": "C",
    "explanation": "In a mortgage pass-through security the pass-through rate is less than the mortgage rate on the\nunderlying pool of mortgages by an amount equal to the servicing (and other administrative) fees."
  },
  {
    "id": "jc_FI_095",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 95,
    "question": "When interest rates decrease, mortgage-backed securities most likely exhibit increased:",
    "options": {
      "A": "extension risk.",
      "B": "contraction risk",
      "C": "reinvestment risk."
    },
    "answer": "B",
    "explanation": "Because contraction risk is the risk that when interest rates decline, actual prepayments will be\nhigher than forecasted because homeowners will refinance at now-available lower interest rates.\nThus, a security backed by mortgages will have a shorter maturity than was anticipated at the time\nof purchase. Holding a security whose maturity becomes shorter when interest rates decline has\ntwo adverse consequences for investors. First, investors must reinvest the proceeds at lower\ninterest rates. Second, if the security is prepayable or callable, its price appreciation is not as great\nas that of an otherwise identical bond that does not have a prepayment or call option. Increased\ncontraction risk occurs when interest rates decline."
  },
  {
    "id": "jc_FI_096",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 96,
    "question": "Credit risk is a factor for commercial mortgage-backed securities because they are\nbacked by mortgage loans that:",
    "options": {
      "A": "are non-recourse",
      "B": "have limited call protection",
      "C": "have no prepayment penalty points"
    },
    "answer": "A",
    "explanation": "Because commercial mortgage loans are non-recourse loans, the lender can only look to the\nincome-producing property backing the loan for interest and principal repayment. If there is a\ndefault, the lender looks to the income-producing property backing the loan for interest and\nprincipal repayment. If there is a default, the lender looks to the proceeds from the sale of the\nproperty for repayment and has no recourse against the borrower for any unpaid mortgage loan\nbalance."
  },
  {
    "id": "jc_FI_097",
    "source": "JC_FI",
    "subject": "固定收益",
    "subjectEn": "Fixed Income",
    "num": 97,
    "question": "In the context of commercial mortgage-backed securities (CMBS) which of the following\nmechanisms is most likely a structural call protection?",
    "options": {
      "A": "Sequential-pay tranches",
      "B": "Defeasance",
      "C": "Prepayment lockouts  Solutions 6. Fixed Income"
    },
    "answer": "A",
    "explanation": "A structural call protection can be achieved in a CMBS when it is structured to have sequential-\npay tranches by credit rating."
  },
  {
    "id": "jc_DER_001",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 1,
    "question": "Which of the following derivatives is least likely to be classified as a contingent claim?",
    "options": {
      "A": "A futures contract",
      "B": "A call option contract",
      "C": "A credit default swap"
    },
    "answer": "A",
    "explanation": "A futures contract is classified as a forward commitment in which the buyer undertakes to purchase\nthe underlying asset from the seller at a later date and at a price agreed on by the two parties when\nthe contract is initiated.\nA call option contract is a contingent claim in which the buyer of the option has a right to purchase\nthe underlying asset at a fixed price on or before a pre-specified expiration date.\nA credit default swap is a contingent claim in which the credit protection seller provides protection\nto the credit protection buyer against the credit risk of a third party."
  },
  {
    "id": "jc_DER_002",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 2,
    "question": "In contrast to over-the-counter options, futures contracts most likely:",
    "options": {
      "A": "are not exposed to default risk",
      "B": "represent a right rather than a commitment",
      "C": "are private, customized transactions"
    },
    "answer": "A",
    "explanation": "Over-the-counter options are exposed to default risk, but futures contracts are standardized\ntransactions that take place on futures exchanges and are not exposed to default risk."
  },
  {
    "id": "jc_DER_003",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 3,
    "question": "Which of the following is least likely to be an example of a derivative?",
    "options": {
      "A": "An exchange-traded fund",
      "B": "A contract to sell Alphabet Inc.’s shares at a fixed price",
      "C": "A contract to buy Australian dollars at a predetermined exchange rate"
    },
    "answer": "A",
    "explanation": "Although an exchange-traded fund derives its value from the underlying assets it holds, it does not\ntransform the performance of those assets and so is not a derivative.\nA contract to sell Alphabet Inc.’s shares transforms the performance of the underlying shares of\nAlphabet Inc and is an example of an option derivative.\nA contract to buy Australian dollars transforms the performance of the underlying currency and is\nan example of a currency derivative."
  },
  {
    "id": "jc_DER_004",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 4,
    "question": "Which of the following statement is most likely incorrect?",
    "options": {
      "A": "ETD markets use standardized contracts",
      "B": "OTC markets use market maker while ETD markets do not",
      "C": "OTC markets have greater confidentiality than ETD markets"
    },
    "answer": "B",
    "explanation": "ETD refers to exchange-traded derivative markets, it includes futures, options, and other financial\ncontracts available on exchanges. ETD contracts are more formal and standardized, which facilitates\na more liquid and transparent market. Terms and conditions—such as the size of each contract, type,\nquality, and location of underlying for commodities and maturity date—are set by the exchange.\nOTC refers to over-the-counter derivative market, OTC contracts can be customized to match a\ndesired risk exposure profile, which have greater privacy.\nBoth ETD and OTC markets use market makers. Exchange memberships are held by market makers\n(or dealers) that stand ready to buy at one price and sell at a higher price. In OTC market, the OTC\ndealers, known as market makers, typically enter into offsetting bilateral transactions with one\nanother to transfer risk to other parties."
  },
  {
    "id": "jc_DER_005",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 5,
    "question": "Which of the following most likely has an embedded derivative within its structure?",
    "options": {
      "A": "A put option",
      "B": "A callable bond",
      "C": "A futures contract"
    },
    "answer": "B",
    "explanation": "B is correct because an embedded derivative is a derivative within an underlying, such as a callable,\nputtable, or convertible bond.\nA is incorrect because a stand-alone derivative, is a distinct derivative contract, such as a derivative\non a stock or bond. A put option is therefore a stand-alone derivative not an embedded derivative.\nC is incorrect because a stand-alone derivative, is a distinct derivative contract, such as a derivative\non a stock or bond. A futures contract is also a distinct derivative contract as it is not embedded in\nthe underlying asset."
  },
  {
    "id": "jc_DER_006",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 6,
    "question": "Which of the following is not an advantage of derivative markets?",
    "options": {
      "A": "They are less volatile than spot markets",
      "B": "They facilitate the allocation of risk in the market",
      "C": "They incur lower transaction costs than spot markets"
    },
    "answer": "A",
    "explanation": "Derivative markets are not by nature more or less volatile than spot markets.\nThey facilitate risk allocation by making it easier and less costly to transfer risk, and their transaction\ncosts are lower than those of spot markets."
  },
  {
    "id": "jc_DER_007",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 7,
    "question": "Which of the following is not accurate? The derivative markets tend to:",
    "options": {
      "A": "bring investors more difficulties to go short than to go long",
      "B": "allow trading the risk without trading the instrument itself",
      "C": "improve the allocation of risk and facilitate more effective risk management for both companies and economies."
    },
    "answer": "A",
    "explanation": "One other extremely valuable operational advantage of derivative markets is the ease with which\none can go short. With derivatives, it is nearly as easy to take a short position as to take a long\nposition, whereas for the underlying asset, it is almost always much more difficult to go short than\nto go long. In fact, for many commodities, short selling is nearly impossible."
  },
  {
    "id": "jc_DER_008",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 8,
    "question": "Basis risk is best described as a(n):",
    "options": {
      "A": "investor's inability to meet a margin call due to a lack of funds",
      "B": "potential divergence between the expected value of a derivative and its underlying",
      "C": "divergence in the cash flow timing of a derivative versus that of an underlying transaction."
    },
    "answer": "B",
    "explanation": "A is incorrect because a related risk that can arise for both hedgers and risk takers is liquidity risk,\nor a divergence in the cash flow timing of a derivative versus that of an underlying transaction. The\ndaily settlement of gains and losses in the futures market can give rise to liquidity risk. If an investor\nor issuer using a futures contract to hedge an underlying transaction is unable to meet a margin call\ndue to a lack of funds, the counterparty’s position is closed out and the investor or issuer must cover\nany losses on the derivative trade.\nB is correct because basis risk is the potential divergence between the expected value of a derivative\ninstrument versus an underlying or hedged transaction.\nC is incorrect because a related risk that can arise for both hedgers and risk takers is liquidity risk,\nor a divergence in the cash flow timing of a derivative versus that of an underlying transaction."
  },
  {
    "id": "jc_DER_009",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 9,
    "question": "Which of the following statement is most likely correct according to hedge designation:",
    "options": {
      "A": "A cash flow hedge is a derivative used to offset the fluctuation in fair value of an asset or liability.",
      "B": "A fair value hedge is a derivative designated as absorbing the variable cash flow of a floating-",
      "C": "A net investment hedge is a derivative designated as offsetting the foreign exchange risk of the equity of a foreign operation."
    },
    "answer": "C",
    "explanation": "A fair value hedge is a derivative used to offset the fluctuation in fair value of an asset or liability.\nA cash flow hedge is a derivative designated as absorbing the variable cash flow of a floating-rate\nasset or liability."
  },
  {
    "id": "jc_DER_010",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 10,
    "question": "Which of the following statement about the derivative market participants is most likely\ncorrect?",
    "options": {
      "A": "Investors use derivatives to offset or hedge market-based underlying exposures incidental to their commercial operations and financing activities.",
      "B": "Issuers use derivatives to replicate a cash market strategy, hedge a fund’s value against adverse",
      "C": "Both issuers and investors use derivatives to change their exposure to an underlying asset price"
    },
    "answer": "C",
    "explanation": "Issuers predominantly use derivatives to offset or hedge market-based underlying exposures\nincidental to their commercial operations and financing activities.\nIn contrast, investors use derivatives to replicate a cash market strategy, hedge a fund’s value against\nadverse movements in underlyings, or modify or add exposures using derivatives, which in some\ncases are unavailable in cash markets."
  },
  {
    "id": "jc_DER_011",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 11,
    "question": "Regarding to the descriptions of derivative market risks below, which one does not match?",
    "options": {
      "A": "Basis risk is that the expected value of a derivative differs unexpectedly from that of the underlying.",
      "B": "Unsystematic risk is the risk that excessive risk taking and use of leverage in derivative markets",
      "C": "Liquidity risk appears when a divergence in the cash flow timing of a derivative versus that of an underlying transaction."
    },
    "answer": "B",
    "explanation": "Systemic risk involves excessive risk taking and use of leverage in derivative markets that contribute\nto market stress, not the unsystematic risk."
  },
  {
    "id": "jc_DER_012",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 12,
    "question": "The usefulness of a forward contract is limited by some problems. Which of the following\nis most likely one of those problems?",
    "options": {
      "A": "Once you have entered into a forward contract, it is difficult to exit from the contract",
      "B": "Entering into a forward contract requires the long party to deposit an initial amount with the short party.",
      "C": "If the price of the underlying asset moves adversely from the perspective of the long party,"
    },
    "answer": "A",
    "explanation": "As opposed to a futures contract, trading out of a forward contract is quite difficult. There is no\nexchange of cash at the origination of a forward contract. There is no exchange on a forward contract\nuntil the maturity of the contract."
  },
  {
    "id": "jc_DER_013",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 13,
    "question": "Two counterparties sign a forward contract on a stock, the underlying stock price goes up\nafterward, who will most likely suffer from credit default risk?",
    "options": {
      "A": "The long position only",
      "B": "The short position only",
      "C": "Both long and short position"
    },
    "answer": "A",
    "explanation": "The long position faces counterparty credit risk of short position when the underlying stock price\ngoes up afterward and is higher than the forward price."
  },
  {
    "id": "jc_DER_014",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 14,
    "question": "The price of a forward contract most likely:",
    "options": {
      "A": "decrease as the real interest rate increase",
      "B": "increase as the price of the underlying goes up",
      "C": "constant and set as part of the contract specifications"
    },
    "answer": "C",
    "explanation": "The price of a forward contract remains constant throughout the life of the contract. It is set as part\nof the contract specifications."
  },
  {
    "id": "jc_DER_015",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 15,
    "question": "There are two forward contracts, contract 1 and contract 2, on the same underlying. The\nunderlying makes no cash payments, does not have any nonfinancial benefits and storage\ncosts. Contract 1 expires in one and half year, contract 2 expires in six months. It is most\nlikely that the price of contract 1:",
    "options": {
      "A": "is equal to the price of contract 2",
      "B": "is less than the price of contract 2",
      "C": "exceeds the price of contract 2"
    },
    "answer": "C",
    "explanation": "The forward price is the spot price compounded at the risk-free rate over the life of the contract.\nBecause contract 1 has the longer life, compounding will lead to a higher value."
  },
  {
    "id": "jc_DER_016",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 16,
    "question": "Identify which of the following activities corresponds to short forward replication?",
    "options": {
      "A": "Purchase an asset at today’s spot price (S ), and simultaneously enter into a forward",
      "B": "Sell the asset short for S at t = 0, and lend proceeds of the asset sale at the risk-free rate, r. At time t = T, buy back the asset at the spot price, S_T.",
      "C": "Borrow at the risk-free rate, r, and buy the underlying asset at today’s spot price (S ). At time"
    },
    "answer": "B",
    "explanation": "The short sale of an asset at time t=0 creats a position that replicates a short forward, as the return\nis equal to F (T)-S for both a short forward and the replication strategy.\n0 T"
  },
  {
    "id": "jc_DER_017",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 17,
    "question": "A 90-day FRA on 180-day MRR is quoted as:",
    "options": {
      "A": "3×6 FRA",
      "B": "9×3 FRA",
      "C": "3×9 FRA"
    },
    "answer": "C",
    "explanation": "3×9 FRA is a forward rate agreement whose expiration date is 90 days from now and the payment\nat settlement is based on 180-day market reference rate (MRR) 90 days from now."
  },
  {
    "id": "jc_DER_018",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 18,
    "question": "Conceptually, an FRA most likely allows a company that wants to invest money in the\nfuture to lock in a rate by making a:",
    "options": {
      "A": "variable payment and receiving a fixed payment",
      "B": "fixed payment and receiving a different fixed payment",
      "C": "fixed payment and receiving a variable payment"
    },
    "answer": "A",
    "explanation": "FRAs are forward contracts that conceptually allow lenders to lock in a fixed payment on a future\ninvestment by receiving a known payment and making an unknown payment which offsets the\nunknown future interest payment."
  },
  {
    "id": "jc_DER_019",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 19,
    "question": "Abu Rock, CFA, works for Titan Investments, PLC, a Shanghai-based real estate\ninvestment company. Abu entered into an FRA contract by locking the borrowing rate at\n4.5%, what would happen to his position if interest rate increases to 5.5% at the end of\ncontract expiration:",
    "options": {
      "A": "The FRA would meet a loss, but Abu can choose not to realized it.",
      "B": "Abu’s positions can make a favorable gain",
      "C": "Abu has to take the loss from his FRA position."
    },
    "answer": "B",
    "explanation": "Abu entered into an FRA contract by locking the borrowing rate at 4.5%, therefore he has long\nFRA position. Long party would meet a gain when the market interest rate (which is 5.5%) higher\nthan FRA rate 4.5%.\nFRA contract is a forward commitment, not an obligation, investor cannot choose whether to\nrealized the gain or loss."
  },
  {
    "id": "jc_DER_020",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 20,
    "question": "Tony Harris is planning to start trading in commodities. He has heard about the use of\nfutures contracts on commodities and is learning more about them. Which of the\nfollowing is Harris least likely to find associated with a futures contract?",
    "options": {
      "A": "Existence of counterparty risk",
      "B": "Standardized contractual terms",
      "C": "Payment of an initial margin to enter into a contract"
    },
    "answer": "A",
    "explanation": "Harris is least likely to find counterparty risk associated with a futures contract. There is limited\ncounterparty risk in a futures contract because the clearinghouse is on the other side of every\ncontract."
  },
  {
    "id": "jc_DER_021",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 21,
    "question": "When receive a margin call, an investor must deposit more money to meet the in the\nfutures market, whereas to meet the in the stock market:",
    "options": {
      "A": "Initial margin Initial margin",
      "B": "Maintenance margin Maintenance margin",
      "C": "Initial margin Maintenance margin"
    },
    "answer": "C",
    "explanation": "In stock market, additional margin must be deposited to bring the ending balance up to the\nmaintenance margin requirement; However, in futures market, additional margin must be deposited\nto bring the ending balance up to the initial margin requirement."
  },
  {
    "id": "jc_DER_022",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 22,
    "question": "In futures markets, contract performance is most likely guaranteed by:",
    "options": {
      "A": "Clearing houses",
      "B": "The futures exchanges",
      "C": "Regulatory agencies"
    },
    "answer": "A",
    "explanation": "Clearing houses arrange for financial settlement of trades. In futures markets, they guarantee\ncontract performance."
  },
  {
    "id": "jc_DER_023",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 23,
    "question": "In a currency swap, the underlying principal amount is exchanged:",
    "options": {
      "A": "only at the start of the swap",
      "B": "only at the end of the swap",
      "C": "both at the start and at the end of the swap"
    },
    "answer": "C",
    "explanation": "In a currency swap, the underlying principal is denominated in different currencies and is typically\nexchanged at the start and end of the swap."
  },
  {
    "id": "jc_DER_024",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 24,
    "question": "Identify which of the following characteristics does not match with certain forward\ncommitment contract:",
    "options": {
      "A": "An interest rate swap involves periodic settlements based on the difference between a constant fixed rate and the MRR.",
      "B": "A series of forward rate agreements (FRAs) involves a single settlement based on the difference between a fixed rate established for each period and the MRR.",
      "C": "Both interest rate swap and a series of FRAs have a symmetric payoff and a value of zero to both counter-parties at inception."
    },
    "answer": "B",
    "explanation": "A series of FRAs involves periodic settlements, not a single settlement based on the difference\nbetween a fixed rate established for each period and the MRR."
  },
  {
    "id": "jc_DER_025",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 25,
    "question": "Which of the following is most similar to a short position in the underlying asset?",
    "options": {
      "A": "Buying a put",
      "B": "Writing a put",
      "C": "Buying a call"
    },
    "answer": "A",
    "explanation": "Buying a put is most similar to a short position in the underlying asset because the put increase the\nvalue if the underlying asset value decreases. The writer of a put and the holder of call have a long\nexposure to the underlying asset because their positions increase in value if the underlying asset\nvalue increase."
  },
  {
    "id": "jc_DER_026",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 26,
    "question": "Which of the following statement is consistent with a call option replication strategy if\nexercised?",
    "options": {
      "A": "Executed at inception and settled at maturity with no adjustment over time",
      "B": "At time t = T, sell the underlying at S and repay the loan of X.",
      "C": "At time t = 0, lend at the risk-free rate and sell the underlying at S ."
    },
    "answer": "B",
    "explanation": "A call option replication strategy if exercised involves repaying the loan of X and selling the\nunderlying at S at time t = T.\nT\nBoth call and put options involve a non-linear payoff profile, their replication strategy requires\nadjustment over time as the likelihood of exercise changes.\nAt time t = 0, a put option replication strategy involves lending at the risk-free rate and selling the\nunderlying at S .\n0"
  },
  {
    "id": "jc_DER_027",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 27,
    "question": "Which of the following derivatives exhibit non-linear payoff structures?",
    "options": {
      "A": "Contingent claims only",
      "B": "Forward commitments only",
      "C": "Both contingent claims and forward commitments (firm commitment)"
    },
    "answer": "A",
    "explanation": "A is Correct. Contingent claims commonly have asymmetric payoff profiles and are often referred\nto as non-linear derivatives.\nB and C are incorrect because firm commitments, or forward contracts, are considered linear\nderivatives as their price is a linear function of the underlying."
  },
  {
    "id": "jc_DER_028",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 28,
    "question": "Which of the following is equivalent to the maximum of zero or the present value of the exercise price minus the spot price?",
    "options": {
      "A": "The lower bound of a put option",
      "B": "The lower bound of a call option",
      "C": "The upper bound of a put option."
    },
    "answer": "A",
    "explanation": "A is correct because a put option buyer will exercise only if the spot price, ST, is below X at maturity.\nThe exercise price, X, therefore represents the upper bound on the put value. The lower bound is\nthe present value of the exercise price minus the spot price or zero, whichever is greater.\nB is incorrect because this is the description of the lower bound of a put option. A call option buyer\nwill exercise only if the spot price, ST, exceeds the exercise price (X) at maturity. The lower bound\nof a call price is therefore the underlying’s price minus the present value of its exercise price or zero,\nwhichever is greater.\nC is incorrect because this is the description of the lower bound of a put option. A put option buyer\nwill exercise only if the spot price, ST, is below X at maturity. The exercise price, X, therefore\nrepresents the upper bound on the put value."
  },
  {
    "id": "jc_DER_029",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 29,
    "question": "Derivatives pricing models use the risk-free rate to discount future cash flows because\nthese models:",
    "options": {
      "A": "are based on portfolios with uncertain payoffs",
      "B": "assume that derivatives investors are risk-neutral",
      "C": "assume that risk can be eliminated by diversification"
    },
    "answer": "B",
    "explanation": "Derivatives pricing models use the risk-free rate to discount future cash flows (risk-neutral pricing)\nbecause they are based on constructing arbitrage relationships that are theoretically riskless.\nThese models are based on portfolios with certain payoffs (R).\nf\nRisk cannot eliminated by diversification."
  },
  {
    "id": "jc_DER_030",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 30,
    "question": "A perfectly hedged position consisting of a derivative and its underlying asset will most\nlikely yield a return that is:",
    "options": {
      "A": "greater than the risk-free rate",
      "B": "smaller than the risk-free rate",
      "C": "equal to the risk-free rate."
    },
    "answer": "C",
    "explanation": "If a risk-free position earns a return that is different from the risk-free return, arbitrage will lead to\nthe elimination of the mispricing."
  },
  {
    "id": "jc_DER_031",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 31,
    "question": "At expiration, an option that is in the money will most likely have:",
    "options": {
      "A": "time value, but no exercise value",
      "B": "exercise value, but no time value",
      "C": "both time value and exercise value"
    },
    "answer": "B",
    "explanation": "At expiration, options have no time value; if they are in the money, they have exercise value (also\ncalled intrinsic value)."
  },
  {
    "id": "jc_DER_032",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 32,
    "question": "Which of the following changes decrease the value of both call and put option?",
    "options": {
      "A": "A decline in the volatility of the underlying price",
      "B": "A higher underlying price",
      "C": "A lower exercise price"
    },
    "answer": "A",
    "explanation": "A decline in the volatility of the underlying price will decrease the value of both a call option and a\nput option. Lower price variability of the underlying will reduce the probability of a higher positive\nexercise value for a call or a put option without affecting the downside case where the option expires\nunexercised."
  },
  {
    "id": "jc_DER_033",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 33,
    "question": "Which of the following statements most closely relates to the concept of moneyness?",
    "options": {
      "A": "The sum of money the option buyer pays the seller is called the premium",
      "B": "Both call and put option prices decline as the time to expiration becomes shorter",
      "C": "One would never exercise a call option if the price of the underlying is below the strike"
    },
    "answer": "C",
    "explanation": "Only the in-the-money option would be exercised. Moneyness describes the relationship between\nthe price of the underlying and an option’s exercise price."
  },
  {
    "id": "jc_DER_034",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 34,
    "question": "If the exercise price of an American put option at expiration is below the price of the\nunderlying, the value of the option is most likely:",
    "options": {
      "A": "less than zero",
      "B": "equal to zero",
      "C": "greater than zero"
    },
    "answer": "B",
    "explanation": "If the exercise price of a American put option is below the underlying price at expiration, the option\nis worthless and has a value of zero.\nThe value of an option can never be negative. For a positive value, strike price must be below the\nprice of underlying."
  },
  {
    "id": "jc_DER_035",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 35,
    "question": "The recent price per share of Hua Big, Inc. is €80 per share. Selina Woods buys 150 shares\nat €80. To protect against a falling price, Woods buys one put, covering 150 shares of Hua\nBig, with a strike price of €70. The put premium is €1.5 per share. If Hua Big closes at\n€76 per share at the expiration of the put and Woods sells her shares at €76, Woods’ profit\nfrom the stay/put is closest to:",
    "options": {
      "A": "- €825",
      "B": "- €600",
      "C": "€375."
    },
    "answer": "A",
    "explanation": "The loss on her stock is (€76 - €80) X 150 = - €600. She also paid €1.5 X 150 = €225 for the put.\nThe put expires worthless, making her total loss €825."
  },
  {
    "id": "jc_DER_036",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 36,
    "question": "Which statement best describes the early exercise of non-dividend paying American\noptions? Early exercise may be advantageous for:",
    "options": {
      "A": "deep-in-the-money calls",
      "B": "both deep-in-the-money calls and deep-in-the-money puts",
      "C": "deep-in-the-money puts"
    },
    "answer": "C",
    "explanation": "Only deep-in-the-money put options may be exercised early. The price cannot fall below zero and\nthus the additional upside of such an option is limited."
  },
  {
    "id": "jc_DER_037",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 37,
    "question": "If there are two call options for two different underlying assets, and related information\nis shown in the table below.\nOption 1 Option 2\nPayments on the underlying Positive Zero\nCarrying cost Zero Positive\nBased on the table, which of the option is most likely to have higher value?",
    "options": {
      "A": "Option 1",
      "B": "Option 2",
      "C": "The same"
    },
    "answer": "B",
    "explanation": "A call option’s value is negatively correlated to the payments on the underlying, and positively\nrelated to the carrying cost, so the option 2 would have higher value."
  },
  {
    "id": "jc_DER_038",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 38,
    "question": "The value of a call option can be positively correlated to the:",
    "options": {
      "A": "exercise price & risk-free rate",
      "B": "risk-free rate & volatility",
      "C": "exercise price & volatility"
    },
    "answer": "B",
    "explanation": "A call option’s value is negatively correlated to the exercise price. The call option’s value increases\nas the risk-free rate increases. And the volatility is positively related to both call and put options."
  },
  {
    "id": "jc_DER_039",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 39,
    "question": "A description that will least likely be used to explain put-call parity is:",
    "options": {
      "A": "The (exercise) prices of calls and puts on an underlying asset must be consistent with each other to remove arbitrage opportunities",
      "B": "A fiduciary call option strategy and a protective put option strategy for an underlying asset are equal in value.",
      "C": "A put is equivalent to long a call, a long position in the underlying asset, and a long position in the risk-free asset."
    },
    "answer": "C",
    "explanation": "For P=C+X / (1+r)T -S\nf\nA put is equivalent to long a call, a short position in the underlying asset, and a long position in the\nrisk free asset."
  },
  {
    "id": "jc_DER_040",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 40,
    "question": "A stock is selling at $40, a 3-month put at $50 is selling for $11, a 3-month call at $50 is\nselling for $1, and the risk-free rate is 6%. How much, if anything, can be made on an\narbitrage?",
    "options": {
      "A": "$0 (no arbitrage)",
      "B": "$0.28",
      "C": "$0.72"
    },
    "answer": "C",
    "explanation": "A synthetic stock is S=C-P+X/ [(1+RFR) T] =$1-$11+50/ [(1.06)0.25] =39.28. Since the stock is\nselling for $40, you can short a share of stock for $40 and buy the synthetic for an immediate\narbitrage profit of $0.72."
  },
  {
    "id": "jc_DER_041",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 41,
    "question": "According to put–call–forward parity, the difference between the price of a put and the\nprice of a call is most likely equal to the difference between:",
    "options": {
      "A": "forward price and spot price discounted at the risk-free rate",
      "B": "spot price and exercise price discounted at the risk-free rate",
      "C": "exercise price and forward price discounted at the risk-free rate"
    },
    "answer": "C",
    "explanation": "Put-call-forward parity can be written as:\nP – C = [X – F (T)]/(1 + r)T\n0 0 0\nThis means that the difference between the price of a put and the price of a call is equal to the\ndifference between exercise price and forward price discounted at the risk-free rate."
  },
  {
    "id": "jc_DER_042",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 42,
    "question": "Which of the following investment cannot provide diversification benefits, allowing risk\nto be reduced without necessarily affecting or compromising return, to an investor?",
    "options": {
      "A": "Purchasing stocks and taking long position in put options",
      "B": "Holding highly correlated assets",
      "C": "Allocating a portion of a portfolio to alternative investments"
    },
    "answer": "B",
    "explanation": "Holding highly correlated assets cannot provide diversification benefits to an investors.\nPortfolio insurance is a hedging strategy used to limit portfolio losses when stocks decline in value\nwithout having to sell off, e.g., purchasing stocks and taking long position in put options.\nAdding alternative investments to a portfolio may provide diversification benefits because of these\ninvestments’ less-than-Perfect correlation with other assets in the portfolio. As a result, allocating a\nportion of one’s funds to alternatives could potentially result in an improved risk–return relationship."
  },
  {
    "id": "jc_DER_043",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 43,
    "question": "Instead of entering into a short position in risk free bond, the investors can also replicate\nthe risk free bond by:",
    "options": {
      "A": "combining short stock, a short positions in a put option, and a long position in call option",
      "B": "combining long stock, a long positions in a put option, and a short position in call option",
      "C": "combining short stock, a short positions in a put option, and a short position in call option."
    },
    "answer": "A",
    "explanation": "Put-call parity is P + S = C + X / (1+r)T\n0 0 0\nSolving for the risk free bond is,\n𝑿𝑿\n𝑻𝑻\nTherefore, the synthetic long asset(s𝟏𝟏 +a𝑹𝑹re 𝒇𝒇 )a c = om 𝑺𝑺 b + in 𝑷𝑷 ati − on 𝑪𝑪 of long the call, short stock, and short the put\noption."
  },
  {
    "id": "jc_DER_044",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 44,
    "question": "Based on put-call parity application, the firm value is least likely be described as:",
    "options": {
      "A": "If the value of the firm (V ) is below the face value of its debt outstanding, debtholders will receive less than the face value (D) to settle their debt claim.",
      "B": "A debtholder’s payoff is min(D, V ) and equals the debt face value (D) minus a put option on firm value (V ) with an exercise price of D.",
      "C": "A debtholder’s position may be considered similar to the long put option on firm value."
    },
    "answer": "C",
    "explanation": "If the value of the firm (V ) is below the face value of its debt outstanding, or V < D at time T, we\nT T\nsay the firm is insolvent and debtholders receive less than the face value (D) to settle their debt\nclaim.\nStated differently, a debtholder’s payoff is min(D, V ) = D – max(0, D – V ) and equals the debt\nT T\nface value (D) minus a put option on firm value (V ) with an exercise price of D, which represents\nT\na sold put on firm value."
  },
  {
    "id": "jc_DER_045",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 45,
    "question": "The law of one price is best described as:",
    "options": {
      "A": "the true fundamental value of an asset",
      "B": "earning a risk-free profit without committing any capital",
      "C": "two assets that will produce the same cash flows in the future must sell for equivalent prices"
    },
    "answer": "C",
    "explanation": "The law of one price occurs when market participants engage in arbitrage activities so that identical\nassets sell for the same price in different markets.\nLaw of one price refers to identical assets, not the true fundamental value of an asset.\nEarning a risk-free profit without committing any capital refers to arbitrage not the law of one price."
  },
  {
    "id": "jc_DER_046",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 46,
    "question": "Which of the following best describes an arbitrage opportunity? It is an opportunity to:",
    "options": {
      "A": "Earn a risk premium in the short run",
      "B": "Buy an asset at less than its fundamental value",
      "C": "Make a profit at no risk with no capital invested"
    },
    "answer": "C",
    "explanation": "“Make a profit at no risk with no capital invested” is the only answer that is based on the notion of\nwhen an arbitrage opportunity exists: when two identical assets or portfolios sell for different prices.\nA risk premium earned in the short run can easily have occurred through luck. Buying an asset at\nless than fair value might not even produce a profit."
  },
  {
    "id": "jc_DER_047",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 47,
    "question": "An analyst observes a current USD/GBP spot exchange rate of 1.22, a US risk-free rate\nof -0.25%, and a UK risk-free rate of 1.5%. Which of the following statements describe\nthe action that can take today to earn a riskless profit if the one-year USD/GBP forward\nrate is observed to be 1.205?",
    "options": {
      "A": "No arbitrage opportunity exists, because the observed one-year USD/GBP FX forward rate",
      "B": "Since the no-arbitrage one-year USD/GBP forward rate is 1.196, the investor should borrow in US dollars and buy British pounds today, simultaneously selling British pounds against US dollars one year forward.",
      "C": "Since the no-arbitrage one-year USD/GBP forward rate is 1.196, the investor should borrow in British pounds and buy US dollars today, simultaneously buying British pounds and selling US dollars one year forward."
    },
    "answer": "A",
    "explanation": "The spot versus forward relationship for a foreign exchange may be shown as follows:\nF (T) = S e(rf-rd)T\n0,f/d 0, f/d\nIn the specific case of USD/GBP, the equation may be rewritten as\nF (T) = S e(rUSD-rGBP)T\n0,USD/GBP 0,USD/GBP\nIf S = 1.22, r = -0.25% and r = 1.5%, the no-arbitrage forward price in one year equals 1.205 (=\n0 f d\n1.22e(-0.0025-0.015)) and no riskless profit opportunity exists."
  },
  {
    "id": "jc_DER_048",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 48,
    "question": "Consider a three-month commodity forward contract, the underlying asset is selling for\n$40 in which the present value of carrying benefit and carrying cost are $5 and $3,\nrespectively. If the risk free rate is 4%, the forward price is closest to:",
    "options": {
      "A": "41.60",
      "B": "39.52",
      "C": "38.38"
    },
    "answer": "C",
    "explanation": "By using the formula: FP=(S -PVB +PVC ) x (1+Rf)T\n0 0 0\nForward price=(40-5+3) x (1+4%)0.25=38.38"
  },
  {
    "id": "jc_DER_049",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 49,
    "question": "For a forward contract with a value of zero, a situation where the spot prices is above the\nforward price is best explained by high:",
    "options": {
      "A": "storage costs",
      "B": "convenience yield",
      "C": "interest rates"
    },
    "answer": "B",
    "explanation": "If the convenience yield is high, holding the underlying confers large benefits, thus the spot price\ncan exceed the forward price for a forward contract with a value of zero. Based on the formula V(T)\nt\n= S – (γ – θ)(1 + r)t – F (T)(1 + r)–(T–t) and an initial value V(0) of zero, large benefits γ explain\nt 0 t\nwhy the spot price can exceed the forward price.\nBoth high interest rates and storage costs make the forward contract more valuable. Thus the forward\nrate is above the spot rate."
  },
  {
    "id": "jc_DER_050",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 50,
    "question": "Over time, a forward contract most likely has variable:",
    "options": {
      "A": "value and constant price",
      "B": "price and constant value",
      "C": "value and variable price"
    },
    "answer": "A",
    "explanation": "The price of a forward contract remains constant throughout its life. It is set as part of the contract\nspecifications. The value varies with changes in the price of the underlying."
  },
  {
    "id": "jc_DER_051",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 51,
    "question": "Procam Investments wants to purchase a 100-ounce gold three months later. The current\nspot price is $100 per ounce, the risk-free rate is 2.0%. We assume, during next three\nmonths, gold may be stored at a bank with a current cost of $2.5 per 100-ounce and\nproduce a current benefit of $3.5 per 100-ounce. Calculate the no arbitrage forward price,\nF (T), for settlement in 90 days (T = 90/360 or 0.25):\n0",
    "options": {
      "A": "$101.50",
      "B": "$99.49",
      "C": "$100"
    },
    "answer": "B",
    "explanation": "FP = F (T) = (100+2.5-3.5) x (1+2%)^0.25 = $99.49\n0\nThe no arbitrage forward price, F (T), for settlement in 90 days does not equal to current spot price\n0\nwith the consideration of the storage costs, benefits and risk free rate together."
  },
  {
    "id": "jc_DER_052",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 52,
    "question": "Stocks BWQ and ZER are each currently priced at $100 per share. Over the next year,\nstock BWQ is expected to generate significant benefits whereas stock ZER is not expected\nto generate any benefits. There are no carrying costs associated with holding either stock\nover the next year. Compared with ZER, the one-year forward price of BWQ is most\nlikely:",
    "options": {
      "A": "lower",
      "B": "the same",
      "C": "higher"
    },
    "answer": "A",
    "explanation": "The forward price of each stock is found by compounding the spot price by the risk-free rate for the\nperiod and then subtracting the future value of any benefits and adding the future value of any costs.\nIn the absence of any benefits or costs, the one-year forward prices of BWQ and ZER should be\nequal.\nAfter subtracting the benefits related to BWQ, the one-year forward price of BWQ is lower than the\none-year forward price of ZER."
  },
  {
    "id": "jc_DER_053",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 53,
    "question": "Assume that at Time 0 an investor entered into a forward contract to sell a stock at a price\nof F (1) = $32 one year from now. Three month later, at Time t= 0.25, the forward price\n0\nof the underlying stock is F (1) = $27.5 and the risk-free rate is 4%. The value of the\n0.25\nexisting forward contract expiring in nine months will be closest to:",
    "options": {
      "A": "-4.3696",
      "B": "4.3269",
      "C": "4.3696"
    },
    "answer": "C",
    "explanation": "Note that, F (1) = $32, F (1) = $27.5, r = 4%, and T – t = 0.75.\n0 0.25\nWe find that the value of the existing forward entered at Time 0 and valued at Time t is:\nV = PV[F (1) – F (1)] = (32-27.5) / (1+4%)0.75 = 4.3696.\nt 0 0.25"
  },
  {
    "id": "jc_DER_054",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 54,
    "question": "A high convenience yield is most likely associated with holding:",
    "options": {
      "A": "commodities",
      "B": "equities.",
      "C": "bonds"
    },
    "answer": "A",
    "explanation": "Convenience yield is primarily associated with commodities and generally exists as a result of\ndifficulty in shorting the commodity or unusually tight supplies."
  },
  {
    "id": "jc_DER_055",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 55,
    "question": "Which of the following statements best describes changes in the value of a long forward\nposition during its life?",
    "options": {
      "A": "As interest rates go down, the value of the position goes up",
      "B": "As the price of the underlying goes up, the value of the position goes up",
      "C": "As the time to maturity goes down, the value of the position goes up."
    },
    "answer": "B",
    "explanation": "Given the formula for the value of a forward contract, it follows that the value of the contract goes\nup as the price of the underlying goes up.\n−(𝑇𝑇−𝑡𝑡)\n𝑉𝑉𝑡𝑡(𝑇𝑇)=𝑆𝑆𝑡𝑡−𝐹𝐹0(𝑇𝑇)(1+𝑟𝑟)"
  },
  {
    "id": "jc_DER_056",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 56,
    "question": "Which of the following statements is least accurate concerning differences in the pricing\nof forwards and futures?",
    "options": {
      "A": "Interest rate volatility can explain pricing differences",
      "B": "Pricing differences can arise if futures prices and interest rates are uncorrelated",
      "C": "Differences in the pattern of cash flows of forwards and futures can explain pricing differences"
    },
    "answer": "B",
    "explanation": "If futures prices and interest rates are uncorrelated, the prices of forwards and futures will be\nidentical."
  },
  {
    "id": "jc_DER_057",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 57,
    "question": "If futures prices are negatively correlated with interest rates, then futures prices are likely\nto be:",
    "options": {
      "A": "higher than forward prices",
      "B": "lower than forward prices",
      "C": "equal to forward prices."
    },
    "answer": "B",
    "explanation": "If futures prices are negatively correlated with interest rates, forward contracts are more desirable\nto holders of long positions than the futuers. Hence the price of the forward will be higher than the\nprice of the futures.\nA positive correlation between futures prices and interest rates leads to the opposite interpretation,\nwith futuers being more desirable than forward to the long position. Since, in this example, interest\nrates are negatively correlated with equity futures, futures prices will be lower.\nIf futures prices and interest rates are uncorrelated, forwards and futures prices will be the same."
  },
  {
    "id": "jc_DER_058",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 58,
    "question": "The price of an interest rate swap that involves the exchange of a fixed payment for a\nfloating payment is most likely?",
    "options": {
      "A": "equal to its value at expiration",
      "B": "set at initiation and constant over time",
      "C": "affected by changes in the floating payment"
    },
    "answer": "B",
    "explanation": "Swaps have both a price and a value. Price in the context of a swap is a reference to the fixed-rate\npayment on the swap, which is constant over time. The value of a swap is zero at initiation but can\nchange over the life of the swap as market interest rates change."
  },
  {
    "id": "jc_DER_059",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 59,
    "question": "Identify which of the following statements is associated with fixed-rate receiver in an\ninterest rate swap contract?",
    "options": {
      "A": "Realizes an MTM gain on a swap contract if the expected future floating-rate payments increase.",
      "B": "An investor may increase portfolio duration by entering this position in a swap contract",
      "C": "Establishes a set of certain net future cash flows on a swap contract at inception."
    },
    "answer": "B",
    "explanation": "A fixed-rate receiver may increase portfolio duration by entering this position on a swap, because\nreceiving fixed is similar to a long bond position.\nA fixed-rate payer realizes an MTM gain on a swap contract if the expected future floating-rate\npayments increase.\nA swap contract establishes a set of certain fixed future cash flows that are exchanged for a set of\nexpected (uncertain) floating future cash flows. Therefore, neither a fixed-rate payer nor a fixed-\nrate receiver knows the net future cash flows of a swap at inception."
  },
  {
    "id": "jc_DER_060",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 60,
    "question": "The most correct statement about the binomial option pricing formula is that:",
    "options": {
      "A": "The discount rate to calculate the option price is the risk-free rate",
      "B": "The discount rate to calculate the option price is the risk-free rate plus a risk premium",
      "C": "The spot price is compounded at the risk-free rate to get the expected payoff"
    },
    "answer": "A",
    "explanation": "Risk-neutral probabilities are used, and discounting is at the risk-free rate. There is no risk premium\nincorporated into option pricing because of the use of arbitrage."
  },
  {
    "id": "jc_DER_061",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 61,
    "question": "If a one-period binomial model is used to price an at-the-money call option, which of the\nfollowing statements is most accurate? The option will be:",
    "options": {
      "A": "in-the money if the price moves up.",
      "B": "at-the-money if the price moves up or down",
      "C": "out-of-the-money if the price moves up"
    },
    "answer": "A",
    "explanation": "The call option will be in-the-money if the price moves up. An at-the-money call option has an\nexercise price equal to the underlying asset price. Therefore, a price increase will result in the call\noption moving in the money, and a price decrease will result in the call option moving out of the\nmoney."
  },
  {
    "id": "jc_DER_062",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 62,
    "question": "Which of the following factors influences the value of an option price when using a\nbinomial model?",
    "options": {
      "A": "The level of investors’ risk aversion",
      "B": "The risk-free rate of return",
      "C": "The probability of an upward and downward price move"
    },
    "answer": "B",
    "explanation": "The value of an option is determined by its risk-neutral expectation discounted at the risk-free rate.\nIn a one-period binomial model, the risk-neutral probabilities are determined only by the risk-free\nrate over the life of the option and the underlying asset’s volatility (as measured by the up and down\ngross returns, Ru and Rd). Because of the ability to construct a perfect hedge of the option using the\nunderlying asset, an option’s price is independent of investors’ risk aversion and the probability of\nthe underlying price moving up (or down)."
  },
  {
    "id": "jc_DER_063",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 63,
    "question": "If the implied volatility for options on a broad-based equity market index goes up, then it\nis most likely that:",
    "options": {
      "A": "The broad-based equity market index has gone up in value",
      "B": "Market interest rates have gone up",
      "C": "The general level of market uncertainty has gone up"
    },
    "answer": "C",
    "explanation": "One benefit of derivatives markets is information discovery. Implied volatility reveals information\nabout the risk of the underlying. Increases in implied volatility are an implication of increased\nmarket uncertainty."
  },
  {
    "id": "jc_DER_064",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 64,
    "question": "A 1-year put option on the stock with the strike price of $32, and the price of the stock is\n$32 now, and the size of an up-move is 1.1. The risk-free rate is 6%. The value of the put\noption is closest to:",
    "options": {
      "A": "0.30",
      "B": "0.60",
      "C": "1.20"
    },
    "answer": "B",
    "explanation": "u=1.1; d=1/u=0.9\nS =32×1.1=35.2\nu\nS =32×0.9=28.8\nd\np = Max (0, 32-35.2) = 0\n+\np = Max (0, 32-28.8) = 3.2\n−\nπ = (1+0.06−0.9)/(1.1−0.9) = 0.8\nu\nπ =1− π = 0.2\nd u\nP = (0.8×0 + 0.2×3.2)/1.06 = 0.64/1.06 = 0.60"
  },
  {
    "id": "jc_DER_065",
    "source": "JC_DER",
    "subject": "衍生品",
    "subjectEn": "Derivatives",
    "num": 65,
    "question": "A stock’s price is currently trade at ¥7,950. At the end of one month when its options\nexpire, the stock price is either up by 12% or down by 8%. If the risk-free rate is -0.5%\nfor the period, what is the value of a call option with a strike price of ¥7,880:",
    "options": {
      "A": "¥386",
      "B": "¥279",
      "C": "¥341. Solutions 7. Derivatives"
    },
    "answer": "A",
    "explanation": "Using risk-neutral pricing, we can determine the risk-neutral probability as:\nS = 7,950 × 1.12 = 8,904\nu\nS = 7,950 × 0.92 = 7,314\nd\nc = Max (8,904-7,880, 0) = 1,024\n+\nc = Max (7,314-7,880, 0) = 0\n−\nπ = (1 − 0.005 − 0.92)/(1.12 − 0.92) = 0.375\nu\nπ =1− π = 0.625\nd u\nc = (0.375 × 1,024 + 0.625 × 0) / (1 - 0.005) = 384 / 0.995 = 385.93\n0"
  }
]
