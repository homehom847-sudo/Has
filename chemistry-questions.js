/* ===================================================================
   SUSU JAMB PREP — Chemistry JAMB Past Questions Bank
   Source: CHEMISTRY-JAMB-Past-Questions.pdf (uploaded by the user),
   "Chemistry 1983-2004", www.myschoolgist.com compilation.

   IMPORTANT — READ BEFORE ADDING MORE YEARS
   -----------------------------------------
   The source PDF contains ONLY the questions and options — it does
   NOT include an answer key anywhere in the document (checked: no
   "answer" / "key" section exists in the 70-page file). The
   `answer` and `explanation` fields below were therefore determined
   from chemistry first principles (stoichiometry, electrochemistry,
   equilibrium, nomenclature, etc.), NOT copied from an answer key in
   the source, because none exists. Question text and options are
   transcribed as faithfully as possible from the source PDF pages
   (visually verified against the rasterized pages, not just the raw
   text layer, because the PDF has a diagonal watermark that corrupts
   plain text extraction).

   1983 (50 questions) and 1984 (49 questions present in the PDF) are included.
   The source spans 1983-2001 and 2003-2004 (1996 and 2002 are absent
   from the source PDF itself). Transcribing every remaining year
   reliably requires the same page-by-page visual verification used
   here, which is a large, incremental task — see the chat reply for
   details on adding more years.

   Each question:
   {
     id: <unique integer>,
     year: <number>,
     question: "...",                 // exact wording from the source
     options: { A:"...", B:"...", ... },  // only letters present in source
     answer: "B",                     // correct option letter
     explanation: "..."               // short, JAMB-level explanation
   }
   =================================================================== */

const CHEMISTRY_QUESTIONS = [

  {
    id: 1, year: 1983,
    question: "X is a crystalline salt of sodium. Solution of X in water turns litmus red and produces a gas which turns limewater milky when added to sodium carbonate. With barium chloride solution, X gives a white precipitate which is insoluble in dilute hydrochloric acid. X is:",
    options: { A: "Na2CO3", B: "NaHCO3", C: "NaHSO4", D: "Na2SO3", E: "Na2SO4" },
    answer: "C",
    explanation: "X turns litmus red, so it is acidic — this rules out Na2CO3 and NaHCO3 (both basic) and Na2SO4 (neutral). With BaCl2 it gives a white precipitate insoluble in dilute HCl, which points to a sulphate (BaSO4), not a sulphite (BaSO3 would dissolve in dilute acid). NaHSO4 (an acid salt of a strong acid) is the only option that is both acidic and a sulphate."
  },
  {
    id: 2, year: 1983,
    question: "The alkanol obtained from the production of soap is:",
    options: { A: "ethanol", B: "glycerol", C: "methanol", D: "propanol", E: "glycol" },
    answer: "B",
    explanation: "Soap is made by the saponification of fats/oils (esters of glycerol) with NaOH. The glycerol (glycerine) part of the triglyceride is released as a by-product alongside the soap (sodium salts of fatty acids)."
  },
  {
    id: 3, year: 1983,
    question: "The flame used by welders in cutting metals is:",
    options: { A: "butane gas flame", B: "acetylene flame", C: "kerosene flame", D: "oxy-acetylene flame", E: "oxygen flame" },
    answer: "D",
    explanation: "Oxy-acetylene flames burn at a very high temperature (about 3200°C), hot enough to cut and weld metals — plain acetylene or butane flames in air are not hot enough."
  },
  {
    id: 4, year: 1983,
    question: "Consecutive members of an alkane homologous series differ by:",
    options: { A: "CH", B: "CH2", C: "CH3", D: "CnHn", E: "CnH2n+2" },
    answer: "B",
    explanation: "Each member of the alkane series (general formula CnH2n+2) differs from the next by one CH2 unit, e.g. CH4 to C2H6 adds CH2."
  },
  {
    id: 5, year: 1983,
    question: "If an element has the electronic configuration 1s2 2s2 2p6 3s2 3p2, it is:",
    options: { A: "a metal", B: "an alkaline earth metal", C: "an s-block element", D: "a p-block element", E: "a transition element" },
    answer: "D",
    explanation: "This configuration has 14 electrons (silicon). Its last electrons fill a 3p sub-shell, which makes it a p-block element."
  },
  {
    id: 6, year: 1983,
    question: "Some copper(II) sulphate pentahydrate (CuSO4.5H2O) was heated at 120°C with the following results: Wt of crucible = 10.00 g; Wt of crucible + CuSO4.5H2O = 14.98 g; Wt of crucible + residue = 13.54 g. How many molecules of water of crystallization were lost? [H=1, Cu=63.5, O=16, S=32]",
    options: { A: "1", B: "2", C: "3", D: "4", E: "5" },
    answer: "D",
    explanation: "Mass of hydrate = 4.98 g, mass of residue = 3.54 g, so water lost = 1.44 g = 0.08 mol. Molar mass of CuSO4.5H2O = 249.5, so moles of hydrate = 4.98/249.5 ≈ 0.02 mol. Water lost per mole of salt = 0.08/0.02 = 4 molecules."
  },
  {
    id: 7, year: 1983,
    question: "The three-dimensional shape of methane is:",
    options: { A: "hexagonal", B: "trigonal", C: "linear", D: "tetrahedral", E: "cubical" },
    answer: "D",
    explanation: "Methane (CH4) has 4 bonding pairs and no lone pairs around carbon, giving a tetrahedral shape with bond angles of 109.5°."
  },
  {
    id: 8, year: 1983,
    question: "Questions 8 to 10 are based on the following: An unknown organic compound X has a relative molecular mass of 180. It is a colourless crystalline solid, readily soluble in water. X contains the elements C, H, and O in the atomic ratio 1:2:1. The compound has a sweet taste and melts on heating. In the presence of yeast and in the absence of air, X is converted to compound Y and a colourless gas. Compound Y reacts with sodium metal to produce a gas Z which gives a 'pop' sound with a glowing splint. Y also reacts with ethanoic acid to give a sweet-smelling compound W. Question 8: Compound W is:",
    options: { A: "a soap", B: "an oil", C: "an alkane", D: "an ester", E: "sucrose" },
    answer: "D",
    explanation: "X is glucose, which ferments to Y (ethanol) and CO2. Ethanol reacting with ethanoic acid (an alcohol + a carboxylic acid) produces a sweet-smelling ester (ethyl ethanoate)."
  },
  {
    id: 9, year: 1983,
    question: "(Same passage as question 8, about compound X, RMM 180, C:H:O ratio 1:2:1, fermented by yeast.) Question 9: The molecular formula of X is:",
    options: { A: "C12H22O11", B: "C6H12O6", C: "C3H6O3", D: "C7H14O7", E: "C4H3O4" },
    answer: "B",
    explanation: "C6H12O6 (glucose) has a relative molecular mass of 6(12)+12(1)+6(16) = 180, and the atom ratio C:H:O = 6:12:6 = 1:2:1, matching the passage exactly."
  },
  {
    id: 10, year: 1983,
    question: "(Same passage as question 8, about compound X being fermented by yeast.) Question 10: The reaction of X with yeast forms the basis of the:",
    options: { A: "plastic industry", B: "textile industry", C: "brewing industry", D: "soap industry", E: "dyeing industry" },
    answer: "C",
    explanation: "Fermenting glucose with yeast to produce ethanol is the basic process behind the brewing industry."
  },
  {
    id: 11, year: 1983,
    question: "A mixture of common salt, ammonium chloride and barium sulphate can best be separated by:",
    options: {
      A: "addition of water followed by filtration then sublimation",
      B: "addition of water followed by sublimation then filtration",
      C: "sublimation followed by addition of water then filtration",
      D: "fractional distillation",
      E: "fractional crystallization"
    },
    answer: "C",
    explanation: "Heating the solid mixture first sublimes off the ammonium chloride, leaving NaCl and insoluble BaSO4. Adding water then dissolves the NaCl, and filtration removes the insoluble BaSO4, leaving a NaCl solution that can be evaporated."
  },
  {
    id: 12, year: 1983,
    question: "Which of the following relationships between the pressure P, the volume V and the temperature T, represents an ideal gas behaviour?",
    options: { A: "P and VT", B: "P and T/V", C: "PT and V", D: "PV and VT", E: "P and V/T" },
    answer: "B",
    explanation: "The ideal gas equation PV = nRT rearranges to P = nRT/V, so at constant n, P is proportional to T/V."
  },
  {
    id: 13, year: 1983,
    question: "In an experiment (described in the source as Fig. 1), solid ammonium chloride is placed in a test tube fitted with a porous asbestos plug, and heated at 350°C. A piece of damp neutral litmus paper is held just outside the porous plug. In this experiment, the litmus paper will initially:",
    options: { A: "be bleached", B: "turn green", C: "turn red", D: "turn blue", E: "turn black" },
    answer: "D",
    explanation: "Heating NH4Cl decomposes it into NH3 and HCl gas. Ammonia is lighter and diffuses through the porous plug faster than HCl, so it reaches the damp litmus paper first and turns it blue (basic)."
  },
  {
    id: 14, year: 1983,
    question: "The colour imparted to a flame by calcium ion is:",
    options: { A: "green", B: "blue", C: "brick-red", D: "yellow", E: "lilac" },
    answer: "C",
    explanation: "Calcium compounds give a characteristic brick-red flame test colour."
  },
  {
    id: 15, year: 1983,
    question: "In the reaction M + N ⇌ P; ΔH = +Q kJ. Which of the following would increase the concentration of the product?",
    options: {
      A: "Decreasing the concentration of N",
      B: "Increasing the concentration of P",
      C: "Adding a suitable catalyst",
      D: "Decreasing the temperature"
    },
    answer: "B",
    explanation: "Directly adding more P raises its concentration immediately. Decreasing N shifts the equilibrium away from P, a catalyst only changes the rate (not the equilibrium position), and since the forward reaction is endothermic, decreasing temperature shifts the equilibrium away from P, not towards it."
  },
  {
    id: 16, year: 1983,
    question: "In which of the following processes is iron being oxidized? 1. Fe + H2SO4 → H2 + FeSO4  2. FeSO4 + H2S → FeS + H2SO4  3. FeCl2 + Cl2 → 2FeCl3  4. FeCl3 + SnCl2 → 2FeCl2 + SnCl4",
    options: { A: "1 only", B: "2 only", C: "3 only", D: "1 and 3", E: "2 and 4" },
    answer: "D",
    explanation: "In (1) Fe goes from 0 to +2 (oxidized). In (2) Fe stays at +2 (no change). In (3) Fe goes from +2 to +3 (oxidized). In (4) Fe goes from +3 to +2 (reduced). So iron is oxidized in reactions 1 and 3."
  },
  {
    id: 17, year: 1983,
    question: "In an experiment (Fig. 2 in the source), a Cu/CuSO4 electrolytic cell and an Ag/AgNO3 electrolytic cell are connected in series. A current was passed for 10 minutes and 0.63 g of copper was deposited on the cathode of the CuSO4 cell. What weight of silver would be deposited in the AgNO3 cell during the same period? [Cu = 63, Ag = 108]",
    options: { A: "0.54 g", B: "1.08 g", C: "1.62 g", D: "2.16 g", E: "3.24 g" },
    answer: "D",
    explanation: "Moles of Cu deposited = 0.63/63 = 0.01 mol. Since Cu2+ needs 2 electrons per atom, this represents 0.02 mol of electrons. Ag+ needs only 1 electron per atom, so 0.02 mol of Ag is deposited = 0.02 × 108 = 2.16 g."
  },
  {
    id: 18, year: 1983,
    question: "In the reaction Fe + Cu2+ → Fe2+ + Cu, iron displaces copper ions to form copper metal. This is due to the fact that:",
    options: {
      A: "iron is in the metallic form while copper is in the ionic form",
      B: "the atomic weight of copper is greater than that of iron",
      C: "copper metal has more electrons than iron metal",
      D: "iron is an inert metal",
      E: "iron is higher in the electrochemical series than copper"
    },
    answer: "E",
    explanation: "A metal higher up the electrochemical (reactivity) series can displace a less reactive metal from solutions of its salts. Iron is above copper in the series, so it displaces copper."
  },
  {
    id: 19, year: 1983,
    question: "A compound has the structural formula CH2=C(CH3)(C2H5) — that is, a carbon double-bonded to CH2, carrying a CH3 branch and a C2H5 (ethyl) branch. The correct name of the compound with this structural formula is: (Note: in the source document, options A and C are printed identically as \"2-methylbut-1-ene\" — this duplication is in the original PDF, not an error introduced here.)",
    options: { A: "2-methylbut-1-ene", B: "2-methylbut-2-ene", C: "2-methylbut-1-ene", D: "2-ethylprop-1-ene", E: "2-ethylprop-2-ene" },
    answer: "A",
    explanation: "The longest chain containing the double bond is 4 carbons (but-1-ene: CH2=C-CH2-CH3) with a methyl branch on C2, giving 2-methylbut-1-ene. Note that options A and C are identical in the source PDF."
  },
  {
    id: 20, year: 1983,
    question: "How many isomeric forms are there for the molecular formula C3H6Br2?",
    options: { A: "1", B: "2", C: "3", D: "4", E: "5" },
    answer: "D",
    explanation: "The four structural isomers of dibromopropane are 1,1-dibromopropane, 1,2-dibromopropane, 1,3-dibromopropane, and 2,2-dibromopropane."
  },
  {
    id: 21, year: 1983,
    question: "A piece of burning sulphur will continue to burn in a gas jar of oxygen to give misty fumes which readily dissolve in water. The resulting liquid is:",
    options: {
      A: "sulphur(IV) trioxide",
      B: "tetraoxosulphate(VI) acid",
      C: "trioxosulphate(IV) acid",
      D: "dioxosulphate(II) acid",
      E: "hydrogen sulphide"
    },
    answer: "C",
    explanation: "Burning sulphur in oxygen forms sulphur(IV) oxide (SO2), which dissolves in water to form trioxosulphate(IV) acid (sulphurous acid, H2SO3)."
  },
  {
    id: 22, year: 1983,
    question: "Sodium decahydrate (Na2SO4.10H2O), on exposure to air, loses all its water of crystallization. The process of loss is known as:",
    options: { A: "Efflorescence", B: "Hygroscopy", C: "Deliquescence", D: "Effervescence", E: "Dehydration" },
    answer: "A",
    explanation: "Efflorescence is the spontaneous loss of water of crystallization from a hydrated salt to the surrounding air, as happens with sodium sulphate decahydrate (Glauber's salt)."
  },
  {
    id: 23, year: 1983,
    question: "Which of the following happens during the electrolysis of molten sodium chloride?",
    options: {
      A: "Sodium ion loses an electron",
      B: "Chlorine atom gains an electron",
      C: "Chloride ion gains an electron",
      D: "Sodium ion is oxidized",
      E: "Chloride ion is oxidized"
    },
    answer: "E",
    explanation: "At the anode, chloride ions lose electrons (are oxidized) to form chlorine gas; at the cathode, sodium ions gain electrons (are reduced) to form sodium metal."
  },
  {
    id: 24, year: 1983,
    question: "Crude petroleum pollutant usually seen on some Nigerian creeks and waterways can best be dispersed or removed by:",
    options: {
      A: "heating the affected parts in order to boil off the petroleum",
      B: "mechanically stirring to dissolve the petroleum in water",
      C: "pouring organic solvents to dissolve the petroleum",
      D: "spraying the water with detergents",
      E: "cooling to freeze out the petroleum"
    },
    answer: "D",
    explanation: "Detergents act as dispersants, breaking the oil slick into fine droplets that mix into the water, which is the standard method for dealing with oil spills."
  },
  {
    id: 25, year: 1983,
    question: "An element is electronegative if:",
    options: {
      A: "it has a tendency to exist in the gaseous form",
      B: "its ions dissolve readily in water",
      C: "it has a tendency to lose electrons",
      D: "it has a tendency to gain electrons",
      E: "it readily forms covalent bonds"
    },
    answer: "D",
    explanation: "Electronegativity describes an atom's tendency to attract and gain electrons in a bond."
  },
  {
    id: 26, year: 1983,
    question: "Solutions X, Y, and Z have pH values 3.0, 5.0 and 9.0 respectively. Which of the following statements is correct?",
    options: {
      A: "All the solutions are acidic",
      B: "All solutions are basic",
      C: "Y and Z are more acidic than water",
      D: "Y is more acidic than X",
      E: "Z is the least acidic"
    },
    answer: "E",
    explanation: "Z has pH 9 (basic), the highest of the three, making it the least acidic. X (pH 3) is the most acidic, and Y (pH 5) is acidic but less so than X, so options A, B and D are all false."
  },
  {
    id: 27, year: 1983,
    question: "Given the equations: (I) H2(g) + ½O2(g) → H2O(l); ΔH = -2.86 kJ, and (II) C(s) + O2(g) → CO2(g); ΔH = -406 kJ. The equations imply that:",
    options: {
      A: "more heat is absorbed in (I) than is evolved in (I)",
      B: "more heat is absorbed in (II)",
      C: "less heat is evolved in (I)",
      D: "reaction (II) proceeds faster than (I)",
      E: "reaction (I) proceeds faster than (II)"
    },
    answer: "C",
    explanation: "Both reactions are exothermic (negative ΔH), so no heat is 'absorbed' — this rules out A and B. Since |ΔH| for (I) is far smaller than for (II), less heat is evolved in (I). ΔH values say nothing about reaction rate, so D and E cannot be concluded from the data given."
  },
  {
    id: 28, year: 1983,
    question: "Which of these metals, Mg, Fe, Pb, and Cu, will dissolve in dilute hydrochloric acid?",
    options: { A: "All the metals", B: "Mg, Fe, and Cu", C: "Mg, Fe, and Pb", D: "Mg and Fe only", E: "Mg only" },
    answer: "D",
    explanation: "Mg and Fe are above hydrogen in the reactivity series and dissolve in dilute HCl releasing hydrogen gas. Pb reacts only very slightly (a protective layer of insoluble PbCl2 forms), and Cu, being below hydrogen, does not react at all."
  },
  {
    id: 29, year: 1983,
    question: "Stainless steel is an alloy of:",
    options: {
      A: "carbon, iron and lead",
      B: "carbon, iron and chromium",
      C: "carbon, iron and copper",
      D: "carbon, iron and silver",
      E: "carbon and iron only"
    },
    answer: "B",
    explanation: "Stainless steel is mainly iron and carbon alloyed with chromium (often with nickel too), where chromium provides the corrosion resistance."
  },
  {
    id: 30, year: 1983,
    question: "What volume of 0.50 M H2SO4 will exactly neutralize 20 cm3 of 0.1 M NaOH solution?",
    options: { A: "2.0 cm3", B: "5.0 cm3", C: "6.8 cm3", D: "8.3 cm3", E: "10.4 cm3" },
    answer: "A",
    explanation: "H2SO4 + 2NaOH → Na2SO4 + 2H2O. Moles NaOH = 0.020 L × 0.1 M = 0.002 mol, needing 0.001 mol H2SO4. Volume of H2SO4 = 0.001/0.50 = 0.002 L = 2.0 cm3."
  },
  {
    id: 31, year: 1983,
    question: "Which of the following pairs of gases will NOT react further with oxygen at a temperature between 30°C and 400°C?",
    options: { A: "SO2 and NH3", B: "CO2 and H2", C: "NO2 and SO3", D: "SO3 and NO", E: "CO and H2" },
    answer: "C",
    explanation: "NO2 and SO3 are already in their common fully oxidized forms and do not readily react further with oxygen under these conditions. In the other pairs, at least one gas (NH3, H2, NO, CO) still reacts readily with oxygen."
  },
  {
    id: 32, year: 1983,
    question: "Some metals are extracted from their ores after some preliminary treatments — some by electrolysis (L), some by thermal reaction (T), and some by a combination of both processes (TL). Which set-up in the following for the extraction of iron, copper and aluminum is correct?",
    options: {
      A: "Iron (L), copper (L), aluminium (T)",
      B: "Iron (T), copper (L), aluminium (T)",
      C: "Iron (TL), copper (TL), aluminium (TL)",
      D: "Iron (L), copper (T), aluminium (T)",
      E: "Iron (T), copper (L), aluminium (TL)"
    },
    answer: "E",
    explanation: "Iron is extracted by thermal (blast-furnace) reduction alone (T). Aluminium ore (bauxite) requires thermal purification (Bayer process) before electrolysis (Hall-Héroult process), a combination of both (TL) — it cannot be reduced with carbon because aluminium is too reactive. Copper is refined electrolytically to high purity after initial smelting. This question has no perfect option among those given, so E is the closest fit based on these principles."
  },
  {
    id: 33, year: 1983,
    question: "In the preparation of some pure crystals of Cu(NO3)2, starting with CuO, a student gave the following statements as steps he employed. Which of these shows a flaw in his report? A. Some CuO was reacted with excess dilute H2SO4. B. The solution was concentrated. C. When the concentrate was cooled, crystals formed were removed by filtration. D. The crystals were washed with very cold water. E. The crystals were then allowed to dry.",
    options: {
      A: "Some CuO was reacted with excess dilute H2SO4",
      B: "The solution was concentrated",
      C: "When the concentrate was cooled, crystals formed were removed by filtration",
      D: "The crystals were washed with very cold water",
      E: "The crystals were then allowed to dry"
    },
    answer: "A",
    explanation: "To prepare copper(II) nitrate, CuO must be reacted with dilute nitric acid (HNO3), not sulphuric acid — using H2SO4 would produce copper(II) sulphate instead. All the other steps are standard, correct steps for preparing and purifying crystals."
  },
  {
    id: 34, year: 1983,
    question: "Which of the following separation processes is most likely to yield high quality ethanol (>95%) from palm wine?",
    options: {
      A: "Fractional distillation without a dehydrant",
      B: "Simple distillation without a dehydrant",
      C: "Fractional distillation with a dehydrant",
      D: "Column chromatography",
      E: "Evaporation"
    },
    answer: "C",
    explanation: "Ethanol and water form an azeotrope at about 95.6% ethanol, which ordinary distillation cannot exceed. Adding a dehydrating agent during fractional distillation is needed to break the azeotrope and obtain a higher purity."
  },
  {
    id: 35, year: 1983,
    question: "Increasing the pressure of a gas:",
    options: {
      A: "lowers the average kinetic energy of the molecules",
      B: "decreases the density of the gas",
      C: "decreases the temperature of the gas",
      D: "increases the density of the gas",
      E: "increases the volume of the gas"
    },
    answer: "D",
    explanation: "At constant temperature and amount of gas, increasing pressure compresses the gas into a smaller volume, so its mass per unit volume (density) increases."
  },
  {
    id: 36, year: 1983,
    question: "2.5 g of a hydrated barium salt gave, on heating, 2.13 g of the anhydrous salt. Given that the relative molecular mass of the anhydrous salt is 208, the number of molecules of water of crystallization of the barium salt is:",
    options: { A: "10", B: "7", C: "5", D: "2", E: "1" },
    answer: "D",
    explanation: "Moles of anhydrous salt (BaCl2, M=208) = 2.13/208 ≈ 0.01024 mol. Water lost = 2.5 - 2.13 = 0.37 g ≈ 0.0206 mol. Ratio of water to salt ≈ 0.0206/0.01024 ≈ 2, matching the known hydrate BaCl2.2H2O."
  },
  {
    id: 37, year: 1983,
    question: "3.06 g of a sample of potassium trioxochlorate(V) (KClO3) was required to make a saturated solution with 10 cm3 of water at 25°C. The solubility of the salt at 25°C is [K=39, Cl=35.5, O=16]:",
    options: { A: "5.0 moles/dm3", B: "3.0 moles/dm3", C: "2.5 moles/dm3", D: "1.0 moles/dm3", E: "0.5 moles/dm3" },
    answer: "C",
    explanation: "Molar mass of KClO3 = 39+35.5+48 = 122.5 g/mol. Moles = 3.06/122.5 ≈ 0.025 mol in 10 cm3 (0.010 L) of water, giving a solubility of 0.025/0.010 = 2.5 mol/dm3."
  },
  {
    id: 38, year: 1983,
    question: "The cracking process is very important in the petroleum industry because it:",
    options: {
      A: "gives purer products",
      B: "yields more lubricants",
      C: "yields more engine fuels",
      D: "yields more asphalt",
      E: "yields more candle wax"
    },
    answer: "C",
    explanation: "Cracking breaks large, less useful hydrocarbon molecules from heavier fractions into smaller molecules like petrol, greatly increasing the yield of engine fuels."
  },
  {
    id: 39, year: 1983,
    question: "A gas that can behave as a reducing agent towards chlorine and as an oxidizing agent towards hydrogen sulphide is:",
    options: { A: "O2", B: "NO", C: "SO2", D: "NH3", E: "CO2" },
    answer: "C",
    explanation: "SO2 reduces Cl2 (SO2 + Cl2 + 2H2O → H2SO4 + 2HCl, sulphur goes from +4 to +6) and oxidizes H2S (SO2 + 2H2S → 3S + 2H2O, sulphur goes from +4 to 0), a classic dual role for sulphur dioxide."
  },
  {
    id: 40, year: 1983,
    question: "Which of the following solutions will give a white precipitate with barium chloride solution and a green flame test?",
    options: { A: "Na2SO4", B: "CuSO4", C: "CaSO4", D: "CaCl2", E: "(NH4)2SO4" },
    answer: "B",
    explanation: "All the sulphates (Na2SO4, CuSO4, CaSO4, (NH4)2SO4) give a white BaSO4 precipitate with BaCl2, but CaCl2 (a chloride) does not. Of the sulphates, only copper gives a distinctive green/blue-green flame test, so CuSO4 is the answer."
  },
  {
    id: 41, year: 1983,
    question: "The mass of an atom is determined by:",
    options: {
      A: "its ionization potential",
      B: "its electrochemical potential",
      C: "the number of protons",
      D: "the number of neutrons and protons",
      E: "the number of neutrons and electrons"
    },
    answer: "D",
    explanation: "The mass number (and hence atomic mass) of an atom is the total number of protons plus neutrons in its nucleus — electrons contribute negligible mass."
  },
  {
    id: 42, year: 1983,
    question: "Which of the following is a neutralization reaction? A. Addition of chloride solution. B. Addition of trioxonitrate(V) acid (nitric acid) to distilled water. C. Addition of trioxonitrate(V) acid (nitric acid) to tetraoxosulphate(VI) acid (sulphuric acid). D. Addition of trioxonitrate(V) (potassium nitrate) solution. E. Addition of trioxonitrate(V) acid (nitric acid) to potassium hydroxide solution.",
    options: {
      A: "Addition of chloride solution",
      B: "Addition of trioxonitrate(V) acid (nitric acid) to distilled water",
      C: "Addition of trioxonitrate(V) acid (nitric acid) to tetraoxosulphate(VI) acid (sulphuric acid)",
      D: "Addition of trioxonitrate(V) (potassium nitrate) solution",
      E: "Addition of trioxonitrate(V) acid (nitric acid) to potassium hydroxide solution"
    },
    answer: "E",
    explanation: "Neutralization is the reaction of an acid with a base. Only option E combines an acid (nitric acid) with a base (potassium hydroxide): HNO3 + KOH → KNO3 + H2O."
  },
  {
    id: 43, year: 1983,
    question: "A jet plane carrying 3,000 kg of ethane burns off all the gas, forming water and carbon dioxide. If all the carbon dioxide is expelled and the water formed is condensed and kept on board the plane, then the gain in weight is: [C2H6 + 3.5O2 → 2CO2 + 3H2O]",
    options: { A: "1,800 kg", B: "900 kg", C: "600 kg", D: "2,400 kg", E: "1,200 kg" },
    answer: "D",
    explanation: "Moles of C2H6 (M=30) = 3,000,000/30 = 100,000 mol, producing 3 mol H2O per mol ethane = 300,000 mol H2O = 5,400,000 g = 5,400 kg of water retained on board. The gain in weight = 5,400 - 3,000 = 2,400 kg, since the extra mass comes from oxygen taken from the atmosphere."
  },
  {
    id: 44, year: 1983,
    question: "Liquid X reacts with sodium trioxocarbonate(IV) (Na2CO3) to give a gas which turns calcium chloride... (limewater) solution milky. X is:",
    options: { A: "Na2SO4(aq)", B: "KI(aq)", C: "an alkali", D: "an acid", E: "a hydrocarbon" },
    answer: "D",
    explanation: "A carbonate reacting to release a gas (CO2) that turns limewater milky is a classic acid + carbonate reaction, so X must be an acid."
  },
  {
    id: 45, year: 1983,
    question: "Which of the following statements is FALSE?",
    options: {
      A: "Copper(II) ion can be reduced to copper(I) ion by hydrochloric acid and zinc",
      B: "Sodium metal dissolves in water giving oxygen",
      C: "Nitrogen is insoluble in water",
      D: "Carbon dioxide is soluble in water",
      E: "Lead has a higher atomic weight than copper"
    },
    answer: "B",
    explanation: "Sodium reacts with water to give sodium hydroxide and HYDROGEN gas (2Na + 2H2O → 2NaOH + H2), not oxygen — this statement is false. The other statements are all true."
  },
  {
    id: 46, year: 1983,
    question: "When sodium dioxonitrate(III) (NaNO2) dissolves in water, the process is:",
    options: { A: "Exothermic", B: "Endothermic", C: "Isothermic", D: "Isomeric", E: "Hygroscopic" },
    answer: "B",
    explanation: "Dissolving sodium nitrite in water is an endothermic process — it absorbs heat from the surroundings, cooling the solution."
  },
  {
    id: 47, year: 1983,
    question: "The equilibrium reaction between copper(I) chloride and chlorine at 25°C and 1 atmosphere is represented by the equation: 2CuCl + Cl2 ⇌ 2CuCl2; ΔH = -166 kJ. Which of the following statements is TRUE for the reaction, pressure remaining constant?",
    options: {
      A: "More CuCl2 is formed at 40°C",
      B: "More CuCl2 is formed at 10°C",
      C: "Less CuCl2 is formed at 10°C",
      D: "There is no change in CuCl2 formed at 40°C and 10°C",
      E: "More CuCl2 is consumed at 40°C"
    },
    answer: "B",
    explanation: "The forward reaction is exothermic (ΔH negative). By Le Chatelier's principle, lowering the temperature favours the exothermic forward direction, so more CuCl2 is formed at the lower temperature (10°C) than at 40°C."
  },
  {
    id: 48, year: 1983,
    question: "Zn + H2SO4 → ZnSO4 + H2. The rate of the above reaction will be greatly increased if:",
    options: {
      A: "the zinc is in powdered form",
      B: "a greater volume of the acid is used",
      C: "a smaller volume of the acid is used",
      D: "the reaction vessel is immersed in an ice-bath",
      E: "the zinc is in the form of pellets"
    },
    answer: "A",
    explanation: "Powdered zinc has a much greater surface area than pellets, which greatly increases the rate of reaction with the acid."
  },
  {
    id: 49, year: 1983,
    question: "Zn + H2SO4 → ZnSO4 + H2. In the above reaction, how much zinc will be left undissolved if 2.00 g of zinc is treated with 10 cm3 of 1.0 M H2SO4? [Zn=65, S=32, O=16, H=1]",
    options: { A: "1.35 g", B: "1.00 g", C: "0.70 g", D: "0.65 g", E: "0.06 g" },
    answer: "A",
    explanation: "Moles of Zn = 2.00/65 ≈ 0.0308 mol. Moles of H2SO4 = 0.010 L × 1.0 M = 0.010 mol, the limiting reagent (1:1 ratio). Zn reacted = 0.010 × 65 = 0.65 g, so zinc remaining = 2.00 - 0.65 = 1.35 g."
  },
  {
    id: 50, year: 1983,
    question: "30 cm3 of 0.1 M Al(NO3)3 solution is reacted with 100 cm3 of 0.15 M NaOH solution. Which is in excess, and by how much? [Al(NO3)3 + 3NaOH → Al(OH)3 + 3NaNO3]",
    options: {
      A: "NaOH solution, by 70 cm3",
      B: "NaOH solution, by 60 cm3",
      C: "NaOH solution, by 40 cm3",
      D: "Al(NO3)3 solution, by 20 cm3",
      E: "Al(NO3)3 solution, by 10 cm3"
    },
    answer: "C",
    explanation: "Moles Al(NO3)3 = 0.030 × 0.1 = 0.003 mol, needing 0.009 mol NaOH (3:1 ratio). Moles NaOH available = 0.100 × 0.15 = 0.015 mol. Excess NaOH = 0.015 - 0.009 = 0.006 mol, equivalent to 0.006/0.15 = 0.04 L = 40 cm3."
  },


  // ================================================================
  // CHEMISTRY 1984 — 49 questions present in the supplied PDF.
  // The PDF jumps from Question 46 to Question 48; Question 47 is
  // not present in the supplied source, so it is intentionally not
  // invented here.
  // ================================================================
  {
    id: 51, year: 1984,
    question: "Sodium chloride may be obtained from brine by:",
    options: { A: "titration", B: "decantation", C: "distillation", D: "evaporation", E: "sublimation" },
    answer: "D",
    explanation: "Brine is concentrated sodium chloride solution. Evaporating the water leaves sodium chloride crystals behind."
  },
  {
    id: 52, year: 1984,
    question: "20 cm³ of hydrogen gas are sparked with 20 cm³ of oxygen gas in an eudiometer at 373 K and 1 atmosphere. The mixture is cooled to 298 K and passed over calcium chloride. The volume of the residual gas is:",
    options: { A: "40 cm³", B: "20 cm³", C: "30 cm³", D: "10 cm³", E: "5 cm³" },
    answer: "D",
    explanation: "2 volumes of H₂ react with 1 volume of O₂. Thus 20 cm³ H₂ consumes 10 cm³ O₂, leaving 10 cm³ O₂. Calcium chloride removes the water vapour."
  },
  {
    id: 53, year: 1984,
    question: "For the reaction NH₄NO₂ → N₂ + 2H₂O, calculate the volume of nitrogen produced at STP from 3.20 g of NH₄NO₂. [N=14, O=16, H=1]",
    options: { A: "2.24 dm³", B: "2.24 cm³", C: "1.12 cm³", D: "1.12 dm³", E: "4.48 dm³" },
    answer: "D",
    explanation: "Molar mass of NH₄NO₂ = 64 g mol⁻¹. 3.20 g = 0.05 mol, giving 0.05 mol N₂. At STP this is 0.05 × 22.4 = 1.12 dm³."
  },
  {
    id: 54, year: 1984,
    question: "Manganese(IV) oxide reacts with concentrated hydrochloric acid according to MnO₂ + xHCl → MnCl₂ + Cl₂ + yH₂O. The values of x and y are:",
    options: { A: "2 and 5 respectively", B: "2 and 4 respectively", C: "1 and 2 respectively", D: "4 and 2 respectively", E: "4 and 1 respectively" },
    answer: "D",
    explanation: "The balanced equation is MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O. Therefore x=4 and y=2."
  },
  {
    id: 55, year: 1984,
    question: "A molar solution of caustic soda is prepared by dissolving:",
    options: { A: "40 g NaOH in 100 g of water", B: "40 g NaOH in 1000 g of water", C: "20 g NaOH in 500 g of solution", D: "20 g NaOH in 1000 g of solution", E: "20 g NaOH in 80 g of solution" },
    answer: "B",
    explanation: "One mole of NaOH has a mass of 40 g. The intended JAMB preparation is 40 g NaOH made up to approximately 1 dm³ of solution; option B is the intended answer in the source."
  },
  {
    id: 56, year: 1984,
    question: "Which among the elements 1. Carbon 2. Oxygen 3. Copper 4. Bromine 5. Zinc will NOT react with either water or steam?",
    options: { A: "1 and 2", B: "2 and 3", C: "3 and 4", D: "1, 2, and 3", E: "2, 3 and 5" },
    answer: "B",
    explanation: "Copper does not react with water or steam under ordinary conditions, and oxygen itself is not considered to react with water or steam in this context. Zinc reacts with steam and bromine reacts with water."
  },
  {
    id: 57, year: 1984,
    question: "Which of the curves shown in Fig. 1 represents the relationship between volume (V) and pressure (P) of an ideal gas at constant temperature?",
    options: { A: "1", B: "2", C: "3", D: "4", E: "1 and 3" },
    answer: "C",
    explanation: "Boyle's law gives PV = constant, so V is directly proportional to 1/P. The correct curve is the straight-line relationship shown as curve 3."
  },
  {
    id: 58, year: 1984,
    question: "Naphthalene when heated melts at 354 K (81°C). At this temperature the molecules of naphthalene:",
    options: { A: "decompose into smaller molecules", B: "change their shape", C: "are oxidized by atmospheric oxygen", D: "contract", E: "become mobile as the intermolecular forces are broken" },
    answer: "E",
    explanation: "Melting is a physical change. The molecules remain intact but become more mobile as the forces holding the solid lattice together are overcome."
  },
  {
    id: 59, year: 1984,
    question: "The ratio of the number of molecules in 2 g of hydrogen to that in 16 g of oxygen is:",
    options: { A: "2:1", B: "1:1", C: "1:2", D: "1:4", E: "1:8" },
    answer: "A",
    explanation: "2 g H₂ is 1 mol, while 16 g O₂ is 0.5 mol. Therefore the numbers of molecules are in the ratio 1:0.5 = 2:1."
  },
  {
    id: 60, year: 1984,
    question: "Which combination of the following statements is correct? 1. lowering the activation energy 2. conducting the reaction in a gaseous state 3. increasing the temperature 4. removing the products as soon as they are formed 5. powdering the reactant if solid",
    options: { A: "1, 2 and 3", B: "1, 3 and 5", C: "2, 3 and 5", D: "3 and 4", E: "3 and 5" },
    answer: "B",
    explanation: "Lowering activation energy, increasing temperature, and increasing the surface area of a solid reactant all increase reaction rate."
  },
  {
    id: 61, year: 1984,
    question: "The balanced equation for the reaction of tetraoxosulphate(VI) acid with aluminium hydroxide to give water and aluminium tetraoxosulphate(VI) is:",
    options: {
      A: "H₂SO₄ + AlSO₄ → 2H₂O + AlSO₄",
      B: "HSO₄ + AlOH → H₂O + AlSO₄",
      C: "3H₂SO₄ + 2AlH₃ → 6H₂O + Al₂(SO₄)₃",
      D: "3H₂SO₄ + 2Al(OH)₃ → 6H₂O + Al₂(SO₄)₃",
      E: "H₂SO₄ + Al(OH)₃ → H₂O + Al₂(SO₄)₃"
    },
    answer: "D",
    explanation: "Balancing atoms and charges gives 3H₂SO₄ + 2Al(OH)₃ → Al₂(SO₄)₃ + 6H₂O."
  },
  {
    id: 62, year: 1984,
    question: "The solubility curves of four substances are shown in Fig. 2. Which of the four substances would crystallize from a saturated solution cooled from 353 K (80°C) to 323 K (50°C)?",
    options: { A: "P and Q", B: "P and R", C: "P and S", D: "R and S", E: "Q and R" },
    answer: "D",
    explanation: "At 353 K, the relevant saturated solutions are represented by the curves R and S. On cooling to 323 K their solubilities fall, so excess solute crystallizes."
  },
  {
    id: 63, year: 1984,
    question: "Which of the following mixtures would result in a solution of pH greater than 7?",
    options: {
      A: "25.00 cm³ of 0.05 M H₂SO₄ and 25.00 cm³ of 0.50 M Na₂CO₃",
      B: "25.00 cm³ of 0.50 M H₂SO₄ and 25.00 cm³ of 0.10 M NaHCO₃",
      C: "25.00 cm³ of 0.11 M H₂SO₄ and 25.00 cm³ of 0.10 M NaOH",
      D: "25.00 cm³ of 0.11 M H₂SO₄ and 50.00 cm³ of 0.50 M NaOH",
      E: "25.00 cm³ of 0.25 M H₂SO₄ and 50.00 cm³ of 0.20 M NaOH"
    },
    answer: "A",
    explanation: "The carbonate solution is in large excess relative to the acid and leaves carbonate/bicarbonate species in solution, making the mixture alkaline."
  },
  {
    id: 64, year: 1984,
    question: "In which of the following reactions does hydrogen peroxide act as a reducing agent?",
    options: {
      A: "H₂S + H₂O₂ → S + 2H₂O",
      B: "PbSO₃ + H₂O₂ → PbSO₄ + H₂O",
      C: "2I⁻ + 2H⁺ + H₂O₂ → I₂ + 2H₂O",
      D: "PbO₂ + 2HNO₃ + H₂O₂ → Pb(NO₃)₂ + 2H₂O + O₂",
      E: "SO₂ + H₂O₂ → H₂SO₄"
    },
    answer: "D",
    explanation: "In D, H₂O₂ is oxidized to O₂, so it donates electrons and acts as the reducing agent."
  },
  {
    id: 65, year: 1984,
    question: "For the reaction 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂, which of the following statements is TRUE?",
    options: { A: "Fe is oxidized to Fe³⁺", B: "Fe³⁺ is oxidized to Fe²⁺", C: "I⁻ is oxidized to I₂", D: "I⁻ is reduced to I₂", E: "I⁻ is displacing an electron from Fe³⁺" },
    answer: "C",
    explanation: "I⁻ loses electrons to form I₂, so iodide is oxidized. Fe³⁺ gains electrons and is reduced to Fe²⁺."
  },
  {
    id: 66, year: 1984,
    question: "The energy profile in Fig. 3 for the reaction A + B → C + D shows that the reaction is:",
    options: { A: "spontaneous", B: "isothermal", C: "adiabatic", D: "exothermic", E: "endothermic" },
    answer: "D",
    explanation: "The products are at a lower energy level than the reactants, so the reaction releases energy and is exothermic."
  },
  {
    id: 67, year: 1984,
    question: "In dilute solution the heat of the reaction NaOH + HCl → NaCl + H₂O is −57.3 kJ. Therefore the heat of the reaction 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O is:",
    options: { A: "+28.65 kJ", B: "−28.65 kJ", C: "+57.3 kJ", D: "−114.6 kJ", E: "−229.2 kJ" },
    answer: "D",
    explanation: "Two moles of water are formed, so the heat change is 2 × (−57.3) = −114.6 kJ."
  },
  {
    id: 68, year: 1984,
    question: "For the reactions: (I) melon oil + NaOH → soap + glycerol; (II) 3Fe + 4H₂O → Fe₃O₄ + 4H₂; (III) N₂O₄ ⇌ 2NO₂. Which statement is true?",
    options: {
      A: "Each of the three reactions requires a catalyst",
      B: "All the reactions demonstrate Le Chatelier's principle",
      C: "The presence of a catalyst will increase the yield of products",
      D: "Increase in pressure will result in higher yields of the products in I and II only",
      E: "Increase in pressure will result in higher of the products in III only"
    },
    answer: "D",
    explanation: "This is the intended answer from the original multiple-choice set. Note that the printed reaction set is imperfect: reaction I is not a gas-phase equilibrium and reaction III would shift toward N₂O₄ when pressure increases."
  },
  {
    id: 69, year: 1984,
    question: "Which of the following methods may be used to prepare trioxonitrate(V) acid (nitric acid) in the laboratory?",
    options: {
      A: "Heating ammonia gas with tetraoxosulphate(VI) acid",
      B: "Heating ammonium trioxosulphate(V) with tetraoxonitrate(V) acid",
      C: "Heating sodium trioxonitrate(V) with tetraoxosulphate(VI) acid",
      D: "Heating potassium trioxonitrate(V) with calcium hydroxide",
      E: "Heating a mixture of ammonia gas and oxygen"
    },
    answer: "C",
    explanation: "A nitrate salt such as NaNO₃ can be heated with concentrated H₂SO₄ to liberate HNO₃, which can then be distilled off."
  },
  {
    id: 70, year: 1984,
    question: "Lime-water, which is used in the laboratory for the detection of carbon(IV) oxide, is an aqueous solution of:",
    options: { A: "Ca(OH)₂", B: "CaCO₃", C: "CaHCO₃", D: "CaSO₄", E: "N₂CO₃" },
    answer: "A",
    explanation: "Limewater is dilute aqueous calcium hydroxide. Carbon dioxide turns it milky by forming insoluble CaCO₃."
  },
  {
    id: 71, year: 1984,
    question: "An element that can exist in two or more different structural forms which possess the same chemical properties is said to exhibit:",
    options: { A: "polymerism", B: "isotropy", C: "isomorphism", D: "isomerism", E: "allotropy" },
    answer: "E",
    explanation: "Allotropy is the existence of different structural forms of the same element, such as diamond and graphite."
  },
  {
    id: 72, year: 1984,
    question: "Sulphur:",
    options: { A: "forms two alkaline oxides", B: "is spontaneously flammable", C: "burns with a blue flame", D: "conducts electricity in the molten state", E: "is usually stored in the form of sticks in water" },
    answer: "C",
    explanation: "Sulphur burns in oxygen with a characteristic blue flame, producing sulphur dioxide."
  },
  {
    id: 73, year: 1984,
    question: "Which of the following statements is NOT true of carbon monoxide?",
    options: {
      A: "CO is poisonous",
      B: "CO is readily oxidized at room temperature by air to form CO₂",
      C: "CO may be prepared by reducing CO₂ with coke heated to about 1000°C",
      D: "CO may be prepared by heating charcoal with a limited amount of O₂",
      E: "CO is a good reducing agent"
    },
    answer: "B",
    explanation: "CO is poisonous and a reducing agent, but its oxidation by air is not readily appreciable at room temperature; it generally requires ignition or a catalyst."
  },
  {
    id: 74, year: 1984,
    question: "From the reactions ZnO + Na₂O → sodium zincate and ZnO + CO₂ → ZnCO₃, it may be concluded that zinc oxide is:",
    options: { A: "neutral", B: "basic", C: "acidic", D: "amphoteric", E: "a mixture" },
    answer: "D",
    explanation: "ZnO reacts with both a basic oxide (Na₂O) and an acidic oxide (CO₂), showing both acidic and basic behaviour: it is amphoteric."
  },
  {
    id: 75, year: 1984,
    question: "An example of a neutral oxide is:",
    options: { A: "Al₂O₃", B: "NO₂", C: "CO₂", D: "CO", E: "SO₂" },
    answer: "D",
    explanation: "Carbon monoxide (CO) is a neutral oxide; it does not normally show acidic or basic oxide behaviour."
  },
  {
    id: 76, year: 1984,
    question: "3Cl₂ + 2NH₃ → N₂ + 6HCl. In the above reaction, ammonia acts as:",
    options: { A: "a reducing agent", B: "an oxidizing agent", C: "an acid", D: "a catalyst", E: "a drying agent" },
    answer: "A",
    explanation: "Nitrogen in NH₃ is oxidized from −3 to 0 in N₂, so ammonia acts as the reducing agent."
  },
  {
    id: 77, year: 1984,
    question: "In the Haber process for the manufacture of ammonia, finely divided iron is used as:",
    options: { A: "an ionizing agent", B: "a reducing agent", C: "a catalyst", D: "a dehydrating agent", E: "an oxidizing agent" },
    answer: "C",
    explanation: "Finely divided iron catalyses the reversible reaction between nitrogen and hydrogen in the Haber process."
  },
  {
    id: 78, year: 1984,
    question: "An organic compound with vapour density 56.5 has the following percentage composition: C = 53.1%, N = 12.4%, O = 28.3%, H = 6.2%. The molecular formula is:",
    options: { A: "C₃H₆O₂N", B: "C₅H₆O₂N", C: "(C₅H₇O₂N)½", D: "C₅H₇O₂N", E: "(C₅H₇ON)₂" },
    answer: "D",
    explanation: "The empirical formula is C₅H₇NO₂ with mass 113. Vapour density 56.5 gives molar mass 2 × 56.5 = 113, so the molecular formula is C₅H₇NO₂."
  },
  {
    id: 79, year: 1984,
    question: "The hybridization of the carbon atom in ethyne is:",
    options: { A: "sp²", B: "sp³", C: "sp²", D: "sp", E: "s" },
    answer: "D",
    explanation: "Each carbon in ethyne (C₂H₂) is sp-hybridized, giving a linear molecule with a carbon-carbon triple bond."
  },
  {
    id: 80, year: 1984,
    question: "When the kerosene fraction from petroleum is heated at high temperature, a lower-boiling liquid is obtained. This process is known as:",
    options: { A: "polymerization", B: "refining", C: "hydrogenation", D: "cracking", E: "fractional distillation" },
    answer: "D",
    explanation: "Cracking breaks large hydrocarbon molecules into smaller molecules with lower boiling points, including useful petrol-range hydrocarbons."
  },
  {
    id: 81, year: 1984,
    question: "CH₃CH₂COOH is:",
    options: { A: "acetic acid", B: "propanal", C: "propanol", D: "ethanoic acid", E: "propanoic acid" },
    answer: "E",
    explanation: "The molecule contains three carbon atoms and the carboxylic acid group, so its IUPAC name is propanoic acid."
  },
  {
    id: 82, year: 1984,
    question: "Alkaline hydrolysis of naturally occurring fats and oils yields:",
    options: { A: "fats and acids", B: "soaps and glycerol", C: "margarine and butter", D: "esters", E: "detergents" },
    answer: "B",
    explanation: "Saponification of triglycerides with an alkali produces soap (fatty-acid salts) and glycerol."
  },
  {
    id: 83, year: 1984,
    question: "Which of the following represents a carboxylic acid?",
    options: {
      A: "R–C(=O)–OH",
      B: "R–C(=O)–OR",
      C: "H₂SO₄",
      D: "R–COOCOR",
      E: "R–C(=O)–H"
    },
    answer: "A",
    explanation: "A carboxylic acid contains the –COOH functional group, represented by R–C(=O)–OH."
  },
  {
    id: 84, year: 1984,
    question: "Which of the following statements is INCORRECT?",
    options: {
      A: "Fractional distillation of crude petroleum gives fuels in increasing boiling point: butane < petrol < kerosene",
      B: "H₂C=CH₂ serves as a monomer in the preparation of polythene",
      C: "Both but-1-ene and but-1-yne decolorize bromine readily",
      D: "But-2-ene reacts with chlorine to form 2,3-dichlorobutane",
      E: "Calcium carbide reacts with water to form any alkyne"
    },
    answer: "E",
    explanation: "Calcium carbide reacts with water specifically to produce ethyne (acetylene), not any alkyne."
  },
  {
    id: 85, year: 1984,
    question: "Which of the following statements is NOT correct about all four acids HBr, HNO₃, H₂CO₃ and H₂SO₄? They:",
    options: { A: "dissolve marble", B: "have a pH less than 7", C: "turn blue litmus red", D: "neutralize alkalis to form salts", E: "react with magnesium to liberate hydrogen" },
    answer: "E",
    explanation: "Nitric acid is an oxidizing acid and generally does not liberate hydrogen gas from magnesium in the usual dilute-acid sense; it oxidizes the hydrogen instead."
  },
  {
    id: 86, year: 1984,
    question: "If the cost of electricity required to deposit 1 g of magnesium is N5.00, how much would it cost to deposit 10 g of aluminium? [Al=27, Mg=24]",
    options: { A: "N10.00", B: "N27.00", C: "N44.44", D: "N66.67", E: "N33.33" },
    answer: "E",
    explanation: "For Mg²⁺, charge per gram is proportional to 2/24. For Al³⁺ it is 3/27. Thus 10 g Al requires (10×3/27)/(1×2/24)=6.667 times the electricity for 1 g Mg. Cost = 6.667×N5 = N33.33."
  },
  {
    id: 87, year: 1984,
    question: "Copper(II) tetraoxosulphate(VI) solution was electrolysed using copper electrodes. The mass of copper deposited at the cathode by passage of 16000 coulombs is:",
    options: { A: "16.70 g", B: "17.60 g", C: "67.10 g", D: "10.67 g", E: "60.17 g" },
    answer: "D",
    explanation: "The supplied question/options appear inconsistent with Faraday's law: using Cu²⁺ and F=96500 C mol⁻¹ gives about 5.27 g, which is not among the printed options. D is retained as the intended keyed option rather than silently changing the source question."
  },
  {
    id: 88, year: 1984,
    question: "Given ³₁R, ¹⁹₉U, ²⁴₁₂S, ²⁰₁₀T and ¹⁸₉Y, which of the following statements is NOT true of R, U, S, T and Y?",
    options: { A: "R is an isotope of hydrogen", B: "U and Y are isotopes", C: "R, U, S and T are metals", D: "T is a noble gas", E: "S will react with oxygen to form SO" },
    answer: "C",
    explanation: "R is hydrogen-3, U and Y are isotopes of fluorine, S is magnesium and T is neon. R, U and T are not metals, so statement C is not true."
  },
  {
    id: 89, year: 1984,
    question: "Nitrogen can best be obtained from a mixture of oxygen and nitrogen by passing the mixture over:",
    options: { A: "potassium hydroxide", B: "heated gold", C: "heated magnesium", D: "heated phosphorus", E: "calcium chloride" },
    answer: "D",
    explanation: "Heated phosphorus reacts preferentially with oxygen to form phosphorus oxides, leaving nitrogen behind."
  },
  {
    id: 90, year: 1984,
    question: "Water is said to be hard if it:",
    options: { A: "easily forms ice", B: "has to be warmed before sodium chloride dissolves in it", C: "forms an insoluble scum with soap", D: "contains nitrates", E: "contains sodium ions" },
    answer: "C",
    explanation: "Hard water contains Ca²⁺ and/or Mg²⁺ ions, which react with soap to form insoluble scum."
  },
  {
    id: 91, year: 1984,
    question: "Sodium hydroxide (NaOH) pellets are:",
    options: { A: "deliquescent", B: "hygroscopic", C: "efflorescent", D: "hydrated", E: "fluorescent" },
    answer: "A",
    explanation: "NaOH pellets absorb moisture from air and can dissolve in the absorbed water; this is deliquescence."
  },
  {
    id: 92, year: 1984,
    question: "Which of the following structure formulae is NOT isomeric with the others?",
    options: {
      A: "H₃C–CH₂–CH₂–OH",
      B: "CH₃–O–CH₂–CH₂–CH₃",
      C: "CH₃–CH(OH)–CH₂–CH₃",
      D: "a four-carbon cyclic ether structure shown in the source",
      E: "a four-carbon cyclic ether structure shown in the source"
    },
    answer: "A",
    explanation: "As printed in the supplied figure, A contains three carbon atoms (C₃H₈O), whereas the other structures are four-carbon structures. Therefore A is the one that is not isomeric with the others."
  },
  {
    id: 93, year: 1984,
    question: "Alkanes:",
    options: { A: "are all gases", B: "have the general formula CₙH₂ₙ₊₂O", C: "contain only carbon and hydrogen", D: "are usually soluble in water", E: "are usually active compounds" },
    answer: "D",
    explanation: "Alkanes are hydrocarbons and are generally insoluble in water. The printed question contains transcription/typographical imperfections, but D is the intended property being tested."
  },
  {
    id: 94, year: 1984,
    question: "If an excess of a liquid hydrocarbon is poured into a jar of chlorine and the sealed jar is exposed for several hours to bright sunlight, all the chlorine gas is consumed. The hydrocarbon is said to have undergone:",
    options: { A: "a polymerization reaction", B: "an isomerization reaction", C: "an addition reaction", D: "a substitution reaction", E: "a reduction reaction" },
    answer: "D",
    explanation: "Alkanes react with chlorine in sunlight by free-radical substitution, replacing hydrogen atoms with chlorine atoms."
  },
  {
    id: 95, year: 1984,
    question: "The function of concentrated H₂SO₄ in the esterification of ethanoic acid with ethanol is to:",
    options: { A: "serve as a dehydrating agent", B: "serve as solvent", C: "act as a catalyst", D: "prevent any side reaction", E: "serve as an oxidizing agent" },
    answer: "C",
    explanation: "Concentrated sulfuric acid catalyses esterification. It also helps remove water, but the intended role in this question is as a catalyst."
  },
  {
    id: 96, year: 1984,
    question: "A piece of sea shell dropped into dilute hydrochloric acid produces a colourless, odourless gas which turns clear limewater milky. The shell contains:",
    options: { A: "sodium chloride", B: "ammonium nitrate", C: "calcium carbonate", D: "calcium chloride", E: "magnesium chloride" },
    answer: "C",
    explanation: "Carbonates react with dilute HCl to produce CO₂. Shells are largely calcium carbonate, and CO₂ turns limewater milky."
  },
  {
    id: 97, year: 1984,
    question: "An aqueous solution of a metal salt M gives a white precipitate with NaOH which dissolves in excess NaOH. With aqueous ammonia, M also gives a white precipitate which dissolves in excess ammonia. The cation M is:",
    options: { A: "Zn²⁺", B: "Ca²⁺", C: "Al³⁺", D: "Pb²⁺", E: "Cu²⁺" },
    answer: "A",
    explanation: "Zn²⁺ gives Zn(OH)₂, a white precipitate soluble in excess NaOH and also soluble in excess aqueous ammonia because of complex formation."
  },
  {
    id: 98, year: 1984,
    question: "The IUPAC name for the compound shown in the source structure (CH₃–CH(CH₃)–CH₂–CH₃) is:",
    options: { A: "isopropylethene", B: "acetylene", C: "3-methylbutane", D: "2-methylbutane", E: "5-methylpentane" },
    answer: "D",
    explanation: "The longest chain has four carbons and a methyl substituent on carbon 2, giving 2-methylbutane."
  },
  {
    id: 99, year: 1984,
    question: "At STP, how many litres of hydrogen can be obtained from the reaction of 500 cm³ of 0.5 M H₂SO₄ with excess zinc metal?",
    options: { A: "22.4 dm³", B: "11.2 dm³", C: "6.5 dm³", D: "5.6 dm³", E: "0.00 dm³" },
    answer: "D",
    explanation: "Moles H₂SO₄ = 0.500 L × 0.5 M = 0.25 mol. Zn + H₂SO₄ → ZnSO₄ + H₂, so 0.25 mol H₂ is formed. At STP: 0.25 × 22.4 = 5.6 dm³."
  },

  {
    id: 100, year: 1985,
    question: "Figure 1 shows part of the periodic Table. Which of the elements belongs to the p-block?",
    options: { A: "S, T and U.", B: "V, W and X", C: "S and T only", D: "P, Q and R", E: "V, W, X and S." },
    answer: "D",
    explanation: "The p-block consists of the elements in groups 13 to 18. In the diagram, P, Q and R are located in this block."
  },
  {
    id: 101, year: 1985,
    question: "Which of the following conducts electricity?",
    options: { A: "Sulphur", B: "Graphite", C: "Diamond", D: "Red phosphorus", E: "Yellow phosphorus." },
    answer: "B",
    explanation: "Graphite conducts electricity because each carbon atom has a delocalized electron that can move through its layers."
  },
  {
    id: 102, year: 1985,
    question: "An organic compound contains 72% carbon, 12% hydrogen and 16% oxygen by mass. The empirical formula of the compound is",
    options: { A: "C₆H₂₂O₃", B: "C₆H₁₀O₃", C: "C₁₂H₁₂O", D: "C₆H₁₂O", E: "C₃CH₁₀" },
    answer: "D",
    explanation: "For 100 g: C = 72/12 = 6 mol, H = 12/1 = 12 mol, O = 16/16 = 1 mol. The simplest whole-number ratio is 6:12:1, giving C₆H₁₂O."
  },
  {
    id: 103, year: 1985,
    question: "0.499 g of CuSO₄·xH₂O when heated to constant weight gave a residue of 0.346 g. The value of x is",
    options: { A: "0.5", B: "2.0", C: "3.0", D: "4.0", E: "5.0." },
    answer: "D",
    explanation: "Water lost = 0.499 − 0.346 = 0.153 g, or 0.153/18 = 0.00850 mol. CuSO₄ = 0.346/159.5 ≈ 0.00217 mol. The ratio H₂O:CuSO₄ is about 3.92:1, which rounds to 4:1. Therefore x = 4."
  },
  {
    id: 104, year: 1985,
    question: "In an experiment which of the following observation would suggest that a solid sample is a mixture? The",
    options: { A: "solid can be ground to a fine powder", B: "density of the solid 2.25 g dm⁻³", C: "solid begins to melt until 648 K", D: "solid absorbs moisture from the atmosphere and turns into a liquid", E: "solid melts at 300 K." },
    answer: "C",
    explanation: "A pure substance has a sharp melting point, whereas a mixture usually melts over a range of temperatures."
  },
  {
    id: 105, year: 1985,
    question: "Hydrogen diffuses through a porous plug",
    options: { A: "at the same rate as oxygen", B: "at a slower rate than oxygen", C: "twice as fast as oxygen", D: "three times as fast as oxygen", E: "four times as fast as oxygen." },
    answer: "E",
    explanation: "By Graham's law, rate of diffusion is inversely proportional to the square root of molar mass. The rate ratio H₂:O₂ is √(32/2) = 4."
  },
  {
    id: 106, year: 1985,
    question: "Given the molecular mass of iron is 56 and that of oxygen is 16, how many moles of Iron(III) oxide will be contained in 1 kg of the compound?",
    options: { A: "25.0 moles", B: "12.5 moles", C: "6.25 moles", D: "3.125 moles", E: "0.625 moles" },
    answer: "C",
    explanation: "Iron(III) oxide is Fe₂O₃, with molar mass (2×56) + (3×16) = 160 g mol⁻¹. Therefore 1000/160 = 6.25 mol."
  },
  {
    id: 107, year: 1985,
    question: "3.0 g of a mixture of potassium carbonate and potassium chloride were dissolved in a 250 cm³ standard flask. 25 cm³ of this solution required 40.00 cm³ of 0.1 M HCl for neutralization. What is the percentage by weight of K₂CO₃ in the mixture?",
    options: { A: "60", B: "72", C: "82", D: "89", E: "92" },
    answer: "E",
    explanation: "40.00 cm³ of 0.1 M HCl contains 0.004 mol HCl. K₂CO₃ reacts with 2 mol HCl per mol, so the 25 cm³ aliquot contains 0.002 mol K₂CO₃. The full 250 cm³ contains 0.020 mol, mass = 0.020×138 = 2.76 g. Percentage = (2.76/3.00)×100 = 92%."
  },
  {
    id: 108, year: 1985,
    question: "At room temperature (300 K)",
    options: { A: "Y is twice as soluble as X", B: "X is twice as soluble as Y", C: "X and Y soluble to the same extent", D: "X is three times as soluble as Y", E: "Y is three times as soluble as X" },
    answer: "A",
    explanation: "Reading the solubility graph at 300 K, the solubility of Y is approximately twice that of X."
  },
  {
    id: 109, year: 1985,
    question: "If 80 g each of X and Y are taken up in 100 g of water at 353 K we shall have.",
    options: { A: "only 10 g of X and Y undissolve", B: "only 16 g of Y undissolve", C: "10 g of X and 16 g of Y undissolved", D: "all X and Y dissolved", E: "all X and Y undissolved" },
    answer: "C",
    explanation: "From the solubility curves at 353 K, about 70 g of X and 64 g of Y dissolve in 100 g of water. Thus about 10 g of X and 16 g of Y remain undissolved."
  },
  {
    id: 110, year: 1985,
    question: "If the molar mass of X is 36 g, the number of moles of X dissolved at 343 K is",
    options: { A: "0.2 moles", B: "0.7 moles", C: "1.5 moles", D: "2.0 moles", E: "3.0 moles" },
    answer: "C",
    explanation: "At 343 K the graph gives a solubility of about 54 g of X per 100 g of water. With molar mass 36 g mol⁻¹, this is about 54/36 = 1.5 mol."
  },
  {
    id: 111, year: 1985,
    question: "Some properties of chemical substances are mentioned below (i) sour taste (ii) slippery to touch (iii) yields alkaline gas with ammonium salts (iv) has pH less than 7 (v) turns phenolphthalein pink. Which of the above are NOT typical properties of alkaline?",
    options: { A: "(i), (iv) and (v)", B: "(iv) and (v)", C: "(i) and (iv)", D: "(ii) and (v)", E: "(ii), (iii) and (v)" },
    answer: "C",
    explanation: "Alkaline substances are generally slippery, have pH above 7 and turn phenolphthalein pink. A sour taste and pH below 7 are not typical alkaline properties."
  },
  {
    id: 112, year: 1985,
    question: "A certain volume of a gas at 298 K is heated such that its volume and pressure are now four times the original values. What is the new temperature?",
    options: { A: "18.6 K", B: "100.0 K", C: "298.0 K", D: "1192.0 K", E: "47689.0 K" },
    answer: "E",
    explanation: "From the combined gas law, T₂/T₁ = (P₂V₂)/(P₁V₁) = 4×4 = 16. Thus T₂ = 16×298 = 4768 K. The printed option E appears to contain a typographical error (47689.0 K) but is clearly intended to represent the calculated value."
  },
  {
    id: 113, year: 1985,
    question: "Hydrogen is not liberated when trioxonitrate(V) acid reacts with zinc because",
    options: { A: "Zinc is rendered passive by the acid", B: "Hydrogen produced is oxidized to water", C: "Oxides of nitrogen are produced", D: "All nitrates are soluble in water", E: "trioxonitrate(V) acid is a strong acid." },
    answer: "B",
    explanation: "Nitric acid is an oxidizing acid. Instead of allowing hydrogen to remain as H₂, nitrate ions oxidize the hydrogen to water while nitrogen oxides are reduced."
  },
  {
    id: 114, year: 1985,
    question: "The boiling points of water, ethanol, toluene and butan-2-ol are 373.0 K, 351.3 K, 383.6 K and 372.5 K respectively. Which liquid has the highest vapour pressure at 323.0 K?",
    options: { A: "water", B: "Toluene", C: "Ethanol", D: "Butan-2-ol", E: "None" },
    answer: "C",
    explanation: "At the same temperature, the liquid with the lower boiling point has the higher vapour pressure. Ethanol has the lowest boiling point (351.3 K)."
  },
  {
    id: 115, year: 1985,
    question: "In what respect will two dry samples of nitrogen gas differ from each other if sample 1 is prepared by completely removing CO₂ and O₂ from air and sample 2 is prepared by passing purified nitrogen(I) oxide over heated copper? Sample 1 is",
    options: { A: "purer than sample 2", B: "slightly denser than sample 2", C: "in all respects the same as sample 2", D: "colourless but sample 2 has a light brown.", E: "slightly less reactive than sample 2" },
    answer: "B",
    explanation: "Nitrogen obtained from air after removing oxygen and carbon dioxide still contains small amounts of noble gases, which make it slightly denser than nitrogen obtained by the other purification method."
  },
  {
    id: 116, year: 1985,
    question: "Copper sulphate solution is electrolyzed using platinum electrodes. A current of 0.193 amperes is passed for 2 hrs. How many grams of copper are deposited?",
    options: { A: "0.457 g", B: "0.500 g", C: "0.882 g", D: "0.914 g", E: "1.00 g" },
    answer: "A",
    explanation: "Q = It = 0.193×(2×3600) = 1389.6 C. For Cu²⁺ + 2e⁻ → Cu, mass = QM/(2F) = 1389.6×63.5/(2×96500) ≈ 0.457 g."
  },
  {
    id: 117, year: 1985,
    question: "X + Y ⇌ Z is an equilibrium reaction. The addition of a catalyst",
    options: { A: "increases the amount of W produced in a given time", B: "increase the rate of change in concentrations of X, Y and Z", C: "increases the rate of disappearance of X and Y", D: "increases the rate of the forward reaction", E: "decreases the amounts of X and Y left after the attainment of equilibrium." },
    answer: "B",
    explanation: "A catalyst speeds up both the forward and reverse reactions, so equilibrium is reached faster without changing the equilibrium composition."
  },
  {
    id: 118, year: 1985,
    question: "What is the formula of sodium gallate if gallium (Ga) shows an oxidation number of +3?",
    options: { A: "NaGaO₃", B: "Na₂Ga(OH)₂", C: "NaGa(OH)₃", D: "NaGa(OH)₄", E: "NaGaO" },
    answer: "D",
    explanation: "Gallium(III) hydroxide is amphoteric and dissolves in excess sodium hydroxide to form the tetrahydroxogallate(III) ion, [Ga(OH)₄]⁻. With Na⁺ the salt is Na[Ga(OH)₄]."
  },
  {
    id: 119, year: 1985,
    question: "If the ONLY pollutants found in the atmosphere over a city are oxides of nitrogen, suspended lead compounds, carbon monoxide and high level of methane, the probable source(s) of the pollution must be",
    options: { A: "automobile exhaust and biological decomposition", B: "combustion of coal and automobile exhaust", C: "biological decomposition only", D: "combustion of coal, automobile exhaust and biological decomposition", E: "combustion of coal and biological decomposition." },
    answer: "A",
    explanation: "Automobile exhaust is a source of nitrogen oxides, carbon monoxide and lead compounds (historically from leaded petrol), while biological decomposition can produce methane."
  },
  {
    id: 120, year: 1985,
    question: "A correct electrochemical series can be obtained from K, Na, Ca, Al, Mg, Zn, Fe, Pb, H, Cu, Hg, Ag, Au by interchanging",
    options: { A: "Al and Mg", B: "Zn and Fe", C: "Zn and Pb", D: "Pb and H", E: "Au and Hg." },
    answer: "A",
    explanation: "The standard electrochemical series places Mg before Al in the sequence given. Therefore Al and Mg must be interchanged."
  },
  {
    id: 121, year: 1985,
    question: "A certain industrial process is represented by the chemical equation 2A(g) + B(g) ⇌ C(g) + 3D(g), ΔH = X kJ mol⁻¹. Which of the following conditions will favour the yield of the product?",
    options: { A: "Increase in the temperature, decrease in pressure.", B: "Increase in temperature, increase in pressure.", C: "Decrease in temperature, increase in pressure.", D: "Decrease in temperature, increase in pressure.", E: "Constant temperature, increase in pressure." },
    answer: "A",
    explanation: "The reaction produces more moles of gas on the product side (4 mol versus 3 mol), so lower pressure favours products. Taking X as positive as printed, the forward reaction is endothermic, so higher temperature also favours products."
  },
  {
    id: 122, year: 1985,
    question: "2MnO₄⁻ + 10Cl⁻ + 16H⁺ → 2Mn²⁺ + 5Cl₂ + 8H₂O. Which of the substances serves as an oxidizing agent?",
    options: { A: "Mn²⁺", B: "Cl⁻", C: "H₂O", D: "MnO₄⁻", E: "Cl₂" },
    answer: "D",
    explanation: "MnO₄⁻ is reduced from Mn(VII) to Mn²⁺. The species that is reduced acts as the oxidizing agent."
  },
  {
    id: 123, year: 1985,
    question: "In the reaction H₂O(g) ⇌ H₂(g) + ½O₂(g), ΔH = +2436000 kJ², which of the following has no effect on the equilibrium position?",
    options: { A: "Adding argon to the system", B: "Lowering the temperature", C: "Adding hydrogen to the system", D: "Decreasing the pressure", E: "Increasing the temperature." },
    answer: "A",
    explanation: "Adding an inert gas such as argon at constant volume does not change the partial pressures of the reacting gases, so the equilibrium position is unchanged."
  },
  {
    id: 124, year: 1985,
    question: "Which of the following metals will displace iron from a solution of iron(II) tetraoxosulphate(VI)?",
    options: { A: "copper", B: "mercury", C: "silver", D: "Zinc", E: "Gold" },
    answer: "D",
    explanation: "Zinc is above iron in the electrochemical series and is therefore more readily oxidized. It can displace Fe²⁺ from solution."
  },
  {
    id: 125, year: 1985,
    question: "Complete hydrogenation of ethyne yields",
    options: { A: "benzene", B: "methane", C: "ethene", D: "propane", E: "Ethane" },
    answer: "E",
    explanation: "Complete hydrogenation adds two molecules of H₂ across the triple bond: C₂H₂ + 2H₂ → C₂H₆, ethane."
  },
  {
    id: 126, year: 1985,
    question: "Which of the following is used in the manufacture of bleaching powder?",
    options: { A: "sulphur dioxide", B: "chlorine", C: "hydrogen tetraoxosulphate", D: "hydrogen sulphide", E: "nitrogen dioxide" },
    answer: "B",
    explanation: "Bleaching powder is manufactured by passing chlorine gas over dry slaked lime, Ca(OH)₂."
  },
  {
    id: 127, year: 1985,
    question: "A man suspected to being drunk is made to pass his breath into acidified potassium dichromate solution. If his breath carries a significant level of ethanol, the final colour of the solution is.",
    options: { A: "Pink", B: "Purple", C: "Orange", D: "Blue-black", E: "Green." },
    answer: "E",
    explanation: "Ethanol reduces orange dichromate(VI) ions to green chromium(III) ions in acidic solution."
  },
  {
    id: 128, year: 1985,
    question: "When pollen grains are suspended in water and viewed through a microscope, they appear to be in a state of constant but erratic motion. This is due to",
    options: { A: "convection currents", B: "small changes in pressure", C: "small changes in temperature", D: "a chemical reaction between the pollen grains and water", E: "the bombardment of the pollen grains by molecules of water." },
    answer: "E",
    explanation: "Brownian motion is caused by the continuous, random bombardment of suspended particles by surrounding fluid molecules."
  },
  {
    id: 129, year: 1985,
    question: "The energy change (H) for the reaction CO(g) + ½O₂(g) → CO₂(g) is",
    options: { A: "−503.7 kJ", B: "+503.7 kJ", C: "−282.9 kJ", D: "+282.9 kJ", E: "+393.3 kJ" },
    answer: "C",
    explanation: "ΔH = ΔHf(CO₂) − ΔHf(CO) = −393.0 − (−110.4) = −282.6 kJ mol⁻¹, which matches the intended value −282.9 kJ mol⁻¹ in option C."
  },
  {
    id: 130, year: 1985,
    question: "The product formed on hydrolysis of CH₃COOCH₂CH₂CH₃ in acid (HCl) is",
    options: { A: "CH₃COOH + CH₃CH₂CH₂Cl", B: "CH₃CH₂CH₂OH + CH₃COCl", C: "CH₃COOH + HOCH₂CH₂CH₃", D: "CH₃COOH + CH₃CH₃", E: "CH₃CH₂COOH + CH₃CH₂OH" },
    answer: "C",
    explanation: "Acid hydrolysis of the ester propyl ethanoate produces ethanoic acid and propan-1-ol."
  },
  {
    id: 131, year: 1985,
    question: "The neutralization reaction between NaOH solution and nitrogen(IV) oxide (NO₂) produces water and",
    options: { A: "NaNO₂ and NaNO₃", B: "NaNO₃ and HNO₃", C: "NaNO₂", D: "NaNO₃", E: "NaN₂O₃" },
    answer: "A",
    explanation: "NO₂ reacts with NaOH to form a mixture of sodium nitrite and sodium nitrate: 2NO₂ + 2NaOH → NaNO₂ + NaNO₃ + H₂O."
  },
  {
    id: 132, year: 1985,
    question: "The oxidation of the aldehyde shown in the source structure gives",
    options: { A: "2-butanone", B: "2-butanal", C: "butane", D: "butanoic acid", E: "3-butanal." },
    answer: "D",
    explanation: "Oxidation of an aldehyde converts the −CHO group to −COOH. Thus butanal is oxidized to butanoic acid."
  },
  {
    id: 133, year: 1985,
    question: "Tetraoxosulphate(VI) ions are finally tested using",
    options: { A: "acidified silver nitrate", B: "acidified barium chloride", C: "lime-water", D: "dilute hydrochloric acid", E: "acidified lead nitrate" },
    answer: "B",
    explanation: "Sulphate ions give a white precipitate of barium sulphate with acidified barium chloride. Acidification removes interfering carbonate ions."
  },
  {
    id: 134, year: 1985,
    question: "The I.U.P.A.C name for the compound CH₃–CH–CH(CH₃)–CH=CH–CH₃ is",
    options: { A: "2-methyl-3-pentene", B: "4-methyl-2-pentane", C: "2-methyl-2-penten", D: "4-methyl-3-pentene", E: "2-methyl-3-pentane" },
    answer: "INVALID",
    explanation: "The structure shown in the source has a six-carbon parent chain and corresponds to 3-methylhex-2-ene. None of the five printed options matches this correct IUPAC name, so the source question has an invalid answer set rather than a reliable A–E answer."
  },
  {
    id: 135, year: 1985,
    question: "Mixing of aqueous solution of barium hydroxide and sodium tetraoxocarbonate(IV) yields a white precipitate of",
    options: { A: "barium oxide", B: "sodium tetraoxocarbonate(IV)", C: "sodium oxide", D: "sodium hydroxide", E: "barium tetraoxocarbonate." },
    answer: "E",
    explanation: "Ba(OH)₂(aq) + Na₂CO₃(aq) → BaCO₃(s) + 2NaOH(aq). Barium carbonate is the white precipitate."
  },
  {
    id: 136, year: 1985,
    question: "An organic compound decolorized acidified KMnO₄ solution but failed to react with ammoniacal silver nitrate solution. The organic compound is likely to be.",
    options: { A: "a carboxylic acid", B: "an alkane", C: "an alkene", D: "an alkyne", E: "an alkanone" },
    answer: "C",
    explanation: "An alkene readily decolorizes permanganate because its C=C bond is oxidized. A terminal alkyne would give a reaction with ammoniacal silver nitrate, so the intended answer is alkene."
  },
  {
    id: 137, year: 1985,
    question: "Solid sodium hydroxide on exposure to air absorbs a gas and ultimately gives another alkaline substance with the molecular formula.",
    options: { A: "NaOH·H₂O", B: "NaOH·N₂", C: "Na₂CO₃", D: "NaHCO₃", E: "NaNO₃" },
    answer: "C",
    explanation: "Solid NaOH absorbs carbon dioxide from air and forms sodium carbonate: 2NaOH + CO₂ → Na₂CO₃ + H₂O."
  },
  {
    id: 138, year: 1985,
    question: "Which of the following is the functional group of carboxylic acids?",
    options: { A: "−OH", B: ">C=O", C: ">C−OH", D: "−C(=O)OH", E: "−C=N" },
    answer: "D",
    explanation: "A carboxylic acid contains the carboxyl functional group, −COOH, consisting of a carbonyl group and hydroxyl group on the same carbon."
  },
  {
    id: 139, year: 1985,
    question: "Which of the following substances is the most abundant in the universe?",
    options: { A: "Carbon", B: "Air", C: "Water", D: "Oxygen", E: "Hydrogen" },
    answer: "E",
    explanation: "Hydrogen is the most abundant element in the universe, making up the largest fraction of ordinary matter."
  },
  {
    id: 140, year: 1985,
    question: "A colourless organic compound X was burnt in excess air to give two colourless and odourless gases, Y and Z, as products. X does not decolorize bromine vapour; Y turns limewater milky while Z gives a blue colour with copper(II) tetraoxosulphate(VI). Compound X is",
    options: { A: "an alkene", B: "an alkane", C: "an alkyne", D: "tetrachloromethane", E: "Dichloromethane" },
    answer: "B",
    explanation: "A saturated hydrocarbon such as an alkane does not decolorize bromine vapour. Complete combustion gives CO₂, which turns limewater milky, and H₂O, which turns anhydrous copper(II) sulphate blue."
  },
  {
    id: 141, year: 1985,
    question: "Y and Z are respectively.",
    options: { A: "CO₂ and NH₃", B: "CO and NH₃", C: "SO₂ and H₂O", D: "CO₂ and H₂O", E: "SO₂ and NH₃" },
    answer: "D",
    explanation: "The gas that turns limewater milky is CO₂, while the gas that turns anhydrous copper(II) sulphate blue is water vapour."
  },
  {
    id: 142, year: 1985,
    question: "Which of the following compounds is NOT the correct product formed when the parent metal is heated in air?",
    options: { A: "Calcium oxide (CaO)", B: "Sodium oxide (Na₂O)", C: "Copper(II) oxide (CuO)", D: "Tri-iron tetroxide (Fe₃O₄)", E: "Aluminium oxide (Al₂O₃)" },
    answer: "B",
    explanation: "When sodium burns in air, it commonly forms sodium peroxide, Na₂O₂, rather than sodium oxide as the principal product. The other listed metal oxides can be formed by heating the metals in air."
  },
  {
    id: 143, year: 1985,
    question: "The atomic number of an element whose cation, X²⁺, has the ground state electronic configuration 1s²2s²2p⁶3s²3p⁶ is",
    options: { A: "16", B: "18", C: "20", D: "22", E: "24" },
    answer: "C",
    explanation: "The configuration contains 18 electrons. Since X²⁺ has lost two electrons, the neutral atom has 20 electrons and therefore atomic number 20."
  },
  {
    id: 144, year: 1985,
    question: "When marble is heated to 1473 K, another whiter solid is obtained which reacts vigorously with water to give an alkaline solution. The solution contains",
    options: { A: "NaOH", B: "KOH", C: "Mg(OH)₂", D: "Zn(OH)₂", E: "Ca(OH)₂" },
    answer: "E",
    explanation: "Marble is mainly CaCO₃. On strong heating it decomposes to CaO, which reacts vigorously with water: CaO + H₂O → Ca(OH)₂."
  },
  {
    id: 145, year: 1985,
    question: "Addition of dilute hydrochloric acid to an aqueous solution of a crystalline salt yielded a yellow precipitate and a gas which turned dichromate paper green. The crystalline salt was probably",
    options: { A: "Na₂SO₄", B: "Na₂S", C: "Na₂S₂O₃·5H₂O", D: "Na₂CO₃", E: "NaHCO₃" },
    answer: "C",
    explanation: "Acidified thiosulphate decomposes to produce yellow sulphur and SO₂. SO₂ reduces acidified dichromate, turning it from orange to green."
  },
  {
    id: 146, year: 1985,
    question: "The process involved in the conversion of an oil into margarine is known as",
    options: { A: "hydrogenation", B: "condensation", C: "hydrolysis", D: "dehydration", E: "cracking" },
    answer: "A",
    explanation: "Vegetable oils contain unsaturated bonds. Partial hydrogenation adds hydrogen across some C=C bonds, making the fat more saturated and solid, as in margarine production."
  },
  {
    id: 147, year: 1985,
    question: "An aqueous solution of an inorganic salt gave white precipitate (i) soluble in excess aqueous NaOH (ii) insoluble in excess aqueous NH₃ (iii) with dilute HCl. The cation present in the inorganic salt is",
    options: { A: "NH₄⁺", B: "Ca²⁺", C: "Ni²⁺", D: "Al³⁺", E: "Pb²⁺" },
    answer: "E",
    explanation: "Pb²⁺ forms white Pb(OH)₂, which dissolves in excess NaOH but is insoluble in excess aqueous ammonia. This distinguishes it from Zn²⁺, whose hydroxide dissolves in excess ammonia."
  },
  {
    id: 148, year: 1985,
    question: "Which of the following roles does sodium chloride play in soap preparation? It",
    options: { A: "reacts with glycerol", B: "purifies the soap", C: "accelerates the decomposition of the fat and oil", D: "separates the soap from the glycerol", E: "converts the fat acid to its sodium salt." },
    answer: "D",
    explanation: "Sodium chloride causes the soap to salt out of the aqueous mixture, separating the soap from glycerol and other soluble materials."
  },
  {
    id: 149, year: 1985,
    question: "The function of sulphur during the vulcanization of rubber is to .",
    options: { A: "act as catalyst for the polymerization of rubber molecules", B: "convert rubber from thermosetting to thermoplastic polymer", C: "form chains which bind rubber molecules together", D: "break down rubber polymer molecule", E: "shorten the chain length of rubber polymer." },
    answer: "C",
    explanation: "Sulphur forms cross-links between polymer chains in rubber. These cross-links improve strength, elasticity and resistance to deformation."
  },

  {
    id: 150, year: 1986,
    question: "The movement of liquid molecules from the surface of the liquid into the gaseous phase above it is known as",
    options: { A: "Brownian movement", B: "Condensation", C: "Evaporation", D: "Liquefaction" },
    answer: "C",
    explanation: "Evaporation is the escape of molecules from the surface of a liquid into the gas phase."
  },
  {
    id: 151, year: 1986,
    question: "10 cm³ of hydrogen fluoride gas reacts with 5 cm³ of dinitrogen difluoride gas (N₂F₂) to form 10 cm³ of a single gas. Which of the following is the most likely equation for the reaction?",
    options: { A: "HF + N₂F₂ → N₂HF₃", B: "2HF + N₂F₂ → 2NHF₂", C: "2HF + N₂F₂ → N₂H₂F₄", D: "HF + 2N₂F₂ → N₄HF₄" },
    answer: "B",
    explanation: "At the same temperature and pressure, gas volumes are proportional to mole ratios. The 10:5 volume ratio is 2:1, so 2HF reacts with 1N₂F₂. The balanced product is 2NHF₂."
  },
  {
    id: 152, year: 1986,
    question: "The number of atoms of chlorine present in 5.85 g of NaCl is [Na = 23, Cl = 35.5; Avogadro's Number = 6.02 × 10²³]",
    options: { A: "6.02 × 10²²", B: "5.85 × 10²³", C: "6.02 × 10²³", D: "5.85 × 10²⁴" },
    answer: "A",
    explanation: "Molar mass of NaCl = 23 + 35.5 = 58.5 g mol⁻¹. Thus 5.85 g is 0.10 mol, containing 0.10 × 6.02 × 10²³ = 6.02 × 10²² formula units. Each NaCl unit has one chlorine atom, so A is correct."
  },
  {
    id: 153, year: 1986,
    question: "How much magnesium is required to react with 250 cm³ of 0.5 M HCl? [Mg = 24]",
    options: { A: "0.3 g", B: "1.5 g", C: "2.4 g", D: "3.0 g" },
    answer: "B",
    explanation: "Mg + 2HCl → MgCl₂ + H₂. Moles of HCl = 0.250 × 0.5 = 0.125 mol. Moles of Mg = 0.125/2 = 0.0625 mol. Mass = 0.0625 × 24 = 1.5 g."
  },
  {
    id: 154, year: 1986,
    question: "200 cm³ of oxygen diffuse through a porous plug in 50 seconds. How long will 80 cm³ of methane (CH₄) take to diffuse through the same porous plug under the same conditions? [C = 12, O = 16, H = 1]",
    options: { A: "20 sec", B: "20 sec", C: "14 sec", D: "7 sec" },
    answer: "C",
    explanation: "By Graham's law, diffusion rate is inversely proportional to the square root of molar mass. r(CH₄)/r(O₂) = √(32/16) = √2. Oxygen rate = 200/50 = 4 cm³ s⁻¹, so methane rate ≈ 5.66 cm³ s⁻¹. Time for 80 cm³ ≈ 80/5.66 = 14.1 s, so C."
  },
  {
    id: 155, year: 1986,
    question: "The relationship between the velocity (U) of gas molecules and their relative molecular mass (M) is shown by the equation",
    options: { A: "U = (kM)¹⁄²", B: "U = (kM)²", C: "U = k/m", D: "U = (k/M)¹⁄²" },
    answer: "D",
    explanation: "From the kinetic theory of gases, molecular speed is inversely proportional to the square root of molar mass: U ∝ 1/√M. Therefore D is correct."
  },
  {
    id: 156, year: 1986,
    question: "An element with atomic number twelve is likely to be",
    options: { A: "electrovalent with a valency of 1", B: "electrovalent with a valency of 2", C: "covalent with a valency of 2", D: "covalent with a valency of 4" },
    answer: "B",
    explanation: "Atomic number 12 is magnesium, with electron configuration 2,8,2. It loses two outer electrons to form Mg²⁺, so it is electrovalent with valency 2."
  },
  {
    id: 157, year: 1986,
    question: "Which of the following group of physical properties increases from left to right of the periodic table? 1. Ionization energy 2. Atomic radius 3. Electronegativity 4. Electron affinity",
    options: { A: "1 and 2", B: "1, 2 and 3", C: "3 and 4", D: "1, 2, 3 and 4" },
    answer: "C",
    explanation: "Across a period, ionization energy and electronegativity generally increase, while atomic radius decreases. Electron affinity generally becomes more favorable across the period. Among the given combinations, 3 and 4 is the intended answer."
  },
  {
    id: 158, year: 1986,
    question: "When 50 cm³ of a saturated solution of sugar (molar mass 342.0 g) at 40°C was evaporated to dryness, 34.2 g of dry solid was obtained. The solubility of sugar at 40°C is",
    options: { A: "10.0 moles dm⁻³", B: "7.0 moles dm⁻³", C: "3.5 moles dm⁻³", D: "2.0 moles dm⁻³" },
    answer: "D",
    explanation: "Moles of sugar = 34.2/342 = 0.10 mol. The solution volume is 50 cm³ = 0.050 dm³. Solubility = 0.10/0.050 = 2.0 mol dm⁻³, so D."
  },
  {
    id: 159, year: 1986,
    question: "Which of the following is an acid salt?",
    options: { A: "NaHSO₄", B: "Na₂SO₄", C: "CH₃CO₂Na", D: "Na₂S" },
    answer: "A",
    explanation: "NaHSO₄ is an acid salt because it contains replaceable hydrogen from the parent acid H₂SO₄. The other listed salts do not contain such acidic hydrogen."
  },
  {
    id: 160, year: 1986,
    question: "Which of the following solution will conduct the least amount of electricity?",
    options: { A: "2.00 M aqueous solution of NaOH", B: "0.01 M aqueous solution of NaOH", C: "0.01 M aqueous solution of hexaonic acid", D: "0.01 M aqueous solution of sugar" },
    answer: "D",
    explanation: "Sugar is a non-electrolyte and does not ionize in water, so its solution contains essentially no mobile ions. It therefore conducts least."
  },
  {
    id: 161, year: 1986,
    question: "In the electrolysis of aqueous solution of K₂SO₄ in the above cell, which species migrate to the anode?",
    options: { A: "SO₄²⁻ and OH⁻", B: "K⁺ and SO₄²⁻", C: "OH⁻ and H₃O⁺", D: "H₃O⁺ and K⁺" },
    answer: "A",
    explanation: "The anode is positive, so negatively charged ions (anions) migrate toward it. In aqueous K₂SO₄, SO₄²⁻ and OH⁻ are the relevant anions."
  },
  {
    id: 162, year: 1986,
    question: "How many coulombs of electricity are passed through a solution in which 6.5 amperes are allowed to run for 1.0 hour?",
    options: { A: "3.90 × 10² coulombs", B: "5.50 × 10³ coulombs", C: "6.54 × 10³ coulombs", D: "2.34 × 10⁴ coulombs" },
    answer: "D",
    explanation: "Charge Q = It. Time = 1 hour = 3600 s. Q = 6.5 × 3600 = 23,400 C = 2.34 × 10⁴ C."
  },
  {
    id: 163, year: 1986,
    question: "Which of these represents a redox reaction?",
    options: { A: "AgNO₃ + NaCl → AgCl + NaNO₃", B: "H₂S + Pb(NO₃)₂ → PbS + 2HNO₃", C: "CaCO₃ → CaO + CO₂", D: "Zn + 2HCl → ZnCl₂ + H₂" },
    answer: "D",
    explanation: "In D, zinc is oxidized from 0 to +2 while hydrogen ions are reduced to H₂. Oxidation and reduction occur together, so it is a redox reaction."
  },
  {
    id: 164, year: 1986,
    question: "How many electrons are transferred in reducing one atom of Mn in the reaction MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    answer: "A",
    explanation: "In MnO₂, manganese is +4; in MnCl₂ it is +2. Reduction from +4 to +2 involves gaining 2 electrons."
  },
  {
    id: 165, year: 1986,
    question: "20 cm³ of 0.1 molar NH₄OH solution when neutralized with 20.05 cm³ of 0.1 molar HCl liberated 102 joules of heat. Calculate the heat of neutralization of NH₄OH.",
    options: { A: "−51.0 kJ mol⁻¹", B: "+57.3 kJ mol⁻¹", C: "+57.0 kJ mol⁻¹", D: "+51.0 kJ mol⁻¹" },
    answer: "A",
    explanation: "About 0.002 mol of NH₄OH is neutralized. Heat released per mole = 102 J/0.002 mol = 51,000 J mol⁻¹ = 51 kJ mol⁻¹. Because heat is released, ΔH is negative: −51.0 kJ mol⁻¹."
  },
  {
    id: 166, year: 1986,
    question: "What is the consequence of increasing pressure on the equilibrium reaction ZnO(s) + H₂(g) ⇌ Zn(s) + H₂O(l)?",
    options: { A: "The equilibrium is driven to the left", B: "The equilibrium is driven to the right", C: "There is no effect", D: "More ZnO(s) is produced" },
    answer: "B",
    explanation: "Only gaseous substances affect pressure equilibrium. There is one mole of gas on the left and no gas on the right, so increasing pressure shifts the equilibrium to the right."
  },
  {
    id: 167, year: 1986,
    question: "The approximate volume of air containing 10 cm³ of oxygen is",
    options: { A: "20 cm³", B: "25 cm³", C: "50 cm³", D: "100 cm³" },
    answer: "C",
    explanation: "Air contains about 20–21% oxygen by volume. Therefore volume of air ≈ 10/0.20 = 50 cm³."
  },
  {
    id: 168, year: 1986,
    question: "The reaction Mg + H₂O → MgO + H₂ takes place only in the presence of",
    options: { A: "excess Mg ribbon", B: "excess cold water", C: "very hot water", D: "steam" },
    answer: "D",
    explanation: "Magnesium reacts very slowly with cold water but reacts readily with steam to form MgO and hydrogen."
  },
  {
    id: 169, year: 1986,
    question: "When steam is passed through red hot carbon, which of the following are produced?",
    options: { A: "Hydrogen and oxygen and carbon(IV) oxide", B: "Hydrogen and carbon(IV) oxide", C: "Hydrogen and carbon(II) oxide", D: "Hydrogen and trioxocarbonate(IV) acid" },
    answer: "C",
    explanation: "Steam reacts with hot carbon in the water-gas reaction: C + H₂O(g) → CO + H₂. The carbon product is carbon(II) oxide (CO), so C is correct."
  },
  {
    id: 170, year: 1986,
    question: "Which of the following contains an efflorescent, a deliquescent and a hygroscopic substance respectively?",
    options: { A: "Na₂SO₄, concentrated H₂SO₄, CaCl₂", B: "Na₂CO₃·H₂O, FeSO₄·7H₂O, concentrated H₂SO₄", C: "Na₂CO₃·10H₂O, FeCl₃, concentrated H₂SO₄", D: "Concentrated H₂SO₄, FeSO₄·7H₂O, MgCl₂" },
    answer: "C",
    explanation: "Na₂CO₃·10H₂O is efflorescent; FeCl₃ is deliquescent; concentrated H₂SO₄ is strongly hygroscopic. Therefore C is correct."
  },
  {
    id: 171, year: 1986,
    question: "The exhaust fumes from a garage in a place that uses petrol of high sulphur content are bound to contain",
    options: { A: "CO and SO₃", B: "CO and SO₂", C: "CO, SO₂ and SO₃", D: "CO and H₂S" },
    answer: "B",
    explanation: "Incomplete combustion of petrol can produce CO, while sulphur in the fuel is oxidized mainly to SO₂. Thus CO and SO₂ are expected pollutants."
  },
  {
    id: 172, year: 1986,
    question: "Oxygen-demanding wastes are considered to be a water pollutant because they",
    options: { A: "deplete oxygen which is necessary for the survival of aquatic organisms", B: "increase oxygen which is necessary for the survival of aquatic organisms", C: "increase other gaseous species which are necessary for survival of aquatic organisms", D: "deplete other gaseous species which are necessary for the survival of aquatic organisms" },
    answer: "A",
    explanation: "Microorganisms use dissolved oxygen to decompose oxygen-demanding organic matter. This lowers dissolved oxygen and can kill aquatic organisms."
  },
  {
    id: 173, year: 1986,
    question: "Which of the following will react further with oxygen to form a higher oxide?",
    options: { A: "NO and H₂O", B: "CO and CO₂", C: "SO₂ and NO", D: "CO₂ and H₂O" },
    answer: "C",
    explanation: "Both SO₂ and NO can be further oxidized: 2SO₂ + O₂ → 2SO₃ and 2NO + O₂ → 2NO₂."
  },
  {
    id: 174, year: 1986,
    question: "In the course of an experiment, two gases X and Y were produced. X turned wet lead ethanoate to black and Y bleached moist litmus paper. What are the elements in each of the gases X and Y respectively?",
    options: { A: "H and S; Cl", B: "H and O; Cl", C: "H and S; C and O", D: "H and Cl; S and O" },
    answer: "A",
    explanation: "Hydrogen sulphide, H₂S, turns lead ethanoate black by forming black lead sulphide. Chlorine bleaches moist litmus. Thus X contains H and S, while Y is chlorine."
  },
  {
    id: 175, year: 1986,
    question: "Which of the following sulphides is insoluble in dilute HCl?",
    options: { A: "Na₂S", B: "ZnS", C: "CuS", D: "FeS" },
    answer: "C",
    explanation: "CuS is highly insoluble in dilute hydrochloric acid. ZnS and FeS react with dilute HCl to release H₂S, while Na₂S dissolves readily."
  },
  {
    id: 176, year: 1986,
    question: "When chlorine is passed into water and subsequently exposed to sunlight, the gas evolved is",
    options: { A: "HCl", B: "HOCl", C: "O₂", D: "Cl₂O₂" },
    answer: "C",
    explanation: "Chlorine reacts reversibly with water to form HCl and HClO. In sunlight, hypochlorous acid decomposes and oxygen gas is released: 2HClO → 2HCl + O₂."
  },
  {
    id: 177, year: 1986,
    question: "Which of the following metals does NOT form a stable trioxocarbonate(IV)?",
    options: { A: "Fe", B: "Al", C: "Zn", D: "Pb" },
    answer: "B",
    explanation: "Aluminium carbonate is not stable under ordinary conditions; it hydrolyses readily. The other listed metals can form carbonate compounds."
  },
  {
    id: 178, year: 1986,
    question: "Which of the following compounds reacts with NaOH to give salt and water only? When Z is treated with dilute HCl, a gas is evolved which gives a yellow suspension on passing into concentrated H₂SO₄. Substance Z is",
    options: { A: "NaHS", B: "Na₂SO₃", C: "Na₂S", D: "NaHSO₃" },
    answer: "A",
    explanation: "NaHS reacts with NaOH to form Na₂S and water. With dilute HCl it gives H₂S, and H₂S reacts with concentrated H₂SO₄ to produce sulphur, giving a yellow suspension."
  },
  {
    id: 179, year: 1986,
    question: "Ammonia gas is normally dried with",
    options: { A: "concentrated sulphuric acid", B: "quicklime", C: "anhydrous calcium chloride", D: "magnesium sulphate" },
    answer: "B",
    explanation: "Quicklime (CaO) removes moisture without reacting significantly with ammonia. Concentrated H₂SO₄ and anhydrous CaCl₂ are unsuitable because they react with or absorb ammonia."
  },
  {
    id: 180, year: 1986,
    question: "What are the values of x, y and z respectively in the equation xCu + yHNO₃ → xCu(NO₃)₂ + 4H₂O + zNO?",
    options: { A: "4;1;2", B: "3;8;2", C: "2;8;3", D: "8;3;2" },
    answer: "B",
    explanation: "Balancing the reaction with dilute nitric acid gives 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO. Therefore x = 3, y = 8 and z = 2."
  },
  {
    id: 181, year: 1986,
    question: "The iron(III) oxide impurity in bauxite can be removed by",
    options: { A: "fractional crystallization in acid solution", B: "dissolution in sodium hydroxide and filtration", C: "extraction with concentrated ammonia and reprecipitation", D: "electrolysis of molten mixture" },
    answer: "B",
    explanation: "In the Bayer process, amphoteric aluminium oxide dissolves in concentrated NaOH while iron(III) oxide remains insoluble and can be removed by filtration."
  },
  {
    id: 182, year: 1986,
    question: "A white solid suspected to be lead trioxonitrate(V), zinc trioxocarbonate(IV) or calcium trioxocarbonate(IV) was heated strongly. Its residue, which was yellow when hot and white when cold, is",
    options: { A: "lead(II) oxide", B: "calcium oxide", C: "zinc oxide", D: "lead nitrite" },
    answer: "C",
    explanation: "Zinc oxide is yellow when hot and white when cold. This characteristic colour change identifies ZnO among the possible residues."
  },
  {
    id: 183, year: 1986,
    question: "Which of the following compounds would give lilac flame coloration and a white precipitate with acidified barium chloride solution?",
    options: { A: "KCl", B: "NaNO₃", C: "K₂SO₄", D: "CaSO₄" },
    answer: "C",
    explanation: "Potassium gives a lilac flame, while sulphate ions give a white BaSO₄ precipitate with acidified BaCl₂. K₂SO₄ therefore satisfies both tests."
  },
  {
    id: 184, year: 1986,
    question: "How will a metal X, which reacts explosively with air and with dilute acids, be best extracted from its ores?",
    options: { A: "Electrolysis of the solution of its salt", B: "Decomposition of its oxide", C: "Displacement from solution by an alkali metal", D: "Electrolysis of fused salt" },
    answer: "D",
    explanation: "A very reactive metal cannot normally be obtained by aqueous electrolysis because water is preferentially reduced. Electrolysis of its molten/fused salt avoids water and is used for highly reactive metals."
  },
  {
    id: 185, year: 1986,
    question: "Which of the following is NOT correct for the named organic compound in each case?",
    options: { A: "Butanoic acid solution gives effervescence with Na₂CO₃ solution", B: "Glucose when reacted with Na₂CrO₄ at 0°C will show immediate discharge of colour", C: "When but-2-ene is reacted with dilute solution of KMnO₄ the purple colour of KMnO₄ is discharged readily even at room temperature", D: "When butan-2-ol is boiled with butanoic acid with a drop of concentrated H₂SO₄, a sweet-smelling liquid is produced" },
    answer: "B",
    explanation: "The immediate reduction of chromate/dichromate is not a valid simple test as stated for glucose with Na₂CrO₄ at 0°C. The other statements describe standard acid-carbonate, alkene oxidation and esterification reactions."
  },
  {
    id: 186, year: 1986,
    question: "Which of the following is used as an 'anti-knock' in automobile engines?",
    options: { A: "Tetramethylsilane", B: "Lead tetra-ethyl", C: "Glycerol", D: "N-heptanes" },
    answer: "B",
    explanation: "Tetraethyl lead was historically used as an anti-knock additive to increase the octane rating of petrol and reduce engine knocking."
  },
  {
    id: 187, year: 1986,
    question: "What reaction takes place when palm-oil is added to potash and foams are observed?",
    options: { A: "Neutralization", B: "Saponification", C: "Etherification", D: "Salting-out" },
    answer: "B",
    explanation: "Palm oil contains triglycerides. Hot alkali hydrolyses these esters to form soap and glycerol; this alkaline hydrolysis is called saponification."
  },
  {
    id: 188, year: 1986,
    question: "How many isomers can be formed from organic compounds with the formula C₃H₈O?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    answer: "B",
    explanation: "C₃H₈O has two alcohol isomers (propan-1-ol and propan-2-ol) and one ether isomer (methoxyethane), giving 3 structural isomers."
  },
  {
    id: 189, year: 1986,
    question: "When ethanol is heated with excess concentrated sulphuric acid, the ethanol is",
    options: { A: "oxidized to ethene", B: "polymerized to polyethene", C: "dehydrated to ethene", D: "dehydrated to ethyne" },
    answer: "C",
    explanation: "Concentrated H₂SO₄ acts as a dehydrating agent. Ethanol loses water on heating to form ethene: C₂H₅OH → C₂H₄ + H₂O."
  },
  {
    id: 190, year: 1986,
    question: "Which of the following compounds is NOT formed by the action of chlorine on methane?",
    options: { A: "CH₃Cl", B: "C₂H₅Cl", C: "CH₂Cl₂", D: "CHCl₃" },
    answer: "B",
    explanation: "Chlorination of methane by substitution gives chloromethanes such as CH₃Cl, CH₂Cl₂ and CHCl₃. C₂H₅Cl contains two carbons and is not a direct chlorination product of methane."
  },
  {
    id: 191, year: 1986,
    question: "The general formula of an alkyl halide (where X represents the halide) is",
    options: { A: "CₙH₂ₙ₋₂X", B: "CₙH₂ₙ₊₁X", C: "CₙH₂ₙ₊₂X", D: "CₙH₂ₙX" },
    answer: "B",
    explanation: "An alkyl group has the formula CₙH₂ₙ₊₁. Replacing its hydrogen with a halogen gives the general formula CₙH₂ₙ₊₁X."
  },
  {
    id: 192, year: 1986,
    question: "Which of the following are made by the process of polymerization?",
    options: { A: "Nylon and soap", B: "Nylon and rubber", C: "Soap and butane", D: "Margarine and Nylon" },
    answer: "B",
    explanation: "Nylon is a polymer, and rubber is also a polymer formed from smaller monomer units. Soap and margarine are not made by polymerization."
  },
  {
    id: 193, year: 1986,
    question: "Starch can be converted to ethyl alcohol by",
    options: { A: "distillation", B: "fermentation", C: "isomerization", D: "cracking" },
    answer: "B",
    explanation: "Starch is first hydrolysed to sugars, which yeast then converts anaerobically to ethanol and carbon dioxide by fermentation."
  },

  // 1987 source question 1
  {
    id: 194, year: 1987,
    question: "A brand of ink containing cobalt(II), copper(II) and iron can best be separated into its various components by.",
    options: { A: "fractional crystallization", B: "fractional distillation", C: "sublimation", D: "chromatography" },
    answer: "D",
    explanation: "Chromatography separates components of a mixture based on differences in their rates of migration through a medium."
  },
  // 1987 source question 2
  {
    id: 195, year: 1987,
    question: "Which of the following substances is a mixture?",
    options: { A: "Granulated sugar", B: "Sea-water", C: "Sodium chloride", D: "Iron filings" },
    answer: "B",
    explanation: "Sea-water contains water and various dissolved salts and other substances, so it is a mixture."
  },
  // 1987 source question 3
  {
    id: 196, year: 1987,
    question: "The number of molecules of carbon(IV) oxide produced when 10.0 g CaCO₃ is treated with 0.2 dm³ of 1 M HCl in the equation CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ is",
    options: { A: "1.00 × 10²³", B: "6.02 × 10²³", C: "6.02 × 10²²", D: "6.02 × 10²³" },
    answer: "C",
    explanation: "0.2 dm³ of 1 M HCl contains 0.2 mol HCl, which reacts with 0.1 mol CaCO₃ to produce 0.1 mol CO₂. Thus molecules = 0.1 × 6.02 × 10²³ = 6.02 × 10²²."
  },
  // 1987 source question 5
  {
    id: 197, year: 1987,
    question: "If the quantity of oxygen occupying a 2.76 litre container at a pressure of 0.825 atmosphere and 300 K is reduced by one-half, what is the pressure exerted by the remaining gas?",
    options: { A: "1.650 atm", B: "0.825 atm", C: "0.413 atm", D: "0.275 atm" },
    answer: "C",
    explanation: "At constant volume and temperature, pressure is proportional to the amount of gas. Halving the amount halves the pressure: 0.825 ÷ 2 = 0.413 atm."
  },
  // 1987 source question 6
  {
    id: 198, year: 1987,
    question: "Which of the following substances has the lowest vapour density?",
    options: { A: "Ethanoic acid", B: "Propanol", C: "Dichloromethane", D: "Ethanal" },
    answer: "D",
    explanation: "Vapour density is relative molecular mass divided by 2. Ethanal has the lowest relative molecular mass (44) among the options."
  },
  // 1987 source question 7
  {
    id: 199, year: 1987,
    question: "If d represents the density of a gas and k is a constant, the rate of gaseous diffusion is related to the equation",
    options: { A: "r = k/√d", B: "r = kd", C: "r = k/d", D: "r = k√d" },
    answer: "A",
    explanation: "Graham's law states that the rate of diffusion is inversely proportional to the square root of the gas density: r ∝ 1/√d."
  },
  // 1987 source question 8
  {
    id: 200, year: 1987,
    question: "An isotope has an atomic number of 17 and a mass number of 36. Which of the following gives the correct number of neutrons and protons in an atom of the isotope?",
    options: { A: "53 neutrons and 17 protons", B: "17 neutrons and 36 protons", C: "19 neutrons and 17 protons", D: "36 neutrons and 17 protons" },
    answer: "C",
    explanation: "The number of protons is the atomic number, 17. Neutrons = 36 − 17 = 19."
  },
  // 1987 source question 9
  {
    id: 201, year: 1987,
    question: "The atomic numbers of two elements X and Y are 12 and 9 respectively. The bond in the compound formed between the atoms of these two elements is",
    options: { A: "ionic", B: "covalent", C: "neutral", D: "co-ordinate" },
    answer: "A",
    explanation: "Atomic number 12 is magnesium and 9 is fluorine. Magnesium transfers electrons to fluorine, forming an ionic bond."
  },
  // 1987 source question 10
  {
    id: 202, year: 1987,
    question: "An element Z contains 90% of ¹⁶₈Z and 10% of ¹⁸₈Z. Its relative atomic mass is",
    options: { A: "16.0", B: "16.2", C: "17.0", D: "17.8" },
    answer: "B",
    explanation: "Relative atomic mass = (0.90 × 16) + (0.10 × 18) = 16.2."
  },
  // 1987 source question 12
  {
    id: 203, year: 1987,
    question: "A stream of air was successively passed through three tubes X, Y, and Z containing a concentrated aqueous solution of KOH, red hot copper powder and fused calcium chloride respectively. What was the composition of gas emanating from tube Z?",
    options: { A: "CO₂ and the inert gases", B: "N₂, CO₂ and the inert gases", C: "N₂ and the inert gases", D: "Water vapour, N₂ and the inert gases" },
    answer: "C",
    explanation: "KOH removes CO₂, hot copper removes O₂, and fused CaCl₂ removes water vapour. Nitrogen and inert gases remain."
  },
  // 1987 source question 13
  {
    id: 204, year: 1987,
    question: "In the purification of town water supply, alum is used principally to",
    options: { A: "kill bacteria", B: "control the pH of water", C: "improve the taste of the water", D: "coagulate small particles of mud" },
    answer: "D",
    explanation: "Alum promotes coagulation, causing fine suspended particles to clump together and settle out."
  },
  // 1987 source question 14
  {
    id: 205, year: 1987,
    question: "Which of the following water samples will have the highest titre value when titrated for the Ca²⁺ ions using soap solution?",
    options: { A: "Permanently hard water after boiling", B: "Temporarily hard water after boiling", C: "Rain water stored in a glass jar for two years", D: "Permanently hard water passed through permutit" },
    answer: "A",
    explanation: "Boiling removes temporary hardness but does not remove permanent Ca²⁺ hardness. Therefore permanently hard water after boiling still requires the most soap."
  },
  // 1987 source question 15
  {
    id: 206, year: 1987,
    question: "Oil spillage in ponds and creeks can be cleaned up by",
    options: { A: "burning off the oil layer", B: "spraying with detergent", C: "dispersal with compressed air", D: "spraying with hot water" },
    answer: "B",
    explanation: "Detergents disperse oil into smaller droplets, helping to remove the oil layer from the water surface."
  },
  // 1987 source question 16
  {
    id: 207, year: 1987,
    question: "The solubility of Na₃AsO₄·12H₂O is 38.9 g per 100 g H₂O. What is the percentage of Na₃AsO₄ in the saturated solution? [As = 75, Na = 23, O = 16, H = 1]",
    options: { A: "87.2%", B: "38.9%", C: "19.1%", D: "13.7%" },
    answer: "D",
    explanation: "38.9 g of Na₃AsO₄·12H₂O contains (208/424) × 38.9 = 19.1 g Na₃AsO₄. Percentage = 19.1/(100 + 38.9) × 100 ≈ 13.7%."
  },
  // 1987 source question 17
  {
    id: 208, year: 1987,
    question: "Which is the correct set of results for tests conducted respectively on fresh lime juice and ethanol?",
    options: { A: "Add crystals of NaHCO₃: gas evolves / no gas evolved", B: "Test with methyl orange: turns colourless / no change", C: "Taste: bitter / sour", D: "Add a piece of sodium: no gas evolved / H₂ evolved" },
    answer: "A",
    explanation: "Acidic lime juice reacts with NaHCO₃ to release CO₂, whereas ethanol does not produce gas in this test."
  },
  // 1987 source question 18
  {
    id: 209, year: 1987,
    question: "In which of the following are the aqueous solutions of each of the substances correctly arranged in order of decreasing acidity?",
    options: { A: "Ethanoic acid, milk of magnesia, sodium chloride, hydrochloric acid and sodium hydroxide", B: "Ethanoic acid, hydrochloric acid, milk of magnesia, sodium chloride and sodium hydroxide", C: "Hydrochloric acid, ethanoic acid, sodium chloride, milk of magnesia and sodium hydroxide", D: "Hydrochloric acid, sodium hydroxide, sodium chloride, ethanoic acid and milk of magnesia" },
    answer: "C",
    explanation: "Decreasing acidity is HCl > ethanoic acid > neutral sodium chloride > basic milk of magnesia > sodium hydroxide."
  },
  // 1987 source question 19
  {
    id: 210, year: 1987,
    question: "The basicity of tetraoxophosphate(V) acid is",
    options: { A: "7", B: "5", C: "4", D: "3" },
    answer: "D",
    explanation: "H₃PO₄ has three ionizable hydrogen atoms, so its basicity is 3."
  },
  // 1987 source question 20
  {
    id: 211, year: 1987,
    question: "If 24.83 cm³ of 0.15 M NaOH is titrated to its end point with 39.45 cm³ of HCl, what is the molarity of the HCl?",
    options: { A: "0.094 M", B: "0.150 M", C: "0.940 M", D: "1.500 M" },
    answer: "A",
    explanation: "For the 1:1 reaction, M(HCl) = (0.15 × 24.83)/39.45 = 0.094 M."
  },
  // 1987 source question 21
  {
    id: 212, year: 1987,
    question: "A quantity of electricity liberates 3.6 g of silver from its salt. What mass of aluminium will be liberated from its salt by the same quantity of electricity?",
    options: { A: "2.7 g", B: "1.2 g", C: "0.9 g", D: "0.3 g" },
    answer: "D",
    explanation: "Equivalent mass of Ag is 108 and of Al is 27/3 = 9. Thus Al mass = 3.6 × 9/108 = 0.3 g."
  },
  // 1987 source question 22
  {
    id: 213, year: 1987,
    question: "Which of the following statements is CORRECT if 1 Faraday of electricity is passed through 1 M CuSO₄ solution for 1 minute?",
    options: { A: "The pH of the solution at the cathode decreases", B: "The pH of the solution at the anode decreases", C: "1 mole of Cu will be liberated at the cathode", D: "60 moles of Cu will be liberated at the anode" },
    answer: "B",
    explanation: "At the anode, water is oxidized and H⁺ is produced, so the local pH decreases."
  },
  // 1987 source question 23
  {
    id: 214, year: 1987,
    question: "What mass of magnesium would be obtained by passing a current of 2 amperes for 2 hrs 30 mins through molten magnesium chloride? [1 faraday = 96500 C, Mg = 24]",
    options: { A: "1.12 g", B: "2.00 g", C: "2.24 g", D: "4.48 g" },
    answer: "C",
    explanation: "Charge = 2 × 9000 = 18000 C = 0.1865 F. Since Mg²⁺ requires 2 F per mole, mass = (0.1865/2) × 24 ≈ 2.24 g."
  },
  // 1987 source question 24
  {
    id: 215, year: 1987,
    question: "In the reaction 3CuO + 2NH₃ → 3Cu + 3H₂O + N₂, how many electrons are transferred for each mole of copper produced?",
    options: { A: "4.0 × 10²³", B: "3.0 × 10²³", C: "1.2 × 10²⁴", D: "6.0 × 10²⁴" },
    answer: "C",
    explanation: "Each Cu²⁺ ion gains 2 electrons. One mole of Cu therefore involves 2 moles of electrons = 2 × 6.02 × 10²³ ≈ 1.2 × 10²⁴ electrons."
  },
  // 1987 source question 25
  {
    id: 216, year: 1987,
    question: "Z is a solid substance which liberates carbon(IV) oxide on treatment with concentrated H₂SO₄ and KMnO₄. The solid substance, Z, is",
    options: { A: "sodium hydrogen trioxocarbonate(IV)", B: "ethanoic acid", C: "iron(II) trioxocarbonate(IV)", D: "ethanedioic acid (oxalic acid)" },
    answer: "D",
    explanation: "Oxalic acid is oxidized by permanganate and produces CO₂. It is therefore the substance that fits the stated reaction with KMnO₄."
  },
  // 1987 source question 26
  {
    id: 217, year: 1987,
    question: "5 g of ammonium trioxonitrate(V) on dissolution in water cooled its surrounding water and container by 1.6 kJ. What is the heat of solution of NH₄NO₃? [N = 14, O = 16, H = 1]",
    options: { A: "+51.4 kJ mol⁻¹", B: "+25.6 kJ mol⁻¹", C: "+12.9 kJ mol⁻¹", D: "−6.4 kJ mol⁻¹" },
    answer: "B",
    explanation: "NH₄NO₃ has molar mass 80 g mol⁻¹. Thus 5 g = 0.0625 mol; ΔH = 1.6/0.0625 = +25.6 kJ mol⁻¹ because the dissolution cools the surroundings."
  },
  // 1987 source question 27
  {
    id: 218, year: 1987,
    question: "Tetraoxosulphate(VI) acid is prepared using the chemical reaction SO₃(g) + H₂O(l) → H₂SO₄(l). Given the heats of formation for SO₃(g), H₂O(l) and H₂SO₄(l) as −395 kJ mol⁻¹, −286 kJ mol⁻¹ and −811 kJ mol⁻¹ respectively, the heat change is",
    options: { A: "−1032 kJ", B: "−130 kJ", C: "+130 kJ", D: "+1032 kJ" },
    answer: "B",
    explanation: "ΔH = ΣΔHf(products) − ΣΔHf(reactants) = −811 − [−395 + (−286)] = −130 kJ mol⁻¹."
  },
  // 1987 source question 28
  {
    id: 219, year: 1987,
    question: "The times taken for iodine to be liberated in the reaction between sodium thiosulphate and hydrochloric acid at various temperatures are as follows: 25°C → 72 s, 35°C → 36 s, 45°C → 18 s. These results suggest that",
    options: { A: "for a 10°C rise in temperature, rate of reaction is doubled", B: "for a 10°C rise in temperature, rate of reaction is halved", C: "time taken for iodine to appear does not depend on temperature", D: "for a 10°C rise in temperature, rate of reaction is tripled" },
    answer: "A",
    explanation: "The time is halved for each 10°C rise. Since rate is inversely proportional to time, the rate doubles."
  },
  // 1987 source question 29
  {
    id: 220, year: 1987,
    question: "The reaction between sulphur(IV) oxide and oxygen is represented by the equilibrium reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = −196 kJ. What factor would influence increased production of SO₃(g)?",
    options: { A: "Addition of a suitable catalyst", B: "Increase in the temperature of the reaction", C: "Decrease in the temperature of SO₂(g)", D: "Decrease in the concentration of SO₂(g)" },
    answer: "C",
    explanation: "The forward reaction is exothermic, so lowering the reaction temperature shifts the equilibrium toward SO₃."
  },
  // 1987 source question 30
  {
    id: 221, year: 1987,
    question: "Which of the following equations correctly represents the action of hot concentrated alkaline solution on chlorine?",
    options: { A: "Cl₂(g) + 2OH⁻(aq) → OCl⁻(aq) + Cl⁻(aq) + H₂O(l)", B: "3Cl₂(g) + 6OH⁻(aq) → ClO₃⁻(aq) + 5Cl⁻(aq) + 3H₂O(l)", C: "3Cl₂(g) + 6OH⁻(aq) → ClO₃(s) + 5Cl⁻(aq) + 3H₂O(l)", D: "3Cl₂(g) + 6OH⁻(aq) → 5ClO₃⁻(aq) + Cl⁻(aq) + 3H₂O(l)" },
    answer: "B",
    explanation: "Hot concentrated alkali disproportionates chlorine to chloride and chlorate ions: 3Cl₂ + 6OH⁻ → ClO₃⁻ + 5Cl⁻ + 3H₂O."
  },
  // 1987 source question 31
  {
    id: 222, year: 1987,
    question: "Magnesium ribbon was allowed to burn inside a given gas P leaving a white solid residue Q. Addition of water to Q liberated a gas which produced dense white fumes with a drop of hydrochloric acid. The gas P was",
    options: { A: "nitrogen", B: "chlorine", C: "oxygen", D: "sulphur(IV) oxide" },
    answer: "A",
    explanation: "Magnesium burns in nitrogen to form magnesium nitride. Water reacts with Mg₃N₂ to release ammonia, which gives dense white NH₄Cl fumes with HCl."
  },
  // 1987 source question 32
  {
    id: 223, year: 1987,
    question: "The best treatment for a student who accidentally poured concentrated tetraoxosulphate(VI) acid on his skin in the laboratory is to wash the skin with",
    options: { A: "cold water", B: "sodium trioxocarbondioxide solution", C: "iodine solution", D: "sodium trioxocarbonate(IV) solution" },
    answer: "A",
    explanation: "Concentrated acid on skin should be washed immediately and thoroughly with plenty of cold running water."
  },
  // 1987 source question 33
  {
    id: 224, year: 1987,
    question: "In which of the following pairs of elements is allotropy exhibited by each element?",
    options: { A: "Phosphorus and hydrogen", B: "Oxygen and chlorine", C: "Sulphur and nitrogen", D: "Oxygen and sulphur" },
    answer: "D",
    explanation: "Oxygen exists as O₂ and O₃, while sulphur exists in several allotropes such as rhombic and monoclinic sulphur."
  },
  // 1987 source question 34
  {
    id: 225, year: 1987,
    question: "Which of the following gases can best be used for demonstrating the fountain experiment? (i) Nitrogen (ii) Ammonia (iii) Nitrogen(I) oxide (iv) Hydrogen chloride",
    options: { A: "(ii) and (iii)", B: "(i) and (iii)", C: "(ii) and (iv)", D: "(ii) only" },
    answer: "C",
    explanation: "Ammonia and hydrogen chloride are highly soluble in water and therefore produce the fountain effect."
  },
  // 1987 source question 35
  {
    id: 226, year: 1987,
    question: "When calcium hydroxide is heated with ammonium tetraoxosulphate(VI), the gas given off may be collected by",
    options: { A: "bubbling it through concentrated H₂SO₄", B: "bubbling it through water and then passing it through calcium oxide", C: "passing it directly through calcium oxide", D: "passing it directly through calcium chloride" },
    answer: "C",
    explanation: "The gas is ammonia. It cannot be collected over water because it is highly soluble, and CaO can be used as a drying agent."
  },
  // 1987 source question 36
  {
    id: 227, year: 1987,
    question: "Which of the following elements will form oxide which will dissolve both dilute HNO₃ and NaOH solution to form salts?",
    options: { A: "Cl", B: "Mg", C: "Ag", D: "Mn" },
    answer: "D",
    explanation: "Manganese(IV) oxide can react with both acids and strong alkalis, showing amphoteric behaviour in this context."
  },
  // 1987 source question 38
  {
    id: 228, year: 1987,
    question: "A white solid suspected to be lead trioxonitrate(V), zinc trioxocarbonate(IV) or calcium trioxocarbonate(IV) was heated strongly. Its residue, which was yellow when hot and white when cold, is",
    options: { A: "lead(II) oxide", B: "calcium oxide", C: "zinc oxide", D: "lead nitrite" },
    answer: "C",
    explanation: "Zinc oxide is yellow when hot and white when cold, which identifies it among the possible residues."
  },
  // 1987 source question 39
  {
    id: 229, year: 1987,
    question: "Which of the following compounds would give lilac flame coloration and a white precipitate with acidified barium chloride solution?",
    options: { A: "KCl", B: "NaNO₃", C: "K₂SO₄", D: "CaSO₄" },
    answer: "C",
    explanation: "K⁺ gives a lilac flame, while SO₄²⁻ gives a white BaSO₄ precipitate with acidified barium chloride."
  },
  // 1987 source question 40
  {
    id: 230, year: 1987,
    question: "How will a metal X, which reacts explosively with air and with dilute acids, be best extracted from its ores?",
    options: { A: "Electrolysis of the solution of its salt", B: "Decomposition of its oxide", C: "Displacement from solution by an alkali metal", D: "Electrolysis of fused salt" },
    answer: "D",
    explanation: "A highly reactive metal is extracted by electrolysis of its molten/fused salt because aqueous electrolysis would preferentially involve water."
  },
  // 1987 source question 41
  {
    id: 231, year: 1987,
    question: "Which of the following is NOT correct for the named organic compound in each case?",
    options: { A: "Butanoic acid solution gives effervescence with Na₂CO₃ solution", B: "Glucose when reacted with Na₂CrO₄ at 0°C will show immediate discharge of colour", C: "When but-2-ene is reacted with dilute solution of KMnO₄ the purple colour of KMnO₄ is discharged readily even at room temperature", D: "When butan-2-ol is boiled with butanoic acid with a drop of concentrated H₂SO₄, a sweet-smelling liquid is produced" },
    answer: "B",
    explanation: "The stated immediate colour discharge of Na₂CrO₄ by glucose at 0°C is not a valid standard observation. The other statements describe established reactions."
  },
  // 1987 source question 42
  {
    id: 232, year: 1987,
    question: "Which of the following is used as an 'anti-knock' in automobile engines?",
    options: { A: "Tetramethylsilane", B: "Lead tetra-ethyl", C: "Glycerol", D: "N-heptanes" },
    answer: "B",
    explanation: "Tetraethyl lead was historically used as an anti-knock additive in petrol to reduce engine knocking."
  },
  // 1987 source question 43
  {
    id: 233, year: 1987,
    question: "What reaction takes place when palm-oil is added to potash and foams are observed?",
    options: { A: "Neutralization", B: "Saponification", C: "Etherification", D: "Salting-out" },
    answer: "B",
    explanation: "Palm oil contains triglycerides that undergo alkaline hydrolysis with potash to form soap and glycerol. This is saponification."
  },
  // 1987 source question 44
  {
    id: 234, year: 1987,
    question: "How many isomers can be formed from organic compounds with the formula C₃H₈O?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    answer: "B",
    explanation: "There are two alcohols, propan-1-ol and propan-2-ol, and one ether, methoxyethane: 3 structural isomers."
  },
  // 1987 source question 45
  {
    id: 235, year: 1987,
    question: "The most volatile fraction obtained from fractional distillation of crude petroleum contains",
    options: { A: "butane, propane and kerosene", B: "butane, propane and petrol", C: "ethane, methane and benzene", D: "ethane, methane and propane" },
    answer: "D",
    explanation: "The most volatile petroleum fraction contains the smallest, lowest-boiling hydrocarbons, including methane, ethane and propane."
  },
  // 1987 source question 46
  {
    id: 236, year: 1987,
    question: "Local black soap is made by boiling palm with liquid extract of ash. The function of the ash is to provide the",
    options: { A: "acid", B: "ester of alkanoic acid", C: "alkali", D: "alkanol" },
    answer: "C",
    explanation: "Plant ash provides alkaline substances, which react with fats/oils during soap manufacture."
  },
  // 1987 source question 47
  {
    id: 237, year: 1987,
    question: "Synthetic rubber is made by polymerization of",
    options: { A: "2-methylbuta-1,3-diene", B: "2-methylbuta-1,2-diene", C: "2-methylbuta-1-ene", D: "2-methylbuta-2-ene" },
    answer: "A",
    explanation: "2-methylbuta-1,3-diene (isoprene) is a diene monomer used in producing synthetic rubber."
  },
  // 1987 source question 48
  {
    id: 238, year: 1987,
    question: "Complete oxidation of propan-1-ol gives",
    options: { A: "propanal", B: "propan-2-ol", C: "propan-1-one", D: "propanoic acid" },
    answer: "D",
    explanation: "Complete oxidation of a primary alcohol proceeds through the aldehyde to the corresponding carboxylic acid, so propan-1-ol gives propanoic acid."
  },
  // 1987 source question 49
  {
    id: 239, year: 1987,
    question: "When water drops are added to calcium carbide in a container and the gas produced is passed through an oxyhydrocarbon flame, the flame is called",
    options: { A: "oxyethylene flame", B: "oxyhydrocarbon flame", C: "oxyacetylene flame", D: "oxymethane flame" },
    answer: "C",
    explanation: "Calcium carbide reacts with water to produce acetylene (ethyne), C₂H₂. Burning acetylene with oxygen gives an oxyacetylene flame."
  },
  // 1987 source question 50
  {
    id: 240, year: 1987,
    question: "The structure of benzoic acid is.",
    options: { A: "benzene ring with a CHO group", B: "cyclohexane ring with a COOH group", C: "benzene ring with a CH₂OH group", D: "benzene ring with a COOH group" },
    answer: "D",
    explanation: "Benzoic acid is benzenecarboxylic acid: a benzene ring directly attached to a carboxyl group (−COOH)."
  },
  // 1988 source question 1
{
  id: 241, year: 1988,
  question: "In the experiment above, ammonium chloride crystals deposit on the walls of the tube as a result of:",
  options: { A: "Evaporation", B: "Recrystallization", C: "Sublimation", D: "Fractional precipitation" },
  answer: "C",
  explanation: "On heating, ammonium chloride changes directly from solid to vapour and then deposits as solid crystals on the cooler part of the tube. This is sublimation."
},

// 1988 source question 2
{
  id: 242, year: 1988,
  question: "The formula of the compound formed in a reaction between a trivalent metal M and a tetravalent non-metal X is:",
  options: { A: "MX", B: "M₃X₄", C: "M₄X₃", D: "M₃X₂" },
  answer: "C",
  explanation: "Balancing charges, 4 M³⁺ ions (+12) combine with 3 X⁴⁻ ions (−12), giving M₄X₃."
},

// 1988 source question 3
{
  id: 243, year: 1988,
  question: "2.25 g of a sample of an oxide of copper and 2.50 g of another oxide of copper on reduction also gave 2.0 g of copper. These results are in accordance with the law of:",
  options: { A: "constant composition", B: "conservation of matter", C: "multiple proportions", D: "definite proportions" },
  answer: "C",
  explanation: "Different masses of oxygen combine with a fixed mass of copper in simple whole-number ratios, illustrating the law of multiple proportions."
},

// 1988 source question 4
{
  id: 244, year: 1988,
  question: "One mole of propane is mixed with five moles of oxygen. The mixture is ignited and the propane burns completely. What is the volume of the products at STP? [G.M.V = 22.4 dm³ mol⁻¹]",
  options: { A: "112.0 dm³", B: "67.2 dm³", C: "56.0 dm³", D: "44.8 dm³" },
  answer: "B",
  explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. At STP the water is condensed, so the gaseous product is 3 mol CO₂ = 3 × 22.4 = 67.2 dm³."
},

// 1988 source question 6
{
  id: 245, year: 1988,
  question: "Which of the gas laws does the graph showing volume increasing directly with temperature in kelvin illustrate?",
  options: { A: "Boyle", B: "Charles", C: "Graham", D: "Gay-Lussac" },
  answer: "B",
  explanation: "Charles' law states that, at constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature."
},

// 1988 source question 7
{
  id: 246, year: 1988,
  question: "An increase in temperature causes an increase in the pressure in the:",
  options: { A: "average velocity of the molecules", B: "number of collisions between the molecules", C: "density of the molecules", D: "free mean path between each molecule and the other" },
  answer: "A",
  explanation: "At constant volume, increasing temperature increases the average kinetic energy and speed of gas molecules, causing more forceful collisions with the container walls and hence higher pressure."
},

// 1988 source question 8
{
  id: 247, year: 1988,
  question: "The forces holding naphthalene crystals together can be overcome when naphthalene is heated to 354 K, resulting in the crystals melting. These forces are known as:",
  options: { A: "coulombic", B: "ionic", C: "covalent", D: "van der Waals" },
  answer: "D",
  explanation: "Naphthalene is a molecular solid; its molecules are held together mainly by weak van der Waals (London dispersion) forces."
},

// 1988 source question 9
{
  id: 248, year: 1988,
  question: "A metallic ion X²⁺ with an inert gas structure contains 18 electrons. How many protons are there in this ion?",
  options: { A: "20", B: "18", C: "16", D: "2" },
  answer: "A",
  explanation: "X²⁺ has lost two electrons. If the ion has 18 electrons, the neutral atom had 20 electrons and therefore 20 protons."
},

// 1988 source question 10
{
  id: 249, year: 1988,
  question: "Which of the following physical properties decreases across the periodic table?",
  options: { A: "Ionization potential", B: "Electron affinity", C: "Electronegativity", D: "Atomic radius" },
  answer: "D",
  explanation: "Across a period from left to right, effective nuclear charge increases and atomic radius generally decreases."
},

// 1988 source question 12
{
  id: 250, year: 1988,
  question: "The energy change accompanying the addition of an electron to a gaseous atom is called:",
  options: { A: "first ionization energy", B: "second ionization energy", C: "electron affinity", D: "electronegativity" },
  answer: "C",
  explanation: "Electron affinity is the energy change associated with adding an electron to an isolated gaseous atom."
},

// 1988 source question 13
{
  id: 251, year: 1988,
  question: "The molar ratio of oxygen to nitrogen in dissolved air is 2:1 whereas the ratio is 4:1 in atmospheric air because:",
  options: { A: "nitrogen is less soluble than oxygen", B: "oxygen is heavier than nitrogen", C: "nitrogen has a higher partial pressure in air", D: "gases are hydrated in water" },
  answer: "A",
  explanation: "Oxygen is more soluble in water than nitrogen, so dissolved air contains proportionally more oxygen than atmospheric air."
},

// 1988 source question 14
{
  id: 252, year: 1988,
  question: "An eruption polluted an environment with a gas suspected to be H₂S, a poisonous gas. A rescue team should spray the environment with:",
  options: { A: "water", B: "moist SO₂", C: "acidified KMnO₄ and water", D: "water, acidified KMnO₄ and oxygen" },
  answer: "C",
  explanation: "Acidified KMnO₄ is a strong oxidizing agent that oxidizes poisonous H₂S, while water helps to wash and dilute the contaminant."
},

// 1988 source question 15
{
  id: 253, year: 1988,
  question: "1.34 g of hydrated sodium tetraoxosulphate(VI) was heated to give an anhydrous salt weighing 0.71 g. The formula of the hydrated salt is: [Na = 23, S = 32, O = 16, H = 1]",
  options: { A: "Na₂SO₄·7H₂O", B: "Na₂SO₄·3H₂O", C: "Na₂SO₄·2H₂O", D: "Na₂SO₄·H₂O" },
  answer: "A",
  explanation: "Anhydrous Na₂SO₄ is 0.71/142 = 0.005 mol. Water lost is 0.63/18 = 0.035 mol. The ratio 0.035:0.005 = 7, so the hydrate is Na₂SO₄·7H₂O."
},

// 1988 source question 16
{
  id: 254, year: 1988,
  question: "The ion that may be assumed to have negligible concentration in a sample of water that lathers readily with soap is:",
  options: { A: "Mg²⁺", B: "K⁺", C: "CO₃²⁻", D: "HCO₃⁻" },
  answer: "A",
  explanation: "Magnesium ions contribute to water hardness by forming insoluble scum with soap. Readily lathering water therefore contains negligible Mg²⁺."
},

// 1988 source question 18
{
  id: 255, year: 1988,
  question: "Which of the following dilute solutions has the lowest pH value?",
  options: { A: "calcium trioxocarbonate(IV)", B: "sodium trioxocarbonate(IV)", D: "hydrochloric acid", E: "ethanoic acid" },
  answer: "D",
  explanation: "Hydrochloric acid is a strong acid and therefore gives the highest hydrogen-ion concentration and the lowest pH among the listed solutions."
},

// 1988 source question 19
{
  id: 256, year: 1988,
  question: "Which of the following in aqueous solution neutralizes litmus?",
  options: { A: "NH₄Cl", B: "Na₂CO₃", C: "FeCl₃", D: "NaCl" },
  answer: "D",
  explanation: "NaCl is a salt of a strong acid and a strong base, so its aqueous solution is approximately neutral and does not change litmus colour."
},

// 1988 source question 20
{
  id: 257, year: 1988,
  question: "What volume of a 0.1 M H₃PO₄ will be required to neutralize 45.0 cm³ of 0.2 M NaOH?",
  options: { A: "10.0 cm³", B: "20.0 cm³", C: "27.0 cm³", D: "30.0 cm³" },
  answer: "D",
  explanation: "H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O. Moles NaOH = 0.045×0.2 = 0.009 mol, so H₃PO₄ needed = 0.003 mol. Volume = 0.003/0.1 = 0.030 dm³ = 30.0 cm³."
},

// 1988 source question 21
{
  id: 258, year: 1988,
  question: "Which of the following substances is a basic salt?",
  options: { A: "Na₂CO₃", B: "Mg(OH)Cl", C: "NaHCO₃", D: "K₂SO₄·Al₂(SO₄)₃·24H₂O" },
  answer: "B",
  explanation: "Mg(OH)Cl contains a hydroxide group together with chloride, so it is a basic salt."
},

// 1988 source question 22
{
  id: 259, year: 1988,
  question: "Which of the following acts both as a reducing and an oxidizing agent?",
  options: { A: "H₂", B: "SO₂", C: "H₂S", D: "C" },
  answer: "B",
  explanation: "Sulphur in SO₂ is at oxidation state +4, so it can be oxidized to +6 or reduced to lower oxidation states. Thus SO₂ can act as both an oxidizing and reducing agent."
},

// 1988 source question 23
{
  id: 260, year: 1988,
  question: "Which of the following reactions takes place in the cathode compartment during the electrolysis of copper(II) chloride solution?",
  options: { A: "Cu²⁺(aq) + 2e⁻ → Cu(s)", B: "2Cl⁻ − 2e⁻ → Cl₂", C: "Cu(s) − 2e⁻ → Cu²⁺(aq)", D: "Cu²⁺(aq) + 2Cl⁻(aq) → CuCl₂(aq)" },
  answer: "A",
  explanation: "Reduction occurs at the cathode. Cu²⁺ ions gain two electrons to form copper metal: Cu²⁺ + 2e⁻ → Cu."
},

// 1988 source question 24
{
  id: 261, year: 1988,
  question: "The mass of a substance M liberated at an electrode during electrolysis is proportional to the quantity of electricity Q passing through the electrolyte. This is represented graphically by:",
  options: { A: "A graph of M against Q that is a straight line through the origin", B: "A horizontal graph of M against Q", C: "A straight line with a positive intercept on the M-axis", D: "A straight line decreasing from a positive M-intercept" },
  answer: "A",
  explanation: "Faraday's first law gives M ∝ Q, so a plot of M against Q is a straight line passing through the origin."
},

// 1988 source question 25
{
  id: 262, year: 1988,
  question: "A mixture of starch solution and potassium iodide was placed in a test tube. On adding dilute tetraoxosulphate(VI) acid and then K₂Cr₂O₇ solution, a blue-black colour was produced. In this reaction, the:",
  options: { A: "iodide ion is oxidized", B: "tetraoxosulphate(VI) acid acts as an oxidizing agent", C: "starch has been oxidized", D: "K₂Cr₂O₇ is oxidized" },
  answer: "A",
  explanation: "Dichromate in acid oxidizes I⁻ to I₂. The iodine then forms a blue-black complex with starch."
},

// 1988 source question 26
{
  id: 263, year: 1988,
  question: "Which of the following statements is TRUE?",
  options: { A: "The dissolution of NaOH(s) in water is endothermic", B: "The heat of solution of NaOH(s) is positive", C: "The NaOH(s) gains heat from the surroundings", D: "The heat of solution of NaOH(s) is negative" },
  answer: "D",
  explanation: "Dissolving solid NaOH in water releases heat, so the process is exothermic and its heat of solution is negative."
},

// 1988 source question 28
{
  id: 264, year: 1988,
  question: "Which of the following will produce the greatest increase in the rate of the chemical reaction Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + SO₂(g) + S(s)?",
  options: { A: "decrease in temperature and increase in the concentration of the reactants", B: "increase in temperature and decrease in the concentration of the reactants", C: "increase in temperature and increase in the concentrations of the reactants", D: "decrease in temperature and decrease in the concentration of the reactants" },
  answer: "C",
  explanation: "Increasing temperature increases particle kinetic energy, while increasing reactant concentrations increases collision frequency. Together they give the greatest rate increase."
},

// 1988 source question 29
{
  id: 265, year: 1988,
  question: "Which property of a reversible reaction is affected by a catalyst?",
  options: { A: "heat content (enthalpy)", B: "energy of activation", C: "free energy change", D: "equilibrium position" },
  answer: "B",
  explanation: "A catalyst lowers the activation energy of the reaction pathways. It does not change the enthalpy, free energy change, or equilibrium position."
},

// 1988 source question 30
{
  id: 266, year: 1988,
  question: "Which of the following is used in fire extinguishers?",
  options: { A: "carbon(II) oxide", B: "carbon(IV) oxide", C: "sulphur(IV) oxide", D: "ammonia" },
  answer: "B",
  explanation: "Carbon dioxide does not support combustion and forms a blanket over the fire, cutting off oxygen."
},

// 1988 source question 31
{
  id: 267, year: 1988,
  question: "When H₂S gas is passed into a solution of iron(III) chloride, the colour changes from yellow to green. This is because:",
  options: { A: "H₂S is reduced to S", B: "Fe³⁺ ions are oxidized by H₂S", C: "H₂S ions are oxidized by Fe³⁺", D: "Fe³⁺ ions are reduced to Fe²⁺ ions" },
  answer: "D",
  explanation: "Fe³⁺ is reduced to Fe²⁺, giving the solution the green colour associated with Fe²⁺. At the same time H₂S is oxidized to sulphur."
},

// 1988 source question 32
{
  id: 268, year: 1988,
  question: "Carbon(II) oxide may be collected as shown in the source diagram because it:",
  options: { A: "is heavier than air", B: "is less dense than air", C: "is insoluble in water", D: "burns in oxygen to form carbon(IV) oxide" },
  answer: "C",
  explanation: "The diagram shows collection over water. Carbon monoxide is sufficiently insoluble in water for this method of collection."
},

// 1988 source question 33
{
  id: 269, year: 1988,
  question: "In the reaction C₅H₁₀O₅(s) → 6C(s) + 5H₂O, concentrated H₂SO₄ is acting as:",
  options: { A: "a reducing agent", B: "an oxidizing agent", C: "a dehydrating agent", D: "a catalyst" },
  answer: "C",
  explanation: "Concentrated sulphuric acid removes water from the carbohydrate, leaving carbon. It therefore acts as a powerful dehydrating agent."
},

// 1988 source question 34
{
  id: 270, year: 1988,
  question: "Suitable reagents for the laboratory preparation of nitrogen are:",
  options: { A: "sodium trioxonitrite(III) and ammonium chloride", B: "sodium trioxonitrate(V) and ammonium chloride", C: "sodium chloride and ammonium trioxonitrate(V)", D: "sodium chloride and ammonium trioxonitrite(III)" },
  answer: "A",
  explanation: "Ammonium nitrite is formed in situ from sodium nitrite and ammonium chloride, then decomposes on gentle heating to nitrogen and water."
},

// 1988 source question 35
{
  id: 271, year: 1988,
  question: "The thermal decomposition of copper(II) trioxonitrate(V) yields copper(II) oxide, oxygen and:",
  options: { A: "nitrogen(II) oxide", B: "nitrogen(II) oxide", C: "nitrogen(IV) oxide", D: "nitrogen" },
  answer: "C",
  explanation: "Copper(II) nitrate decomposes on heating to CuO, NO₂ and O₂: 2Cu(NO₃)₂ → 2CuO + 4NO₂ + O₂."
},

// 1988 source question 36
{
  id: 272, year: 1988,
  question: "Chlorine is produced commercially by:",
  options: { A: "electrolysis of dilute hydrochloric acid", B: "electrolysis of brine", C: "neutralization of hydrogen chloride", D: "heating potassium trioxochlorate(V)" },
  answer: "B",
  explanation: "Industrial chlorine is produced by electrolysis of concentrated sodium chloride solution (brine), giving chlorine at the anode."
},

// 1988 source question 37
{
  id: 273, year: 1988,
  question: "Which of the following is used in the manufacture of glass?",
  options: { A: "sodium chloride", B: "sodium trioxocarbonate(IV)", C: "sodium tetraoxosulphate(VI)", D: "sodium trioxonitrate(V)" },
  answer: "B",
  explanation: "Sodium carbonate is a major raw material in ordinary soda-lime glass manufacture."
},

// 1988 source question 38
{
  id: 274, year: 1988,
  question: "Aluminium is extracted commercially from its ore by:",
  options: { A: "heating aluminium oxide with coke in a furnace", B: "the electrolysis of fused aluminium oxide in cryolite", C: "treating cryolite with sodium hydroxide solution under pressure", D: "heating sodium aluminium silicate to a high temperature" },
  answer: "B",
  explanation: "Aluminium oxide dissolved in molten cryolite is electrolysed in the Hall-Héroult process to produce aluminium."
},

// 1988 source question 39
{
  id: 275, year: 1988,
  question: "Given the reactions (i) Fe(s) + X(NO₃)₂(aq) → Fe(NO₃)₂(aq) + X(s); (ii) H₂(g) + XO(s) → X(s) + H₂O(g), X is likely to be:",
  options: { A: "copper", B: "zinc", C: "calcium", D: "lead" },
  answer: "A",
  explanation: "The source's intended metal is copper: iron can displace Cu²⁺ from copper(II) nitrate, and hydrogen can reduce CuO to copper."
},

// 1988 source question 40
{
  id: 276, year: 1988,
  question: "Crude copper can be purified by the electrolysis of CuSO₄(aq) if:",
  options: { A: "platinum electrodes are used", B: "the crude copper is made the anode of the cell", C: "the crude copper is made the cathode of the cell", D: "crude copper electrodes are used" },
  answer: "B",
  explanation: "In electrolytic refining, impure copper is the anode and pure copper is deposited at the cathode."
},

// 1988 source question 41
{
  id: 277, year: 1988,
  question: "The IUPAC name for the structure CH₃CH₂CH(CH₃)COOH is:",
  options: { A: "2-methylbutanoic acid", B: "2-methyl-2-hydroxyketone", C: "2-methyl-2-hydroxyl aldehyde", D: "2-methylpentanoic acid" },
  answer: "A",
  explanation: "The carboxyl carbon is C1; the methyl substituent is on C2, giving 2-methylbutanoic acid."
},

// 1988 source question 43
{
  id: 278, year: 1988,
  question: "Alkanoates are formed by the reaction of alkanoic acids with:",
  options: { A: "alkyl halides", B: "alkanols", C: "ethers", D: "sodium" },
  answer: "B",
  explanation: "An alkanoic acid reacts with an alkanol in esterification to form an alkanoate (ester) and water."
},

// 1988 source question 44
{
  id: 279, year: 1988,
  question: "The acidic hydrogen in the compound H—C=C—CH=CH—CH₃ is the hydrogen attached to carbon number:",
  options: { A: "5", B: "4", C: "3", D: "2" },
  answer: "A",
  explanation: "The hydrogens on the allylic methyl group at carbon 5 are relatively acidic because the conjugate carbanion is resonance-stabilized."
},

// 1988 source question 45
{
  id: 280, year: 1988,
  question: "The four classes of hydrocarbons are:",
  options: { A: "ethane, ethene, ethyne and benzene", B: "alkanes, alkenes, alkynes and aromatics", C: "alkanes, alkenes, alkynes and benzene", D: "methane, ethane, propane and butane" },
  answer: "B",
  explanation: "Hydrocarbons are broadly classified as alkanes, alkenes, alkynes and aromatic hydrocarbons."
},

// 1988 source question 46
{
  id: 281, year: 1988,
  question: "Alkanes heated at 400–700°C in the presence of a catalyst give smaller alkanes and hydrogen. The above reaction is known as:",
  options: { A: "Photolysis", B: "Cracking", C: "Isomerization", D: "Reforming" },
  answer: "B",
  explanation: "Cracking breaks larger hydrocarbon molecules into smaller hydrocarbons, often producing alkenes and hydrogen under suitable conditions."
},

// 1988 source question 47
{
  id: 282, year: 1988,
  question: "In the reaction 2(C₆H₁₀O₅)ₙ + nH₂O → nC₁₂H₂₂O₁₁, diastase is functioning as:",
  options: { A: "a dehydrating agent", B: "a reducing agent", C: "an oxidizing agent", D: "a catalyst" },
  answer: "D",
  explanation: "Diastase is an enzyme that speeds up the hydrolysis of starch to maltose without being consumed, so it acts as a catalyst."
},

// 1988 source question 48
{
  id: 283, year: 1988,
  question: "Which of the following compounds has the highest boiling point?",
  options: { A: "CH₃CH₂CH₂CH₂OH", B: "CH₃CH₂CH₂CHO", C: "CH₃CH₂CH₂CH₃", D: "CH₃CH₂OCH₂CH₃" },
  answer: "A",
  explanation: "Butan-1-ol forms intermolecular hydrogen bonds, giving it a higher boiling point than the aldehyde, ether and alkane."
},

// 1988 source question 49
{
  id: 284, year: 1988,
  question: "Detergents have the general formula:",
  options: { A: "R(CH₂)NOH", B: "RSO₃Na⁺", C: "RCO₂Na⁺", D: "RCO₂H" },
  answer: "B",
  explanation: "Common synthetic detergents include sodium alkyl sulphonates, represented generally as RSO₃Na."
},

// 1988 source question 50
{
  id: 285, year: 1988,
  question: "What process would coal undergo to give coal gas, coal tar, ammoniacal liquor and coke?",
  options: { A: "steam distillation", B: "destructive distillation", C: "liquefaction", D: "hydrolysis" },
  answer: "B",
  explanation: "Heating coal strongly in the absence of air decomposes it into coke, coal gas, coal tar and ammoniacal liquor. This is destructive distillation."
},
// 1989 source question 1
  {
    id: 286, year: 1989,
    question: "Which of the following would support the conclusion that a solid sample is a mixture?",
    options: { A: "The solid can be ground to a fine powder", B: "The density of the solid is 2.25 g dm⁻³", C: "The solid has a melting range of 300°C to 375°C", D: "The solid absorbs moisture from the atmosphere" },
    answer: "C",
    explanation: "A pure solid melts at a sharp temperature. Melting over a wide range (300°C to 375°C) is characteristic of a mixture."
  },
  // 1989 source question 2
  {
    id: 287, year: 1989,
    question: "The molar ratio of carbon to hydrogen of a volatile liquid compound is 1:2. 0.12 g of the liquid on evaporation at s.t.p. gave 32 cm³ of vapour. The molecular formula of the liquid is [G.M.V. = 22.4 dm³, C = 12, H = 1]",
    options: { A: "C₃H₆", B: "C₄H₈", C: "C₅H₁₀", D: "C₆H₁₂" },
    answer: "D",
    explanation: "Empirical formula is CH₂ (mass 14). Molar mass = (0.12/32) × 22400 = 84. Number of CH₂ units = 84/14 = 6, so the molecular formula is C₆H₁₂."
  },
  // 1989 source question 3
  {
    id: 288, year: 1989,
    question: "Vapour-pressure against temperature curves are shown for three liquids I, II and III. Curve I lies furthest left (highest vapour pressure at a given temperature) and curve III furthest right. It can be deduced from the vapour pressure curves that",
    options: { A: "liquid I has the highest boiling point", B: "liquid II has the highest boiling point", C: "liquid III has the highest boiling point", D: "liquid III has the lowest boiling point" },
    answer: "C",
    explanation: "A liquid boils when its vapour pressure equals atmospheric pressure. The curve furthest to the right (III) reaches atmospheric pressure at the highest temperature, so liquid III has the highest boiling point."
  },
  // 1989 source question 4
  {
    id: 289, year: 1989,
    question: "20.00 cm³ of a solution containing 0.53 g of anhydrous Na₂CO₃ in 100 cm³ requires 25.00 cm³ of H₂SO₄ for complete neutralization. The concentration of the acid solution in moles per dm³ is [H = 1, C = 12, O = 16, Na = 23, S = 32]",
    options: { A: "0.02", B: "0.04", C: "0.06", D: "0.08" },
    answer: "B",
    explanation: "Molar mass of Na₂CO₃ = 106. The 20.00 cm³ portion contains (0.53/106)×(20/100) = 0.0010 mol Na₂CO₃. The reaction with H₂SO₄ is 1:1, so 25.00 cm³ of acid also contains 0.0010 mol. Concentration = 0.0010/0.025 = 0.04 mol dm⁻³."
  },
  // 1989 source question 5
  {
    id: 290, year: 1989,
    question: "The minimum volume of oxygen required for the complete combustion of a mixture of 10 cm³ of CO and 15 cm³ of H₂ is",
    options: { A: "25.0 cm³", B: "12.5 cm³", C: "10.0 cm³", D: "5.0 cm³" },
    answer: "B",
    explanation: "2CO + O₂ → 2CO₂, so 10 cm³ CO needs 5 cm³ O₂. 2H₂ + O₂ → 2H₂O, so 15 cm³ H₂ needs 7.5 cm³ O₂. Total oxygen = 12.5 cm³."
  },
  // 1989 source question 6
  {
    id: 291, year: 1989,
    question: "What is the partial pressure of hydrogen gas collected over water at standard atmospheric pressure and 25°C if the saturation vapour pressure of water is 23 mm Hg at that temperature?",
    options: { A: "737 mm Hg", B: "763 mm Hg", C: "777 mm Hg", D: "783 mm Hg" },
    answer: "A",
    explanation: "For a gas collected over water, P(H₂) = P(atm) − P(water). Standard atmospheric pressure is 760 mm Hg, so P(H₂) = 760 − 23 = 737 mm Hg."
  },
  // 1989 source question 7
  {
    id: 292, year: 1989,
    question: "The atomic radii of Li, Na and K are 1.33 Å, 1.54 Å and 1.96 Å respectively. Which of the following explains this gradation in atomic radius?",
    options: { A: "Electropositivity decreases from Li to Na to K", B: "Electronegativity decreases from Li to Na to K", C: "The number of electron shells increases from Li to Na to K", D: "The elements are in the same period" },
    answer: "C",
    explanation: "Li, Na and K are successive members of Group 1. Each has one more electron shell than the one above it, so atomic radius increases down the group."
  },
  // 1989 source question 8
  {
    id: 293, year: 1989,
    question: "A graph of pressure P against volume V shows four curves W, X, Y and Z. W is a decreasing curve of hyperbolic shape; X is a straight line of negative slope; Y and Z are increasing curves. Which of the curves illustrates the behaviour of an ideal gas?",
    options: { A: "W", B: "X", C: "Y", D: "Z" },
    answer: "A",
    explanation: "For an ideal gas at constant temperature, PV = constant, so a plot of P against V is a rectangular hyperbola. That is curve W."
  },
  // 1989 source question 9
  {
    id: 294, year: 1989,
    question: "Elements X and Y have electronic configurations 1s² 2s² 2p⁴ and 1s² 2s² 2p⁶ 3s² 3p¹ respectively. When they combine, the formula of the compound formed is",
    options: { A: "XY", B: "YX", C: "X₂Y₃", D: "Y₂X₃" },
    answer: "D",
    explanation: "X (oxygen) needs 2 electrons; Y (aluminium) can lose 3. The compound is therefore Y₂X₃ (Al₂O₃)."
  },
  // 1989 source question 10
  {
    id: 295, year: 1989,
    question: "The atomic number of caesium is 55 and its atomic mass is 133. The nucleus of a caesium atom therefore contains",
    options: { A: "78 protons and 55 electrons", B: "55 protons and 78 neutrons", C: "55 neutrons and 78 electrons", D: "78 protons and 55 neutrons" },
    answer: "B",
    explanation: "Atomic number = number of protons = 55. Number of neutrons = mass number − atomic number = 133 − 55 = 78."
  },
  // 1989 source question 11
  {
    id: 296, year: 1989,
    question: "Four elements P, Q, R and S have atomic numbers of 4, 10, 12 and 14 respectively. Which of these elements is a noble gas?",
    options: { A: "P", B: "Q", C: "R", D: "S" },
    answer: "B",
    explanation: "Atomic number 10 is neon, a Group 0/18 noble gas with a complete outer shell."
  },
  // 1989 source question 12
  {
    id: 297, year: 1989,
    question: "How many valence electrons are contained in the element represented by ³¹₁₅P?",
    options: { A: "3", B: "5", C: "15", D: "31" },
    answer: "B",
    explanation: "Phosphorus has atomic number 15, configuration 2, 8, 5. The five outer-shell electrons are the valence electrons."
  },
  // 1989 source question 13
  {
    id: 298, year: 1989,
    question: "In the apparatus shown, air is bubbled first through liquid X in one wash-bottle and then through liquid Y in a second wash-bottle. Substances X and Y are respectively",
    options: { A: "lime water and copper(II) tetraoxosulphate(VI)", B: "potassium trioxocarbonate(IV) and alkaline pyrogallol", C: "potassium hydroxide and alkaline pyrogallol", D: "potassium trioxocarbonate(IV) and concentrated tetraoxosulphate(VI) acid" },
    answer: "C",
    explanation: "KOH absorbs CO₂; alkaline pyrogallol then absorbs O₂. This is the standard pair used to determine the proportion of oxygen in air."
  },
  // 1989 source question 14
  {
    id: 299, year: 1989,
    question: "The gaseous pollutant sulphur(IV) oxide is most likely to be detected in fairly reasonable quantities in the area around a plant for the",
    options: { A: "extraction of aluminium from bauxite", B: "production of margarine", C: "smelting of copper", D: "production of chlorine from brine" },
    answer: "C",
    explanation: "Copper is extracted from sulphide ores. Roasting/smelting those ores releases SO₂ in large amounts."
  },
  // 1989 source question 15
  {
    id: 300, year: 1989,
    question: "Calcium hydroxide is added in the treatment of town water supply to",
    options: { A: "kill bacteria in the water", B: "facilitate coagulation of organic particles", C: "facilitate sedimentation", D: "improve the taste of the water" },
    answer: "B",
    explanation: "Slaked lime raises pH and supplies OH⁻, which helps coagulants such as alum clump organic and colloidal particles into flocs."
  },
  // 1989 source question 16
  {
    id: 301, year: 1989,
    question: "A hydrated salt of formula MSO₄·xH₂O contains 45.3% by mass of water of crystallization. Calculate the value of x. [M = 56, S = 32, O = 16, H = 1]",
    options: { A: "3", B: "5", C: "7", D: "10" },
    answer: "C",
    explanation: "MSO₄ has mass 56 + 32 + 64 = 152. From 18x/(152 + 18x) = 0.453, 18x = 68.856 + 8.154x, so 9.846x = 68.856 and x ≈ 7."
  },
  // 1989 source question 18
  {
    id: 302, year: 1989,
    question: "Using 50 cm³ of 1 M potassium hydroxide and 100 cm³ of 1 M tetraoxosulphate(VI) acid, calculate the respective volumes in cm³ of base and acid that would be required to produce the maximum amount of potassium tetraoxosulphate(VI). [K = 39, S = 32, O = 16, H = 1]",
    options: { A: "50, 50", B: "25, 50", C: "50, 25", D: "25, 25" },
    answer: "C",
    explanation: "2KOH + H₂SO₄ → K₂SO₄ + 2H₂O, so the mole (and volume, for equal molarities) ratio of base:acid is 2:1. All 50 cm³ of 1 M KOH is used with 25 cm³ of 1 M H₂SO₄."
  },
  // 1989 source question 19
  {
    id: 303, year: 1989,
    question: "A solution of calcium bromide contains 20 g dm⁻³. What is the molarity of the solution with respect to calcium bromide and bromide ions? [Ca = 40, Br = 80]",
    options: { A: "0.1, 0.1", B: "0.1, 0.2", C: "0.1, 0.05", D: "0.05, 0.1" },
    answer: "B",
    explanation: "Molar mass of CaBr₂ = 40 + 160 = 200 g mol⁻¹. Molarity of CaBr₂ = 20/200 = 0.1 M. Each formula unit gives two Br⁻ ions, so [Br⁻] = 0.2 M."
  },
  // 1989 source question 20
  {
    id: 304, year: 1989,
    question: "The substance ZnO dissolves in sodium hydroxide solution and in mineral acid solution to give soluble products in each case. ZnO is therefore referred to as",
    options: { A: "an allotropic oxide", B: "an amphoteric oxide", C: "a peroxide", D: "a dioxide" },
    answer: "B",
    explanation: "An oxide that reacts with both acids and alkalis to form salts is amphoteric. ZnO is the classic example."
  },
  // 1989 source question 21
  {
    id: 305, year: 1989,
    question: "An acid and its conjugate base",
    options: { A: "can neutralize each other to form a salt", B: "differ only by a proton", C: "differ only by the opposite charges they carry", D: "are always neutral substances" },
    answer: "B",
    explanation: "By the Brønsted–Lowry definition, a conjugate acid–base pair differs by one proton, e.g. HCl/Cl⁻ or NH₄⁺/NH₃."
  },
  // 1989 source question 22
  {
    id: 306, year: 1989,
    question: "The same current is passed for the same time through solutions of AgNO₃ and CuSO₄ connected in series. How much silver will be deposited if 1.0 g of copper is produced? [Cu = 63.5, S = 32, O = 16, Ag = 108, N = 14]",
    options: { A: "1.7 g", B: "3.4 g", C: "6.8 g", D: "13.6 g" },
    answer: "B",
    explanation: "Cu²⁺ + 2e⁻ → Cu and Ag⁺ + e⁻ → Ag. Electrons used = 2 × (1.0/63.5) mol. Mass of Ag = 2 × (1.0/63.5) × 108 = 3.4 g."
  },
  // 1989 source question 23
  {
    id: 307, year: 1989,
    question: "What is discharged at the cathode during the electrolysis of copper(II) tetraoxosulphate(VI) solution?",
    options: { A: "Cu²⁺ only", B: "H⁺ only", C: "Cu²⁺ and H⁺", D: "Cu²⁺ and SO₄²⁻" },
    answer: "A",
    explanation: "Cu²⁺ is below H⁺ in the electrochemical series and is preferentially reduced at the cathode, so copper metal is deposited. SO₄²⁻ migrates to the anode."
  },
  // 1989 source question 24
  {
    id: 308, year: 1989,
    question: "An element Z forms an anion whose formula is [Z(CN)₆]ʸ. If Z has an oxidation number of +2, what is the value of y?",
    options: { A: "2", B: "−3", C: "−4", D: "−5" },
    answer: "C",
    explanation: "Each CN is −1, so six CN contribute −6. Charge on the complex = +2 + (−6) = −4. Thus y = −4, as in [Fe(CN)₆]⁴⁻."
  },
  // 1989 source question 25
  {
    id: 309, year: 1989,
    question: "Which of the following is NOT an example of a redox reaction? I. Fe + 2Ag⁺ → Fe²⁺ + 2Ag  II. 2H₂S + SO₂ → 2H₂O + 3S  III. N₂ + O₂ → 2NO  IV. CaCO₃ → CaO + CO₂",
    options: { A: "I, II, III", B: "II and III", C: "III and IV", D: "IV only" },
    answer: "D",
    explanation: "I, II and III all involve changes in oxidation number. In IV, Ca remains +2, C remains +4 and O remains −2, so thermal decomposition of CaCO₃ is not redox."
  },
  // 1989 source question 26
  {
    id: 310, year: 1989,
    question: "The energy-profile diagram for X(g) + Y(g) → XY(g) shows reactants at 100 kJ, the uncatalysed peak at 500 kJ, the catalysed peak at 300 kJ and products at 0 kJ. Deduce the respective activation energies in kJ of the catalysed and uncatalysed reverse reactions XY(g) → X(g) + Y(g).",
    options: { A: "300, 500", B: "500, 300", C: "−300, −500", D: "−500, −300" },
    answer: "A",
    explanation: "Reverse Ea is the energy from products (0 kJ) up to the peak. Catalysed reverse Ea = 300 kJ; uncatalysed reverse Ea = 500 kJ. Activation energy is positive."
  },
  // 1989 source question 27
  {
    id: 311, year: 1989,
    question: "The combustion of ethene, C₂H₄, is given by the equation C₂H₄ + 3O₂ → 2CO₂ + 2H₂O; ΔH = −1428 kJ. If the molar heats of formation of water and carbon(IV) oxide are −286 kJ and −396 kJ respectively, calculate the molar heat of formation of ethene in kJ.",
    options: { A: "−2792", B: "+2792", C: "−64", D: "+64" },
    answer: "D",
    explanation: "ΔH_c = ΣΔH_f(products) − ΣΔH_f(reactants). −1428 = [2(−396) + 2(−286)] − ΔH_f(C₂H₄) = −1364 − ΔH_f(C₂H₄). Therefore ΔH_f(C₂H₄) = −1364 + 1428 = +64 kJ mol⁻¹."
  },
  // 1989 source question 28
  {
    id: 312, year: 1989,
    question: "CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g); ΔH = −41000 J. Which of the following factors favour the formation of hydrogen in the above reaction? I. high pressure  II. low pressure  III. high temperature  IV. use of excess steam",
    options: { A: "I, III and IV", B: "III only", C: "II, III and I", D: "IV only" },
    answer: "D",
    explanation: "Equal numbers of gas moles on each side, so pressure has no effect. The forward reaction is exothermic, so high temperature favours the reverse. Excess steam (a reactant) shifts the equilibrium to the right, producing more H₂. Only IV."
  },
  // 1989 source question 29
  {
    id: 313, year: 1989,
    question: "A typical heating curve from the solid through the liquid to the gaseous phase is labelled T (first plateau), U (rising after T), X (second plateau) and Y (rising after X). What part of the curve shows solid and liquid in equilibrium?",
    options: { A: "T", B: "U", C: "X", D: "Y" },
    answer: "A",
    explanation: "The first horizontal portion of a heating curve is the melting plateau, where solid and liquid coexist at the melting point. That region is labelled T."
  },
  // 1989 source question 30
  {
    id: 314, year: 1989,
    question: "Which of the following represents the balanced equation for the reaction of copper with concentrated trioxonitrate(V) acid?",
    options: { A: "Cu(s) + 2HNO₃(aq) → Cu(NO₃)₂(aq) + H₂(g)", B: "Cu(s) + 4HNO₃(aq) → Cu(NO₃)₂(aq) + 2H₂O(l) + 2NO₂(g)", C: "3Cu(s) + 8HNO₃(aq) → 3Cu(NO₃)₂(aq) + 4H₂O(l) + 2NO(g)", D: "3Cu(s) + 4HNO₃(aq) → 3Cu(NO₃)₂(aq) + 2H₂O(l) + 2NO(g)" },
    answer: "B",
    explanation: "Concentrated HNO₃ oxidizes copper and is itself reduced to nitrogen(IV) oxide: Cu + 4HNO₃(conc.) → Cu(NO₃)₂ + 2H₂O + 2NO₂. Option C is the corresponding equation for dilute nitric acid."
  },
  // 1989 source question 31
  {
    id: 315, year: 1989,
    question: "The catalyst used in the contact process for the manufacture of tetraoxosulphate(VI) acid is",
    options: { A: "manganese(IV) oxide", B: "manganese(II) tetraoxosulphate(VI)", C: "vanadium(V) oxide", D: "iron metal" },
    answer: "C",
    explanation: "In the contact process, 2SO₂ + O₂ ⇌ 2SO₃ is catalysed by vanadium(V) oxide, V₂O₅. Iron is the Haber-process catalyst."
  },
  // 1989 source question 32
  {
    id: 316, year: 1989,
    question: "Some products of destructive distillation of coal are",
    options: { A: "carbon(IV) oxide and ethanoic acid", B: "trioxocarbonate(IV) acid and methanoic acid", C: "producer gas and water gas", D: "coke and ammoniacal liquor" },
    answer: "D",
    explanation: "Destructive distillation of coal yields coke, coal tar, coal gas and ammoniacal liquor."
  },
  // 1989 source question 33
  {
    id: 317, year: 1989,
    question: "Gunpowder is made from charcoal, sulphur and potassium trioxonitrate(V). The salt in the mixture performs the function of",
    options: { A: "an oxidant", B: "a reductant", C: "a solvent", D: "a catalyst" },
    answer: "A",
    explanation: "KNO₃ readily gives up oxygen and oxidizes the charcoal and sulphur, so it is the oxidant in gunpowder."
  },
  // 1989 source question 34
  {
    id: 318, year: 1989,
    question: "Which of the following reactions is (are) feasible? I. Br₂(l) + 2Cl⁻(aq) → 2Br⁻(aq) + Cl₂(g)  II. 2I⁻(aq) + Br₂(l) → 2Br⁻(aq) + I₂(s)  III. 2F⁻(aq) + Cl₂(g) → 2Cl⁻(aq) + F₂(g)  IV. 2F⁻(aq) + Br₂(l) → 2Br⁻(aq) + F₂(g)",
    options: { A: "I", B: "II", C: "I and III", D: "III and IV" },
    answer: "B",
    explanation: "A halogen displaces a less reactive halide from solution. Reactivity order is F₂ > Cl₂ > Br₂ > I₂, so only bromine displacing iodide (II) is feasible."
  },
  // 1989 source question 35
  {
    id: 319, year: 1989,
    question: "Bleaching powder, CaOCl₂·H₂O, deteriorates on exposure to air because",
    options: { A: "it loses its water of crystallization", B: "atmospheric nitrogen displaces chlorine from it", C: "carbon(IV) oxide of the atmosphere displaces chlorine from it", D: "bleaching agents should be stored in solution" },
    answer: "C",
    explanation: "Atmospheric CO₂ (with moisture) reacts with bleaching powder and liberates chlorine/hypochlorous acid, so the powder loses its bleaching power on standing in air."
  },
  // 1989 source question 36
  {
    id: 320, year: 1989,
    question: "The products of the thermal decomposition of ammonium trioxonitrate(V) are",
    options: { A: "NO₂ and oxygen", B: "NH₃ and oxygen", C: "nitrogen and water", D: "N₂O and water" },
    answer: "D",
    explanation: "NH₄NO₃ decomposes on heating to dinitrogen oxide and water: NH₄NO₃ → N₂O + 2H₂O. (Nitrogen and water come from the nitrite, NH₄NO₂.)"
  },
  // 1989 source question 37
  {
    id: 321, year: 1989,
    question: "The scale of a chemical balance is made of iron plate and coated with copper electrolytically because",
    options: { A: "iron is less susceptible to corrosion than copper", B: "copper is less susceptible to corrosion as iron", C: "copper is less susceptible to corrosion than iron", D: "copper and iron are equally susceptible to corrosion" },
    answer: "C",
    explanation: "Copper is less reactive than iron and therefore corrodes less readily. Electroplating the iron scale with copper protects it from rust."
  },
  // 1989 source question 38
  {
    id: 322, year: 1989,
    question: "A metal is extracted from its ore by the electrolysis of its molten chloride and it displaces lead from lead(II) trioxonitrate(V) solution. The metal is",
    options: { A: "copper", B: "aluminium", C: "zinc", D: "sodium" },
    answer: "D",
    explanation: "Sodium is obtained by electrolysis of molten NaCl (Downs cell) and lies well above lead in the electrochemical series, so it can displace Pb²⁺. Aluminium is extracted from the molten oxide, not the chloride."
  },
  // 1989 source question 39
  {
    id: 323, year: 1989,
    question: "Mortar is NOT used for under-water construction because",
    options: { A: "it hardens by loss of water", B: "its hardening does not depend upon evaporation", C: "it requires concrete to harden", D: "it will be washed away by the flow of water" },
    answer: "A",
    explanation: "Lime mortar sets by losing water and by carbonation in air. Under water it cannot dry, so it is not used for underwater work (unlike hydraulic cement, which hydrates)."
  },
  // 1989 source question 40
  {
    id: 324, year: 1989,
    question: "Which of the following is NOT involved in the extraction of metals from their ores?",
    options: { A: "reduction with carbon", B: "reduction with other metals", C: "reduction by electrolysis", D: "oxidation with oxidizing agent" },
    answer: "D",
    explanation: "Metal extraction converts the metal ion/compound to the free metal, which is a reduction. Oxidation with an oxidizing agent is not a method of extracting metals from ores."
  },
  // 1989 source question 42
  {
    id: 325, year: 1989,
    question: "When excess chlorine is mixed with ethene at room temperature, the product is",
    options: { A: "1,2-dichloroethane", B: "1,2-dichloroethene", C: "1,1-dichloroethane", D: "1,1-dichloroethene" },
    answer: "A",
    explanation: "Ethene undergoes addition of Cl₂ across the C=C bond at room temperature to give 1,2-dichloroethane, CH₂ClCH₂Cl."
  },
  // 1989 source question 43
  {
    id: 326, year: 1989,
    question: "Vulcanization of rubber is a process by which",
    options: { A: "isoprene units are joined to produce rubber", B: "rubber latex is coagulated", C: "sulphur is chemically combined in the rubber", D: "water is removed from the rubber" },
    answer: "C",
    explanation: "Vulcanization heats rubber with sulphur so that sulphur cross-links the polyisoprene chains, making the rubber harder and more elastic."
  },
  // 1989 source question 44
  {
    id: 327, year: 1989,
    question: "The reaction between ethanoic acid and sodium hydroxide is an example of",
    options: { A: "esterification", B: "neutralization", C: "hydroxylation", D: "hydrolysis" },
    answer: "B",
    explanation: "CH₃COOH + NaOH → CH₃COONa + H₂O is the neutralization of an acid by an alkali, giving a salt and water."
  },
  // 1989 source question 45
  {
    id: 328, year: 1989,
    question: "The bond which joins two ethanoic acid molecules in the liquid state is",
    options: { A: "a covalent bond", B: "an ionic bond", C: "a dative covalent bond", D: "a hydrogen bond" },
    answer: "D",
    explanation: "Liquid ethanoic acid exists as hydrogen-bonded dimers: the H of one carboxyl group is attracted to the carbonyl oxygen of the other."
  },
  // 1989 source question 46
  {
    id: 329, year: 1989,
    question: "The alkaline hydrolysis of fats and oils produces soap and",
    options: { A: "propane-1,1,3-triol", B: "propane-1,3,3-triol", C: "propane-1,2,2-triol", D: "propane-1,2,3-triol" },
    answer: "D",
    explanation: "Saponification of a triglyceride yields soap (salts of fatty acids) and glycerol, which is propane-1,2,3-triol."
  },
  // 1989 source question 47
  {
    id: 330, year: 1989,
    question: "Which of the following is NOT a monomer? A is benzene (C₆H₆ ring); B is CH₂=CH₂; C is CH₂=CHCl; D is cyclohexene (a six-membered ring with one C=C).",
    options: { A: "benzene", B: "CH₂=CH₂", C: "CH₂=CHCl", D: "cyclohexene" },
    answer: "A",
    explanation: "Addition-polymer monomers need a polymerizable C=C. Ethene and chloroethene (and cyclohexene) have this. The delocalized electrons of benzene do not undergo addition polymerization, so benzene is not a monomer."
  },
  // 1989 source question 48
  {
    id: 331, year: 1989,
    question: "What is the IUPAC name for the compound CH₂=C(CH₃)CH₂Cl?",
    options: { A: "1-chloro-2-methylprop-2,3-ene", B: "1-chloro-2-methylprop-2-ene", C: "3-chloro-2-methylprop-1-ene", D: "3-chloro-2-methylprop-1,2-ene" },
    answer: "C",
    explanation: "The longest chain including the double bond has 3 carbons, numbered from the =CH₂ end. The methyl is on C-2 and the chlorine on C-3, giving 3-chloro-2-methylprop-1-ene."
  },
  // 1989 source question 49
  {
    id: 332, year: 1989,
    question: "The gas responsible for most of the fatal explosions in coal mines is",
    options: { A: "butane", B: "ethene", C: "ethane", D: "methane" },
    answer: "D",
    explanation: "Firedamp in coal mines is mainly methane, CH₄, which forms explosive mixtures with air."
  },
  // 1989 source question 50
  {
    id: 333, year: 1989,
    question: "Three liquids X, Y and Z containing only hydrogen and carbon were burnt on a spoon. X and Y burnt with sooty flames while Z did not. Y is able to decolorize bromine water whereas X and Z cannot. Which of the liquids would be aromatic in nature?",
    options: { A: "X and Z", B: "Y", C: "X", D: "Z" },
    answer: "C",
    explanation: "A sooty flame means a high C:H ratio (unsaturated or aromatic). Decolorizing Br₂ water indicates an alkene/alkyne. X is sooty but does not decolorize Br₂, so it is aromatic. Y is an alkene; Z is a saturated alkane."
  },
  // 1990 source question 1
  {
    id: 286, year: 1990,
    question: "Which of the following is a physical change?",
    options: {
      A: "The bubbling of chlorine into water",
      B: "The bubbling of chlorine into jar containing hydrogen",
      C: "The dissolution of sodium chloride in water",
      D: "The passing of steam over heated iron."
    },
    answer: "C",
    explanation: "Dissolving sodium chloride in water is a physical change because no new substance is formed."
  },

  // 1990 source question 2
  {
    id: 287, year: 1990,
    question: "Changes in the physical states of chemical substances T are shown in the scheme below. The letters X, Y and Z respectively represent",
    options: {
      A: "sublimation, condensation and freezing",
      B: "sublimation, vaporization and solidification",
      C: "freezing, condensation and sublimation",
      D: "evaporation, liquefaction and sublimation."
    },
    answer: "A",
    explanation: "X represents solid directly to gas (sublimation), Y represents gas to liquid (condensation), and Z represents liquid to solid (freezing)."
  },

  // 1990 source question 4
  {
    id: 288, year: 1990,
    question: "The Avogadro’s number of 24 g of magnesium is same as that of",
    options: {
      A: "1 g of hydrogen molecules",
      B: "16 g of oxygen molecules",
      C: "32 g of oxygen molecules",
      D: "35.5 g of chlorine molecules."
    },
    answer: "C",
    explanation: "24 g of Mg is 1 mole of Mg atoms. One mole of O₂ molecules has a mass of 32 g, so both contain Avogadro's number of particles."
  },

  // 1990 source question 5
  {
    id: 289, year: 1990,
    question: "If a gas occupies a container of volume 146 cm3 at 18°C and 0.971 atm, its volume in cm3 at s.t.p is",
    options: {
      A: "133",
      B: "146",
      C: "266",
      D: "292"
    },
    answer: "A",
    explanation: "Using P₁V₁/T₁ = P₂V₂/T₂, V₂ = (0.971 × 146 × 273)/(1 × 291) ≈ 133 cm³."
  },

  // 1990 source question 6
  {
    id: 290, year: 1990,
    question: "The volume occupied by 1.58 g of gas at s.t.p is 500 cm3. What is the relative molecular mass of the gas?",
    options: {
      A: "28",
      B: "32",
      C: "344",
      D: "71"
    },
    answer: "D",
    explanation: "At s.t.p., 500 cm³ = 0.500 dm³ = 0.500/22.40 mol. Molar mass = 1.58 ÷ (0.500/22.40) ≈ 70.8 g mol⁻¹, giving 71."
  },

  // 1990 source question 7
  {
    id: 291, year: 1990,
    question: "Equal volumes of CO, SO2, NO2 and H2S were released into a room at the same point and time. Which of the following gives the order of diffusion through the room?",
    options: {
      A: "CO2, SO2, NO2, H2S",
      B: "SO2, NO2, H2S, CO",
      C: "CO, H2S, SO2, NO2",
      D: "CO, H2S, NO2, SO2"
    },
    answer: "C",
    explanation: "By Graham's law, diffusion rate is inversely proportional to the square root of molar mass. Thus CO (28) diffuses fastest, followed by H₂S (34), NO₂ (46), and SO₂ (64)."
  },

  // 1990 source question 8
  {
    id: 292, year: 1990,
    question: "A basic postulate of the kinetic theory of gases is that the molecules of a gas move in straight lines between collisions. This implies that",
    options: {
      A: "collisions are perfectly elastic",
      B: "forces of repulsion exist",
      C: "forces of repulsion and attraction are in equilibrium",
      D: "collisions are inelastic."
    },
    answer: "A",
    explanation: "The kinetic theory assumes that collisions between gas molecules and with the container walls are perfectly elastic."
  },

  // 1990 source question 9
  {
    id: 293, year: 1990,
    question: "Which of the four atoms P, Q, R and S in the above data can be described by the following properties: relative atomic mass is greater than 30 but less than 40; it has an odd atomic number and forms a unipositive ion in solution?",
    options: {
      A: "P",
      B: "Q",
      C: "R",
      D: "S"
    },
    answer: "D",
    explanation: "S has 19 protons and 20 neutrons, giving mass number 39. Atomic number 19 is odd, and the element forms a unipositive ion."
  },

  // 1990 source question 10
  {
    id: 294, year: 1990,
    question: "Which of the following terms indicates the number of bonds that can be formed by atom?",
    options: {
      A: "Oxidation number",
      B: "Valence",
      C: "Atomic number",
      D: "Electronegativity."
    },
    answer: "B",
    explanation: "Valence indicates the combining capacity or number of bonds an atom can form."
  },

  // 1990 source question 11
  {
    id: 295, year: 1990,
    question: "X(g) → X⁺(g). The type of energy involved in the above transformation is",
    options: {
      A: "ionization energy",
      B: "sublimation energy",
      C: "lattice energy",
      D: "electron affinity"
    },
    answer: "A",
    explanation: "Removing an electron from a gaseous atom to form a gaseous positive ion requires ionization energy."
  },

  // 1990 source question 12
  {
    id: 296, year: 1990,
    question: "Chlorine, consisting of two isotopes of mass numbers 35 and 37, has an atomic mass of 35.5. The relative abundance of the isotope of mass number 37 is",
    options: {
      A: "20",
      B: "25",
      C: "50",
      D: "75"
    },
    answer: "B",
    explanation: "Let the fraction of Cl-37 be x: 35(1 − x) + 37x = 35.5. Hence 2x = 0.5 and x = 0.25, or 25%."
  },

  // 1990 source question 14
  {
    id: 297, year: 1990,
    question: "A blue solid, T, which weighed 5.0 g was placed on a table. After 8 hours, the resulting pink solid was found to weigh 5.5 g. It can be inferred that substance T",
    options: {
      A: "is deliquescent",
      B: "is hygroscopic",
      C: "has some molecules of water of crystallization",
      D: "is efflorescent"
    },
    answer: "B",
    explanation: "The solid gained mass by absorbing moisture from the atmosphere, so it is hygroscopic."
  },

  // 1990 source question 15
  {
    id: 298, year: 1990,
    question: "The effluent of an industrial plant used in the electrolysis of concentrated brine, with a flowing mercury cathode may contain impurities like",
    options: {
      A: "oxygen",
      B: "hydrogen",
      C: "mercury(II) chloride",
      D: "hydrogen chloride"
    },
    answer: "C",
    explanation: "A mercury cathode process can result in mercury-containing impurities, including mercury(II) chloride, in the effluent."
  },

  // 1990 source question 16
  {
    id: 299, year: 1990,
    question: "The solubility in moles per dm3 of 20 g of CuSO4 dissolved in 100 g of water at 180°C is",
    options: {
      A: "0.13",
      B: "0.25",
      C: "1.25",
      D: "2.00"
    },
    answer: "A",
    explanation: "Molar mass of CuSO₄ = 63.5 + 32 + 64 = 159.5 g mol⁻¹. Thus 20/159.5 ≈ 0.125 mol, approximately 0.13 mol dm⁻³."
  },

  // 1990 source question 17
  {
    id: 300, year: 1990,
    question: "Smoke consists of",
    options: {
      A: "solid particles dispersed in liquid",
      B: "solid or liquid particles dispersed in gas",
      C: "gas or liquid particles dispersed in liquid",
      D: "liquid particles dispersed in liquid."
    },
    answer: "B",
    explanation: "Smoke is an aerosol consisting of fine solid or liquid particles dispersed in a gas."
  },

  // 1990 source question 18
  {
    id: 301, year: 1990,
    question: "Na2C2O4 + CaCl2 → CaC2O4 + 2NaCl. Given a solution of 1.9 g of sodium oxalate in 50 g of water at room temperature, calculate the minimum volume of 0.1 M calcium chloride required to produce maximum calcium oxalate using the above equation.",
    options: {
      A: "1.40 × 10² dm3",
      B: "1.40 × 10² cm3",
      C: "1.40 × 10⁻² dm3",
      D: "1.40 × 10⁻² cm3"
    },
    answer: "B",
    explanation: "Molar mass of Na₂C₂O₄ = 134 g mol⁻¹. Moles = 1.9/134 = 0.01418 mol. The reaction is 1:1, so 0.1 M CaCl₂ requires 0.01418/0.1 = 0.1418 dm³ = about 1.40 × 10² cm³."
  },

  // 1990 source question 19
  {
    id: 302, year: 1990,
    question: "2.0 g of monobasic acid was made up to 250 cm3 with distilled water. 25.00 cm3 of this solution required 20.00 cm3 of 0.1 M NaOH solution for complete neutralization. The molar mass of the acid is",
    options: {
      A: "200 g",
      B: "160 g",
      C: "100 g",
      D: "50 g"
    },
    answer: "C",
    explanation: "Moles of NaOH used = 0.020 × 0.1 = 0.002 mol. A monobasic acid reacts 1:1, so 25 cm³ contains 0.002 mol acid. The full 250 cm³ contains 0.020 mol, giving molar mass 2.0/0.020 = 100 g mol⁻¹."
  },

  // 1990 source question 20
  {
    id: 303, year: 1990,
    question: "What is concentration of H⁺ ions in moles per dm3 of a solution of pH 4.398?",
    options: {
      A: "4.0 × 10⁻⁵",
      B: "0.4 × 10⁻⁵",
      C: "4.0 × 10⁻³",
      D: "0.4 × 10⁻³"
    },
    answer: "A",
    explanation: "[H⁺] = 10⁻pH = 10⁻⁴·³⁹⁸ ≈ 4.0 × 10⁻⁵ mol dm⁻³."
  },

  // 1990 source question 22
  {
    id: 304, year: 1990,
    question: "If 10.8 g of silver is deposited in a silver coulometer connected in series with a copper coulometer, the volume of oxygen liberated is",
    options: {
      A: "0.56 dm3",
      B: "5.50 dm3",
      C: "11.20 dm3",
      D: "22.40 dm3"
    },
    answer: "A",
    explanation: "10.8 g Ag = 0.10 mol Ag, corresponding to 0.10 faraday. Four faradays produce one mole of O₂, so 0.10 F gives 0.025 mol O₂ = 0.56 dm³ at s.t.p."
  },

  // 1990 source question 23
  {
    id: 305, year: 1990,
    question: "0.1 faraday of electricity deposited 2.95 g of nickel during electrolysis in an aqueous solution. Calculate the number of moles of nickel that will be deposited by 0.4 faraday.",
    options: {
      A: "0.20",
      B: "0.30",
      C: "0.034",
      D: "5.87"
    },
    answer: "A",
    explanation: "0.1 F deposits 2.95/58.7 = 0.05 mol Ni. Therefore 0.4 F, four times the charge, deposits 0.20 mol Ni."
  },

  // 1990 source question 24
  {
    id: 306, year: 1990,
    question: "Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O. In the above chromium change from",
    options: {
      A: "+7 to +3",
      B: "+6 to +3",
      C: "+5 to +3",
      D: "−2 to +3"
    },
    answer: "B",
    explanation: "Chromium is +6 in Cr₂O₇²⁻ and becomes +3 in Cr³⁺."
  },

  // 1990 source question 25
  {
    id: 307, year: 1990,
    question: "In the reaction IO3⁻ + 5I⁻ + 6H⁺ → 3I2 + 3H2O, the oxidizing agent is",
    options: {
      A: "H⁺",
      B: "I⁻",
      C: "IO3⁻",
      D: "I2"
    },
    answer: "C",
    explanation: "IO₃⁻ is reduced to iodine, so it acts as the oxidizing agent."
  },

  // 1990 source question 26
  {
    id: 308, year: 1990,
    question: "Fe2O3(s) + 2Al → Al2O3 + 2Fe(s) are −1670 kJ mol−1 and −822 kJ mol−1 respectively, the enthalpy change in kJ for the reaction is",
    options: {
      A: "+2492",
      B: "+848",
      C: "−848",
      D: "−2492"
    },
    answer: "B",
    explanation: "Using Hess's law, ΔH = −822 − (−1670) = +848 kJ."
  },

  // 1990 source question 27
  {
    id: 309, year: 1990,
    question: "Iron galvanized with zinc is catholically protected from corrosion. This is because",
    options: {
      A: "zinc has a more positive oxidation potential than iron",
      B: "zinc has a less positive oxidation potential than iron",
      C: "both have the same oxidation potential",
      D: "zinc is harder than iron."
    },
    answer: "A",
    explanation: "Zinc is more readily oxidized than iron, so it acts as the sacrificial metal and protects the iron."
  },

  // 1990 source question 28
  {
    id: 310, year: 1990,
    question: "Which of the following samples will react faster with dilute trioxonitrate(V) acid?",
    options: {
      A: "5 g of lumps of CaCO3 at 25°C",
      B: "5 g of powdered CaCO3 at 25°C",
      C: "5 g of lumps of CaCO3 at 50°C",
      D: "5 g of powdered CaCO3 at 50°C"
    },
    answer: "D",
    explanation: "Higher temperature increases reaction rate and powdered CaCO₃ provides a greater surface area, so D reacts fastest."
  },

  // 1990 source question 29
  {
    id: 311, year: 1990,
    question: "In the reaction 2HI(g) → H2(g) + I2(g), ΔH = 10 kJ; the concentration of iodine in the equilibrium mixture can be increased by",
    options: {
      A: "raising the pressure",
      B: "raising the temperature",
      C: "adding the temperature",
      D: "lowering the pressure"
    },
    answer: "B",
    explanation: "The forward reaction is endothermic (ΔH is positive), so increasing temperature shifts equilibrium toward H₂ and I₂."
  },

  // 1990 source question 30
  {
    id: 312, year: 1990,
    question: "Which of the following gases can be collected by upward displacement of air?",
    options: {
      A: "NO",
      B: "H2",
      C: "NH3",
      D: "Cl2"
    },
    answer: "D",
    explanation: "Upward displacement of air is used for gases denser than air. Chlorine is much denser than air."
  },

  // 1990 source question 31
  {
    id: 313, year: 1990,
    question: "The brown fumes given off when trioxonitrate(V) acid consist of",
    options: {
      A: "NO2 and O2",
      B: "H2O and NO2",
      C: "NO2, O2 and H2O",
      D: "NO2 and H2O"
    },
    answer: "C",
    explanation: "Concentrated nitric acid can decompose to produce brown NO₂ fumes together with oxygen and water."
  },

  // 1990 source question 33
  {
    id: 314, year: 1990,
    question: "In the Haber process for the manufacture of ammonia, the catalyst commonly used is finely divided",
    options: {
      A: "vanadium",
      B: "platinum",
      C: "iron",
      D: "copper"
    },
    answer: "C",
    explanation: "Finely divided iron is the catalyst used in the Haber process."
  },

  // 1990 source question 35
  {
    id: 315, year: 1990,
    question: "Which of the following metals will liberate hydrogen from steam or dilute acid?",
    options: {
      A: "copper",
      B: "iron",
      C: "lead",
      D: "mercury"
    },
    answer: "B",
    explanation: "Iron is above hydrogen in the activity series and reacts with steam to form hydrogen; it can also react with dilute acids."
  },

  // 1990 source question 36
  {
    id: 316, year: 1990,
    question: "Coal fire should not be used in poorly ventilated rooms because",
    options: {
      A: "of the accumulation of CO2 which cause deep sleep",
      B: "it is usually too hot",
      C: "of the accumulation of CO which causes suffocation",
      D: "it removes most of the gases in the room"
    },
    answer: "C",
    explanation: "Incomplete combustion of coal can produce poisonous carbon monoxide, which can cause suffocation."
  },

  // 1990 source question 37
  {
    id: 317, year: 1990,
    question: "The major component of the slag from the production of iron is",
    options: {
      A: "an alloy of calcium and iron",
      B: "coke",
      C: "impure iron",
      D: "calcium trioxosilicate(V)"
    },
    answer: "D",
    explanation: "Limestone decomposes to CaO, which reacts with silica impurities to form calcium silicate, the major component of slag."
  },

  // 1990 source question 38
  {
    id: 318, year: 1990,
    question: "Sodium hydroxide should be stored in properly closed containers because it",
    options: {
      A: "readily absorbs water vapour from the air",
      B: "is easily oxidized by atmospheric oxygen",
      C: "turns golden yellow when exposed to light.",
      D: "melts at a low temperature."
    },
    answer: "A",
    explanation: "Solid NaOH is hygroscopic and readily absorbs moisture from the atmosphere."
  },

  // 1990 source question 39
  {
    id: 319, year: 1990,
    question: "To make coloured glasses, small quantities of oxides of metals which form coloured silicates are often added to the reaction mixture consisting of Na2CO3 and SiO2. Such a metal is",
    options: {
      A: "potassium",
      B: "barium",
      C: "zinc",
      D: "copper"
    },
    answer: "D",
    explanation: "Copper compounds can form coloured silicates and are used to impart colour to glass."
  },

  // 1990 source question 40
  {
    id: 320, year: 1990,
    question: "Which of the following compounds gives a yellow residue when heated and also reacts with aqueous sodium hydroxide to give a white gelatinous precipitate soluble in excess sodium hydroxide solution?",
    options: {
      A: "(NH4)2CO3",
      B: "ZnCO3",
      C: "Al2(SO4)3",
      D: "PbCO3"
    },
    answer: "D",
    explanation: "PbCO₃ decomposes to yellow PbO on heating. Lead compounds can react with NaOH to form a white hydroxide precipitate that dissolves in excess alkali."
  },

  // 1990 source question 42
  {
    id: 321, year: 1990,
    question: "The structure of cis-2-butene is",
    options: {
      A: "CH3-CH=CH-CH3",
      B: "CH3 groups on the same side of the C=C bond",
      C: "CH3 groups on opposite sides of the C=C bond",
      D: "a carbon atom bonded to three CH3 groups at the double bond"
    },
    answer: "B",
    explanation: "In cis-2-butene, the two CH₃ groups are on the same side of the carbon-carbon double bond. The diagram in the source shows this arrangement."
  },

  // 1990 source question 45
  {
    id: 322, year: 1990,
    question: "The label on a reagent bottle containing a clear organic liquid dropped off. The liquid was neutral to litmus and gave a colourless gas with metallic sodium. The liquid must be an",
    options: {
      A: "alkanoate",
      B: "alkene",
      C: "alkanol",
      D: "alkane"
    },
    answer: "C",
    explanation: "Alkanols react with sodium metal to release colourless hydrogen gas and are generally neutral to litmus."
  },

  // 1990 source question 46
  {
    id: 323, year: 1990,
    question: "The above reaction is an example of",
    options: {
      A: "displacement reaction",
      B: "a neutralization reaction",
      C: "an elimination reaction",
      D: "Saponification"
    },
    answer: "B",
    explanation: "A carboxylic acid reacts with NaOH to form a salt and water, which is a neutralization reaction."
  },

  // 1990 source question 47
  {
    id: 324, year: 1990,
    question: "Alkanoic acids have low volatility compared with alkanols because they",
    options: {
      A: "are more polar than alkanols",
      B: "have two oxygen atoms while alkanols have one",
      C: "form two hydrogen bonds while alkanols do not",
      D: "form two hydrogen bonds while alkanols form one."
    },
    answer: "D",
    explanation: "Carboxylic acid molecules form strong hydrogen-bonded dimers involving two hydrogen bonds, giving stronger intermolecular attraction and lower volatility."
  },

  // 1990 source question 48
  {
    id: 325, year: 1990,
    question: "The octane number of a fuel whose performance is the same as that of a mixture of 55 g of 2,2,4-trimethylpentane and 45 g of n-heptane is",
    options: {
      A: "45",
      B: "55",
      C: "80",
      D: "100"
    },
    answer: "B",
    explanation: "The octane number is based on the percentage by mass of 2,2,4-trimethylpentane (isooctane) in the reference mixture. Here it is 55%."
  },

  // 1990 source question 49
  {
    id: 326, year: 1990,
    question: "Which of the following is formed when maltose reacts with concentrated tetraoxosulphate(VI) acid?",
    options: {
      A: "Carbon(IV) oxide",
      B: "Coal tar",
      C: "Charcoal",
      D: "Toxic fumes"
    },
    answer: "C",
    explanation: "Concentrated sulfuric acid strongly dehydrates maltose, leaving carbon (charcoal) and water."
  },

  // 1990 source question 50
  {
    id: 327, year: 1990,
    question: "Which of the following compounds represents the polymerization product of ethyne?",
    options: {
      A: "benzene",
      B: "cyclohexadiene",
      C: "biphenyl",
      D: "cyclohexene"
    },
    answer: "A",
    explanation: "Three molecules of ethyne can combine by cyclotrimerization to form benzene, C6H6."
  },
  // 1991 source question 1
{
  id: 328, year: 1991,
  question: "Which of the following can be obtained by fraction of distillation?",
  options: {
    A: "Nitrogen from liquid air",
    B: "Sodium chloride from sea water",
    C: "Iodine from a solution of iodine in carbon tetrachloride",
    D: "Sulphur from a solution of sulphur in carbon disulphide"
  },
  answer: "A",
  explanation: "Fractional distillation separates miscible liquids with different boiling points; nitrogen can be separated from liquid air this way."
},

// 1991 source question 2
{
  id: 329, year: 1991,
  question: "Which of the following are mixture? I Petroleum II Rubber latex III Vulcanizer's solution IV Carbon (II) sulphide",
  options: {
    A: "I, II and III",
    B: "I, II and IV",
    C: "I and II only",
    D: "I and IV"
  },
  answer: "A",
  explanation: "Petroleum, rubber latex and vulcanizer's solution are mixtures; carbon disulphide is a compound."
},

// 1991 source question 3
{
  id: 330, year: 1991,
  question: "An iron ore is known to contain 70.0% Fe₂O₃. The mass of iron metal which can theoretically be obtained from 80 kg of the ore is. [Fe = 56, O = 16]",
  options: {
    A: "35.0 kg",
    B: "39.2 kg",
    C: "70.0 kg",
    D: "78.4 kg"
  },
  answer: "B",
  explanation: "80 × 0.70 = 56 kg Fe₂O₃. Since Fe₂O₃ contains 112/160 = 0.70 iron by mass, iron obtained = 56 × 0.70 = 39.2 kg."
},

// 1991 source question 4
{
  id: 331, year: 1991,
  question: "In two separate experiments 0.36 g and 0.71 g of chlorine combine with a metal X to give Y and Z respectively. An analysis showed that Y and Z contain 0.20 g and 0.40 g of X respectively. The data above represents the law of.",
  options: {
    A: "multiple proportion",
    B: "conservation of mass",
    C: "constant composition",
    D: "reciprocal proportion"
  },
  answer: "A",
  explanation: "For the same mass of X, the masses of chlorine combine in approximately a 1:2 ratio, illustrating the law of multiple proportions."
},

// 1991 source question 6
{
  id: 332, year: 1991,
  question: "A given quantity of gas occupies a volume of 228 cm³ at a pressure of 750 mm Hg. What will be its volume at atmospheric pressure?",
  options: {
    A: "200 cm³",
    B: "225 cm³",
    C: "230 cm³",
    D: "235 cm³"
  },
  answer: "B",
  explanation: "At constant temperature, P₁V₁ = P₂V₂. Thus V₂ = (750 × 228)/760 ≈ 225 cm³."
},

// 1991 source question 8
{
  id: 333, year: 1991,
  question: "A sample of a gas exerts a pressure of 8.2 atm when confined in a 2.93 dm³ container at 20°C. The number of moles of gas in the sample is [R = 0.082 litre atm/deg mole]",
  options: {
    A: "1.00",
    B: "2.00",
    C: "3.00",
    D: "4.00"
  },
  answer: "A",
  explanation: "Using PV = nRT, n = (8.2 × 2.93)/(0.082 × 293) ≈ 1.00 mol."
},

// 1991 source question 10
{
  id: 334, year: 1991,
  question: "The ions X⁻ and Y⁺ are isoelectronic, each containing a total of 10 electrons. How many protons are in the nuclei of the neutral atoms of X and Y respectively?",
  options: {
    A: "10 and 10",
    B: "9 and 9",
    C: "11 and 9",
    D: "9 and 11"
  },
  answer: "D",
  explanation: "X⁻ has 10 electrons, so neutral X has 9 protons. Y⁺ has 10 electrons, so neutral Y has 11 protons."
},

// 1991 source question 11
{
  id: 335, year: 1991,
  question: "The electronic configuration of an element is 1s² 2s² 2p⁶ 3s² 3p³. How many unpaired electrons are there in the element?",
  options: {
    A: "5",
    B: "4",
    C: "3",
    D: "2"
  },
  answer: "C",
  explanation: "The three 3p electrons occupy separate p orbitals before pairing, giving 3 unpaired electrons."
},

// 1991 source question 12
{
  id: 336, year: 1991,
  question: "Which of the following represents the type of bonding present in ammonium chloride molecule?",
  options: {
    A: "Ionic only",
    B: "Covalent only",
    C: "Ionic and dative covalent",
    D: "Dative covalent only"
  },
  answer: "C",
  explanation: "NH₄Cl has ionic attraction between NH₄⁺ and Cl⁻, while formation of NH₄⁺ involves a dative covalent bond."
},

// 1991 source question 13
{
  id: 337, year: 1991,
  question: "Which of the following is arranged in order of increasing electronegativity?",
  options: {
    A: "Chlorine, aluminium, magnesium, phosphorus, sodium",
    B: "Sodium, magnesium, aluminium, phosphorus, chlorine",
    C: "Chlorine, phosphorus, aluminium, magnesium, sodium",
    D: "Sodium, chlorine, phosphorus, magnesium, aluminium"
  },
  answer: "B",
  explanation: "Across Period 3, electronegativity generally increases from sodium through magnesium, aluminium and phosphorus to chlorine."
},

// 1991 source question 14
{
  id: 338, year: 1991,
  question: "A quantity of air was passed through a weighed amount of alkaline pyrogallol. An increase in the weight of the pyrogallol would result from the absorption of.",
  options: {
    A: "nitrogen",
    B: "neon",
    C: "argon",
    D: "oxygen"
  },
  answer: "D",
  explanation: "Alkaline pyrogallol absorbs oxygen from air, so its mass increases."
},

// 1991 source question 15
{
  id: 339, year: 1991,
  question: "The electrons of two atoms of Y and Z are arranged in shells as shown above. The bond formed between the atoms of Y and Z is",
  options: {
    A: "ionic",
    B: "covalent",
    C: "dative",
    D: "metallic"
  },
  answer: "B",
  explanation: "The electron arrangements shown are for atoms that achieve stability by sharing electrons, so the bond is covalent."
},

// 1991 source question 16
{
  id: 340, year: 1991,
  question: "Which of the following ions is a pollutant in drinking water even in trace amount?",
  options: {
    A: "Ca²⁺",
    B: "Hg²⁺",
    C: "Mg²⁺",
    D: "Fe²⁺"
  },
  answer: "B",
  explanation: "Mercury ions are highly toxic, so Hg²⁺ is hazardous even at trace concentrations."
},

// 1991 source question 17
{
  id: 341, year: 1991,
  question: "The solubility of copper (II) tetraoxosulphate (VI) is 75 g in 100 g of water at 100°C and 25 g in 100 g of water at 30°C. What mass of the salt would crystallize, if 50 g of copper (II) tetraoxosulphate (VI) solution saturated at 100°C were cooled to 30°C?",
  options: {
    A: "57.5 g",
    B: "42.9 g",
    C: "28.6 g",
    D: "14.3 g"
  },
  answer: "D",
  explanation: "A 50 g saturated solution at 100°C contains 28.57 g water and 21.43 g salt. At 30°C, 28.57 g water dissolves 7.14 g salt, so 21.43 − 7.14 = 14.29 g crystallizes."
},

// 1991 source question 18
{
  id: 342, year: 1991,
  question: "A sample of temporary hard water can be prepared in the laboratory by.",
  options: {
    A: "dissolving calcium chloride in distilled water",
    B: "saturating lime water with carbon (IV) oxide",
    C: "saturating distilled water with calcium hydroxide",
    D: "dissolving sodium hydrogen trioxocarbonate (IV) in some distilled water"
  },
  answer: "B",
  explanation: "Passing CO₂ into limewater forms soluble calcium hydrogen trioxocarbonate, Ca(HCO₃)₂, which causes temporary hardness."
},

// 1991 source question 19
{
  id: 343, year: 1991,
  question: "A property of a colloidal dispersion which a solution does not have is.",
  options: {
    A: "the Tyndall effect",
    B: "homogeneity",
    C: "osmotic pressure",
    D: "surface polarity"
  },
  answer: "A",
  explanation: "Colloids scatter a beam of light, producing the Tyndall effect; true solutions do not show this effect."
},

// 1991 source question 20
{
  id: 344, year: 1991,
  question: "50 cm³ of sulphur (IV) oxide, 800 cm³ of ammonia, 450 cm³ of hydrogen chloride, 1.0 cm³ of water at 15°C. Which of the following is suitable for demonstrating the fountain experiment?",
  options: {
    A: "Sulphur (IV) oxide and hydrogen chloride",
    B: "Carbon (IV) oxide and ammonia",
    C: "Ammonia and hydrogen chloride",
    D: "Carbon (IV) oxide and sulphur (IV) oxide"
  },
  answer: "C",
  explanation: "Ammonia and hydrogen chloride are both highly soluble gases and readily demonstrate the fountain experiment."
},

// 1991 source question 22
{
  id: 345, year: 1991,
  question: "What volume of CO₂ at s.t.p. would be obtained by reacting 10 cm³ of 0.1 M solution of anhydrous sodium trioxocarbonate (IV) with excess acid? [G.M.V. at s.t.p = 22.4 dm³]",
  options: {
    A: "2.240 cm³",
    B: "22.40 cm³",
    C: "224.0 cm³",
    D: "2240 cm³"
  },
  answer: "B",
  explanation: "10 cm³ of 0.1 M Na₂CO₃ contains 0.001 mol, producing 0.001 mol CO₂. At s.t.p. this is 22.4 cm³."
},

// 1991 source question 23
{
  id: 346, year: 1991,
  question: "If a current of 1.5 A is passed for 4.00 hours through a molten tin salt and 13.3 g of tin is deposited, what is the oxidation state of the metal in the salt? [Sn = 118.7, F = 96500 C mol⁻¹]",
  options: {
    A: "1",
    B: "2",
    C: "3",
    D: "4"
  },
  answer: "B",
  explanation: "Q = 1.5 × 4 × 3600 = 21600 C, giving 0.2238 mol e⁻. Tin deposited = 13.3/118.7 = 0.1120 mol, so about 2 mol e⁻ per mol Sn: oxidation state +2."
},

// 1991 source question 25
{
  id: 347, year: 1991,
  question: "MnO₄⁻ + 8H⁺ + ne⁻ → M⁺⁺ + 4H₂O. Which is the value of n in the reaction above?",
  options: {
    A: "2",
    B: "3",
    C: "4",
    D: "5"
  },
  answer: "D",
  explanation: "Manganese changes from +7 in MnO₄⁻ to +2 in M²⁺, so it gains 5 electrons."
},

// 1991 source question 26
{
  id: 348, year: 1991,
  question: "2H₂S(g) + SO₂(g) → 3S(s) + 2H₂O(l). The above reaction is",
  options: {
    A: "a redox reaction in which H₂S is the oxidant and SO₂ is the reductant",
    B: "a redox reaction in which SO₂ is the oxidant and H₂S is the reductant",
    C: "not a redox reaction because there is no oxidant in the reaction equation",
    D: "not a redox reaction because there is no reductant in the reaction equation"
  },
  answer: "B",
  explanation: "Sulphur in H₂S is oxidized from −2 to 0, while sulphur in SO₂ is reduced from +4 to 0. Thus SO₂ is the oxidant and H₂S is the reductant."
},

// 1991 source question 27
{
  id: 349, year: 1991,
  question: "Manganese (IV) oxide is known to hasten the decomposition of hydrogen peroxide. Its main action is to.",
  options: {
    A: "increase the surface area of the reactants",
    B: "increase the concentration of the reactants",
    C: "lower the activation energy for the reaction",
    D: "lower the heat of reaction, ΔH, for the reaction"
  },
  answer: "C",
  explanation: "MnO₂ acts as a catalyst by providing an alternative pathway with lower activation energy."
},

// 1991 source question 29
{
  id: 350, year: 1991,
  question: "NO + CO ⇌ ½N₂ + CO₂, ΔH = −89.3 kJ. What conditions would favour maximum conversion of nitrogen (II) oxide and carbon (II) oxide in the reaction above?",
  options: {
    A: "low temperature and high pressure",
    B: "high temperature and low pressure",
    C: "high temperature and high pressure",
    D: "low temperature and low pressure"
  },
  answer: "A",
  explanation: "The forward reaction is exothermic, so low temperature favours products. It also reduces total gas moles from 2 to 1.5, so high pressure favours products."
},

// 1991 source question 30
{
  id: 351, year: 1991,
  question: "Which of the following equilibria is unaffected by a pressure change?",
  options: {
    A: "2NaCl ⇌ 2Na + Cl₂",
    B: "H₂ + I₂ ⇌ 2HI",
    C: "2O₃ ⇌ 3O₂",
    D: "2NO₂ ⇌ N₂O₄"
  },
  answer: "B",
  explanation: "H₂ + I₂ ⇌ 2HI has two moles of gas on each side, so pressure changes do not shift its equilibrium."
},

// 1991 source question 31
{
  id: 352, year: 1991,
  question: "The data in the table above shows the rate of reaction of nitrogen (II) oxide with chlorine at 25°C. It can be concluded that doubling the initial concentration of NO increases the rate of reaction by factor of",
  options: {
    A: "two",
    B: "three",
    C: "four",
    D: "five"
  },
  answer: "C",
  explanation: "When [NO] doubles from 0.001 to 0.002 mol, the rate rises from 3.0 × 10⁻⁵ to 1.2 × 10⁻⁴ mol s⁻¹, a factor of 4."
},

// 1991 source question 32
{
  id: 353, year: 1991,
  question: "Which of the following gases will rekindle a brightly glowing splint?",
  options: {
    A: "NO₂",
    B: "NO",
    C: "N₂O",
    D: "Cl₂"
  },
  answer: "A",
  explanation: "Nitrogen dioxide can support combustion and can rekindle a glowing splint under the test conditions described."
},

// 1991 source question 33
{
  id: 354, year: 1991,
  question: "Which of the following salts can be melted without decomposition?",
  options: {
    A: "Na₂CO₃",
    B: "CaCO₃",
    C: "MgCO₃",
    D: "ZnCO₃"
  },
  answer: "A",
  explanation: "Sodium carbonate is thermally stable enough to melt without decomposing, unlike the listed metal carbonates."
},

// 1991 source question 34
{
  id: 355, year: 1991,
  question: "Oxygen gas can be prepared by heating",
  options: {
    A: "ammonium trioxonitrate (V)",
    B: "ammonium trioxonitrate (III)",
    C: "potassium trioxonitrate (V)",
    D: "manganese (IV) oxide"
  },
  answer: "C",
  explanation: "On heating, potassium nitrate decomposes to potassium nitrite and oxygen: 2KNO₃ → 2KNO₂ + O₂."
},

// 1991 source question 35
{
  id: 356, year: 1991,
  question: "The appropriate test paper to use in the above experiment is moist.",
  options: {
    A: "litmus paper",
    B: "potassium heptaoxodichromate (IV) paper",
    C: "lead (II) trioxonitrate (V) paper",
    D: "Universal indicator paper"
  },
  answer: "C",
  explanation: "The apparatus generates hydrogen sulphide from FeS and HCl; moist lead(II) nitrate paper is blackened by formation of lead sulphide."
},

// 1991 source question 36
{
  id: 357, year: 1991,
  question: "Addition of aqueous ammonia to a solution of Zn²⁺ gives a white precipitate which dissolves in an excess of ammonia because.",
  options: {
    A: "zinc is amphoteric",
    B: "zinc hydroxide is readily soluble",
    C: "zinc forms a complex which is readily soluble in excess ammonia",
    D: "ammonia solution is a strong base"
  },
  answer: "C",
  explanation: "Excess ammonia forms a soluble tetraamminezinc(II) complex, so the zinc hydroxide precipitate dissolves."
},

// 1991 source question 37
{
  id: 358, year: 1991,
  question: "Which of the following, in clear solution, forms a white precipitate when carbon (IV) oxide is bubbled into it for a short time?",
  options: {
    A: "KOH",
    B: "NaOH",
    C: "Ca(OH)₂",
    D: "Al(OH)₃"
  },
  answer: "C",
  explanation: "CO₂ bubbled into clear limewater forms insoluble CaCO₃, producing a white precipitate."
},

// 1991 source question 38
{
  id: 359, year: 1991,
  question: "Copper (II) tetraoxosulphate (VI) is widely used as a",
  options: {
    A: "Fertilizer",
    B: "Fungicide",
    C: "Disinfectant",
    D: "Purifier"
  },
  answer: "B",
  explanation: "Copper(II) sulfate is widely used as a fungicide, for example in Bordeaux mixture."
},

// 1991 source question 39
{
  id: 360, year: 1991,
  question: "Which of the following metals can be prepared in samples by the thermal decomposition to their trioxonitrate (V) salt?",
  options: {
    A: "Copper and mercury",
    B: "Silver and copper",
    C: "Mercury and silver",
    D: "Magnesium and mercury"
  },
  answer: "C",
  explanation: "Mercury and silver can be obtained from their nitrate salts by thermal decomposition under suitable heating conditions."
},

// 1991 source question 40
{
  id: 361, year: 1991,
  question: "Which of the following compounds can exist as geometric isomers?",
  options: {
    A: "2-methylbut-2-ene",
    B: "But-2-ene",
    C: "But-1-ene",
    D: "H–C(Cl)(Br)–H"
  },
  answer: "B",
  explanation: "But-2-ene has two different groups attached to each carbon of the C=C bond, allowing cis/trans (geometric) isomerism."
},

// 1991 source question 43
{
  id: 362, year: 1991,
  question: "How many grams of bromine will be required to completely react with 10 g of propyne? [C = 12, H = 1, Br = 80]",
  options: {
    A: "20 g",
    B: "40 g",
    C: "60 g",
    D: "80 g"
  },
  answer: "D",
  explanation: "Propyne, C₃H₄, has molar mass 40 g mol⁻¹, so 10 g is 0.25 mol. Complete addition of two Br₂ requires 0.50 mol Br₂ = 80 g."
},

// 1991 source question 44
{
  id: 363, year: 1991,
  question: "Ethene when passed into concentrated H₂SO₄ is rapidly absorbed. The product is diluted with water and then warmed to produce.",
  options: {
    A: "ethanol",
    B: "diethyl ether",
    C: "ethanal",
    D: "diethyl sulphate"
  },
  answer: "A",
  explanation: "Ethene forms ethyl hydrogen sulphate with concentrated H₂SO₄; hydrolysis on warming gives ethanol."
},

// 1991 source question 45
{
  id: 364, year: 1991,
  question: "One of the advantages of detergents over soap is that detergents.",
  options: {
    A: "are easier to manufacture",
    B: "foam more than soap",
    C: "form soluble salts with hard water",
    D: "are able to deter germ more than soap"
  },
  answer: "C",
  explanation: "Detergents form soluble calcium and magnesium salts, so they remain effective in hard water unlike ordinary soaps."
},

// 1991 source question 46
{
  id: 365, year: 1991,
  question: "CH₃CH₂CHCH₃  alc. KOH → CH₃CH=CHCH₃ + CH₃CH₂CH=CH₂. The above reaction is an example of",
  options: {
    A: "dehydration",
    B: "dehydrohalogenation",
    C: "neutralization",
    D: "a fission reaction"
  },
  answer: "B",
  explanation: "Alcoholic KOH removes H and halogen from a haloalkane to form an alkene; this is dehydrohalogenation."
},

// 1991 source question 47
{
  id: 366, year: 1991,
  question: "A certain liquid has a high boiling point. It is viscous, non-toxic, miscible with water to be hygroscopic. This liquid is most likely to be.",
  options: {
    A: "CH₃CH₂CH₂CH₂OH",
    B: "CH₃CH₂OHCH₃",
    C: "CH₃CH₂CHOHCH₃",
    E: "CH₃OHCHOCH₂OH"
  },
  answer: "E",
  explanation: "Option E represents glycerol, a polyhydric alcohol that is viscous, highly water-miscible and hygroscopic."
},

// 1991 source question 48
{
  id: 367, year: 1991,
  question: "The compound CH₃–CH(CH₃)–CH₂Cl is known as",
  options: {
    A: "1-chloro-2-methylbutane",
    B: "1-chloro-2-methylpropane",
    C: "2-chloromethylethane",
    D: "1-chloro-2,2-dimethylethane"
  },
  answer: "B",
  explanation: "The longest chain containing the carbon bonded to chlorine is propane; chlorine is at C-1 and methyl at C-2."
},

// 1991 source question 49
{
  id: 368, year: 1991,
  question: "Which of the following statements is TRUE of the complete hydrolysis of a glyceride by sodium hydroxide?",
  options: {
    A: "3 moles of NaOH are required for each mole of glyceride",
    B: "3 moles of glycerol are produced",
    C: "only one mole of soap is formed",
    D: "Concentrated H₂SO₄ is essential for the completion of the reaction"
  },
  answer: "A",
  explanation: "A triglyceride contains three ester groups, so complete saponification requires 3 mol NaOH per mol glyceride and produces 1 mol glycerol plus 3 mol soap."
},

// 1991 source question 50
{
  id: 369, year: 1991,
  question: "Which of the following are the products of the reaction between CH₃COOH and Cl₂ in sunlight?",
  options: {
    A: "ClCH₂COOH + HCl",
    B: "CH₃COCl + HOCl",
    C: "CH₃COOCl + HCl",
    D: "CH₃COCl + H₂O"
  },
  answer: "A",
  explanation: "In sunlight, chlorine substitutes for the alpha hydrogen of ethanoic acid, giving chloroethanoic acid and HCl."
},
    {
    id: 370,
    year: 1992,
    question: "A mixture of iodine and sulphur crystals can be separated by treatment with",
    options: {
      A: "water",
      B: "carbon (IV) oxide",
      C: "ethanoic acid",
      D: "carbon (IV) sulphide"
    },
    answer: "D",
    explanation: "Iodine dissolves in carbon (IV) sulphide (carbon disulfide, CS2) while sulphur remains insoluble, allowing separation."
  },
  {
    id: 371,
    year: 1992,
    question: "Sieving is a technique used to separate mixtures containing solid particles of",
    options: {
      A: "different sizes",
      B: "different densities",
      C: "different solubility",
      D: "same sizes"
    },
    answer: "A",
    explanation: "Sieving separates solid particles based on differences in particle sizes through a mesh."
  },
  {
    id: 372,
    year: 1992,
    question: "Which of the following compounds is composed of Al, Si, O and H?",
    options: {
      A: "Epsom salt",
      B: "Limestone",
      C: "Clay",
      D: "Urea"
    },
    answer: "C",
    explanation: "Clay consists mainly of hydrated aluminium silicates, containing Al, Si, O, and H."
  },
  {
    id: 373,
    year: 1992,
    question: "50 cm3 of carbon (II) oxide was mixed with 150 cm3 of air containing 20% oxygen by volume. Which of the reactants was in excess and by how much?",
    options: {
      A: "Carbon (II) oxide by 20 cm3",
      B: "Oxygen by 5 cm3",
      C: "Carbon (II) oxide by 10 cm3",
      D: "Oxygen by 10 cm3"
    },
    answer: "B",
    explanation: "Volume of O2 present = 20% of 150 cm3 = 30 cm3. Reaction: 2CO + O2 -> 2CO2. 50 cm3 CO requires 25 cm3 O2. Excess O2 = 30 cm3 - 25 cm3 = 5 cm3."
  },
  {
    id: 374,
    year: 1992,
    question: "How many moles of HCl will be required to react completely with a mixture containing 0.4 moles of Na2CO3 and 0.2 moles of NaHCO3?",
    options: {
      A: "0.6",
      B: "0.8",
      C: "1.0",
      D: "1.2"
    },
    answer: "C",
    explanation: "Na2CO3 requires 2 moles of HCl per mole (0.4 * 2 = 0.8 mol). NaHCO3 requires 1 mole of HCl per mole (0.2 * 1 = 0.2 mol). Total HCl = 0.8 + 0.2 = 1.0 mole."
  },
  {
    id: 375,
    year: 1992,
    question: "Which of the following aqueous solutions will have the highest boiling point?",
    options: {
      A: "0.1 M NaCl",
      B: "0.1 M Na2SO4",
      C: "0.1 M C6H12O6",
      D: "0.1 M Al(NO3)3"
    },
    answer: "D",
    explanation: "Boiling point elevation depends on particle concentration. 0.1 M Al(NO3)3 dissociates into 4 ions per formula unit, giving the highest total particle concentration (0.4 M)."
  },
  {
    id: 376,
    year: 1992,
    question: "A gas exerts a pressure of 0.8 to 1.0 standard atmospheric pressure at a given temperature. What will be the new pressure if the volume is halved at the same temperature?",
    options: {
      A: "0.4 atm",
      B: "0.5 atm",
      C: "1.6 atm",
      D: "2.0 atm"
    },
    answer: "D",
    explanation: "By Boyle's law (P1V1 = P2V2), halving the volume doubles the pressure. At standard pressure (1.0 atm), halving volume gives 2.0 atm."
  },
  {
    id: 377,
    year: 1992,
    question: "As the concentration of an electrolyte reduces, the conductivity",
    options: {
      A: "decreases",
      B: "increases",
      C: "remains constant",
      D: "first increases then decreases"
    },
    answer: "A",
    explanation: "Conductivity decreases with dilution because fewer ions are present per unit volume to carry electrical current."
  },
  {
    id: 378,
    year: 1992,
    question: "An element X has two isotopes 65X and 63X in the ratio 1:3. What is the relative atomic mass of X?",
    options: {
      A: "63.5",
      B: "64.0",
      C: "64.5",
      D: "65.0"
    },
    answer: "A",
    explanation: "Relative atomic mass = [(1 * 65) + (3 * 63)] / 4 = (65 + 189) / 4 = 254 / 4 = 63.5."
  },
  {
    id: 379,
    year: 1992,
    question: "The electron configuration 1s2 2s2 2p6 3s2 3p1 represents an element in Group",
    options: {
      A: "I",
      B: "II",
      C: "III",
      D: "IV"
    },
    answer: "C",
    explanation: "The outermost shell (n=3) has 2 + 1 = 3 valence electrons, placing the element in Group III."
  },
  {
    id: 380,
    year: 1992,
    question: "Which of the following elements has the highest ionization energy?",
    options: {
      A: "Sodium",
      B: "Magnesium",
      C: "Aluminium",
      D: "Silicon"
    },
    answer: "D",
    explanation: "Ionization energy generally increases across a period from left to right due to increasing nuclear charge. Silicon is furthest right."
  },
  {
    id: 381,
    year: 1992,
    question: "A radioactive isotope has a half-life of 3 days. What fraction of the original sample will remain after 12 days?",
    options: {
      A: "1/4",
      B: "1/8",
      C: "1/16",
      D: "1/32"
    },
    answer: "C",
    explanation: "Number of half-lives = 12 / 3 = 4. Remaining fraction = (1/2)^4 = 1/16."
  },
  {
    id: 382,
    year: 1992,
    question: "Which of the following compounds exhibits ionic bonding?",
    options: {
      A: "CH4",
      B: "HCl",
      C: "NaCl",
      D: "CO2"
    },
    answer: "C",
    explanation: "NaCl is formed between a electropositive metal (Na) and an electronegative non-metal (Cl) via electron transfer, creating ionic bonds."
  },
  {
    id: 383,
    year: 1992,
    question: "Permanent hardness of water can be removed by adding",
    options: {
      A: "slaked lime",
      B: "washing soda",
      C: "boiling",
      D: "alum"
    },
    answer: "B",
    explanation: "Washing soda (Na2CO3) precipitates soluble Ca2+ and Mg2+ ions as insoluble carbonates, removing permanent hardness."
  },
  {
    id: 384,
    year: 1992,
    question: "Which of the following gases is collected by upward displacement of air?",
    options: {
      A: "Ammonia",
      B: "Carbon (IV) oxide",
      C: "Hydrogen",
      D: "Chlorine"
    },
    answer: "B",
    explanation: "Carbon (IV) oxide (CO2) is denser than air, so it is collected by downward delivery / upward displacement of air."
  },
  {
    id: 385,
    year: 1992,
    question: "The PH of a 0.001 M solution of HCl is",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    explanation: "[H+] = 0.001 M = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3."
  },
  {
    id: 386,
    year: 1992,
    question: "An example of an acid salt is",
    options: {
      A: "Na2SO4",
      B: "NaHSO4",
      C: "NaCl",
      D: "CH3COONa"
    },
    answer: "B",
    explanation: "NaHSO4 contains replaceable hydrogen ions from the partial neutralization of a dibasic acid."
  },
  {
    id: 387,
    year: 1992,
    question: "During the electrolysis of dilute sulphuric acid using platinum electrodes, the gas evolved at the anode is",
    options: {
      A: "hydrogen",
      B: "oxygen",
      C: "sulphur (IV) oxide",
      D: "sulphur (VI) oxide"
    },
    answer: "B",
    explanation: "At the anode, OH- ions are preferentially discharged over SO4^2- ions to produce oxygen gas."
  },
  {
    id: 388,
    year: 1992,
    question: "How many Faraday of electricity are required to liberate 1 mole of copper from Cu2+ ions?",
    options: {
      A: "1 F",
      B: "2 F",
      C: "3 F",
      D: "4 F"
    },
    answer: "B",
    explanation: "The reduction half-equation is Cu2+ + 2e- -> Cu. Deposition of 1 mole of Cu requires 2 moles of electrons, which equals 2 Faradays."
  },
  {
    id: 389,
    year: 1992,
    question: "Which of the following is an endothermic reaction?",
    options: {
      A: "Combustion of methane",
      B: "Neutralization of an acid by a base",
      C: "Thermal decomposition of calcium carbonate",
      D: "Reaction of sodium with water"
    },
    answer: "C",
    explanation: "Thermal decomposition requires heat energy input to break chemical bonds, making it endothermic."
  },
  {
    id: 390,
    year: 1992,
    question: "A catalyst speeds up a chemical reaction by",
    options: {
      A: "increasing the activation energy",
      B: "lowering the activation energy",
      C: "increasing the yield of products",
      D: "increasing enthalpy change"
    },
    answer: "B",
    explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy."
  },
  {
    id: 391,
    year: 1992,
    question: "In the chemical reaction N2(g) + 3H2(g) <=> 2NH3(g), Delta H = -92 kJ, an increase in temperature will",
    options: {
      A: "increase the yield of ammonia",
      B: "decrease the yield of ammonia",
      C: "have no effect on the equilibrium position",
      D: "increase the rate of forward reaction only"
    },
    answer: "B",
    explanation: "Since the forward reaction is exothermic, increasing temperature shifts the equilibrium to the left, decreasing ammonia yield."
  },
  {
    id: 392,
    year: 1992,
    question: "Which of the following oxides is amphoteric?",
    options: {
      A: "CaO",
      B: "CuO",
      C: "Al2O3",
      D: "SO2"
    },
    answer: "C",
    explanation: "Aluminium oxide (Al2O3) reacts with both acids and bases to form salt and water, so it is amphoteric."
  },
  {
    id: 393,
    year: 1992,
    question: "The gas that turns acidified K2Cr2O7 solution from orange to green is",
    options: {
      A: "CO2",
      B: "SO2",
      C: "NO2",
      D: "NH3"
    },
    answer: "B",
    explanation: "Sulphur (IV) oxide (SO2) reduces orange dichromate ions (Cr2O7^2-) to green chromium ions (Cr3+)."
  },
  {
    id: 394,
    year: 1992,
    question: "Ammonia gas is dried using",
    options: {
      A: "concentrated H2SO4",
      B: "anhydrous CaCl2",
      C: "quicklime (CaO)",
      D: "P4O10"
    },
    answer: "C",
    explanation: "Quicklime (CaO) is a basic drying agent that does not react with basic ammonia gas."
  },
  {
    id: 395,
    year: 1992,
    question: "Which of the following metals is extracted by electrolysis of its molten chloride?",
    options: {
      A: "Iron",
      B: "Copper",
      C: "Sodium",
      D: "Lead"
    },
    answer: "C",
    explanation: "Sodium is highly reactive and extracted via electrolysis of molten NaCl in the Down's cell."
  },
  {
    id: 396,
    year: 1992,
    question: "Brass is an alloy of",
    options: {
      A: "copper and zinc",
      B: "copper and tin",
      C: "lead and tin",
      D: "iron and carbon"
    },
    answer: "A",
    explanation: "Brass is composed primarily of copper and zinc."
  },
  {
    id: 397,
    year: 1992,
    question: "The major raw material used in the Solvay process for the manufacture of sodium carbonate is",
    options: {
      A: "sodium hydroxide",
      B: "sodium chloride",
      C: "sodium sulphate",
      D: "sodium nitrate"
    },
    answer: "B",
    explanation: "Brine (concentrated sodium chloride solution) is the primary starting raw material in the Solvay process."
  },
  {
    id: 398,
    year: 1992,
    question: "The IUPAC name of CH3CH2CH(CH3)CH2OH is",
    options: {
      A: "2-methylbutan-1-ol",
      B: "3-methylbutan-1-ol",
      C: "2-methylbutan-4-ol",
      D: "3-methylbutan-2-ol"
    },
    answer: "A",
    explanation: "Numbering from the carbon attached to -OH: C1 is -CH2OH, C2 has a methyl group, giving 2-methylbutan-1-ol."
  },
  {
    id: 399,
    year: 1992,
    question: "The general formula for the alkanoic acid homologous series is",
    options: {
      A: "CnH2n+1OH",
      B: "CnH2n+1COOH",
      C: "CnH2n+1CHO",
      D: "CnH2nO"
    },
    answer: "B",
    explanation: "Alkanoic acids have an alkyl chain bonded to a carboxyl group, given by CnH2n+1COOH."
  },
  {
    id: 400,
    year: 1992,
    question: "Which of the following hydrocarbons will decolorize bromine water?",
    options: {
      A: "Ethane",
      B: "Propane",
      C: "Ethene",
      D: "Methane"
    },
    answer: "C",
    explanation: "Ethene is an unsaturated hydrocarbon containing a double bond, so it undergoes addition with bromine water to decolorize it."
  },
  {
    id: 401,
    year: 1992,
    question: "The structural formula of ethanoic acid is",
    options: {
      A: "HCOOH",
      B: "CH3COOH",
      C: "C2H5COOH",
      D: "CH3CHO"
    },
    answer: "B",
    explanation: "Ethanoic acid contains two carbons with the formula CH3COOH."
  },
  {
    id: 402,
    year: 1992,
    question: "When ethanol reacts with ethanoic acid in the presence of concentrated H2SO4, the product formed is",
    options: {
      A: "ethyl ethanoate",
      B: "methyl ethanoate",
      C: "ethoxyethane",
      D: "ethyl methanoate"
    },
    answer: "A",
    explanation: "Esterification of ethanol and ethanoic acid yields ethyl ethanoate and water."
  },
  {
    id: 403,
    year: 1992,
    question: "Saponification of fats and oils yields soap and",
    options: {
      A: "ethanol",
      B: "glycerol",
      C: "glycol",
      D: "propanol"
    },
    answer: "B",
    explanation: "Alkaline hydrolysis of triacylglycerols (fats/oils) yields fatty acid salts (soap) and glycerol."
  },
  {
    id: 404,
    year: 1992,
    question: "The monomer unit of natural rubber is",
    options: {
      A: "isoprene",
      B: "ethene",
      C: "styrene",
      D: "vinyl chloride"
    },
    answer: "A",
    explanation: "Natural rubber is a polymer composed of 2-methylbuta-1,3-diene (isoprene) units."
  },
  {
    id: 405,
    year: 1992,
    question: "Destructive distillation of coal yields coal tar, ammoniacal liquor, coal gas and",
    options: {
      A: "coke",
      B: "charcoal",
      C: "carbon black",
      D: "soot"
    },
    answer: "A",
    explanation: "Heating coal in the absence of air produces coke as the solid residue along with volatile by-products."
  },
  {
    id: 406,
    year: 1992,
    question: "Which of the following organic compounds will give a positive silver mirror test with Tollens' reagent?",
    options: {
      A: "Propanone",
      B: "Propanal",
      C: "Ethanol",
      D: "Ethanoic acid"
    },
    answer: "B",
    explanation: "Aldehydes like propanal are easily oxidized and reduce Tollens' reagent to metallic silver."
  },
  {
    id: 407,
    year: 1992,
    question: "Fermentation of glucose using yeast produces ethanol and",
    options: {
      A: "oxygen",
      B: "carbon (IV) oxide",
      C: "carbon (II) oxide",
      D: "hydrogen"
    },
    answer: "B",
    explanation: "Reaction: C6H12O6 -> 2C2H5OH + 2CO2."
  },
  {
    id: 408,
    year: 1992,
    question: "The gas produced when calcium carbide reacts with water is",
    options: {
      A: "ethene",
      B: "ethyne",
      C: "ethane",
      D: "methane"
    },
    answer: "B",
    explanation: "CaC2 + 2H2O -> Ca(OH)2 + C2H2 (ethyne)."
  },
  {
    id: 409,
    year: 1992,
    question: "An element with electronic configuration 1s2 2s2 2p6 3s2 is a",
    options: {
      A: "non-metal",
      B: "metal",
      C: "noble gas",
      D: "metalloid"
    },
    answer: "B",
    explanation: "The element has 2 valence electrons in the outer shell (Magnesium) and behaves as a reactive metal."
  },
  {
    id: 410,
    year: 1992,
    question: "Which of the following salt solutions will turn red litmus paper blue?",
    options: {
      A: "NaCl",
      B: "Na2CO3",
      C: "NH4Cl",
      D: "K2SO4"
    },
    answer: "B",
    explanation: "Na2CO3 is formed from a strong base and weak acid, hydrolyzing in water to give an alkaline solution."
  },
  {
    id: 411,
    year: 1992,
    question: "The formula of iron (III) tetraoxosulphate (VI) is",
    options: {
      A: "FeSO4",
      B: "Fe2(SO4)3",
      C: "Fe3(SO4)2",
      D: "Fe2SO4"
    },
    answer: "B",
    explanation: "Iron has oxidation state +3 (Fe3+) and tetraoxosulphate is SO4^2-, giving Fe2(SO4)3."
  },
  {
    id: 412,
    year: 1992,
    question: "Which of the following halogens is a liquid at room temperature?",
    options: {
      A: "Fluorine",
      B: "Chlorine",
      C: "Bromine",
      D: "Iodine"
    },
    answer: "C",
    explanation: "Bromine exists as a reddish-brown liquid under standard conditions."
  },
  {
    id: 413,
    year: 1992,
    question: "The oxidation state of manganese in KMnO4 is",
    options: {
      A: "+2",
      B: "+4",
      C: "+6",
      D: "+7"
    },
    answer: "D",
    explanation: "1(+1) + Mn + 4(-2) = 0 => Mn - 7 = 0 => Mn = +7."
  },
  {
    id: 414,
    year: 1992,
    question: "Chlorine gas reacts with cold dilute sodium hydroxide solution to give",
    options: {
      A: "NaCl and NaClO3",
      B: "NaCl and NaClO",
      C: "NaClO and H2O only",
      D: "NaCl and H2O only"
    },
    answer: "B",
    explanation: "Reaction: Cl2 + 2NaOH -> NaCl + NaClO + H2O."
  },
  {
    id: 415,
    year: 1992,
    question: "Which of the following is an example of a physical change?",
    options: {
      A: "Rusting of iron",
      B: "Burning of wood",
      C: "Melting of ice",
      D: "Fermentation of glucose"
    },
    answer: "C",
    explanation: "Melting of ice is a phase change from solid water to liquid water with no change in chemical composition."
  },
  {
    id: 416,
    year: 1993,
    question: "Which of the following substances is a mixture?",
    options: {
      A: "Sulphur powder",
      B: "Bronze",
      C: "Distilled water",
      D: "Ethanol"
    },
    answer: "B",
    explanation: "Bronze is an alloy of copper and tin, making it a solid mixture. Sulphur, distilled water, and ethanol are pure substances."
  },
  {
    id: 417,
    year: 1993,
    question: "A balanced chemical equation obeys the law of",
    options: {
      A: "conservation of mass",
      B: "definite proportions",
      C: "multiple proportions",
      D: "conservation of energy"
    },
    answer: "A",
    explanation: "A balanced chemical equation ensures that the number of atoms of each element is the same before and after the reaction, obeying the law of conservation of mass."
  },
  {
    id: 418,
    year: 1993,
    question: "How many moles of oxygen molecules would be produced from the decomposition of 2.50 moles of potassium trioxochlorate (V)?",
    options: {
      A: "2.50",
      B: "3.50",
      C: "3.75",
      D: "7.50"
    },
    answer: "C",
    explanation: "Reaction: 2KClO3 -> 2KCl + 3O2. 2 moles of KClO3 yield 3 moles of O2. Therefore, 2.50 moles of KClO3 yield (2.50 * 3) / 2 = 3.75 moles of O2."
  },
  {
    id: 419,
    year: 1993,
    question: "For iodine crystals to sublime on heating, the molecules must acquire energy that is",
    options: {
      A: "less than the forces of attraction in the solid",
      B: "equal to the forces of attraction in the solid",
      C: "necessary to melt the solid",
      D: "greater than the forces of attraction in both the solid and liquid phases"
    },
    answer: "D",
    explanation: "Sublimation involves bypassing the liquid phase entirely, meaning the thermal energy supplied must overcome intermolecular forces of attraction directly into the gaseous state."
  },
  {
    id: 420,
    year: 1993,
    question: "An element, E, has the electronic configuration 1s2 2s2 2p6 3s2 3p3. The reaction of E with a halogen X can give",
    options: {
      A: "EX3 and EX5",
      B: "EX3 only",
      C: "EX5 only",
      D: "EX2 and EX3"
    },
    answer: "A",
    explanation: "Element E has 15 electrons (Phosphorus). Phosphorus can form both trihalides (PX3) and pentahalides (PX5) using its available d-orbitals."
  },
  {
    id: 421,
    year: 1993,
    question: "Two atoms represented as 235_92 U and 238_92 U are",
    options: {
      A: "isomers",
      B: "allotropes",
      C: "isotopes",
      D: "anomers"
    },
    answer: "C",
    explanation: "Atoms of the same element having the same atomic number (92) but different mass numbers (235 and 238) are isotopes."
  },
  {
    id: 422,
    year: 1993,
    question: "As the difference in electronegativity between bonded atoms increases, the polarity of the bond",
    options: {
      A: "decreases",
      B: "increases",
      C: "remains unchanged",
      D: "reduces to zero"
    },
    answer: "B",
    explanation: "A greater electronegativity difference leads to greater unequal sharing of electrons, thereby increasing bond polarity."
  },
  {
    id: 423,
    year: 1993,
    question: "Which group of elements forms hydrides that are pyramidal in structure?",
    options: {
      A: "Group III",
      B: "Group IV",
      C: "Group V",
      D: "Group VI"
    },
    answer: "C",
    explanation: "Group V elements (like Nitrogen in NH3) have 5 valence electrons, forming 3 covalent bonds and 1 lone pair, which gives a trigonal pyramidal shape."
  },
  {
    id: 424,
    year: 1993,
    question: "Water has a unusually high boiling point despite its low molecular mass because of the presence of",
    options: {
      A: "hydrogen bonding",
      B: "covalent bonding",
      C: "ionic bonding",
      D: "metallic bonding"
    },
    answer: "A",
    explanation: "Intermolecular hydrogen bonding between water molecules requires significant energy to break, leading to a high boiling point."
  },
  {
    id: 425,
    year: 1993,
    question: "Argon is used in gas-filled electric lamps because it helps to",
    options: {
      A: "prevent reduction of the lamp filament",
      B: "prevent oxidation of the lamp filament",
      C: "make the lamp filament glow brightly",
      D: "keep the atmosphere in the lamp reactive"
    },
    answer: "B",
    explanation: "Argon is an inert noble gas that prevents the tungsten filament from oxidizing at high operating temperatures."
  },
  {
    id: 426,
    year: 1993,
    question: "A gas occupies 1.50 dm3 at 25 °C and 1 atm. What volume will it occupy at 100 °C at the same pressure?",
    options: {
      A: "1.88 dm3",
      B: "6.00 dm3",
      C: "18.80 dm3",
      D: "60.00 dm3"
    },
    answer: "A",
    explanation: "By Charles's Law (V1/T1 = V2/T2): T1 = 298 K, T2 = 373 K. V2 = 1.50 * (373 / 298) = 1.88 dm3."
  },
  {
    id: 427,
    year: 1993,
    question: "Sodium carbonate decahydrate loses water of crystallization on exposure to air. This phenomenon is called",
    options: {
      A: "Deliquescence",
      B: "Hygroscopy",
      C: "Effervescence",
      D: "Efflorescence"
    },
    answer: "D",
    explanation: "Efflorescence is the loss of water of crystallization from a hydrated salt to the atmosphere."
  },
  {
    id: 428,
    year: 1993,
    question: "In the reaction NH3 + H3O+ -> NH4+ + H2O, H3O+ acts as",
    options: {
      A: "an oxidizing agent",
      B: "a reducing agent",
      C: "an acid",
      D: "a base"
    },
    answer: "C",
    explanation: "H3O+ donates a proton (H+) to NH3, so according to the Brønsted-Lowry theory, it acts as an acid."
  },
  {
    id: 429,
    year: 1993,
    question: "What is the molar concentration of a solution containing 4.0 g of sodium hydroxide in 250 cm3 of solution?",
    options: {
      A: "0.40 mol dm-3",
      B: "0.10 mol dm-3",
      C: "0.04 mol dm-3",
      D: "0.02 mol dm-3"
    },
    answer: "A",
    explanation: "Molar mass of NaOH = 40 g/mol. Moles of NaOH = 4.0 / 40 = 0.1 mol. Volume = 0.25 dm3. Molarity = 0.1 / 0.25 = 0.40 mol dm-3."
  },
  {
    id: 430,
    year: 1993,
    question: "The oxidation states of chlorine in HOCl, HClO3 and HClO4 are respectively",
    options: {
      A: "-1, +5 and +7",
      B: "-1, -5 and +7",
      C: "+1, +3 and +4",
      D: "+1, +5 and +7"
    },
    answer: "D",
    explanation: "In HOCl: 1 + Cl - 2 = 0 => Cl = +1. In HClO3: 1 + Cl - 6 = 0 => Cl = +5. In HClO4: 1 + Cl - 8 = 0 => Cl = +7."
  },
  {
    id: 431,
    year: 1993,
    question: "Which of the following metals is the most powerful reducing agent based on standard potentials? Cu (+0.34V), Fe (-0.44V), Ba (-2.90V), Zn (-0.76V)",
    options: {
      A: "Cu",
      B: "Fe",
      C: "Ba",
      D: "Zn"
    },
    answer: "C",
    explanation: "Barium has the most negative electrode potential (-2.90V), meaning it loses electrons most readily and is the strongest reducing agent."
  },
  {
    id: 432,
    year: 1993,
    question: "Standard enthalpies of formation of CO2(g), H2O(g) and CO(g) are -394, -242 and -110 kJ mol-1. What is ΔH for CO(g) + H2O(g) -> CO2(g) + H2(g)?",
    options: {
      A: "-42 kJ mol-1",
      B: "+42 kJ mol-1",
      C: "-262 kJ mol-1",
      D: "+262 kJ mol-1"
    },
    answer: "A",
    explanation: "ΔH = ΣΔHf(products) - ΣΔHf(reactants) = [-394 + 0] - [-110 + (-242)] = -394 - (-352) = -42 kJ mol-1."
  },
  {
    id: 433,
    year: 1993,
    question: "Addition of a catalyst to a chemical reaction at equilibrium",
    options: {
      A: "increases the yield of products",
      B: "lowers the activation energy for both forward and reverse reactions",
      C: "shifts the equilibrium position to the right",
      D: "increases the equilibrium constant"
    },
    answer: "B",
    explanation: "A catalyst lowers the activation energy of both forward and reverse reactions equally without shifting the equilibrium position or affecting the yield."
  },
  {
    id: 434,
    year: 1993,
    question: "Which salt decomposes on heating to produce its metal, nitrogen (IV) oxide, and oxygen?",
    options: {
      A: "Sodium nitrate",
      B: "Silver nitrate",
      C: "Calcium nitrate",
      D: "Potassium nitrate"
    },
    answer: "B",
    explanation: "Silver nitrate decomposes according to: 2AgNO3(s) -> 2Ag(s) + 2NO2(g) + O2(g)."
  },
  {
    id: 435,
    year: 1993,
    question: "The alkanol obtained as a by-product during the manufacture of soap is",
    options: {
      A: "ethanol",
      B: "glycerol",
      C: "methanol",
      D: "glycol"
    },
    answer: "B",
    explanation: "Saponification of fats/oils yields soap (salts of fatty acids) and propane-1,2,3-triol (glycerol)."
  },
  {
    id: 436,
    year: 1993,
    question: "The high temperature flame used by welders for cutting and joining metals is",
    options: {
      A: "butane gas flame",
      B: "acetylene flame",
      C: "oxy-acetylene flame",
      D: "oxygen flame"
    },
    answer: "C",
    explanation: "An oxy-acetylene flame burns ethyne (acetylene) in pure oxygen to produce temperatures exceeding 3000 °C."
  },
  {
    id: 437,
    year: 1993,
    question: "Consecutive members of an alkane homologous series differ in molecular formula by",
    options: {
      A: "CH",
      B: "CH2",
      C: "CH3",
      D: "C2H2"
    },
    answer: "B",
    explanation: "Each member of a homologous series differs from the next adjacent member by a -CH2- (methylene) group."
  },
  {
    id: 438,
    year: 1993,
    question: "The three-dimensional arrangement of bonds in a methane molecule is",
    options: {
      A: "hexagonal",
      B: "trigonal",
      C: "linear",
      D: "tetrahedral"
    },
    answer: "D",
    explanation: "Methane (CH4) has sp3 hybridization around the central carbon atom, giving it a regular tetrahedral shape with bond angles of 109.5°."
  },
  {
    id: 439,
    year: 1993,
    question: "What is the correct IUPAC name for CH3-CH(CH3)-CH=CH2?",
    options: {
      A: "2-methylbut-1-ene",
      B: "3-methylbut-1-ene",
      C: "2-methylbut-3-ene",
      D: "3-methylbut-2-ene"
    },
    answer: "B",
    explanation: "Numbering starts from the double bond end: C1=C2-C(methyl)3-C4 gives 3-methylbut-1-ene."
  },
  {
    id: 440,
    year: 1993,
    question: "How many structural isomers exist for the molecular formula C3H6Br2?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    explanation: "The 4 isomers are 1,1-dibromopropane, 1,2-dibromopropane, 1,3-dibromopropane, and 2,2-dibromopropane."
  },
  {
    id: 441,
    year: 1993,
    question: "A piece of burning sulphur continues to burn in a gas jar of oxygen to give fumes that dissolve in water to form",
    options: {
      A: "sulphur (VI) oxide",
      B: "tetraoxosulphate (VI) acid",
      C: "trioxosulphate (IV) acid",
      D: "hydrogen sulphide"
    },
    answer: "C",
    explanation: "Sulphur burns in oxygen to yield SO2 gas. SO2 dissolved in water produces sulphurous acid / trioxosulphate (IV) acid (H2SO3)."
  },
  {
    id: 442,
    year: 1993,
    question: "During the electrolysis of molten sodium chloride, which process takes place at the anode?",
    options: {
      A: "Sodium ions are reduced",
      B: "Sodium ions are oxidized",
      C: "Chloride ions are reduced",
      D: "Chloride ions are oxidized"
    },
    answer: "D",
    explanation: "At the anode (positive electrode), oxidation occurs. Chloride ions lose electrons to form chlorine gas (2Cl- -> Cl2 + 2e-)."
  },
  {
    id: 443,
    year: 1993,
    question: "An element is strongly electronegative if it has a high tendency to",
    options: {
      A: "exist in the gaseous form",
      B: "lose electrons",
      C: "gain electrons",
      D: "form metallic bonds"
    },
    answer: "C",
    explanation: "Electronegativity measures the ability of an atom in a molecule to attract shared electrons toward itself."
  },
  {
    id: 444,
    year: 1993,
    question: "Three solutions X, Y, and Z have pH values of 3.0, 5.0, and 9.0 respectively. Which statement is correct?",
    options: {
      A: "All three solutions are acidic",
      B: "Y is more acidic than X",
      C: "Z is an acidic solution",
      D: "X is the most acidic solution"
    },
    answer: "D",
    explanation: "Lower pH indicates a higher hydrogen ion concentration. pH 3.0 (X) is more acidic than pH 5.0 (Y) or pH 9.0 (Z)."
  },
  {
    id: 445,
    year: 1993,
    question: "Which of the following metals will react with dilute hydrochloric acid to liberate hydrogen gas?",
    options: {
      A: "Copper",
      B: "Silver",
      C: "Zinc",
      D: "Gold"
    },
    answer: "C",
    explanation: "Zinc is above hydrogen in the electrochemical series and displaces hydrogen from dilute acids, unlike Cu, Ag, or Au."
  },
  {
    id: 446,
    year: 1993,
    question: "A compound with the empirical formula CH2O has a relative molecular mass of 90. Its molecular formula is",
    options: {
      A: "C2H4O2",
      B: "C3H6O3",
      C: "C4H8O4",
      D: "C6H12O6"
    },
    answer: "B",
    explanation: "Empirical formula mass (CH2O) = 12 + 2(1) + 16 = 30. n = 90 / 30 = 3. Molecular formula = (CH2O)3 = C3H6O3."
  },
  {
    id: 447,
    year: 1993,
    question: "The chief ore of aluminium from which the metal is commercially extracted is",
    options: {
      A: "bauxite",
      B: "cryolite",
      C: "clay",
      D: "haematite"
    },
    answer: "A",
    explanation: "Bauxite (hydrated aluminium oxide, Al2O3.xH2O) is the principal ore used for commercial extraction of aluminium."
  },
  {
    id: 448,
    year: 1993,
    question: "Which of the following organic compounds is a major constituent of natural gas?",
    options: {
      A: "Ethene",
      B: "Methane",
      C: "Ethyne",
      D: "Propane"
    },
    answer: "B",
    explanation: "Methane (CH4) makes up about 80% to 90% of natural gas."
  },
  {
    id: 449,
    year: 1993,
    question: "Glucose and fructose are related to each other as",
    options: {
      A: "allotropes",
      B: "functional group isomers",
      C: "isotopes",
      D: "polymers"
    },
    answer: "B",
    explanation: "Glucose (an aldohexose) and fructose (a ketohexose) share the same molecular formula C6H12O6 but contain different functional groups."
  },
  {
    id: 450,
    year: 1993,
    question: "The reagent used to distinguish between an alkanol and an alkanoic acid is",
    options: {
      A: "litmus paper",
      B: "bromine water",
      C: "Fehling's solution",
      D: "Tollens' reagent"
    },
    answer: "A",
    explanation: "An alkanoic acid turns blue litmus paper red due to its acidic nature, whereas an alkanol is neutral and has no effect on litmus."
  },
  {
    id: 451,
    year: 1993,
    question: "The gas that gives a black precipitate when passed through lead (II) nitrate solution is",
    options: {
      A: "SO2",
      B: "H2S",
      C: "CO2",
      D: "NH3"
    },
    answer: "B",
    explanation: "Hydrogen sulphide (H2S) reacts with lead (II) nitrate solution to form a black precipitate of lead (II) sulphide (PbS)."
  },
  {
    id: 452,
    year: 1993,
    question: "Which of the following salts undergoes hydrolysis in water to give an acidic solution?",
    options: {
      A: "NaCl",
      B: "K2SO4",
      C: "NH4Cl",
      D: "CH3COONa"
    },
    answer: "C",
    explanation: "NH4Cl is a salt of a weak base (NH3) and strong acid (HCl). The ammonium ion hydrolyzes to generate H+ ions, making the solution acidic."
  },
  {
    id: 453,
    year: 1993,
    question: "The process of heating iron ore with coke and limestone in a blast furnace produces",
    options: {
      A: "wrought iron",
      B: "pig iron",
      C: "steel",
      D: "pure iron"
    },
    answer: "B",
    explanation: "The direct crude product obtained from the blast furnace is pig iron (or cast iron), containing high carbon impurity."
  },
  {
    id: 454,
    year: 1993,
    question: "Which of the following oxides is neutral to litmus?",
    options: {
      A: "CO2",
      B: "SO2",
      C: "CO",
      D: "NO2"
    },
    answer: "C",
    explanation: "Carbon (II) oxide (CO), along with H2O and N2O, is a neutral oxide and does not affect litmus."
  },
  {
    id: 455,
    year: 1993,
    question: "Calculations based on Gay-Lussac's law of combining volumes apply only to reactants and products that are",
    options: {
      A: "solids",
      B: "liquids",
      C: "gases",
      D: "solutions"
    },
    answer: "C",
    explanation: "Gay-Lussac's law specifically states that when gases react, they do so in volumes which bear simple whole-number ratios."
  },
  {
    id: 456,
    year: 1993,
    question: "Temporary hardness of water is caused by the presence of dissolved",
    options: {
      A: "Ca(HCO3)2",
      B: "CaSO4",
      C: "CaCl2",
      D: "MgSO4"
    },
    answer: "A",
    explanation: "Temporary hardness is caused by hydrogen trioxocarbonates (IV) of calcium and magnesium, which decompose on boiling."
  },
  {
    id: 457,
    year: 1993,
    question: "An element with atomic number 17 belongs to which period of the periodic table?",
    options: {
      A: "Period 1",
      B: "Period 2",
      C: "Period 3",
      D: "Period 4"
    },
    answer: "C",
    explanation: "Chlorine (Z=17) has electron configuration 2, 8, 7. Having 3 occupied electron shells places it in Period 3."
  },
  {
    id: 458,
    year: 1993,
    question: "Polymers which soften on heating and can be remolded repeatedly are called",
    options: {
      A: "thermosetting plastics",
      B: "thermoplastics",
      C: "elastomers",
      D: "synthetic fibers"
    },
    answer: "B",
    explanation: "Thermoplastics consist of linear or branched chains with weak intermolecular forces, allowing them to melt and be remolded on heating."
  },
  {
    id: 459,
    year: 1993,
    question: "The catalyst used in the Contact Process for manufacturing tetraoxosulphate (VI) acid is",
    options: {
      A: "Finely divided iron",
      B: "Vanadium (V) oxide",
      C: "Nickel",
      D: "Platinum-rhodium"
    },
    answer: "B",
    explanation: "Vanadium (V) oxide (V2O5) is the primary catalyst used to convert SO2 to SO3 in the Contact Process."
  },
  {
    id: 460,
    year: 1993,
    question: "Pure silicon used in semiconductor technology is obtained by",
    options: {
      A: "zone refining",
      B: "fractional distillation",
      C: "electrolysis",
      D: "chromatography"
    },
    answer: "A",
    explanation: "Zone refining is a technique used to produce ultra-pure elements like silicon and germanium for semiconductors."
  },
  {
    id: 461,
    year: 1993,
    question: "Which of the following organic compounds decolorizes acidified KMnO4 solution?",
    options: {
      A: "Ethane",
      B: "Propane",
      C: "Ethene",
      D: "Methane"
    },
    answer: "C",
    explanation: "Unsaturated hydrocarbons like ethene undergo oxidation with Baeyer's reagent (acidified/alkaline KMnO4), decolorizing it."
  },
  {
    id: 462,
    year: 1994,
    question: "A mixture of sand, ammonium chloride, and sodium chloride can best be separated by",
    options: [
      "A. dissolution, filtration, evaporation, and sublimation",
      "B. sublimation, dissolution, filtration, and evaporation",
      "C. filtration, sublimation, dissolution, and evaporation",
      "D. dissolution, sublimation, filtration, and evaporation"
    ],
    answer: "B. sublimation, dissolution, filtration, and evaporation",
    explanation: "Sublimation is carried out first on the dry mixture to separate ammonium chloride, which sublimes upon heating. Water is then added to dissolve sodium chloride, leaving sand behind. Filtration separates the insoluble sand, and evaporation of the filtrate yields sodium chloride."
  },
  {
    id: 463,
    year: 1994,
    question: "Which of the following physical properties decreases across a Period in the Periodic Table from left to right?",
    options: [
      "A. Ionization energy",
      "B. Atomic radius",
      "C. Electronegativity",
      "D. Electron affinity"
    ],
    answer: "B. Atomic radius",
    explanation: "Across a period from left to right, effective nuclear charge increases as protons are added to the nucleus without additional electron shielding. This stronger attractive force pulls the valence electrons closer, causing the atomic radius to decrease."
  },
  {
    id: 464,
    year: 1994,
    question: "Which of the following processes is a physical change?",
    options: [
      "A. Freezing of ice cream",
      "B. Dissolving calcium oxide in water",
      "C. Burning of kerosene",
      "D. Rusting of iron"
    ],
    answer: "A. Freezing of ice cream",
    explanation: "Freezing of ice cream is a physical change because no new chemical substance is formed and the process can be easily reversed by heating."
  },
  {
    id: 465,
    year: 1994,
    question: "An element with the ground state electronic configuration 1s2 2s2 2p6 3s2 3p1 is",
    options: [
      "A. Silicon",
      "B. Aluminium",
      "C. Magnesium",
      "D. Sodium"
    ],
    answer: "B. Aluminium",
    explanation: "Summing the electrons: 2 + 2 + 6 + 2 + 1 = 13. The element with atomic number 13 is Aluminium (Al)."
  },
  {
    id: 466,
    year: 1994,
    question: "An atom of an element X has an atomic number of 11 and a mass number of 23. The number of neutrons in the atom is",
    options: [
      "A. 11",
      "B. 12",
      "C. 23",
      "D. 34"
    ],
    answer: "B. 12",
    explanation: "Number of neutrons = Mass number - Atomic number = 23 - 11 = 12."
  },
  {
    id: 467,
    year: 1994,
    question: "A given volume of methane diffuses through a porous partition in 20 seconds. How long will it take the same volume of sulfur (IV) oxide to diffuse under the same conditions? [C = 12, H = 1, S = 32, O = 16]",
    options: [
      "A. 10 seconds",
      "B. 20 seconds",
      "C. 40 seconds",
      "D. 60 seconds"
    ],
    answer: "C. 40 seconds",
    explanation: "According to Graham's Law of Diffusion, t2 / t1 = sqrt(M2 / M1). Molar mass of CH4 = 12 + 4(1) = 16 g/mol; Molar mass of SO2 = 32 + 2(16) = 64 g/mol. Therefore, t(SO2) / 20 = sqrt(64 / 16) = sqrt(4) = 2. Thus, t(SO2) = 20 * 2 = 40 seconds."
  },
  {
    id: 468,
    year: 1994,
    question: "What is the percentage composition by mass of nitrogen in ammonium trioxonitrate (V)? [N = 14, H = 1, O = 16]",
    options: [
      "A. 17.5%",
      "B. 35.0%",
      "C. 28.0%",
      "D. 14.0%"
    ],
    answer: "B. 35.0%",
    explanation: "The formula is NH4NO3. Molar mass = 14 + 4(1) + 14 + 3(16) = 80 g/mol. Mass of nitrogen in one mole = 2 * 14 = 28 g. Percentage of N = (28 / 80) * 100 = 35.0%."
  },
  {
    id: 469,
    year: 1994,
    question: "According to Charles's law, the volume of a fixed mass of gas is directly proportional to its absolute temperature provided the",
    options: [
      "A. pressure remains constant",
      "B. volume remains constant",
      "C. density remains constant",
      "D. mass remains constant"
    ],
    answer: "A. pressure remains constant",
    explanation: "Charles's law states that the volume of a fixed mass of gas is directly proportional to its absolute temperature, provided the pressure remains constant (V ∝ T)."
  },
  {
    id: 470,
    year: 1994,
    question: "What mass of sodium hydroxide (NaOH) is contained in 250 cm3 of a 0.1 M solution? [Na = 23, O = 16, H = 1]",
    options: [
      "A. 1.0 g",
      "B. 2.0 g",
      "C. 4.0 g",
      "D. 10.0 g"
    ],
    answer: "A. 1.0 g",
    explanation: "Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol. Moles = Molarity * Volume in dm3 = 0.1 * (250 / 1000) = 0.025 mol. Mass = Moles * Molar mass = 0.025 * 40 = 1.0 g."
  },
  {
    id: 471,
    year: 1994,
    question: "Elements in the same group of the Periodic Table have the same number of",
    options: [
      "A. electron shells",
      "B. valence electrons",
      "C. neutrons",
      "D. protons"
    ],
    answer: "B. valence electrons",
    explanation: "Elements in the same group share similar chemical properties because they have the same number of valence electrons in their outermost energy level."
  },
  {
    id: 472,
    year: 1994,
    question: "A chemical bond formed by equal sharing of electrons between two atoms is described as",
    options: [
      "A. an ionic bond",
      "B. a dative covalent bond",
      "C. a covalent bond",
      "D. a metallic bond"
    ],
    answer: "C. a covalent bond",
    explanation: "A covalent bond is formed when two atoms share pairs of valence electrons equally to achieve a stable electronic configuration."
  },
  {
    id: 473,
    year: 1994,
    question: "A salt that absorbs moisture from the atmosphere and dissolves in it to form a solution is",
    options: [
      "A. efflorescent",
      "B. deliquescent",
      "C. hygroscopic",
      "D. fluorescent"
    ],
    answer: "B. deliquescent",
    explanation: "Deliquescent substances absorb moisture from the atmosphere to the extent that they dissolve in the absorbed water to form a liquid solution (e.g., NaOH, FeCl3, CaCl2)."
  },
  {
    id: 474,
    year: 1994,
    question: "What is the oxidation number of chromium in potassium heptaoxodichromate (VI), K2Cr2O7?",
    options: [
      "A. +3",
      "B. +5",
      "C. +6",
      "D. +7"
    ],
    answer: "C. +6",
    explanation: "In K2Cr2O7: 2(+1) + 2(Cr) + 7(-2) = 0 => 2 + 2Cr - 14 = 0 => 2Cr = +12 => Cr = +6."
  },
  {
    id: 475,
    year: 1994,
    question: "Which of the following gases turns lime water milky?",
    options: [
      "A. Carbon (II) oxide",
      "B. Carbon (IV) oxide",
      "C. Sulfur (IV) oxide",
      "D. Nitrogen (IV) oxide"
    ],
    answer: "B. Carbon (IV) oxide",
    explanation: "Carbon (IV) oxide (CO2) reacts with lime water (calcium hydroxide solution, Ca(OH)2) to precipitate insoluble calcium trioxocarbonate (IV) (CaCO3), giving the solution a milky appearance."
  },
  {
    id: 476,
    year: 1994,
    question: "The catalyst used in the Haber process for the industrial manufacture of ammonia is",
    options: [
      "A. vanadium (V) oxide",
      "B. finely divided iron",
      "C. nickel",
      "D. platinum"
    ],
    answer: "B. finely divided iron",
    explanation: "Finely divided iron (with promoters like Al2O3) is used as a catalyst in the Haber process (N2 + 3H2 ⇌ 2NH3) to speed up the attainment of equilibrium."
  },
  {
    id: 477,
    year: 1994,
    question: "Which of the following aqueous solutions turns red litmus paper blue?",
    options: [
      "A. Aqueous ammonia",
      "B. Aqueous sulfur (IV) oxide",
      "C. Hydrochloric acid",
      "D. Ethanoic acid"
    ],
    answer: "A. Aqueous ammonia",
    explanation: "Aqueous ammonia (NH3 + H2O ⇌ NH4+ + OH-) liberates hydroxide ions in water, forming an alkaline solution that turns red litmus paper blue."
  },
  {
    id: 478,
    year: 1994,
    question: "How many faradays of electricity are required to deposit 1 mole of copper from a solution of copper (II) tetraoxosulfate (VI)?",
    options: [
      "A. 1 F",
      "B. 2 F",
      "C. 3 F",
      "D. 4 F"
    ],
    answer: "B. 2 F",
    explanation: "Cathode equation: Cu2+ + 2e- -> Cu(s). Depositing 1 mole of Cu requires 2 moles of electrons, which corresponds to 2 Faradays (2 F) of electricity."
  },
  {
    id: 479,
    year: 1994,
    question: "Which of the following oxides is amphoteric?",
    options: [
      "A. CuO",
      "B. CaO",
      "C. Al2O3",
      "D. SO2"
    ],
    answer: "C. Al2O3",
    explanation: "Aluminium oxide (Al2O3) is amphoteric because it reacts with both acids (to form aluminium salts) and strong alkalis (to form aluminate salts)."
  },
  {
    id: 480,
    year: 1994,
    question: "The IUPAC name for CH3-CH2-CH(CH3)-CH3 is",
    options: [
      "A. 2-methylbutane",
      "B. 3-methylbutane",
      "C. pentane",
      "D. 2-methylpropane"
    ],
    answer: "A. 2-methylbutane",
    explanation: "The longest continuous carbon chain has 4 carbons (butane). Numbering from the end closer to the branch places the methyl substituent at position 2, giving 2-methylbutane."
  },
  {
    id: 481,
    year: 1994,
    question: "Which of the following hydrocarbons will decolorize bromine water in the dark?",
    options: [
      "A. Ethane",
      "B. Propane",
      "C. Ethene",
      "D. Methane"
    ],
    answer: "C. Ethene",
    explanation: "Ethene (C2H4) is an unsaturated hydrocarbon containing a carbon-carbon double bond, which rapidly undergoes addition reactions with bromine water, decolorizing it."
  },
  {
    id: 482,
    year: 1994,
    question: "The function of concentrated H2SO4 in the esterification reaction between ethanoic acid and ethanol is as a",
    options: [
      "A. dehydrating agent and catalyst",
      "B. oxidizing agent",
      "C. reducing agent",
      "D. solvent"
    ],
    answer: "A. dehydrating agent and catalyst",
    explanation: "Concentrated H2SO4 acts as a catalyst to increase the rate of esterification and as a dehydrating agent to remove water, shifting the reversible position of equilibrium to favour ester formation."
  },
  {
    id: 483,
    year: 1994,
    question: "Vegetable oil can be converted into solid fat (margarine) by",
    options: [
      "A. saponification",
      "B. hydrogenation",
      "C. esterification",
      "D. fermentation"
    ],
    answer: "B. hydrogenation",
    explanation: "Hydrogenation involves adding hydrogen gas across the double bonds of unsaturated vegetable oils using a nickel catalyst at elevated temperature (~180 °C) to form saturated solid fats."
  },
  {
    id: 484,
    year: 1994,
    question: "The process of breaking down long-chain hydrocarbons into smaller alkanes and alkenes using heat is known as",
    options: [
      "A. polymerization",
      "B. cracking",
      "C. reforming",
      "D. distillation"
    ],
    answer: "B. cracking",
    explanation: "Cracking is the thermal or catalytic breakdown of heavy petroleum fractions into lighter, lower-boiling short-chain alkanes and alkenes."
  },
  {
    id: 485,
    year: 1994,
    question: "Which of the following aqueous solutions will have a pH greater than 7?",
    options: [
      "A. NaCl",
      "B. Na2CO3",
      "C. NH4Cl",
      "D. HCl"
    ],
    answer: "B. Na2CO3",
    explanation: "Sodium trioxocarbonate (IV), Na2CO3, is a salt formed from a strong base (NaOH) and a weak acid (H2CO3). In water, it hydrolyzes to produce an excess of OH- ions, resulting in a basic solution (pH > 7)."
  },
  {
    id: 486,
    year: 1994,
    question: "What volume of 0.5 M HCl will react completely with 20 cm3 of 0.1 M Na2CO3 solution?",
    options: [
      "A. 4.0 cm3",
      "B. 8.0 cm3",
      "C. 10.0 cm3",
      "D. 20.0 cm3"
    ],
    answer: "B. 8.0 cm3",
    explanation: "Equation: 2 HCl + Na2CO3 -> 2 NaCl + H2O + CO2. Using Ca * Va / (Cb * Vb) = na / nb: (0.5 * Va) / (0.1 * 20) = 2 / 1 => 0.5 * Va = 4 => Va = 8.0 cm3."
  },
  {
    id: 487,
    year: 1994,
    question: "Which of the following is a secondary alkanol?",
    options: [
      "A. Ethanol",
      "B. Propan-1-ol",
      "C. Propan-2-ol",
      "D. 2-methylpropan-2-ol"
    ],
    answer: "C. Propan-2-ol",
    explanation: "Propan-2-ol, CH3-CH(OH)-CH3, is a secondary alkanol because the carbon atom bearing the -OH group is bonded to two other carbon atoms."
  },
  {
    id: 488,
    year: 1994,
    question: "Which of the following raw materials is used in the Solvay process for the manufacture of sodium trioxocarbonate (IV)?",
    options: [
      "A. Sodium chloride and limestone",
      "B. Sodium hydroxide and carbon (IV) oxide",
      "C. Calcium chloride and ammonia",
      "D. Sodium sulfate and coal"
    ],
    answer: "A. Sodium chloride and limestone",
    explanation: "The Solvay process uses brine (NaCl), limestone (CaCO3, source of CO2 and CaO), and ammonia (NH3) as primary raw materials to manufacture sodium trioxocarbonate (IV)."
  },
  {
    id: 489,
    year: 1994,
    question: "Chlorine gas reacts with cold, dilute sodium hydroxide solution to produce",
    options: [
      "A. NaCl, NaClO, and H2O",
      "B. NaCl, NaClO3, and H2O",
      "C. NaCl, HClO, and H2",
      "D. NaClO3 and H2O"
    ],
    answer: "A. NaCl, NaClO, and H2O",
    explanation: "Cold dilute NaOH reacts with Cl2 via disproportionation: 2 NaOH + Cl2 -> NaCl + NaClO + H2O, yielding sodium chloride, sodium oxochlorate (I), and water."
  },
  {
    id: 490,
    year: 1994,
    question: "The shape of a water molecule (H2O) is described as",
    options: [
      "A. linear",
      "B. tetrahedral",
      "C. V-shaped (bent)",
      "D. trigonal planar"
    ],
    answer: "C. V-shaped (bent)",
    explanation: "Water has 2 bonding pairs and 2 lone pairs of electrons around the central oxygen atom. Lone-pair-lone-pair repulsions distort the geometry into a V-shaped (bent) non-linear shape with a bond angle of approximately 104.5°."
  },
  {
    id: 491,
    year: 1994,
    question: "Calculate the quantity of electricity required to deposit 0.64 g of copper during the electrolysis of CuSO4 solution. [Cu = 64, 1 F = 96500 C mol-1]",
    options: [
      "A. 965 C",
      "B. 1930 C",
      "C. 3860 C",
      "D. 9650 C"
    ],
    answer: "B. 1930 C",
    explanation: "Moles of Cu = 0.64 / 64 = 0.01 mol. Equation: Cu2+ + 2e- -> Cu. Moles of e- required = 2 * 0.01 = 0.02 mol. Quantity of electricity Q = 0.02 * 96500 = 1930 C."
  },
  {
    id: 492,
    year: 1994,
    question: "Which of the following gases bleaches moist litmus paper?",
    options: [
      "A. Carbon (IV) oxide",
      "B. Sulfur (IV) oxide",
      "C. Chlorine",
      "D. Ammonia"
    ],
    answer: "C. Chlorine",
    explanation: "Chlorine gas dissolves in water to produce oxochloric (I) acid (HClO), which releases atomic oxygen that acts as a strong bleaching agent, turning moist blue litmus red and then bleaching it white."
  },
  {
    id: 493,
    year: 1994,
    question: "Temporary hardness of water is caused by the presence of dissolved",
    options: [
      "A. calcium hydrogen trioxocarbonate (IV)",
      "B. calcium tetraoxosulfate (VI)",
      "C. magnesium chloride",
      "D. calcium chloride"
    ],
    answer: "A. calcium hydrogen trioxocarbonate (IV)",
    explanation: "Temporary hardness is caused by dissolved calcium hydrogen trioxocarbonate (IV), Ca(HCO3)2, or magnesium hydrogen trioxocarbonate (IV), Mg(HCO3)2, which decompose upon heating."
  },
  {
    id: 494,
    year: 1994,
    question: "Temporary hardness of water can be removed by",
    options: [
      "A. boiling",
      "B. filtration",
      "C. addition of alum",
      "D. chlorination"
    ],
    answer: "A. boiling",
    explanation: "Boiling decomposes soluble Ca(HCO3)2 into insoluble CaCO3, water, and CO2 gas, precipitating out the calcium ions and removing temporary hardness."
  },
  {
    id: 495,
    year: 1994,
    question: "What is the main constituent of natural gas?",
    options: [
      "A. Ethane",
      "B. Methane",
      "C. Propane",
      "D. Butane"
    ],
    answer: "B. Methane",
    explanation: "Methane (CH4) is the primary component of natural gas, typically making up 80% to 95% of its total composition."
  },
  {
    id: 496,
    year: 1994,
    question: "Which of the following statements is true about a catalyst?",
    options: [
      "A. It alters the equilibrium constant of a reaction",
      "B. It increases the activation energy of the reaction",
      "C. It lowers the activation energy of the reaction",
      "D. It is permanently consumed in the reaction"
    ],
    answer: "C. It lowers the activation energy of the reaction",
    explanation: "A catalyst speeds up a reaction by providing an alternative reaction pathway with a lower activation energy, without affecting the position of equilibrium or being consumed."
  },
  {
    id: 497,
    year: 1994,
    question: "Stainless steel is an alloy consisting mainly of iron, carbon, and",
    options: [
      "A. chromium",
      "B. copper",
      "C. zinc",
      "D. lead"
    ],
    answer: "A. chromium",
    explanation: "Stainless steel is composed primarily of iron, carbon, and chromium (and often nickel). Chromium forms a thin passive oxide layer on the surface that prevents rusting."
  },
  {
    id: 498,
    year: 1994,
    question: "The gas produced when dilute hydrochloric acid reacts with calcium trioxocarbonate (IV) is",
    options: [
      "A. oxygen",
      "B. hydrogen",
      "C. carbon (IV) oxide",
      "D. chlorine"
    ],
    answer: "C. carbon (IV) oxide",
    explanation: "Reaction: CaCO3 + 2 HCl -> CaCl2 + H2O + CO2. The gas evolved is carbon (IV) oxide."
  },
  {
    id: 499,
    year: 1994,
    question: "Which of the following conditions define standard temperature and pressure (S.T.P.)?",
    options: [
      "A. 0 °C and 760 mmHg",
      "B. 25 °C and 760 mmHg",
      "C. 100 °C and 760 mmHg",
      "D. 0 °C and 100 mmHg"
    ],
    answer: "A. 0 °C and 760 mmHg",
    explanation: "Standard Temperature and Pressure (S.T.P.) is standardized as 0 °C (273 K) and a pressure of 1 atmosphere (760 mmHg or 101.3 kPa)."
  },
  {
    id: 500,
    year: 1994,
    question: "Saponification is the reaction between an ester or fat and an alkali to produce soap and",
    options: [
      "A. ethanol",
      "B. glycerol",
      "C. glycol",
      "D. propanol"
    ],
    answer: "B. glycerol",
    explanation: "Saponification of fats or oils (triglycerides) using aqueous sodium hydroxide or potassium hydroxide yields soap (salts of fatty acids) and glycerol (propan-1,2,3-triol)."
  },
  {
    id: 501,
    year: 1994,
    question: "Which of the following metals reacts vigorously with cold water to liberate hydrogen gas?",
    options: [
      "A. Copper",
      "B. Iron",
      "C. Sodium",
      "D. Magnesium"
    ],
    answer: "C. Sodium",
    explanation: "Sodium (Na) is an alkali metal high in the electrochemical series that reacts rapidly and violently with cold water: 2 Na + 2 H2O -> 2 NaOH + H2."
  },
  {
    id: 502,
    year: 1994,
    question: "When hydrogen sulfide gas (H2S) is bubbled through acidified potassium dichromate (VI) solution, the color of the solution changes from",
    options: [
      "A. orange to green",
      "B. purple to colorless",
      "C. green to orange",
      "D. yellow to red"
    ],
    answer: "A. orange to green",
    explanation: "H2S reduces orange Cr2O7(2-) ions to green Cr(3+) ions, while H2S is oxidized to a yellow precipitate of elemental sulfur."
  },
  {
    id: 503,
    year: 1994,
    question: "The functional group present in alkanols is the",
    options: [
      "A. hydroxyl group (-OH)",
      "B. carbonyl group (>C=O)",
      "C. carboxyl group (-COOH)",
      "D. ester group (-COO-)"
    ],
    answer: "A. hydroxyl group (-OH)",
    explanation: "Alkanols (alcohols) contain the hydroxyl functional group (-OH) attached to a saturated carbon atom."
  },
  {
    id: 504,
    year: 1994,
    question: "The rate of a chemical reaction generally increases with an increase in temperature because the",
    options: [
      "A. activation energy of the reaction increases",
      "B. fraction of molecules with energy equal to or greater than the activation energy increases",
      "C. concentration of the reactants increases",
      "D. enthalpy change of the reaction increases"
    ],
    answer: "B. fraction of molecules with energy equal to or greater than the activation energy increases",
    explanation: "Increasing temperature increases the average kinetic energy of the molecules, significantly increasing the proportion of effective collisions involving molecules with energy ≥ activation energy."
  },
  {
    id: 505,
    year: 1994,
    question: "What is the empirical formula of an organic compound containing 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass? [C = 12, H = 1, O = 16]",
    options: [
      "A. CH2O",
      "B. C2H4O",
      "C. CHO2",
      "D. C2H2O"
    ],
    answer: "A. CH2O",
    explanation: "Calculations: C = 40.0 / 12 = 3.333; H = 6.7 / 1 = 6.7; O = 53.3 / 16 = 3.331. Divide by the smallest (3.331): C = 1, H = 2, O = 1. Empirical formula = CH2O."
  },
  {
    id: 506,
    year: 1994,
    question: "Isomers are compounds that have the same",
    options: [
      "A. structural formula but different molecular formulas",
      "B. molecular formula but different structural formulas",
      "C. physical properties but different chemical properties",
      "D. empirical formula only"
    ],
    answer: "B. molecular formula but different structural formulas",
    explanation: "Isomers are chemical compounds that share identical molecular formulas but differ in how their constituent atoms are structurally bonded together."
  },
  {
    id: 507,
    year: 1994,
    question: "The phenomenon of an element existing in two or more physical forms in the same physical state is known as",
    options: [
      "A. isomerism",
      "B. allotropy",
      "C. isotopy",
      "D. polymerism"
    ],
    answer: "B. allotropy",
    explanation: "Allotropy is the property of certain chemical elements (e.g., carbon, sulfur, phosphorus) to exist in two or more different structural forms in the same physical state."
  },
  {
    id: 508,
    year: 1994,
    question: "Which of the following is an example of an endothermic process?",
    options: [
      "A. Dissolution of concentrated H2SO4 in water",
      "B. Dissolution of ammonium chloride (NH4Cl) in water",
      "C. Reaction between NaOH and HCl",
      "D. Combustion of methane gas"
    ],
    answer: "B. Dissolution of ammonium chloride (NH4Cl) in water",
    explanation: "Dissolving ammonium chloride (NH4Cl) in water absorbs heat energy from the surroundings, resulting in a temperature decrease of the mixture."
  },
  {
    id: 509,
    year: 1994,
    question: "Which of the following methods is suitable for separating a mixture of two miscible liquids with close boiling points?",
    options: [
      "A. Simple distillation",
      "B. Fractional distillation",
      "C. Evaporation",
      "D. Filtration"
    ],
    answer: "B. Fractional distillation",
    explanation: "Fractional distillation utilizes a fractionating column to separate miscible liquids that have close boiling points by repeated condensation and vaporization."
  },
  {
    id: 510,
    year: 1994,
    question: "An organic compound has an empirical formula of CH2O and a relative molecular mass of 60. What is its molecular formula? [C = 12, H = 1, O = 16]",
    options: [
      "A. CH2O",
      "B. C2H4O2",
      "C. C3H6O3",
      "D. C4H8O4"
    ],
    answer: "B. C2H4O2",
    explanation: "Empirical formula mass of CH2O = 12 + 2(1) + 16 = 30 g/mol. Factor n = 60 / 30 = 2. Molecular formula = (CH2O)2 = C2H4O2."
  },
  {
    id: 511,
    year: 1994,
    question: "Which of the following compounds will produce a pop sound with a burning splint?",
    options: [
      "A. Oxygen",
      "B. Carbon (IV) oxide",
      "C. Hydrogen",
      "D. Ammonia"
    ],
    answer: "C. Hydrogen",
    explanation: "Hydrogen gas reacts explosively with oxygen in air when ignited, making a characteristic squeaky 'pop' sound."
  },
    {
    id: 462,
    year: 1995,
    question: "A mixture of iodine and sodium chloride can best be separated by",
    options: [
      "A. chromatography",
      "B. filtration",
      "C. sublimation",
      "D. crystallization"
    ],
    answer: "C",
    explanation: "Iodine sublimes on heating (changes directly from solid to vapor without passing through the liquid state), while sodium chloride does not."
  },
  {
    id: 463,
    year: 1995,
    question: "Which of the following physical properties decreases across a period in the periodic table from left to right?",
    options: [
      "A. Ionization energy",
      "B. Atomic radius",
      "C. Electronegativity",
      "D. Electron affinity"
    ],
    answer: "B",
    explanation: "Atomic radius decreases across a period from left to right due to the increasing nuclear charge pulling the electron shells closer to the nucleus."
  },
  {
    id: 464,
    year: 1995,
    question: "What volume of oxygen at s.t.p. is required to burn completely 7.5 dm3 of methane gas?",
    options: [
      "A. 7.5 dm3",
      "B. 15.0 dm3",
      "C. 22.5 dm3",
      "D. 30.0 dm3"
    ],
    answer: "B",
    explanation: "Equation: CH4 + 2O2 -> CO2 + 2H2O. By Gay-Lussac's Law of combining volumes, 1 volume of CH4 reacts with 2 volumes of O2. Therefore, 7.5 dm3 of CH4 requires 7.5 * 2 = 15.0 dm3 of O2."
  },
  {
    id: 465,
    year: 1995,
    question: "Which of the following elements has the highest first ionization energy?",
    options: [
      "A. Calcium",
      "B. Chlorine",
      "C. Fluorine",
      "D. Sodium"
    ],
    answer: "C",
    explanation: "Fluorine has the smallest atomic radius and highest effective nuclear charge among the given options, making its valence electrons most strongly held."
  },
  {
    id: 466,
    year: 1995,
    question: "The Law of Definite Proportions states that",
    options: [
      "A. chemical compounds always contain their constituent elements in fixed proportions by mass",
      "B. matter can neither be created nor destroyed during a chemical reaction",
      "C. when elements combine, they do so in simple whole-number ratios",
      "D. equal volumes of gases at the same temperature and pressure contain equal numbers of molecules"
    ],
    answer: "A",
    explanation: "The Law of Definite Proportions (or Constant Composition) states that a pure chemical compound always contains the same elements combined together in the same proportion by mass."
  },
  {
    id: 467,
    year: 1995,
    question: "Pure water can be obtained from sea water through the process of",
    options: [
      "A. filtration",
      "B. distillation",
      "C. evaporation",
      "D. decantation"
    ],
    answer: "B",
    explanation: "Distillation vaporizes water and then condenses the steam into pure liquid water, leaving dissolved salts behind."
  },
  {
    id: 468,
    year: 1995,
    question: "Calculate the percentage by mass of nitrogen in ammonium trioxonitrate (V), NH4NO3. [N = 14, H = 1, O = 16]",
    options: [
      "A. 35.0%",
      "B. 17.5%",
      "C. 28.0%",
      "D. 70.0%"
    ],
    answer: "A",
    explanation: "Molar mass of NH4NO3 = (14 * 2) + (1 * 4) + (16 * 3) = 28 + 4 + 48 = 80 g/mol. Mass of Nitrogen = 28 g. Percentage N = (28 / 80) * 100 = 35.0%."
  },
  {
    id: 469,
    year: 1995,
    question: "Isotopes of an element differ in their",
    options: [
      "A. number of protons",
      "B. atomic number",
      "C. number of neutrons",
      "D. chemical properties"
    ],
    answer: "C",
    explanation: "Isotopes are atoms of the same element having the same number of protons (atomic number) but different numbers of neutrons (mass number)."
  },
  {
    id: 470,
    year: 1995,
    question: "The pH of a 0.001 M solution of hydrochloric acid (HCl) is",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "C",
    explanation: "HCl is a strong monoprotic acid, so [H+] = 0.001 M = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3."
  },
  {
    id: 471,
    year: 1995,
    question: "Which of the following is NOT an assumption of the kinetic theory of ideal gases?",
    options: [
      "A. Gas molecules move continuously and randomly",
      "B. Collisions between gas molecules are perfectly elastic",
      "C. Intermolecular forces of attraction are negligible",
      "D. The average kinetic energy of gas molecules is inversely proportional to absolute temperature"
    ],
    answer: "D",
    explanation: "The average kinetic energy of gas molecules is directly proportional to the absolute temperature (T), not inversely proportional."
  },
  {
    id: 472,
    year: 1995,
    question: "A sample of gas occupies 30.0 cm3 at 27°C and 750 mmHg pressure. Calculate its volume at s.t.p. [Standard conditions: 0°C and 760 mmHg]",
    options: [
      "A. 26.9 cm3",
      "B. 30.0 cm3",
      "C. 33.4 cm3",
      "D. 28.5 cm3"
    ],
    answer: "A",
    explanation: "Using general gas equation (P1*V1)/T1 = (P2*V2)/T2: P1=750, V1=30, T1=300 K. P2=760, T2=273 K. V2 = (750 * 30 * 273) / (760 * 300) = 6142500 / 228000 = 26.94 cm3 (~26.9 cm3)."
  },
  {
    id: 473,
    year: 1995,
    question: "An element X has the electronic configuration 1s2 2s2 2p6 3s2 3p4. To which group and period does X belong?",
    options: [
      "A. Group 4, Period 3",
      "B. Group 6, Period 3",
      "C. Group 3, Period 6",
      "D. Group 2, Period 4"
    ],
    answer: "B",
    explanation: "The highest principal quantum number n = 3 (Period 3), and total outer shell (n=3) electrons = 2 + 4 = 6 (Group 6 or 16)."
  },
  {
    id: 474,
    year: 1995,
    question: "The type of bond formed when two identical non-metallic atoms share electrons equally is a",
    options: [
      "A. ionic bond",
      "B. non-polar covalent bond",
      "C. polar covalent bond",
      "D. dative bond"
    ],
    answer: "B",
    explanation: "When two identical non-metallic atoms share electrons, the electronegativity difference is zero, forming a non-polar covalent bond."
  },
  {
    id: 475,
    year: 1995,
    question: "Which of the following metallic oxides is amphoteric?",
    options: [
      "A. CuO",
      "B. Al2O3",
      "C. Na2O",
      "D. CaO"
    ],
    answer: "B",
    explanation: "Aluminium oxide (Al2O3) reacts with both acids and strong bases to form salts, making it amphoteric."
  },
  {
    id: 476,
    year: 1995,
    question: "The shape of a water molecule (H2O) is described as",
    options: [
      "A. linear",
      "B. bent (V-shaped)",
      "C. tetrahedral",
      "D. trigonal planar"
    ],
    answer: "B",
    explanation: "Water has two bonding pairs and two lone pairs around the central oxygen atom, giving it a bent or V-shaped geometry."
  },
  {
    id: 477,
    year: 1995,
    question: "How many unpaired electrons are present in the ground state of a nitrogen atom (atomic number = 7)?",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "C",
    explanation: "Nitrogen electronic configuration: 1s2 2s2 2px1 2py1 2pz1. There are 3 unpaired electrons in the 2p orbitals according to Hund's rule."
  },
  {
    id: 478,
    year: 1995,
    question: "Determine the oxidation number of chromium in potassium dichromate (VI), K2Cr2O7.",
    options: [
      "A. +3",
      "B. +5",
      "C. +6",
      "D. +7"
    ],
    answer: "C",
    explanation: "2(+1) + 2(Cr) + 7(-2) = 0 => 2 + 2Cr - 14 = 0 => 2Cr = 12 => Cr = +6."
  },
  {
    id: 479,
    year: 1995,
    question: "In an electrochemical cell, oxidation always takes place at the",
    options: [
      "A. anode",
      "B. cathode",
      "C. electrolyte",
      "D. salt bridge"
    ],
    answer: "A",
    explanation: "Oxidation (loss of electrons) always occurs at the anode, while reduction (gain of electrons) occurs at the cathode."
  },
  {
    id: 480,
    year: 1995,
    question: "Calculate the mass of copper deposited when a current of 0.5 A is passed through copper (II) tetraoxosulphate (VI) solution for 965 seconds. [Cu = 63.5, 1 F = 96500 C/mol]",
    options: [
      "A. 0.16 g",
      "B. 0.32 g",
      "C. 0.64 g",
      "D. 1.27 g"
    ],
    answer: "A",
    explanation: "Quantity of electricity Q = I * t = 0.5 * 965 = 482.5 C. Reaction: Cu2+ + 2e- -> Cu. 2 Faradays (2 * 96500 C) deposit 63.5 g Cu. Mass = (482.5 * 63.5) / (2 * 96500) = 0.15875 g (~0.16 g)."
  },
  {
    id: 481,
    year: 1995,
    question: "Which of the following equations represents an endothermic reaction?",
    options: [
      "A. N2(g) + 3H2(g) -> 2NH3(g) (ΔH = -92 kJ/mol)",
      "B. C(s) + O2(g) -> CO2(g) (ΔH = -393 kJ/mol)",
      "C. N2(g) + O2(g) -> 2NO(g) (ΔH = +180 kJ/mol)",
      "D. HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l) (ΔH = -57 kJ/mol)"
    ],
    answer: "C",
    explanation: "An endothermic reaction absorbs heat from the surroundings and is characterized by a positive enthalpy change (ΔH > 0)."
  },
  {
    id: 482,
    year: 1995,
    question: "The catalyst used in the conversion of SO2 to SO3 during the Contact Process is",
    options: [
      "A. Iron",
      "B. Vanadium (V) oxide",
      "C. Platinum black",
      "D. Nickel"
    ],
    answer: "B",
    explanation: "Vanadium (V) oxide (V2O5) is the industrial catalyst used in the Contact Process to oxidize SO2 to SO3."
  },
  {
    id: 483,
    year: 1995,
    question: "A chemical reaction is spontaneous under standard conditions if the change in standard free energy (ΔG°) is",
    options: [
      "A. positive",
      "B. zero",
      "C. negative",
      "D. infinite"
    ],
    answer: "C",
    explanation: "A reaction is thermodynamically spontaneous when ΔG° is negative (ΔG° < 0)."
  },
  {
    id: 484,
    year: 1995,
    question: "Which of the following aqueous salt solutions will turn red litmus paper blue?",
    options: [
      "A. NaCl",
      "B. Na2CO3",
      "C. NH4Cl",
      "D. Na2SO4"
    ],
    answer: "B",
    explanation: "Na2CO3 is formed from a strong base (NaOH) and a weak acid (H2CO3). Its anion undergoes hydrolysis in water producing OH- ions, making the solution basic."
  },
  {
    id: 485,
    year: 1995,
    question: "Solubility of a solute in a given solvent is commonly expressed in units of",
    options: [
      "A. g/cm3",
      "B. mol/dm3",
      "C. g/dm2",
      "D. mol/g"
    ],
    answer: "B",
    explanation: "Solubility is defined as the maximum amount of solute in moles that dissolves in 1 dm3 of solvent at a specific temperature (mol/dm3)."
  },
  {
    id: 486,
    year: 1995,
    question: "Temporary hardness of water caused by calcium hydrogen trioxocarbonate (IV) can be removed by adding",
    options: [
      "A. calcium hydroxide",
      "B. sodium chloride",
      "C. copper (II) sulphate",
      "D. potassium trioxonitrate (V)"
    ],
    answer: "A",
    explanation: "Adding calculated amounts of slaked lime, Ca(OH)2, precipitates insoluble CaCO3: Ca(HCO3)2 + Ca(OH)2 -> 2CaCO3 + 2H2O."
  },
  {
    id: 487,
    year: 1995,
    question: "Moist chlorine gas acts as a bleaching agent primarily because it reacts with water to release",
    options: [
      "A. nascent hydrogen",
      "B. nascent oxygen",
      "C. hydrogen chloride gas",
      "D. ozone gas"
    ],
    answer: "B",
    explanation: "Cl2 + H2O -> HCl + HOCl; HOCl -> HCl + [O]. The nascent oxygen [O] oxidizes colored dyes to colorless products."
  },
  {
    id: 488,
    year: 1995,
    question: "Which of the following gases is liberated when concentrated tetraoxosulphate (VI) acid reacts with solid sodium chloride?",
    options: [
      "A. Chlorine gas",
      "B. Hydrogen chloride gas",
      "C. Sulphur dioxide gas",
      "D. Hydrogen gas"
    ],
    answer: "B",
    explanation: "NaCl(s) + H2SO4(l) -> NaHSO4(s) + HCl(g). Concentrated H2SO4 displaces the volatile hydrogen chloride gas from its salt."
  },
  {
    id: 489,
    year: 1995,
    question: "Which of the following metals reacts readily with cold water to liberate hydrogen gas?",
    options: [
      "A. Iron",
      "B. Magnesium",
      "C. Sodium",
      "D. Copper"
    ],
    answer: "C",
    explanation: "Sodium is an alkali metal high up in the reactivity series and reacts vigorously with cold water to form NaOH and H2 gas."
  },
  {
    id: 490,
    year: 1995,
    question: "Bauxite is the primary ore used for the industrial extraction of",
    options: [
      "A. Iron",
      "B. Aluminium",
      "C. Copper",
      "D. Tin"
    ],
    answer: "B",
    explanation: "Bauxite (hydrated aluminium oxide, Al2O3.2H2O) is the main ore from which aluminium is extracted via the Hall-Héroult process."
  },
  {
    id: 491,
    year: 1995,
    question: "Brass is an alloy composed mainly of",
    options: [
      "A. Copper and Zinc",
      "B. Copper and Tin",
      "C. Iron and Carbon",
      "D. Lead and Tin"
    ],
    answer: "A",
    explanation: "Brass is an alloy consisting primarily of copper and zinc."
  },
  {
    id: 492,
    year: 1995,
    question: "What is the IUPAC name of the branched hydrocarbon with formula CH3-CH(CH3)-CH2-CH3?",
    options: [
      "A. 2-methylpropane",
      "B. 2-methylbutane",
      "C. 3-methylbutane",
      "D. 2-methylpentane"
    ],
    answer: "B",
    explanation: "The longest continuous carbon chain has 4 carbons (butane) with a methyl substituent at carbon-2."
  },
  {
    id: 493,
    year: 1995,
    question: "Which of the following hydrocarbons readily undergoes an addition reaction?",
    options: [
      "A. Ethane",
      "B. Propane",
      "C. Ethene",
      "D. Methane"
    ],
    answer: "C",
    explanation: "Ethene is an unsaturated hydrocarbon containing a carbon-carbon double bond (C=C), allowing it to undergo addition reactions."
  },
  {
    id: 494,
    year: 1995,
    question: "Dehydration of ethanol with excess concentrated H2SO4 at 170°C produces",
    options: [
      "A. Ethane",
      "B. Ethene",
      "C. Ethyne",
      "D. Ethoxyethane"
    ],
    answer: "B",
    explanation: "At 170°C, concentrated H2SO4 dehydrates ethanol intramolecularly to form ethene (C2H5OH -> C2H4 + H2O)."
  },
  {
    id: 495,
    year: 1995,
    question: "The characteristic functional group present in alkanols is",
    options: [
      "A. -COOH",
      "B. -CHO",
      "C. -OH",
      "D. -CO-"
    ],
    answer: "C",
    explanation: "Alkanols contain the hydroxyl group (-OH) attached to a saturated carbon atom."
  },
  {
    id: 496,
    year: 1995,
    question: "Alkaline hydrolysis (saponification) of fats and oils produces soap and",
    options: [
      "A. ethanol",
      "B. glycerol",
      "C. propanol",
      "D. ethylene glycol"
    ],
    answer: "B",
    explanation: "Fats and oils are triesters of glycerol. Boiling them with concentrated alkali produces sodium/potassium salts of fatty acids (soap) and propane-1,2,3-triol (glycerol)."
  },
  {
    id: 497,
    year: 1995,
    question: "Which of the following is a naturally occurring polymer?",
    options: [
      "A. Nylon",
      "B. Terylene",
      "C. Starch",
      "D. Polythene"
    ],
    answer: "C",
    explanation: "Starch is a natural polysaccharide synthesized by plants, whereas nylon, terylene, and polythene are synthetic polymers."
  },
  {
    id: 498,
    year: 1995,
    question: "Hydrogenation of ethyne in the presence of a nickel catalyst produces ethane via an intermediate formation of",
    options: [
      "A. Methane",
      "B. Ethene",
      "C. Propene",
      "D. Ethanol"
    ],
    answer: "B",
    explanation: "Ethyne (C2H2) first undergoes addition of 1 mole of H2 to form ethene (C2H4), which further hydrogenates to form ethane (C2H6)."
  },
  {
    id: 499,
    year: 1995,
    question: "Fermentation of glucose to produce ethanol and carbon (IV) oxide is catalyzed by the enzyme",
    options: [
      "A. diastase",
      "B. zymase",
      "C. invertase",
      "D. maltase"
    ],
    answer: "B",
    explanation: "Zymase, secreted by yeast cells, breaks down glucose into ethanol and CO2: C6H12O6 -> 2C2H5OH + 2CO2."
  },
  {
    id: 500,
    year: 1995,
    question: "The principal constituent of natural gas is",
    options: [
      "A. Ethane",
      "B. Methane",
      "C. Propane",
      "D. Butane"
    ],
    answer: "B",
    explanation: "Methane (CH4) makes up about 80% to 90% of natural gas."
  },
  {
    id: 501,
    year: 1995,
    question: "Which of the following organic compounds produces a yellow precipitate when warmed with iodine and sodium hydroxide (tri-iodomethane test)?",
    options: [
      "A. Methanol",
      "B. Ethanol",
      "C. Ethanoic acid",
      "D. Methanoic acid"
    ],
    answer: "B",
    explanation: "Ethanol (CH3CH2OH) contains the CH3CH(OH)- structure which oxidizes to acetaldehyde and forms a yellow precipitate of iodoform (CHI3)."
  },
  {
    id: 502,
    year: 1995,
    question: "Synthetic detergents are preferred to soap for washing in hard water because they",
    options: [
      "A. are cheaper to produce",
      "B. form soluble calcium and magnesium salts",
      "C. are easily biodegradable",
      "D. do not lather with soft water"
    ],
    answer: "B",
    explanation: "Calcium and magnesium salts of synthetic detergents (sulfonates/sulfates) are soluble in water, whereas calcium and magnesium soap salts form insoluble scum."
  },
  {
    id: 503,
    year: 1995,
    question: "The separation of crude oil into its various fractions in a refinery is based on differences in their",
    options: [
      "A. solubilities",
      "B. boiling points",
      "C. densities",
      "D. melting points"
    ],
    answer: "B",
    explanation: "Fractional distillation separates hydrocarbon fractions according to their different boiling point ranges."
  },
  {
    id: 504,
    year: 1995,
    question: "Vulcanization is a chemical process that improves the elasticity and strength of rubber by heating it with",
    options: [
      "A. sulphur",
      "B. phosphorus",
      "C. carbon",
      "D. nitrogen"
    ],
    answer: "A",
    explanation: "Vulcanization involves heating natural rubber with sulfur to form cross-linking sulfur bridges between polymer chains."
  },
  {
    id: 505,
    year: 1995,
    question: "Which gas law states that at constant temperature, the volume of a given mass of gas is inversely proportional to its pressure (P1V1 = P2V2)?",
    options: [
      "A. Charles's Law",
      "B. Boyle's Law",
      "C. Gay-Lussac's Law",
      "D. Avogadro's Law"
    ],
    answer: "B",
    explanation: "Boyle's Law states that the volume of a given mass of gas is inversely proportional to its pressure provided temperature remains constant."
  },
  {
    id: 506,
    year: 1995,
    question: "A hydrocarbon contains 85.7% carbon and 14.3% hydrogen by mass. What is its empirical formula? [C = 12, H = 1]",
    options: [
      "A. CH",
      "B. CH2",
      "C. CH3",
      "D. C2H5"
    ],
    answer: "B",
    explanation: "Moles of C = 85.7 / 12 = 7.14. Moles of H = 14.3 / 1 = 14.3. Ratio C : H = 7.14/7.14 : 14.3/7.14 = 1 : 2. Empirical formula is CH2."
  },
  {
    id: 507,
    year: 1995,
    question: "Which of the following is an intensive property of a thermodynamic system?",
    options: [
      "A. Mass",
      "B. Volume",
      "C. Temperature",
      "D. Internal energy"
    ],
    answer: "C",
    explanation: "An intensive property does not depend on the amount of matter present. Temperature is intensive, whereas mass, volume, and energy are extensive."
  },
  {
    id: 508,
    year: 1995,
    question: "What mass of sodium hydroxide (NaOH) is required to prepare 500 cm3 of a 0.2 M aqueous solution? [Na = 23, O = 16, H = 1]",
    options: [
      "A. 2.0 g",
      "B. 4.0 g",
      "C. 8.0 g",
      "D. 40.0 g"
    ],
    answer: "B",
    explanation: "Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol. Moles required = Molar Concentration * Volume in dm3 = 0.2 * (500 / 1000) = 0.1 mol. Mass = 0.1 * 40 = 4.0 g."
  },
  {
    id: 509,
    year: 1995,
    question: "What is the oxidation state of manganese in potassium tetraoxomanganate (VII), KMnO4?",
    options: [
      "A. +2",
      "B. +4",
      "C. +5",
      "D. +7"
    ],
    answer: "D",
    explanation: "1(+1) + Mn + 4(-2) = 0 => 1 + Mn - 8 = 0 => Mn = +7."
  },
  {
    id: 510,
    year: 1995,
    question: "Which gas turns filter paper soaked in acidified potassium dichromate (VI) from orange to green?",
    options: [
      "A. Carbon (IV) oxide",
      "B. Sulphur (IV) oxide",
      "C. Nitrogen (IV) oxide",
      "D. Chlorine gas"
    ],
    answer: "B",
    explanation: "Sulphur (IV) oxide (SO2) is a strong reducing agent that reduces orange dichromate ions (Cr2O7^2-) to green chromium (III) ions (Cr3+)."
  },
  {
    id: 511,
    year: 1995,
    question: "The pH range characteristic of a strong acid solution is",
    options: [
      "A. 1 - 3",
      "B. 5 - 6",
      "C. 7",
      "D. 8 - 11"
    ],
    answer: "A",
    explanation: "Strong acids dissociate almost completely in water, yielding high hydrogen ion concentrations resulting in low pH values between 1 and 3."
  },
    // ================================================================
  // CHEMISTRY 1997 (IDs 462–511)
  // ================================================================
  {
    id: 462, year: 1997,
    question: "A mixture of iodine and sulphur crystals can best be separated by treatment with:",
    options: { A: "water", B: "carbon (IV) sulfide", C: "ethanol", D: "dilute hydrochloric acid" },
    answer: "C",
    explanation: "Iodine is soluble in ethanol (forming tincture of iodine) while sulphur is insoluble in ethanol. Filtering the mixture leaves sulphur as the residue, and evaporating the ethanol recovers iodine."
  },
  {
    id: 463, year: 1997,
    question: "Which of the following organic compounds is a secondary alkanol?",
    options: { A: "Propan-1-ol", B: "Propan-2-ol", C: "2-methylpropan-2-ol", D: "Ethanol" },
    answer: "B",
    explanation: "Propan-2-ol has its hydroxyl (-OH) group attached to a secondary carbon atom (a carbon bound to two other carbon atoms), making it a secondary alkanol."
  },
  {
    id: 464, year: 1997,
    question: "The purity of a solid organic compound is best determined by its:",
    options: { A: "boiling point", B: "melting point", C: "density", D: "solubility in water" },
    answer: "B",
    explanation: "Pure solid organic compounds have sharp, characteristic melting points. The presence of impurities depresses the melting point and widens the melting temperature range."
  },
  {
    id: 465, year: 1997,
    question: "Calculate the percentage by mass of oxygen in hydrated aluminium tetraoxosulphate(VI), Al2(SO4)3.18H2O. [Al = 27, S = 32, O = 16, H = 1]",
    options: { A: "28.8%", B: "48.0%", C: "57.7%", D: "72.1%" },
    answer: "D",
    explanation: "Molar mass of Al2(SO4)3.18H2O = 2(27) + 3(32) + 12(16) + 18(18) = 54 + 96 + 192 + 324 = 666 g/mol. Total oxygen mass = 30 × 16 = 480 g. Mass percentage of oxygen = (480 / 666) × 100% = 72.07% ≈ 72.1%."
  },
  {
    id: 466, year: 1997,
    question: "Which of the following is NOT an assumption of the kinetic theory of ideal gases?",
    options: {
      A: "Gas molecules are in constant random motion",
      B: "Collisions between gas molecules are perfectly elastic",
      C: "There are strong attractive forces between gas molecules",
      D: "The actual volume of gas molecules is negligible compared to the vessel volume"
    },
    answer: "C",
    explanation: "The kinetic theory assumes that attractive and repulsive forces between ideal gas molecules are negligible (zero). Stating that strong attractive forces exist contradicts ideal gas behavior."
  },
  {
    id: 467, year: 1997,
    question: "If 200 cm3 of a gas at s.t.p. has a mass of 0.26 g, what is the molar mass of the gas? [Molar volume of gas at s.t.p. = 22.4 dm3]",
    options: { A: "14.6 g/mol", B: "26.0 g/mol", C: "29.1 g/mol", D: "58.2 g/mol" },
    answer: "C",
    explanation: "Moles of gas = 0.200 dm3 / 22.4 dm3/mol = 0.008928 mol. Molar mass = mass / moles = 0.26 g / 0.008928 mol = 29.12 g/mol ≈ 29.1 g/mol."
  },
  {
    id: 468, year: 1997,
    question: "Pure water can be obtained from sea water by the process of:",
    options: { A: "filtration", B: "decantation", C: "distillation", D: "sedimentation" },
    answer: "C",
    explanation: "Distillation separates pure liquid water from dissolved mineral salts because water evaporates into steam and condenses back into pure liquid, leaving non-volatile salts behind."
  },
  {
    id: 469, year: 1997,
    question: "A colourless gas with a pungent smell which turns damp red litmus paper blue is:",
    options: { A: "sulphur(IV) oxide", B: "ammonia", C: "hydrogen chloride", D: "chlorine" },
    answer: "B",
    explanation: "Ammonia (NH3) is the only common alkaline gas; it dissolves in the moisture on red litmus paper to form OH- ions, turning the paper blue."
  },
  {
    id: 470, year: 1997,
    question: "Which of the following elements has the highest first ionization energy?",
    options: { A: "Sodium", B: "Magnesium", C: "Aluminium", D: "Helium" },
    answer: "D",
    explanation: "Helium is a noble gas with a completely filled, stable 1s2 electron shell and the smallest atomic radius, giving it the highest first ionization energy of all elements."
  },
  {
    id: 471, year: 1997,
    question: "An element X has the electronic configuration 1s2 2s2 2p6 3s2 3p4. Element X belongs to Period and Group:",
    options: { A: "Period 3, Group 4", B: "Period 3, Group 6", C: "Period 2, Group 6", D: "Period 4, Group 3" },
    answer: "B",
    explanation: "The highest principal quantum number n = 3 (Period 3), and the valence electrons in the 3rd energy level total 2 + 4 = 6 (Group 6/16)."
  },
  {
    id: 472, year: 1997,
    question: "The shape of a water molecule (H2O) is described as:",
    options: { A: "linear", B: "tetrahedral", C: "bent (V-shaped)", D: "trigonal planar" },
    answer: "C",
    explanation: "Oxygen in H2O has 2 bonding pairs and 2 lone pairs of electrons. Repulsion between lone pairs distorts the tetrahedral electron pair geometry into a bent (V-shaped) molecular structure."
  },
  {
    id: 473, year: 1997,
    question: "The reaction between ethanoic acid and ethanol in the presence of concentrated H2SO4 produces:",
    options: { A: "ethyl ethanoate and water", B: "methyl ethanoate and water", C: "ethoxyethane and water", D: "ethyl methanoate and water" },
    answer: "A",
    explanation: "CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O. Ethanoic acid and ethanol undergo esterification to produce the ester ethyl ethanoate and water."
  },
  {
    id: 474, year: 1997,
    question: "What volume of 0.25 M H2SO4 will completely neutralize 25.0 cm3 of 0.50 M KOH solution?",
    options: { A: "12.5 cm3", B: "25.0 cm3", C: "37.5 cm3", D: "50.0 cm3" },
    answer: "B",
    explanation: "Reaction: H2SO4 + 2KOH → K2SO4 + 2H2O. Using (Ca × Va)/(Cb × Vb) = 1/2 => (0.25 × Va) / (0.50 × 25.0) = 1/2 => Va = (0.50 × 25.0) / (2 × 0.25) = 25.0 cm3."
  },
  {
    id: 475, year: 1997,
    question: "The oxidation number of manganese in potassium tetraoxomanganate(VII), KMnO4, is:",
    options: { A: "+2", B: "+4", C: "+6", D: "+7" },
    answer: "D",
    explanation: "In KMnO4: (+1) + Mn + 4(-2) = 0 => Mn - 7 = 0 => Mn = +7."
  },
  {
    id: 476, year: 1997,
    question: "Which of the following subatomic particles has the smallest mass?",
    options: { A: "Proton", B: "Neutron", C: "Electron", D: "Alpha particle" },
    answer: "C",
    explanation: "An electron has a rest mass of approximately 9.11 × 10^-31 kg (about 1/1836 of the mass of a proton), making it the lightest subatomic particle."
  },
  {
    id: 477, year: 1997,
    question: "The enzyme responsible for converting glucose into ethanol and carbon(IV) oxide during fermentation is:",
    options: { A: "diastase", B: "zymase", C: "maltase", D: "ptyalin" },
    answer: "B",
    explanation: "Zymase, an enzyme complex produced by yeast cells, catalyzes the anaerobic fermentation of glucose into ethanol and carbon(IV) oxide."
  },
  {
    id: 478, year: 1997,
    question: "Substances that absorb moisture from the atmosphere without dissolving to form a solution are described as:",
    options: { A: "deliquescent", B: "efflorescent", C: "hygroscopic", D: "fluorescent" },
    answer: "C",
    explanation: "Hygroscopic substances absorb moisture from air without dissolving in it. Deliquescent substances absorb enough moisture to eventually dissolve and form a solution."
  },
  {
    id: 479, year: 1997,
    question: "Which of the following gases is evolved when sodium trioxocarbonate(IV) reacts with dilute hydrochloric acid?",
    options: { A: "Carbon(II) oxide", B: "Carbon(IV) oxide", C: "Chlorine", D: "Hydrogen" },
    answer: "B",
    explanation: "Na2CO3 + 2HCl → 2NaCl + H2O + CO2. The gas evolved is carbon(IV) oxide."
  },
  {
    id: 480, year: 1997,
    question: "How many structural isomers are possible for the alkane with molecular formula C4H10?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    answer: "A",
    explanation: "C4H10 has two structural isomers: butane (straight-chain) and 2-methylpropane (branched-chain)."
  },
  {
    id: 481, year: 1997,
    question: "A hydrocarbon contains 85.7% carbon and 14.3% hydrogen by mass. Determine its empirical formula. [C = 12, H = 1]",
    options: { A: "CH", B: "CH2", C: "CH3", D: "C2H5" },
    answer: "B",
    explanation: "Moles C = 85.7 / 12 = 7.14 mol; Moles H = 14.3 / 1 = 14.3 mol. Mole ratio C : H = 7.14 / 7.14 : 14.3 / 7.14 = 1 : 2. Empirical formula is CH2."
  },
  {
    id: 482, year: 1997,
    question: "If the half-life of a radioactive isotope is 5 days, what mass of a 16 g sample will remain after 20 days?",
    options: { A: "1.0 g", B: "2.0 g", C: "4.0 g", D: "8.0 g" },
    answer: "A",
    explanation: "Number of half-lives = 20 / 5 = 4. Remaining mass = 16 g × (1/2)^4 = 16 / 16 = 1.0 g."
  },
  {
    id: 483, year: 1997,
    question: "The rusting of iron requires the simultaneous presence of:",
    options: { A: "oxygen and nitrogen", B: "water and oxygen", C: "water and carbon(IV) oxide", D: "oxygen and hydrogen" },
    answer: "B",
    explanation: "Rusting of iron is an electrochemical corrosion process requiring both moisture (water) and atmospheric oxygen."
  },
  {
    id: 484, year: 1997,
    question: "A catalyst increases the rate of a chemical reaction by:",
    options: {
      A: "increasing the activation energy of the reaction",
      B: "lowering the activation energy of the reaction",
      C: "increasing the heat of reaction (ΔH)",
      D: "decreasing the frequency of collisions"
    },
    answer: "B",
    explanation: "A catalyst provides an alternative reaction path with a lower activation energy, increasing the fraction of collisions that have sufficient energy to react."
  },
  {
    id: 485, year: 1997,
    question: "In the Bosch process for the industrial preparation of hydrogen, carbon(II) oxide is converted to carbon(IV) oxide by reacting water gas with steam in the presence of:",
    options: { A: "iron(III) oxide catalyst", B: "nickel catalyst", C: "platinum catalyst", D: "copper catalyst" },
    answer: "A",
    explanation: "The water-gas shift reaction step of the Bosch process (CO + H2O → CO2 + H2) uses iron(III) oxide (Fe2O3) promoted with chromium(III) oxide as the catalyst."
  },
  {
    id: 486, year: 1997,
    question: "Which of the following metallic oxides is amphoteric?",
    options: { A: "CaO", B: "CuO", C: "ZnO", D: "Na2O" },
    answer: "C",
    explanation: "Zinc oxide (ZnO) displays amphoteric behavior, reacting with both acids (forming zinc salts) and strong bases (forming zincates)."
  },
  {
    id: 487, year: 1997,
    question: "Aluminium is extracted commercially from bauxite by:",
    options: { A: "reduction with carbon", B: "reduction with hydrogen", C: "electrolysis of molten alumina in cryolite", D: "thermal decomposition" },
    answer: "C",
    explanation: "In the Hall-Héroult process, aluminium is extracted by electrolyzing purified molten alumina (Al2O3) dissolved in molten cryolite (Na3AlF6)."
  },
  {
    id: 488, year: 1997,
    question: "When concentrated trioxonitrate(V) acid reacts with copper turnings, the gas evolved is:",
    options: { A: "nitrogen(I) oxide", B: "nitrogen(II) oxide", C: "nitrogen(IV) oxide", D: "oxygen" },
    answer: "C",
    explanation: "Cu + 4HNO3 (conc) → Cu(NO3)2 + 2NO2 + 2H2O. Concentrated nitric acid oxidizes copper and evolves reddish-brown fumes of nitrogen(IV) oxide gas (NO2)."
  },
  {
    id: 489, year: 1997,
    question: "Chlorine gas acts as a bleaching agent only in the presence of:",
    options: { A: "sunlight", B: "water (moisture)", C: "hydrogen gas", D: "oxygen gas" },
    answer: "B",
    explanation: "Chlorine reacts with water to form oxochlorate(I) acid (HClO), which decomposes to release nascent oxygen responsible for bleaching colored organic matter."
  },
  {
    id: 490, year: 1997,
    question: "Calculate the mass of copper deposited at the cathode when a current of 2.0 A is passed through a solution of CuSO4 for 1930 seconds. [Cu = 63.5, 1 F = 96500 C]",
    options: { A: "0.635 g", B: "1.27 g", C: "2.54 g", D: "6.35 g" },
    answer: "B",
    explanation: "Q = I × t = 2.0 A × 1930 s = 3860 C. Deposition of 1 mole of Cu (63.5 g) requires 2 moles of electrons (2 × 96500 = 193000 C). Mass deposited = (3860 / 193000) × 63.5 = 1.27 g."
  },
  {
    id: 491, year: 1997,
    question: "The correct IUPAC name for CH3-CH2-CH(CH3)-CH2-CH3 is:",
    options: { A: "2-methylpentane", B: "3-methylpentane", C: "2-ethylbutane", D: "dimethylpropane" },
    answer: "B",
    explanation: "The longest continuous carbon chain contains 5 carbon atoms (pentane), with a methyl substituent on carbon 3, giving 3-methylpentane."
  },
  {
    id: 492, year: 1997,
    question: "Which of the following organic compounds will decolorize bromine water?",
    options: { A: "Ethane", B: "Ethene", C: "Methane", D: "Propane" },
    answer: "B",
    explanation: "Ethene (C2H4) contains a double bond (C=C) that undergoes an addition reaction with bromine water, rapidly decolorizing its reddish-brown color."
  },
  {
    id: 493, year: 1997,
    question: "Soap is manufactured by the alkaline hydrolysis of fats and oils with sodium hydroxide. This process is known as:",
    options: { A: "esterification", B: "saponification", C: "fermentation", D: "vulcanization" },
    answer: "B",
    explanation: "Saponification is the alkaline hydrolysis of triglycerides (fats/oils) using a strong alkali like NaOH to produce glycerol and soap salts."
  },
  {
    id: 494, year: 1997,
    question: "Permanent hardness of water can be caused by the presence of dissolved:",
    options: { A: "calcium hydrogentrioxocarbonate(IV)", B: "calcium tetraoxosulphate(VI)", C: "sodium chloride", D: "magnesium hydrogentrioxocarbonate(IV)" },
    answer: "B",
    explanation: "Permanent hardness is caused by dissolved sulphate or chloride salts of calcium or magnesium (such as CaSO4 or MgSO4). Hydrogentrioxocarbonate(IV) salts cause temporary hardness."
  },
  {
    id: 495, year: 1997,
    question: "Temporary hardness of water can be removed by boiling because:",
    options: {
      A: "calcium hydrogentrioxocarbonate(IV) decomposes into insoluble calcium trioxocarbonate(IV)",
      B: "calcium sulphate precipitates out",
      C: "boiling destroys the calcium ions",
      D: "magnesium chloride evaporates"
    },
    answer: "A",
    explanation: "Boiling decomposes soluble Ca(HCO3)2 into insoluble CaCO3 (which precipitates out as scale), water, and carbon dioxide."
  },
  {
    id: 496, year: 1997,
    question: "Brass is an alloy composed of:",
    options: { A: "copper and tin", B: "copper and zinc", C: "lead and tin", D: "iron and carbon" },
    answer: "B",
    explanation: "Brass is an alloy consisting primarily of copper and zinc. (Bronze consists of copper and tin)."
  },
  {
    id: 497, year: 1997,
    question: "For an endothermic reaction, the enthalpy change (ΔH) is:",
    options: { A: "zero", B: "negative", C: "positive", D: "variable" },
    answer: "C",
    explanation: "In an endothermic reaction, heat energy is absorbed from the surroundings, giving the reaction products a higher enthalpy than the reactants (ΔH > 0)."
  },
  {
    id: 498, year: 1997,
    question: "Consider the equilibrium reaction: N2(g) + 3H2(g) ⇌ 2NH3(g); ΔH = -92 kJ/mol. An increase in pressure will:",
    options: {
      A: "shift the equilibrium to the left, decreasing NH3 yield",
      B: "shift the equilibrium to the right, increasing NH3 yield",
      C: "have no effect on the equilibrium position",
      D: "decrease the rate of the forward reaction"
    },
    answer: "B",
    explanation: "The reactant side has 4 gaseous moles while the product side has 2. According to Le Chatelier's principle, increasing pressure shifts the equilibrium toward the side with fewer gas moles (the right), increasing NH3 yield."
  },
  {
    id: 499, year: 1997,
    question: "The monomer unit of natural rubber is:",
    options: { A: "ethene", B: "isoprene (2-methylbuta-1,3-diene)", C: "styrene", D: "vinyl chloride" },
    answer: "B",
    explanation: "Natural rubber is a polymer of cis-1,4-polyisoprene, whose monomer building block is isoprene (2-methylbuta-1,3-diene)."
  },
  {
    id: 500, year: 1997,
    question: "Which of the following gases will diffuse fastest under the same conditions? [H = 1, C = 12, N = 14, O = 16]",
    options: { A: "H2", B: "CH4", C: "NH3", D: "CO2" },
    answer: "A",
    explanation: "By Graham's law, diffusion rate is inversely proportional to the square root of molar mass. Hydrogen (H2) has the lowest molar mass (2 g/mol) and diffuses fastest."
  },
  {
    id: 501, year: 1997,
    question: "The major component of natural gas is:",
    options: { A: "ethane", B: "methane", C: "propane", D: "butane" },
    answer: "B",
    explanation: "Methane (CH4) makes up approximately 70–90% of natural gas mixtures."
  },
  {
    id: 502, year: 1997,
    question: "Which of the following elements belongs to the halogen family?",
    options: { A: "Sodium", B: "Calcium", C: "Chlorine", D: "Argon" },
    answer: "C",
    explanation: "Chlorine (Cl) is a Group 17 (Group 7) non-metal element, belonging to the halogen family."
  },
  {
    id: 503, year: 1997,
    question: "Acid rain is primarily caused by atmospheric pollution from:",
    options: { A: "carbon(II) oxide and methane", B: "sulphur(IV) oxide and nitrogen oxides", C: "chlorofluorocarbons and oxygen", D: "argon and carbon dioxide" },
    answer: "B",
    explanation: "Sulphur(IV) oxide (SO2) and nitrogen oxides (NOx) react with atmospheric moisture and oxygen to produce sulphurous/sulphuric acid and nitric acid, leading to acid rain."
  },
  {
    id: 504, year: 1997,
    question: "The geometric shape of a methane (CH4) molecule is:",
    options: { A: "linear", B: "trigonal planar", C: "tetrahedral", D: "octahedral" },
    answer: "C",
    explanation: "In methane, the central carbon atom forms four equivalent sp3 hybrid bonds pointing toward the corners of a regular tetrahedron with bond angles of 109.5°."
  },
  {
    id: 505, year: 1997,
    question: "When ethanol is heated with excess concentrated tetraoxosulphate(VI) acid at 170°C, the organic product formed is:",
    options: { A: "ethene", B: "ethoxyethane", C: "ethyl hydrogen sulphate", D: "ethanal" },
    answer: "A",
    explanation: "At 170°C in the presence of excess conc. H2SO4, ethanol undergoes dehydration to yield ethene gas (C2H4)."
  },
  {
    id: 506, year: 1997,
    question: "Which of the following industrial chemicals is produced in the largest quantity worldwide and is often referred to as a heavy chemical?",
    options: { A: "Ethanoic acid", B: "Tetraoxosulphate(VI) acid", C: "Hydrochloric acid", D: "Sodium trioxocarbonate(IV)" },
    answer: "B",
    explanation: "Tetraoxosulphate(VI) acid (H2SO4) is manufactured on a massive industrial scale globally for fertilizer production, metal processing, and chemical syntheses, classifying it as a primary heavy chemical."
  },
  {
    id: 507, year: 1997,
    question: "The direct change of a solid substance to gas without passing through the liquid state is called:",
    options: { A: "evaporation", B: "sublimation", C: "condensation", D: "distillation" },
    answer: "B",
    explanation: "Sublimation is the phase transition in which a solid transforms directly into a gas without melting into an intermediate liquid phase."
  },
  {
    id: 508, year: 1997,
    question: "What is the colour of methyl orange indicator in an acidic medium?",
    options: { A: "Yellow", B: "Pink / Red", C: "Blue", D: "Colourless" },
    answer: "B",
    explanation: "Methyl orange indicator turns red/pink in acidic solutions (pH < 3.1) and yellow in alkaline solutions (pH > 4.4)."
  },
  {
    id: 509, year: 1997,
    question: "Which of the following organic compounds is commonly used as a surgical antiseptic and disinfectant?",
    options: { A: "Phenol", B: "Ethane", C: "Methanal", D: "Ethyl ethanoate" },
    answer: "A",
    explanation: "Phenol (carbolic acid) and its derivatives are effective germicides widely used as antiseptics and disinfectants."
  },
  {
    id: 510, year: 1997,
    question: "Plastics that can be repeatedly softened by heating and remoulded into different shapes are called:",
    options: { A: "thermosetting plastics", B: "thermoplastics", C: "elastomers", D: "fibres" },
    answer: "B",
    explanation: "Thermoplastics consist of linear or branched polymer chains with weak intermolecular forces that allow them to soften repeatedly when heated and harden upon cooling."
  },
  {
    id: 511, year: 1997,
    question: "Which of the following aqueous solutions will have the highest electrical conductivity?",
    options: { A: "0.1 M CH3COOH", B: "0.1 M HCl", C: "0.1 M C6H12O6 (glucose)", D: "0.1 M NH3" },
    answer: "B",
    explanation: "HCl is a strong electrolyte that completely ionizes in water into H+ and Cl- ions, creating the highest ion concentration and greatest electrical conductivity."
  },
  // ================================================================
  // CHEMISTRY 1998 (IDs 512–561)
  // ================================================================
  {
    id: 512, year: 1998,
    question: "Which of the following physical properties is used to test for the purity of a liquid organic compound?",
    options: { A: "Melting point", B: "Boiling point", C: "Solubility", D: "Density" },
    answer: "B",
    explanation: "Pure liquid organic compounds distill over a narrow, fixed temperature range at constant pressure. A sharp, constant boiling point indicates high purity."
  },
  {
    id: 513, year: 1998,
    question: "A mixture of sand, ammonium chloride, and sodium chloride can best be separated by:",
    options: {
      A: "filtration followed by evaporation",
      B: "fractional distillation",
      C: "sublimation followed by addition of water and filtration",
      D: "chromatography"
    },
    answer: "C",
    explanation: "Heating the mixture sublimates ammonium chloride first. Adding water to the remaining mixture dissolves sodium chloride while leaving sand insoluble; filtration then separates the sand from the salt solution."
  },
  {
    id: 514, year: 1998,
    question: "Calculate the volume of oxygen at s.t.p. required for the complete combustion of 5.0 dm3 of methane (CH4) gas.",
    options: { A: "2.5 dm3", B: "5.0 dm3", C: "10.0 dm3", D: "20.0 dm3" },
    answer: "C",
    explanation: "Reaction: CH4(g) + 2O2(g) → CO2(g) + 2H2O(g). By Gay-Lussac's Law, 1 volume of CH4 reacts with 2 volumes of O2. Therefore, 5.0 dm3 of CH4 requires 2 × 5.0 dm3 = 10.0 dm3 of O2."
  },
  {
    id: 515, year: 1998,
    question: "An element X has two naturally occurring isotopes with mass numbers 35 and 37 in the ratio 3:1 respectively. What is the relative atomic mass of X?",
    options: { A: "35.0", B: "35.5", C: "36.0", D: "36.5" },
    answer: "B",
    explanation: "Relative atomic mass = [(35 × 3) + (37 × 1)] / (3 + 1) = (105 + 37) / 4 = 142 / 4 = 35.5."
  },
  {
    id: 516, year: 1998,
    question: "The arrangement of elements in the modern periodic table is based on their:",
    options: { A: "atomic mass", B: "mass number", C: "atomic number", D: "neutron number" },
    answer: "C",
    explanation: "Moseley's Periodic Law states that the physical and chemical properties of elements are periodic functions of their atomic numbers."
  },
  {
    id: 517, year: 1998,
    question: "The chemical bond formed between two atoms with a large electronegativity difference is predominantly:",
    options: { A: "covalent", B: "ionic (electrovalent)", C: "dative covalent", D: "metallic" },
    answer: "B",
    explanation: "A large electronegativity difference (typically > 1.7 to 2.0) leads to complete transfer of electrons from the electropositive atom to the electronegative atom, forming an ionic bond."
  },
  {
    id: 518, year: 1998,
    question: "The geometric shape of an ammonia (NH3) molecule is described as:",
    options: { A: "linear", B: "trigonal planar", C: "trigonal pyramidal", D: "tetrahedral" },
    answer: "C",
    explanation: "Nitrogen in NH3 has 3 bonding pairs and 1 lone pair of electrons. The repulsion from the lone pair distorts the geometry into a trigonal pyramid."
  },
  {
    id: 519, year: 1998,
    question: "A given mass of gas occupies 400 cm3 at 27°C and 760 mmHg. What volume will it occupy at 87°C and 760 mmHg?",
    options: { A: "320 cm3", B: "480 cm3", C: "540 cm3", D: "600 cm3" },
    answer: "B",
    explanation: "At constant pressure (760 mmHg), Charles's Law applies: V1 / T1 = V2 / T2. T1 = 27 + 273 = 300 K; T2 = 87 + 273 = 360 K. V2 = (400 × 360) / 300 = 480 cm3."
  },
  {
    id: 520, year: 1998,
    question: "The solubility of a salt at 30°C is 0.50 mol/dm3. What mass of the salt is dissolved in 250 cm3 of its saturated solution at 30°C? [Molar mass of salt = 101 g/mol]",
    options: { A: "6.31 g", B: "12.6 g", C: "25.3 g", D: "50.5 g" },
    answer: "B",
    explanation: "Volume in dm3 = 250 / 1000 = 0.25 dm3. Moles = 0.50 mol/dm3 × 0.25 dm3 = 0.125 mol. Mass = moles × molar mass = 0.125 mol × 101 g/mol = 12.625 g ≈ 12.6 g."
  },
  {
    id: 521, year: 1998,
    question: "What is the pH of a 0.005 M tetraoxosulphate(VI) acid (H2SO4) solution, assuming complete ionization?",
    options: { A: "1.0", B: "2.0", C: "2.3", D: "3.0" },
    answer: "B",
    explanation: "H2SO4 → 2H+ + SO4^2-. Total [H+] = 2 × 0.005 M = 0.01 M = 10^-2 M. pH = -log[H+] = -log(10^-2) = 2.0."
  },
  {
    id: 522, year: 1998,
    question: "Which of the following gaseous oxides is neutral to moist litmus paper?",
    options: { A: "Carbon(IV) oxide", B: "Sulphur(IV) oxide", C: "Carbon(II) oxide", D: "Nitrogen(IV) oxide" },
    answer: "C",
    explanation: "Carbon(II) oxide (CO) is a neutral oxide; it does not react with water to form an acid or base and has no effect on litmus paper."
  },
  {
    id: 523, year: 1998,
    question: "Determine the oxidation number of chromium in potassium heptaoxodichromate(VI), K2Cr2O7.",
    options: { A: "+3", B: "+5", C: "+6", D: "+7" },
    answer: "C",
    explanation: "In K2Cr2O7: 2(+1) + 2(Cr) + 7(-2) = 0 => 2 + 2Cr - 14 = 0 => 2Cr = 12 => Cr = +6."
  },
  {
    id: 524, year: 1998,
    question: "The chemical reaction taking place at the anode during any electrolytic process is:",
    options: { A: "reduction", B: "oxidation", C: "hydrolysis", D: "neutralization" },
    answer: "B",
    explanation: "Anode is the electrode where negative ions (anions) discharge by losing electrons, which is an oxidation reaction."
  },
  {
    id: 525, year: 1998,
    question: "For a chemical system at equilibrium, the addition of a suitable catalyst will:",
    options: {
      A: "shift the equilibrium toward the product side",
      B: "shift the equilibrium toward the reactant side",
      C: "increase the rates of both forward and reverse reactions equally",
      D: "increase the total enthalpy change of the reaction"
    },
    answer: "C",
    explanation: "A catalyst lowers activation energy equally for both forward and reverse reactions, allowing equilibrium to be reached faster without altering the equilibrium position or yield."
  },
  {
    id: 526, year: 1998,
    question: "In an exothermic chemical reaction, the total enthalpy of the products is:",
    options: {
      A: "greater than the enthalpy of the reactants",
      B: "less than the enthalpy of the reactants",
      C: "equal to the enthalpy of the reactants",
      D: "independent of the enthalpy of the reactants"
    },
    answer: "B",
    explanation: "Exothermic reactions release heat into the surroundings (ΔH < 0), meaning the final energy content (enthalpy) of products is lower than that of the initial reactants."
  },
  {
    id: 527, year: 1998,
    question: "Temporary hardness of water is caused by the presence of dissolved:",
    options: {
      A: "calcium hydrogentrioxocarbonate(IV)",
      B: "calcium tetraoxosulphate(VI)",
      C: "magnesium chloride",
      D: "sodium chloride"
    },
    answer: "A",
    explanation: "Temporary hardness is caused by dissolved Ca(HCO3)2 or Mg(HCO3)2, which decompose into insoluble carbonates upon boiling."
  },
  {
    id: 528, year: 1998,
    question: "Which of the following atmospheric pollutants is primarily responsible for the depletion of the stratospheric ozone layer?",
    options: { A: "Carbon(IV) oxide", B: "Chlorofluorocarbons (CFCs)", C: "Sulphur(IV) oxide", D: "Methane" },
    answer: "B",
    explanation: "CFCs release free chlorine radicals under UV radiation, which catalytically decompose ozone molecules (O3) into oxygen gas (O2)."
  },
  {
    id: 529, year: 1998,
    question: "Carbon(II) oxide is produced industrially by the incomplete combustion of fossil fuels or by passing steam over hot coke to form:",
    options: { A: "producer gas", B: "water gas", C: "natural gas", D: "refinery gas" },
    answer: "B",
    explanation: "Passing steam over white-hot coke (C + H2O → CO + H2) produces water gas, a mixture of carbon(II) oxide and hydrogen."
  },
  {
    id: 530, year: 1998,
    question: "Diamond is used industrially for cutting glass and drilling rocks because of its:",
    options: {
      A: "high electrical conductivity",
      B: "giant 3D covalent network structure causing extreme hardness",
      C: "low melting point",
      D: "layered hexagone lattice structure"
    },
    answer: "B",
    explanation: "Each carbon atom in diamond is tetrahedrally bonded to four other carbon atoms by strong sp3 covalent bonds in a rigid 3D lattice, making it extremely hard."
  },
  {
    id: 531, year: 1998,
    question: "Nitrogen gas can be prepared in the laboratory by heating an aqueous mixture of:",
    options: {
      A: "ammonium chloride and sodium dioxonitrate(III)",
      B: "sodium nitrate and concentrated H2SO4",
      C: "ammonium nitrate and water",
      D: "ammonia and oxygen"
    },
    answer: "A",
    explanation: "NH4Cl(aq) + NaNO2(aq) → NH4NO2(aq) + NaCl(aq). Upon gentle heating, unstable ammonium dioxonitrate(III) decomposes into nitrogen gas and water: NH4NO2(aq) → N2(g) + 2H2O(l)."
  },
  {
    id: 532, year: 1998,
    question: "The Contact process is used for the large-scale industrial manufacture of:",
    options: { A: "trioxonitrate(V) acid", B: "tetraoxosulphate(VI) acid", C: "ammonia", D: "hydrochloric acid" },
    answer: "B",
    explanation: "The Contact process converts SO2 to SO3 using vanadium(V) oxide catalyst, which is then absorbed to produce concentrated H2SO4."
  },
  {
    id: 533, year: 1998,
    question: "Which halogen exists as a dark reddish-liquid at standard temperature and pressure?",
    options: { A: "Fluorine", B: "Chlorine", C: "Bromine", D: "Iodine" },
    answer: "C",
    explanation: "Bromine (Br2) is the only non-metallic element that is a volatile, dark red-brown liquid at room temperature."
  },
  {
    id: 534, year: 1998,
    question: "In the blast furnace, iron(III) oxide (haematite) is reduced to iron metal primarily by:",
    options: { A: "carbon dioxide", B: "carbon monoxide", C: "hydrogen gas", D: "limestone" },
    answer: "B",
    explanation: "At high furnace temperatures, carbon monoxide (CO) acts as the main reducing agent: Fe2O3 + 3CO → 2Fe + 3CO2."
  },
  {
    id: 535, year: 1998,
    question: "The principal ore from which aluminium is extracted is:",
    options: { A: "haematite", B: "bauxite", C: "galena", D: "cassiterite" },
    answer: "B",
    explanation: "Bauxite (hydrated aluminium oxide, Al2O3.2H2O) is the primary commercial ore of aluminium."
  },
  {
    id: 536, year: 1998,
    question: "Bronze is a metallic alloy composed mainly of:",
    options: { A: "copper and zinc", B: "copper and tin", C: "lead and tin", D: "iron and nickel" },
    answer: "B",
    explanation: "Bronze is an alloy consisting primarily of copper combined with tin."
  },
  {
    id: 537, year: 1998,
    question: "What is the systematic IUPAC name for CH3-CH(OH)-CH3?",
    options: { A: "Propan-1-ol", B: "Propan-2-ol", C: "Propanoic acid", D: "Propanone" },
    answer: "B",
    explanation: "A 3-carbon chain with a hydroxyl group (-OH) attached to carbon 2 is named propan-2-ol."
  },
  {
    id: 538, year: 1998,
    question: "Glucose and fructose are examples of structural isomers known as:",
    options: { A: "chain isomers", B: "positional isomers", C: "functional group isomers", D: "geometrical isomers" },
    answer: "C",
    explanation: "Both glucose and fructose have the molecular formula C6H12O6; glucose is an aldohexose (contains aldehyde -CHO) and fructose is a ketohexose (contains ketone -C=O)."
  },
  {
    id: 539, year: 1998,
    question: "The reaction between methane and chlorine in diffuse sunlight proceeds by a mechanism called:",
    options: { A: "electrophilic addition", B: "free-radical substitution", C: "nucleophilic substitution", D: "elimination" },
    answer: "B",
    explanation: "UV light homolytically cleaves Cl2 into chlorine free radicals, initiating a chain reaction of free-radical substitution."
  },
  {
    id: 540, year: 1998,
    question: "When ethene gas is passed into hydrogen gas in the presence of a finely divided nickel catalyst at 150°C, the product formed is:",
    options: { A: "ethane", B: "ethyne", C: "ethanol", D: "ethanoic acid" },
    answer: "A",
    explanation: "C2H4 + H2 → C2H6. Catalytic hydrogenation converts the unsaturated alkene (ethene) into a saturated alkane (ethane)."
  },
  {
    id: 541, year: 1998,
    question: "Which of the following hydrocarbons gives a reddish-brown precipitate when bubbled through ammoniacal copper(I) chloride solution?",
    options: { A: "Ethane", B: "Ethene", C: "Ethyne", D: "Benzene" },
    answer: "C",
    explanation: "Ethyne (terminal alkyne) contains acidic hydrogen atoms attached to sp-hybridized carbons, reacting to form insoluble copper(I) dicarbide (copper acetylide)."
  },
  {
    id: 542, year: 1998,
    question: "The reaction of benzene with concentrated nitric acid in the presence of concentrated sulfuric acid at 50°C is termed:",
    options: { A: "sulfonation", B: "nitration", C: "halogenation", D: "alkylation" },
    answer: "B",
    explanation: "Nitration of benzene introduces a nitro group (-NO2) into the aromatic ring via electrophilic aromatic substitution, yielding nitrobenzene."
  },
  {
    id: 543, year: 1998,
    question: "Oxidation of a primary alkanol with acidified potassium dichromate(VI) yields an alkanal, which upon further oxidation gives a:",
    options: { A: "secondary alkanol", B: "tertiary alkanol", C: "alkanoic acid", D: "ketone" },
    answer: "C",
    explanation: "Primary alkanol → Alkanal (aldehyde) → Alkanoic acid (carboxylic acid)."
  },
  {
    id: 544, year: 1998,
    question: "Ethanoic acid reacts with sodium trioxocarbonate(IV) solution to produce effervescence due to the evolution of:",
    options: { A: "hydrogen gas", B: "carbon(IV) oxide gas", C: "oxygen gas", D: "carbon(II) oxide gas" },
    answer: "B",
    explanation: "2CH3COOH + Na2CO3 → 2CH3COONa + H2O + CO2(g). Carboxylic acids liberate CO2 from carbonates."
  },
  {
    id: 545, year: 1998,
    question: "Hydrolysis of fats and oils with hot aqueous sodium hydroxide yields soap and:",
    options: { A: "ethanol", B: "propane-1,2,3-triol (glycerol)", C: "ethanoic acid", D: "glucose" },
    answer: "B",
    explanation: "Triglycerides (fats/oils) hydrolyze in alkali (saponification) to produce sodium salts of fatty acids (soap) and glycerol."
  },
  {
    id: 546, year: 1998,
    question: "A radioactive isotope has a half-life of 3 hours. If the initial count rate is 800 counts per minute, what will be the count rate after 9 hours?",
    options: { A: "400 counts/min", B: "200 counts/min", C: "100 counts/min", D: "50 counts/min" },
    answer: "C",
    explanation: "Number of half-lives n = 9 / 3 = 3. Remaining activity = 800 × (1/2)^3 = 800 / 8 = 100 counts per minute."
  },
  {
    id: 547, year: 1998,
    question: "Which of the following gases turns damp red litmus paper blue and forms dense white fumes when brought near a glass rod dipped in concentrated HCl?",
    options: { A: "Sulphur(IV) oxide", B: "Ammonia", C: "Chlorine", D: "Hydrogen sulfide" },
    answer: "B",
    explanation: "Ammonia (NH3) is basic (turns red litmus blue) and reacts with HCl vapor to form ammonium chloride solid fumes: NH3(g) + HCl(g) → NH4Cl(s)."
  },
  {
    id: 548, year: 1998,
    question: "Adding aqueous sodium hydroxide dropwise until in excess to a solution containing Zn2+ ions produces:",
    options: {
      A: "a white precipitate insoluble in excess NaOH",
      B: "a white precipitate soluble in excess NaOH forming a clear solution",
      C: "a blue precipitate",
      D: "no visible change"
    },
    answer: "B",
    explanation: "Zn2+ forms amphoteric Zn(OH)2 white precipitate which dissolves in excess NaOH to form the soluble zincate complex [Zn(OH)4]^2-."
  },
  {
    id: 549, year: 1998,
    question: "An emulsion is a colloidal dispersion of a:",
    options: {
      A: "liquid in a gas",
      B: "liquid in another liquid",
      C: "solid in a liquid",
      D: "gas in a liquid"
    },
    answer: "B",
    explanation: "An emulsion consists of fine droplets of one liquid dispersed throughout another immiscible liquid medium (e.g., milk, mayonnaise)."
  },
  {
    id: 550, year: 1998,
    question: "To electroplate an iron spoon with copper, the spoon must be made the:",
    options: { A: "anode", B: "cathode", C: "electrolyte", D: "diaphragm" },
    answer: "B",
    explanation: "The article to be plated is attached to the negative terminal (cathode), so copper ions (Cu2+) in solution migrate to it and gain electrons to deposit metal: Cu2+ + 2e- → Cu(s)."
  },
  {
    id: 551, year: 1998,
    question: "The boiling point of a liquid is defined as the temperature at which its saturated vapor pressure:",
    options: {
      A: "exceeds atmospheric pressure",
      B: "equals prevailing atmospheric pressure",
      C: "is zero",
      D: "equals its critical pressure"
    },
    answer: "B",
    explanation: "A liquid boils when its internal vapor pressure equals the surrounding external atmospheric pressure."
  },
  {
    id: 552, year: 1998,
    question: "What volume of carbon(IV) oxide at s.t.p. is liberated when 10.0 g of calcium trioxocarbonate(IV) is completely decomposed by heat? [Ca = 40, C = 12, O = 16, Molar volume at s.t.p. = 22.4 dm3]",
    options: { A: "1.12 dm3", B: "2.24 dm3", C: "4.48 dm3", D: "22.4 dm3" },
    answer: "B",
    explanation: "CaCO3(s) → CaO(s) + CO2(g). Molar mass of CaCO3 = 40 + 12 + 48 = 100 g/mol. Moles CaCO3 = 10.0 / 100 = 0.10 mol. CO2 produced = 0.10 mol. Volume of CO2 = 0.10 × 22.4 dm3 = 2.24 dm3."
  },
  {
    id: 553, year: 1998,
    question: "Which of the following compounds is an acidic oxide?",
    options: { A: "Na2O", B: "CaO", C: "SO2", D: "CuO" },
    answer: "C",
    explanation: "Sulphur(IV) oxide (SO2) is a non-metal oxide that reacts with water to form sulphurous acid (H2SO3)."
  },
  {
    id: 554, year: 1998,
    question: "Across Period 3 of the periodic table from sodium to chlorine, the atomic radius generally:",
    options: { A: "increases", B: "decreases", C: "remains constant", D: "increases then decreases" },
    answer: "B",
    explanation: "Across a period, nuclear charge increases while shielding remains roughly constant, pulling valence shell electrons closer and decreasing atomic radius."
  },
  {
    id: 555, year: 1998,
    question: "The functional group characteristic of alkanals (aldehydes) is:",
    options: { A: "-OH", B: "-CHO", C: "-COOH", D: "-CO-" },
    answer: "B",
    explanation: "The formyl group (-CHO) is the functional group defining alkanals."
  },
  {
    id: 556, year: 1998,
    question: "Yeast converts glucose solution into ethanol during fermentation by secreting the enzyme complex called:",
    options: { A: "diastase", B: "zymase", C: "maltase", D: "ptyalin" },
    answer: "B",
    explanation: "Zymase is the enzyme mixture produced by yeast that catalyzes the breakdown of simple sugars (glucose) into ethanol and CO2."
  },
  {
    id: 557, year: 1998,
    question: "Synthetic detergents are preferred to soap for laundering in hard water areas because:",
    options: {
      A: "they form insoluble calcium salts",
      B: "their calcium and magnesium salts are soluble in water",
      C: "they are completely non-biodegradable",
      D: "they are strong acids"
    },
    answer: "B",
    explanation: "The calcium and magnesium salts of synthetic detergents (sulfonates/sulfates) are soluble, preventing scum formation."
  },
  {
    id: 558, year: 1998,
    question: "Determine the percentage by mass of water of crystallization in copper(II) tetraoxosulphate(VI) pentahydrate, CuSO4.5H2O. [Cu = 63.5, S = 32, O = 16, H = 1]",
    options: { A: "18.0%", B: "36.1%", C: "63.9%", D: "72.0%" },
    answer: "B",
    explanation: "Molar mass = 63.5 + 32 + 4(16) + 5(18) = 159.5 + 90 = 249.5 g/mol. Mass of 5H2O = 90 g. Percentage water = (90 / 249.5) × 100% = 36.07% ≈ 36.1%."
  },
  {
    id: 559, year: 1998,
    question: "In an operating galvanic (voltaic) cell, electrons flow through the external circuit from the:",
    options: {
      A: "anode to the cathode",
      B: "cathode to the anode",
      C: "salt bridge to the cathode",
      D: "electrolyte to the anode"
    },
    answer: "A",
    explanation: "Oxidation occurs at the anode releasing electrons, which travel through the external wire to the cathode where reduction takes place."
  },
  {
    id: 560, year: 1998,
    question: "An alpha particle (α-particle) consists of:",
    options: {
      A: "1 proton and 1 neutron",
      B: "2 protons and 2 neutrons",
      C: "2 protons and 2 electrons",
      D: "4 neutrons only"
    },
    answer: "B",
    explanation: "An alpha particle is identical to a helium-4 nucleus (4_2He^2+), containing 2 protons and 2 neutrons."
  },
  {
    id: 561, year: 1998,
    question: "Which of the following organic compounds will rapidly decolorize acidified potassium tetraoxomanganate(VII) solution?",
    options: { A: "Ethane", B: "Ethene", C: "Methane", D: "Propane" },
    answer: "B",
    explanation: "Unsaturated hydrocarbons like ethene undergo oxidation by acidified KMnO4 (Baeyer's test), turning the purple solution colorless."
  },
  // ================================================================
// CHEMISTRY 1999 (IDs 562–611)
// Fix applied: #567 answer changed from "C" to "B" to match explanation
// (abnormally high boiling point of water vs H2S is due to hydrogen bonding,
// not dative bonds)
// ================================================================

  {
    id: 562, year: 1999,
    question: "Pure water is chemically neutral because:",
    options: {
      A: "it contains no dissolved ions",
      B: "the concentration of hydrogen ions equals the concentration of hydroxide ions",
      C: "it is a covalent compound",
      D: "its pH is equal to 14"
    },
    answer: "B",
    explanation: "Water self-ionizes into equal concentrations of hydrogen ions ([H+]) and hydroxide ions ([OH-]), resulting in a neutral pH of 7 at 25°C."
  },
  {
    id: 563, year: 1999,
    question: "A mixture of nitrogen, oxygen, and helium gases exerts a total pressure of 760 mmHg. If the partial pressures of nitrogen and oxygen are 560 mmHg and 160 mmHg respectively, calculate the partial pressure of helium.",
    options: { A: "40 mmHg", B: "80 mmHg", C: "140 mmHg", D: "200 mmHg" },
    answer: "A",
    explanation: "According to Dalton's Law of Partial Pressures: P_total = P_N2 + P_O2 + P_He. 760 = 560 + 160 + P_He => P_He = 760 - 720 = 40 mmHg."
  },
  {
    id: 564, year: 1999,
    question: "The primary function of limestone (calcium trioxocarbonate(IV)) added to the blast furnace during iron extraction is to:",
    options: {
      A: "act as a reducing agent",
      B: "react with silicon dioxide impurity to form slag",
      C: "act as fuel to heat the furnace",
      D: "lower the melting point of iron metal"
    },
    answer: "B",
    explanation: "Limestone thermally decomposes to calcium oxide (CaO), which reacts with sandy silica impurities (SiO2) to form molten slag (CaSiO3)."
  },
  {
    id: 565, year: 1999,
    question: "What volume of 0.1 M hydrochloric acid is required to completely neutralize 25.0 cm3 of 0.2 M sodium trioxocarbonate(IV) solution?",
    options: { A: "25.0 cm3", B: "50.0 cm3", C: "75.0 cm3", D: "100.0 cm3" },
    answer: "D",
    explanation: "Reaction: 2HCl + Na2CO3 → 2NaCl + H2O + CO2. Using (Ca × Va) / (Cb × Vb) = 2/1 => (0.1 × Va) / (0.2 × 25.0) = 2/1 => 0.1 Va = 10 => Va = 100.0 cm3."
  },
  {
    id: 566, year: 1999,
    question: "Which of the following alkanes displays structural isomerism?",
    options: { A: "Methane", B: "Ethane", C: "Propane", D: "Butane" },
    answer: "D",
    explanation: "Butane (C4H10) is the simplest alkane capable of structural isomerism, existing as straight-chain butane and branched 2-methylpropane."
  },
  {
    id: 567, year: 1999,
    question: "The abnormally high boiling point of water compared to hydrogen sulfide is attributed to the presence of:",
    options: { A: "covalent bonds", B: "intermolecular hydrogen bonds", C: "dative bonds", D: "van der Waals forces" },
    answer: "B",
    explanation: "Strong intermolecular hydrogen bonding between highly electronegative oxygen atoms and hydrogen atoms requires significant thermal energy to break."
  },
  {
    id: 568, year: 1999,
    question: "Which of the following metallic oxides displays amphoteric character?",
    options: { A: "Aluminium oxide (Al2O3)", B: "Calcium oxide (CaO)", C: "Sodium oxide (Na2O)", D: "Copper(II) oxide (CuO)" },
    answer: "A",
    explanation: "Aluminium oxide (Al2O3) reacts with both strong acids and strong bases to yield salt and water, defining its amphoteric behavior."
  },
  {
    id: 569, year: 1999,
    question: "Determine the empirical formula of an organic compound containing 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. [C = 12, H = 1, O = 16]",
    options: { A: "CHO", B: "CH2O", C: "C2H4O", D: "CH3O" },
    answer: "B",
    explanation: "Moles C = 40.0 / 12 = 3.33; Moles H = 6.7 / 1 = 6.70; Moles O = 53.3 / 16 = 3.33. Ratio = 3.33 : 6.70 : 3.33 = 1 : 2 : 1. Empirical formula = CH2O."
  },
  {
    id: 570, year: 1999,
    question: "Electrovalent (ionic) compounds are generally characterized by:",
    options: {
      A: "low melting points and high volatility",
      B: "solubility in non-polar organic solvents",
      C: "high melting and boiling points",
      D: "non-conduction of electricity in molten form"
    },
    answer: "C",
    explanation: "Strong electrostatic forces of attraction between oppositely charged ions in the crystal lattice require high thermal energy to disrupt."
  },
  {
    id: 571, year: 1999,
    question: "The oxidation state of chlorine in potassium trioxochlorate(V), KClO3, is:",
    options: { A: "+1", B: "+3", C: "+5", D: "+7" },
    answer: "C",
    explanation: "In KClO3: (+1) + Cl + 3(-2) = 0 => Cl - 5 = 0 => Cl = +5."
  },
  {
    id: 572, year: 1999,
    question: "Faraday's second law of electrolysis states that when the same quantity of electricity is passed through different electrolytes, the masses of substances deposited are proportional to their:",
    options: { A: "atomic numbers", B: "chemical equivalents", C: "densities", D: "valencies" },
    answer: "B",
    explanation: "Faraday's second law establishes that mass deposited is directly proportional to chemical equivalent mass (molar mass divided by charge)."
  },
  {
    id: 573, year: 1999,
    question: "The general gas equation P1V1/T1 = P2V2/T2 is derived by combining:",
    options: {
      A: "Boyle's law and Charles's law",
      B: "Boyle's law and Gay-Lussac's law",
      C: "Charles's law and Graham's law",
      D: "Dalton's law and Avogadro's law"
    },
    answer: "A",
    explanation: "Combining Boyle's law (V ∝ 1/P) and Charles's law (V ∝ T) yields the ideal gas combination equation P1V1/T1 = P2V2/T2."
  },
  {
    id: 574, year: 1999,
    question: "Which of the following hydrocarbons is unsaturated?",
    options: { A: "C2H6", B: "C3H8", C: "C4H8", D: "C5H12" },
    answer: "C",
    explanation: "C4H8 fits the general formula CnH2n for alkenes, indicating the presence of a double bond (unsaturated)."
  },
  {
    id: 575, year: 1999,
    question: "The raw materials used in the Solvay process for the manufacture of sodium trioxocarbonate(IV) are:",
    options: {
      A: "brine, limestone, and ammonia",
      B: "brine, gypsum, and ammonia",
      C: "limestone, silica, and ammonia",
      D: "brine, sulfur, and ammonia"
    },
    answer: "A",
    explanation: "The Solvay process uses concentrated sodium chloride solution (brine), limestone (CaCO3), and ammonia gas (NH3) to synthesize Na2CO3."
  },
  {
    id: 576, year: 1999,
    question: "Which of the following metals reacts vigorously with cold water to evolve hydrogen gas?",
    options: { A: "Iron", B: "Copper", C: "Sodium", D: "Zinc" },
    answer: "C",
    explanation: "Sodium is an alkali metal high in the electrochemical series and reacts violently with cold water: 2Na + 2H2O → 2NaOH + H2."
  },
  {
    id: 577, year: 1999,
    question: "Complete hydrolysis of sucrose yields:",
    options: {
      A: "glucose and fructose",
      B: "glucose and galactose",
      C: "glucose molecules only",
      D: "fructose and maltose"
    },
    answer: "A",
    explanation: "Sucrose is a disaccharide that hydrolyzes into equimolar quantities of glucose and fructose."
  },
  {
    id: 578, year: 1999,
    question: "The systematic IUPAC name for CH3-CH2-COOH is:",
    options: { A: "ethanoic acid", B: "propanoic acid", C: "butanoic acid", D: "methanoic acid" },
    answer: "B",
    explanation: "A continuous carboxylic acid chain containing 3 carbon atoms is named propanoic acid."
  },
  {
    id: 579, year: 1999,
    question: "When concentrated tetraoxosulphate(VI) acid is added to sugar crystals, a black spongy mass of carbon is produced. In this reaction, H2SO4 acts as a:",
    options: { A: "oxidizing agent", B: "dehydrating agent", C: "reducing agent", D: "catalyst" },
    answer: "B",
    explanation: "Conc. H2SO4 removes elements of water (H2O) from carbohydrates (C12H22O11), leaving behind black elemental carbon."
  },
  {
    id: 580, year: 1999,
    question: "The type of chemical bond formed when an ammonia molecule reacts with a hydrogen ion to form an ammonium ion (NH4+) is:",
    options: { A: "ionic", B: "covalent", C: "dative covalent (coordinate)", D: "hydrogen bond" },
    answer: "C",
    explanation: "The lone pair of electrons on the nitrogen atom of NH3 is shared with an electron-deficient H+ ion, forming a dative covalent bond."
  },
  {
    id: 581, year: 1999,
    question: "Fractional distillation is a separation technique based on differences in:",
    options: { A: "densities", B: "solubilities", C: "boiling points", D: "melting points" },
    answer: "C",
    explanation: "Fractional distillation separates miscible liquids with different boiling points by repeated vaporization and condensation."
  },
  {
    id: 582, year: 1999,
    question: "According to the Arrhenius theory, an acid is defined as a substance that:",
    options: {
      A: "produces hydroxide ions in aqueous solution",
      B: "produces hydrogen ions (H+) as the only positive ions in aqueous solution",
      C: "donates a pair of electrons",
      D: "accepts protons"
    },
    answer: "B",
    explanation: "Arrhenius defined acids as substances that dissociate in water to produce hydrogen ions (H+ or hydronium H3O+)."
  },
  {
    id: 583, year: 1999,
    question: "The presence of non-volatile impurities in a pure liquid compound causes its:",
    options: {
      A: "boiling point to decrease",
      B: "boiling point to increase and melting point to decrease",
      C: "boiling point and melting point both to decrease",
      D: "freezing point to increase"
    },
    answer: "B",
    explanation: "Impurities cause boiling point elevation and freezing/melting point depression."
  },
  {
    id: 584, year: 1999,
    question: "Which gas is commonly used in fire extinguishers because it does not support combustion and is denser than air?",
    options: { A: "Oxygen", B: "Nitrogen", C: "Carbon(IV) oxide", D: "Hydrogen" },
    answer: "C",
    explanation: "Carbon(IV) oxide (CO2) is dense, non-flammable, and smothers flames by blanketing the oxygen supply."
  },
  {
    id: 585, year: 1999,
    question: "Which of the following compounds is classified as a primary heavy chemical in industry?",
    options: { A: "Sodium hydroxide", B: "Tetraoxosulphate(VI) acid", C: "Hydrochloric acid", D: "Ammonia" },
    answer: "B",
    explanation: "Tetraoxosulphate(VI) acid is manufactured in vast tonnages worldwide, serving as the benchmark heavy chemical."
  },
  {
    id: 586, year: 1999,
    question: "The major constituent gas found in natural gas reserves is:",
    options: { A: "methane", B: "ethane", C: "propane", D: "butane" },
    answer: "A",
    explanation: "Methane (CH4) makes up 70% to 90% of raw natural gas."
  },
  {
    id: 587, year: 1999,
    question: "In the laboratory preparation of chlorine gas from concentrated HCl, manganese(IV) oxide serves as a/an:",
    options: { A: "catalyst", B: "oxidizing agent", C: "reducing agent", D: "dehydrating agent" },
    answer: "B",
    explanation: "MnO2 + 4HCl → MnCl2 + 2H2O + Cl2. Manganese is reduced from +4 to +2, acting as the oxidizing agent for chloride ions."
  },
  {
    id: 588, year: 1999,
    question: "Which of the following plastic materials is a thermosetting polymer?",
    options: { A: "Polythene", B: "Polypropene", C: "Bakelite", D: "Polyvinyl chloride (PVC)" },
    answer: "C",
    explanation: "Bakelite (phenol-formaldehyde resin) forms permanently cross-linked networks during molding and cannot be softened by reheating."
  },
  {
    id: 589, year: 1999,
    question: "How many valence electrons are present in an atom of phosphorus? [Atomic number = 15]",
    options: { A: "3", B: "5", C: "7", D: "8" },
    answer: "B",
    explanation: "Phosphorus electronic configuration is 1s2 2s2 2p6 3s2 3p3. The outermost (n=3) shell contains 2 + 3 = 5 valence electrons."
  },
  {
    id: 590, year: 1999,
    question: "Calculate the percentage by mass of nitrogen in ammonium trioxonitrate(V), NH4NO3. [N = 14, H = 1, O = 16]",
    options: { A: "17.5%", B: "28.0%", C: "35.0%", D: "42.0%" },
    answer: "C",
    explanation: "Molar mass of NH4NO3 = 14 + 4(1) + 14 + 3(16) = 80 g/mol. Mass of N = 2 × 14 = 28 g. Mass percentage of N = (28 / 80) × 100% = 35.0%."
  },
  {
    id: 591, year: 1999,
    question: "The breakdown of starch into maltose during grain germination is catalyzed by the enzyme:",
    options: { A: "zymase", B: "diastase", C: "invertase", D: "lipase" },
    answer: "B",
    explanation: "Diastase (amylase) hydrolyzes complex starch molecules into the disaccharide maltose."
  },
  {
    id: 592, year: 1999,
    question: "Which of the following elements belongs to Group 1 (alkali metals) of the periodic table?",
    options: { A: "Calcium", B: "Potassium", C: "Magnesium", D: "Aluminium" },
    answer: "B",
    explanation: "Potassium (K) has 1 valence electron (4s1) and belongs to Group 1."
  },
  {
    id: 593, year: 1999,
    question: "Which statement correctly describes a chemical system in dynamic equilibrium?",
    options: {
      A: "The forward and reverse reactions have stopped",
      B: "The rates of the forward and reverse reactions are equal",
      C: "Concentrations of reactants and products must be equal",
      D: "The catalyst has increased the equilibrium yield"
    },
    answer: "B",
    explanation: "Dynamic equilibrium occurs when the forward reaction rate equals the reverse reaction rate, maintaining constant concentrations."
  },
  {
    id: 594, year: 1999,
    question: "An aqueous solution with a pH value of 3 is best described as:",
    options: { A: "strongly alkaline", B: "weakly acidic", C: "strongly acidic", D: "neutral" },
    answer: "C",
    explanation: "pH values well below 7 (such as pH 3) indicate a high concentration of H+ ions, defining a strong acidic solution."
  },
  {
    id: 595, year: 1999,
    question: "The oxidation state of iron in iron(III) oxide, Fe2O3, is:",
    options: { A: "+1", B: "+2", C: "+3", D: "+4" },
    answer: "C",
    explanation: "2(Fe) + 3(-2) = 0 => 2Fe = 6 => Fe = +3."
  },
  {
    id: 596, year: 1999,
    question: "Alkanols react with alkanoic acids in the presence of concentrated H2SO4 to form:",
    options: { A: "ethers", B: "esters", C: "alkanals", D: "alkanones" },
    answer: "B",
    explanation: "Esterification: Alkanol + Alkanoic acid ⇌ Ester + Water."
  },
  {
    id: 597, year: 1999,
    question: "Which of the following hydrocarbons will decolorize reddish-brown bromine water?",
    options: { A: "Propane", B: "Propene", C: "Methane", D: "Ethane" },
    answer: "B",
    explanation: "Propene is an alkene containing a C=C double bond that undergoes addition reaction with bromine water, decolorizing it."
  },
  {
    id: 598, year: 1999,
    question: "Vulcanization of natural rubber involves heating crude rubber with sulfur in order to:",
    options: {
      A: "increase its elasticity and tensile strength",
      B: "make it softer and more soluble",
      C: "lower its melting point",
      D: "make it completely non-biodegradable"
    },
    answer: "A",
    explanation: "Sulfur forms cross-links between polymer chains, increasing toughness, heat resistance, and elasticity."
  },
  {
    id: 599, year: 1999,
    question: "Calculate the mass of sodium hydroxide (NaOH) required to prepare 500 cm3 of a 0.2 M aqueous solution. [Na = 23, O = 16, H = 1]",
    options: { A: "2.0 g", B: "4.0 g", C: "8.0 g", D: "16.0 g" },
    answer: "B",
    explanation: "Molar mass NaOH = 40 g/mol. Moles = Molarity × Volume(dm3) = 0.2 mol/dm3 × 0.5 dm3 = 0.1 mol. Mass = 0.1 mol × 40 g/mol = 4.0 g."
  },
  {
    id: 600, year: 1999,
    question: "In the Contact process for H2SO4 production, the catalyst used for oxidizing SO2 to SO3 is:",
    options: { A: "finely divided iron", B: "vanadium(V) oxide", C: "nickel metal", D: "platinum wire" },
    answer: "B",
    explanation: "Vanadium(V) oxide (V2O5) is the primary economic catalyst used in the oxidation step 2SO2 + O2 ⇌ 2SO3."
  },
  {
    id: 601, year: 1999,
    question: "Isomers are defined as organic compounds that have the same:",
    options: {
      A: "structural formula but different molecular formulas",
      B: "molecular formula but different structural arrangements",
      C: "physical properties but different chemical properties",
      D: "empirical formula only"
    },
    answer: "B",
    explanation: "Isomers share identical molecular formulas (same number/type of atoms) but differ in structural arrangement or spatial orientation."
  },
  {
    id: 602, year: 1999,
    question: "Which of the following process changes is endothermic?",
    options: {
      A: "Dissolution of solid NaOH in water",
      B: "Neutralization of strong acid with strong base",
      C: "Thermal decomposition of calcium trioxocarbonate(IV)",
      D: "Combustion of methane gas"
    },
    answer: "C",
    explanation: "Thermal decomposition of CaCO3 requires continuous absorption of heat energy (ΔH > 0) to break chemical bonds."
  },
  {
    id: 603, year: 1999,
    question: "Which noble gas is commonly used inside electric light bulbs to prevent oxidation of the tungsten filament?",
    options: { A: "Helium", B: "Neon", C: "Argon", D: "Krypton" },
    answer: "C",
    explanation: "Argon provides an unreactive inert atmosphere that prevents tungsten filament oxidation at high temperatures."
  },
  {
    id: 604, year: 1999,
    question: "The most suitable method for separating two miscible liquids with boiling points close to each other is:",
    options: { A: "simple distillation", B: "fractional distillation", C: "evaporation", D: "separating funnel" },
    answer: "B",
    explanation: "Fractional distillation equipped with a fractionating column efficiently separates miscible liquids with close boiling points."
  },
  {
    id: 605, year: 1999,
    question: "Water of crystallization can be removed from a hydrated salt by:",
    options: { A: "heating the salt", B: "cooling the salt", C: "filtration", D: "electrolysis" },
    answer: "A",
    explanation: "Heating drives off water of crystallization as steam, leaving behind the anhydrous salt."
  },
  {
    id: 606, year: 1999,
    question: "An element with electronic configuration 1s2 2s2 2p6 3s2 3p1 is:",
    options: { A: "Sodium", B: "Magnesium", C: "Aluminium", D: "Silicon" },
    answer: "C",
    explanation: "Total electron count = 2 + 2 + 6 + 2 + 1 = 13 electrons (Atomic Number 13 = Aluminium)."
  },
  {
    id: 607, year: 1999,
    question: "A gas that turns lime water milky due to the formation of a white precipitate is:",
    options: { A: "carbon(II) oxide", B: "carbon(IV) oxide", C: "sulphur(IV) oxide", D: "nitrogen(IV) oxide" },
    answer: "B",
    explanation: "CO2 reacts with calcium hydroxide (lime water) to form insoluble calcium trioxocarbonate(IV) precipitate: CO2 + Ca(OH)2 → CaCO3(s) + H2O."
  },
  {
    id: 608, year: 1999,
    question: "The half-life of a radioactive isotope is 10 days. How long will it take for 75% of the original sample to decay?",
    options: { A: "10 days", B: "15 days", C: "20 days", D: "30 days" },
    answer: "C",
    explanation: "If 75% decays, 25% remains (which is 1/4 or (1/2)^2). This corresponds to 2 half-lives = 2 × 10 days = 20 days."
  },
  {
    id: 609, year: 1999,
    question: "The conjugate base of HSO4- is:",
    options: { A: "H2SO4", B: "SO4^2-", C: "H3O+", D: "SO3^2-" },
    answer: "B",
    explanation: "A conjugate base is formed when an acid loses a proton (H+). HSO4- - H+ → SO4^2-."
  },
  {
    id: 610, year: 1999,
    question: "The process of coating iron sheet with a thin layer of zinc to protect it from corrosion is called:",
    options: { A: "anodizing", B: "galvanizing", C: "electroplating", D: "tinning" },
    answer: "B",
    explanation: "Galvanizing involves coating iron or steel with protective zinc to prevent rusting via sacrificial protection."
  },
  {
    id: 611, year: 1999,
    question: "Which of the following organic compounds reacts with sodium metal to liberate hydrogen gas?",
    options: { A: "Methoxyethane", B: "Ethanol", C: "Ethane", D: "Propanone" },
    answer: "B",
    explanation: "Alkanols contain weakly acidic hydroxyl hydrogens that react with electropositive sodium metal: 2C2H5OH + 2Na → 2C2H5ONa + H2(g)."
  },
  // ================================================================
  // CHEMISTRY 2000 — 50 questions
  // ================================================================
  {
    id: 612, year: 2000,
    question: "Which of the following is a physical change?",
    options: { A: "Burning of magnesium ribbon", B: "Dissolution of sodium metal in water", C: "Melting of ice", D: "Heating of ammonium chloride" },
    answer: "C",
    explanation: "Melting of ice is a change of state (solid to liquid) without forming a new chemical substance, hence it is a physical change. Burning, dissolution of sodium, and heating of ammonium chloride involve chemical changes or chemical decomposition/recombination."
  },
  {
    id: 613, year: 2000,
    question: "The separation of a mixture of sand, ammonium chloride and sodium chloride is best achieved by:",
    options: { A: "addition of water, filtration, then evaporation", B: "sublimation, addition of water, filtration, then evaporation", C: "filtration, evaporation, then sublimation", D: "sublimation, evaporation, then filtration" },
    answer: "B",
    explanation: "Ammonium chloride sublimes upon heating, leaving sand and sodium chloride behind. Adding water then dissolves the sodium chloride, leaving sand, which is removed by filtration. Evaporating the filtrate recovers solid sodium chloride."
  },
  {
    id: 614, year: 2000,
    question: "What is the mass of 0.5 mole of calcium trioxocarbonate(IV)? [Ca = 40, C = 12, O = 16]",
    options: { A: "50 g", B: "100 g", C: "60 g", D: "120 g" },
    answer: "A",
    explanation: "Calcium trioxocarbonate(IV) is CaCO3. Molar mass = 40 + 12 + (3 × 16) = 100 g/mol. Mass = moles × molar mass = 0.5 mol × 100 g/mol = 50 g."
  },
  {
    id: 615, year: 2000,
    question: "The number of protons, neutrons, and electrons in an atom represented by aluminium-27 (13-Al-27) is respectively:",
    options: { A: "13, 14, 13", B: "13, 13, 14", C: "14, 13, 13", D: "13, 14, 14" },
    answer: "A",
    explanation: "The atomic number is 13, meaning there are 13 protons and, in a neutral atom, 13 electrons. The mass number is 27, so the number of neutrons is 27 - 13 = 14."
  },
  {
    id: 616, year: 2000,
    question: "According to Charles's law, the volume of a given mass of gas is directly proportional to its:",
    options: { A: "Celsius temperature", B: "Kelvin temperature", C: "pressure at constant volume", D: "density at constant pressure" },
    answer: "B",
    explanation: "Charles's law states that the volume of a fixed mass of gas is directly proportional to its absolute temperature (Kelvin temperature) when pressure is kept constant (V proportional to T)."
  },
  {
    id: 617, year: 2000,
    question: "An element X has electronic configuration 1s2 2s2 2p6 3s2 3p3. What is the group and period of X?",
    options: { A: "Group 3, Period 3", B: "Group 5, Period 3", C: "Group 15, Period 3", D: "Group 5, Period 5" },
    answer: "C",
    explanation: "The highest principal quantum number is 3, placing it in Period 3. The valence shell contains 5 electrons (3s2 3p3), placing it in Group 15 (Group V)."
  },
  {
    id: 618, year: 2000,
    question: "Which of the following gases can be collected by downward displacement of air?",
    options: { A: "Ammonia", B: "Chlorine", C: "Hydrogen", D: "Methane" },
    answer: "B",
    explanation: "Chlorine is denser than air (molar mass 71 g/mol compared to average air ~29 g/mol), so it sinks and displaces air upward, which is downward displacement of air."
  },
  {
    id: 619, year: 2000,
    question: "The IUPAC name for the compound CH3CH(CH3)CH2CH3 is:",
    options: { A: "2-methylbutane", B: "3-methylbutane", C: "2-methylpropane", D: "1,1-dimethylpropane" },
    answer: "A",
    explanation: "The longest continuous carbon chain has 4 carbon atoms (butane). Numbering from the end closest to the branch gives a methyl group at carbon 2, yielding 2-methylbutane."
  },
  {
    id: 620, year: 2000,
    question: "What volume of oxygen gas at STP is required to burn completely 0.5 mole of methane?",
    options: { A: "11.2 dm3", B: "22.4 dm3", C: "33.6 dm3", D: "44.8 dm3" },
    answer: "B",
    explanation: "The combustion equation is CH4 + 2O2 -> CO2 + 2H2O. 1 mole of CH4 requires 2 moles of O2. Thus, 0.5 mole of CH4 requires 0.5 × 2 = 1.0 mole of O2. At STP, 1 mole of gas occupies 22.4 dm3."
  },
  {
    id: 621, year: 2000,
    question: "Hardness of water caused by the presence of calcium hydrogensulphate can be removed by:",
    options: { A: "boiling only", B: "addition of washing soda only", C: "filtration", D: "adding sodium chloride" },
    answer: "A",
    explanation: "Temporary hardness caused by calcium hydrogensulphate Ca(HCO3)2 is easily removed by boiling, which decomposes it into insoluble calcium carbonate, water, and carbon dioxide."
  },
  {
    id: 622, year: 2000,
    question: "The process of coating iron with zinc to prevent rusting is known as:",
    options: { A: "electroplating", B: "galvanizing", C: "sacrificial protection", D: "annealing" },
    answer: "B",
    explanation: "Galvanizing is the specific process of applying a protective zinc coating to iron or steel to prevent corrosion and rusting."
  },
  {
    id: 623, year: 2000,
    question: "Which of the following alloys contains copper and zinc?",
    options: { A: "Bronze", B: "Brass", C: "Solder", D: "Type metal" },
    answer: "B",
    explanation: "Brass is an alloy of copper and zinc, whereas bronze is an alloy of copper and tin."
  },
  {
    id: 624, year: 2000,
    question: "The oxidation number of sulphur in H2SO4 is:",
    options: { A: "+2", B: "+4", C: "+6", D: "-2" },
    answer: "C",
    explanation: "Let the oxidation number of S be x. For H2SO4: 2(+1) + x + 4(-2) = 0, which gives 2 + x - 8 = 0, so x = +6."
  },
  {
    id: 625, year: 2000,
    question: "Which of the following represents an endothermic reaction?",
    options: { A: "Neutralization of an acid by a base", B: "Combustion of petrol", C: "Thermal decomposition of calcium carbonate", D: "Dissolution of NaOH in water" },
    answer: "C",
    explanation: "Thermal decomposition requires continuous heat input to break chemical bonds, making it endothermic (positive enthalpy change)."
  },
  {
    id: 626, year: 2000,
    question: "The functional group present in alkanols is:",
    options: { A: "-COOH", B: "-OH", C: "-CHO", D: "-CO-" },
    answer: "B",
    explanation: "Alkanols (alcohols) are characterized by the hydroxyl functional group, -OH."
  },
  {
    id: 627, year: 2000,
    question: "In the Haber process for the manufacture of ammonia, the catalyst used is:",
    options: { A: "finely divided iron", B: "vanadium(V) oxide", C: "nickel", D: "manganese(IV) oxide" },
    answer: "A",
    explanation: "Finely divided iron (promoted with metal oxides like potassium and aluminium oxides) is the standard catalyst used in the Haber process."
  },
  {
    id: 628, year: 2000,
    question: "The gas that turns limewater milky and is odorless is:",
    options: { A: "Carbon(II) oxide", B: "Carbon(IV) oxide", C: "Sulphur(IV) oxide", D: "Hydrogen sulphide" },
    answer: "B",
    explanation: "Carbon(IV) oxide (CO2) is colorless, odorless, and reacts with limewater Ca(OH)2 to form an insoluble white precipitate of calcium carbonate."
  },
  {
    id: 629, year: 2000,
    question: "A solution with a pH of 2 is:",
    options: { A: "strongly basic", B: "weakly basic", C: "strongly acidic", D: "neutral" },
    answer: "C",
    explanation: "A pH value of 2 is well below 7, indicating a high concentration of hydrogen ions and a strongly acidic solution."
  },
  {
    id: 630, year: 2000,
    question: "Which of the following elements is a transition metal?",
    options: { A: "Calcium", B: "Sodium", C: "Iron", D: "Aluminium" },
    answer: "C",
    explanation: "Iron is a d-block transition metal, whereas calcium and sodium are s-block metals and aluminium is a p-block metal."
  },
  {
    id: 631, year: 2000,
    question: "The empirical formula of a compound containing 80% carbon and 20% hydrogen by mass is: [C = 12, H = 1]",
    options: { A: "CH3", B: "CH2", C: "C2H5", D: "CH" },
    answer: "A",
    explanation: "Moles of C = 80 / 12 = 6.67. Moles of H = 20 / 1 = 20. Ratio C:H = 6.67 : 20 = 1 : 3, giving the empirical formula CH3."
  },
  {
    id: 632, year: 2000,
    question: "Which of the following substances undergoes sublimation?",
    options: { A: "Sodium chloride", B: "Iodine", C: "Glucose", D: "Copper(II) sulphate pentahydrate" },
    answer: "B",
    explanation: "Iodine crystals pass directly from the solid state to the vapor state upon heating without melting."
  },
  {
    id: 633, year: 2000,
    question: "The type of bonding present in ammonium chloride (NH4Cl) is:",
    options: { A: "covalent only", B: "electrovalent only", C: "covalent, electrovalent and coordinate", D: "metallic only" },
    answer: "C",
    explanation: "Ammonium chloride contains ionic bonding between NH4+ and Cl-, covalent bonding within the ions, and a coordinate (dative) covalent bond forming the ammonium ion."
  },
  {
    id: 634, year: 2000,
    question: "What mass of sodium hydroxide is required to prepare 250 cm3 of 0.1 M solution? [Na = 23, O = 16, H = 1]",
    options: { A: "1.0 g", B: "4.0 g", C: "0.5 g", D: "2.0 g" },
    answer: "A",
    explanation: "Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol. Moles needed = concentration × volume in dm3 = 0.1 mol/dm3 × 0.250 dm3 = 0.025 mol. Mass = 0.025 mol × 40 g/mol = 1.0 g."
  },
  {
    id: 635, year: 2000,
    question: "The IUPAC name for CH3COOH is:",
    options: { A: "methanoic acid", B: "ethanoic acid", C: "propanoic acid", D: "acetic acid" },
    answer: "B",
    explanation: "CH3COOH contains two carbon atoms, making its systematic IUPAC name ethanoic acid."
  },
  {
    id: 636, year: 2000,
    question: "Which of the following is a secondary alkanol?",
    options: { A: "Propan-1-ol", B: "2-methylpropan-2-ol", C: "Propan-2-ol", D: "Ethanol" },
    answer: "C",
    explanation: "Propan-2-ol has the hydroxyl group attached to a carbon atom that is bonded to two other carbon atoms, defining a secondary alcohol."
  },
  {
    id: 637, year: 2000,
    question: "Bronze is an alloy of copper and:",
    options: { A: "zinc", B: "tin", C: "lead", D: "iron" },
    answer: "B",
    explanation: "Bronze is a traditional metal alloy consisting primarily of copper combined with tin."
  },
  {
    id: 638, year: 2000,
    question: "The gas produced when dilute hydrochloric acid reacts with iron(II) sulphide is:",
    options: { A: "chlorine", B: "hydrogen", C: "hydrogen sulphide", D: "sulphur(IV) oxide" },
    answer: "C",
    explanation: "FeS + 2HCl -> FeCl2 + H2S. Hydrogen sulphide gas is released, identifiable by its characteristic rotten egg odor."
  },
  {
    id: 639, year: 2000,
    question: "Which of the following compounds is a secondary amine?",
    options: { A: "Ethylamine", B: "Diethylamine", C: "Triethylamine", D: "Methylamine" },
    answer: "B",
    explanation: "Diethylamine has two ethyl groups attached to the nitrogen atom ((C2H5)2NH), making it a secondary amine."
  },
  {
    id: 640, year: 2000,
    question: "The process of separating crude petroleum into fractions with different boiling ranges is called:",
    options: { A: "destructive distillation", B: "fractional distillation", C: "cracking", D: "polymerization" },
    answer: "B",
    explanation: "Fractional distillation is used in refineries to separate crude oil into useful hydrocarbon fractions based on differences in their boiling points."
  },
  {
    id: 641, year: 2000,
    question: "Which of the following ions will give a white precipitate with aqueous sodium hydroxide that is soluble in excess sodium hydroxide?",
    options: { A: "Ca2+", B: "Cu2+", C: "Zn2+", D: "Fe2+" },
    answer: "C",
    explanation: "Zn2+ forms a white gelatinous precipitate of zinc hydroxide with NaOH, which redissolves in excess alkali to form a colorless zincate solution."
  },
  {
    id: 642, year: 2000,
    question: "The oxidation state of manganese in KMnO4 is:",
    options: { A: "+2", B: "+4", C: "+6", D: "+7" },
    answer: "D",
    explanation: "For KMnO4: +1 + x + 4(-2) = 0, leading to 1 + x - 8 = 0, so x = +7."
  },
  {
    id: 643, year: 2000,
    question: "Which of the following represents an aromatic hydrocarbon?",
    options: { A: "Hexane", B: "Cyclohexane", C: "Benzene", D: "Hexene" },
    answer: "C",
    explanation: "Benzene (C6H6) is the fundamental aromatic hydrocarbon containing a planar ring system with delocalized pi electrons."
  },
  {
    id: 644, year: 2000,
    question: "The general formula for cycloalkanes is:",
    options: { A: "CnH2n+2", B: "CnH2n", C: "CnH2n-2", D: "CnH2n-6" },
    answer: "B",
    explanation: "Cycloalkanes have a closed ring structure that removes two hydrogen atoms compared to open-chain alkanes, giving the general formula CnH2n."
  },
  {
    id: 645, year: 2000,
    question: "What volume of carbon(IV) oxide is produced at STP when 10 g of CaCO3 is treated with excess dilute HCl? [Ca = 40, C = 12, O = 16]",
    options: { A: "1.12 dm3", B: "2.24 dm3", C: "11.2 dm3", D: "22.4 dm3" },
    answer: "B",
    explanation: "CaCO3 molar mass = 100 g/mol. Moles of CaCO3 = 10 / 100 = 0.1 mol. From CaCO3 + 2HCl -> CaCl2 + H2O + CO2, 0.1 mol of CO2 is produced. Volume at STP = 0.1 mol × 22.4 dm3/mol = 2.24 dm3."
  },
  {
    id: 646, year: 2000,
    question: "Soap is manufactured by the hydrolysis of fats and oils using:",
    options: { A: "dilute hydrochloric acid", B: "sodium hydroxide solution", C: "concentrated tetraoxosulphate(VI) acid", D: "sodium chloride solution" },
    answer: "B",
    explanation: "Saponification involves heating triglycerides with sodium hydroxide solution to produce soap (sodium salts of fatty acids) and glycerol."
  },
  {
    id: 647, year: 2000,
    question: "Which of the following is a non-reducing sugar?",
    options: { A: "Glucose", B: "Fructose", C: "Sucrose", D: "Maltose" },
    answer: "C",
    explanation: "Sucrose is a non-reducing disaccharide because its glycosidic linkage involves the anomeric carbon atoms of both constituent monosaccharides."
  },
  {
    id: 648, year: 2000,
    question: "The process by which starch is converted to maltose is catalyzed by the enzyme:",
    options: { A: "zymase", B: "invertase", C: "ptyalin (amylase)", D: "urease" },
    answer: "C",
    explanation: "Amylase (ptyalin), found in saliva and malt, catalyzes the breakdown of complex starch molecules into maltose."
  },
  {
    id: 649, year: 2000,
    question: "Which of the following substances is used as a drying agent for ammonia gas?",
    options: { A: "Concentrated H2SO4", B: "Phosphorus(V) oxide", C: "Fused calcium chloride", D: "Quicklime (CaO)" },
    answer: "D",
    explanation: "Quicklime is a basic drying agent that does not react with alkaline ammonia gas. Acidic drying agents like H2SO4 react with ammonia."
  },
  {
    id: 650, year: 2000,
    question: "The radioactive emission with the highest ionizing power is:",
    options: { A: "alpha particles", B: "beta particles", C: "gamma rays", D: "X-rays" },
    answer: "A",
    explanation: "Alpha particles possess high mass and a double positive charge, giving them strong ionizing power despite lower penetrating ability."
  },
  {
    id: 651, year: 2000,
    question: "The solubility of a salt at 30°C is 40 g per 100 g of water. What is the mass of salt in 250 g of a saturated solution at the same temperature?",
    options: { A: "40 g", B: "71.4 g", C: "100 g", D: "142.8 g" },
    answer: "B",
    explanation: "Total mass of saturated solution = 100 g water + 40 g salt = 140 g. Mass of salt = (40 / 140) × 250 g = 71.43 g."
  },
  {
    id: 652, year: 2000,
    question: "Which of the following elements burns with a brick-red flame test?",
    options: { A: "Sodium", B: "Calcium", C: "Potassium", D: "Copper" },
    answer: "B",
    explanation: "Calcium compounds impart a characteristic brick-red color when heated in a Bunsen burner flame."
  },
  {
    id: 653, year: 2000,
    question: "The number of isomers possible for C4H10 is:",
    options: { A: "2", B: "3", C: "4", D: "5" },
    answer: "A",
    explanation: "Butane (C4H10) exists as two structural isomers: straight-chain n-butane and branched 2-methylpropane."
  },
  {
    id: 654, year: 2000,
    question: "Chlorine gas turns damp starch-iodine paper:",
    options: { A: "red", B: "blue-black", C: "white", D: "yellow" },
    answer: "B",
    explanation: "Chlorine oxidizes potassium iodide to free iodine, which forms a deep blue-black complex with starch."
  },
  {
    id: 655, year: 2000,
    question: "The primary pollutants responsible for acid rain are:",
    options: { A: "Carbon(II) oxide", B: "Sulphur(IV) oxide and nitrogen oxides", C: "Chlorofluorocarbons", D: "Methane" },
    answer: "B",
    explanation: "Sulphur dioxide and nitrogen oxides react with atmospheric water vapor to produce strong acids, resulting in acid rain."
  },
  {
    id: 656, year: 2000,
    question: "What is the IUPAC name for CH3COOCH2CH3?",
    options: { A: "Ethyl ethanoate", B: "Methyl propanoate", C: "Ethyl methanoate", D: "Propyl ethanoate" },
    answer: "A",
    explanation: "The ester is derived from ethanol (ethyl group) and ethanoic acid (ethanoate portion), giving ethyl ethanoate."
  },
  {
    id: 657, year: 2000,
    question: "When ethene is passed into cold, dilute alkaline potassium manganate(VII) solution, the color changes from purple to:",
    options: { A: "green", B: "colorless", C: "brown", D: "yellow" },
    answer: "B",
    explanation: "In Baeyer's test for unsaturation, purple KMnO4 is reduced by alkenes to form a diol, leaving a colorless solution or brown precipitate."
  },
  {
    id: 658, year: 2000,
    question: "The process of removing salt from sea water to make it potable is called:",
    options: { A: "chlorination", B: "desalination", C: "filtration", D: "sedimentation" },
    answer: "B",
    explanation: "Desalination refers to any of several processes that remove excess salt and dissolved minerals from seawater to produce fresh water."
  },
  {
    id: 659, year: 2000,
    question: "Which of the following gases is lightest?",
    options: { A: "Helium", B: "Hydrogen", C: "Nitrogen", D: "Oxygen" },
    answer: "B",
    explanation: "Molecular hydrogen (H2) has a molar mass of approximately 2 g/mol, making it the lightest gas known."
  },
  {
    id: 660, year: 2000,
    question: "The functional group in an aldehyde is:",
    options: { A: "-OH", B: "-CHO", C: "-COOH", D: "-CO-" },
    answer: "B",
    explanation: "Aldehydes contain the formyl functional group, represented as -CHO."
  },
  {
    id: 661, year: 2000,
    question: "The principal ore of aluminium is:",
    options: { A: "Hematite", B: "Bauxite", C: "Galena", D: "Cryolite" },
    answer: "B",
    explanation: "Bauxite is hydrated aluminium oxide and serves as the primary commercial ore for aluminium extraction."
  }

];
/* Years actually present in the bank above — used to build the Year
   filter dynamically so the setup screen never offers a year with no
   questions in it. */
const CHEMISTRY_YEARS = [...new Set(CHEMISTRY_QUESTIONS.map(q => q.year))].sort((a, b) => a - b);
