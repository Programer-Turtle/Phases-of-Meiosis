phase = 0
PhaseNameList = ["Interphase", "Prophase 1", "Metphase 1", "Anaphase 1", "Telophase 1", "Prophase 2", "Metphase 2", "Anaphase 2", "Telophase 2", "Cytokinsis"]
PhaseDescriptionList = ["During interphase in meiosis the cell grows and duplicates chromosones. Click the cell to got to the next phase.", 
"Prophase 1 is the first phase of meiosis, where duplicated chromosones condense and thicken, homologous chromosones come together to form pairs, and the membrane around the nucleus breaks apart and the nucleous disappears. This is the last phase for now, because this is just an example of what this can be.",
"During metaphase 1 homologous chromosome pairs line up along the middle of the cell then fibers attach to each chromosome. Click the cell to continue to the next phase.",
"During anaphase 1 chromosome pairs are pulled apart to opposite sides of the cell. Click the cell to continue to the next phase.",
"During telophase 1 a membrane, each chromosome pair, and the cytoplasm divides through cytokinesis, and two daughter cells are formed. The sister chromatids stay paired. Click the cell to continue to the next phase.",
"During prophase 2 chromosomes are not duplicated again, and the nuclear membrane breaks apart, so the nucleus disappears in both cells. Click the cell to continue to the next phase.",
"During metaphase 2 the pairs of sister chromatids line up along the middle of the cell. Click the cell to continue to the next phase.",
"During Anaphase 2 the sister chromatids of each duplicated chromosome are pulled apart from the center of their cell. Click the cell to continue to the next phase.",
"During telophase 2 a nuclear membrane forms around each set of chromatids, again called chromosomes. Click the cell to continue to the next phase.",
"Cytokinesis is the final phase when the cytoplasm of both cells divide, and 4 haploid cells are formed. This shows the main difference between mitosis and meiosis, because mitosis produces 2 diploid cells unlike 4 haploid cells like shown above."]

function UpdatePhase()
{
    for (var index = 0; index < PhaseNameList.length;)
    {
        document.getElementById(PhaseNameList[index]).style.display = "none"
        index = index + 1;
    }
    document.getElementById(PhaseNameList[phase]).style.display = "block"
    document.getElementById("Phase").innerText = PhaseNameList[phase]
    document.getElementById("Description").innerText = PhaseDescriptionList[phase]
}

function NextPhase()
{
    phase = phase + 1
    UpdatePhase()
}

UpdatePhase()