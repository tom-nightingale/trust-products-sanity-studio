const slugify = (input) => `${input
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[!"#$%&'()*+,±./:;<=>?@[\]^_{|}~¡¢£¥¦§¨©ª«®¯°´¶·¸º»¼½¾¿÷ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽǺǼǾȘȚȷˆˇˉ˘˙˚˛˜˝ẀẂẄỲ​‑–—‘’‚“”„†‡•…‰€℗™⅓⅔⅛⅜⅝⅞\\]/gi, '')
  .slice(0, 200)}`

export default 