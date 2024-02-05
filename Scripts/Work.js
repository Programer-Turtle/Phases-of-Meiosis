phase = 0
PhaseNameList = ["Interphase", "Prophase 1", "Metphase 1", "Anaphase 1", "Telophase 1", "Prophase 2", "Metphase 2", "Anaphase 2", "Telophase 2", "Cytokinsis"]
PhaseDescriptionList = ["During interphase in meiosis the cell grows and duplicates chromosones. Click the cell to got to the next phase.", "Prophase 1 is the first phase of meiosis, where duplicated chromosones condense and thicken, homologous chromosones come together to form pairs, and the membrane around the nucleus breaks apart and the nucleous disappears. This is the last phase for now, because this is just an example of what this can be."]

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